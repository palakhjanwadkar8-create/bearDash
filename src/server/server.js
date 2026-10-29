// server.js - Production HTTP Static File Server & High-Performance WebSocket Multiplayer Game Server

const http = require('http');
const fs = require('fs');
const path = require('path');
const WebSocket = require('ws');

const PORT = process.env.PORT || 3000;
const PUBLIC_DIR = path.join(__dirname, '..', '..', 'public');

// MIME types for static assets
const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.woff2': 'font/woff2',
};

// HTTP Static Server
const server = http.createServer((req, res) => {
  let reqPath = req.url.split('?')[0];
  if (reqPath === '/' || reqPath === '') {
    reqPath = '/index.html';
  }

  const filePath = path.join(PUBLIC_DIR, reqPath);

  // Security check: ensure path is within PUBLIC_DIR
  if (!filePath.startsWith(PUBLIC_DIR)) {
    res.writeHead(403);
    res.end('Forbidden');
    return;
  }

  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      // Fallback to index.html for SPA client-side routing
      const indexPath = path.join(PUBLIC_DIR, 'index.html');
      fs.readFile(indexPath, (readErr, content) => {
        if (readErr) {
          res.writeHead(404);
          res.end('Not Found');
        } else {
          res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
          res.end(content);
        }
      });
      return;
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    fs.readFile(filePath, (readErr, content) => {
      if (readErr) {
        res.writeHead(500);
        res.end('Internal Server Error');
      } else {
        res.writeHead(200, {
          'Content-Type': contentType,
          'Cache-Control': ext === '.html' ? 'no-cache' : 'public, max-age=3600',
        });
        res.end(content);
      }
    });
  });
});

// WebSocket Server attached to HTTP server
const wss = new WebSocket.Server({ server, path: '/ws' });

// In-Memory Game Rooms Store
// rooms[roomId] = { hostId, players: Map<socket, playerData>, status: 'lobby'|'racing' }
const rooms = new Map();

function broadcastToRoom(roomId, message, excludeSocket = null) {
  const room = rooms.get(roomId);
  if (!room) return;

  const payload = JSON.stringify(message);
  for (const [clientSocket] of room.players) {
    if (clientSocket !== excludeSocket && clientSocket.readyState === WebSocket.OPEN) {
      clientSocket.send(payload);
    }
  }
}

function getRoomPublicInfo(roomId) {
  const room = rooms.get(roomId);
  if (!room) return null;

  const playerList = [];
  for (const [, pData] of room.players) {
    playerList.push({
      id: pData.id,
      name: pData.name,
      isReady: pData.isReady,
      customization: pData.customization,
    });
  }

  return {
    roomId,
    isHost: false,
    playerCount: room.players.size,
    maxPlayers: 8,
    players: playerList,
    status: room.status,
  };
}

wss.on('connection', (ws) => {
  let currentRoomId = null;
  let playerId = `player_${Math.random().toString(36).substring(2, 9)}`;

  ws.on('message', (raw) => {
    try {
      const msg = JSON.parse(raw);

      switch (msg.type) {
        case 'ping':
          ws.send(JSON.stringify({ type: 'pong' }));
          break;

        case 'create_room': {
          const roomId = (msg.roomId || `BEAR-${Math.floor(1000 + Math.random() * 9000)}`).toUpperCase();
          currentRoomId = roomId;

          const playerRecord = {
            id: playerId,
            name: msg.customization?.name || 'Baby Bear 🐻',
            isReady: true,
            customization: msg.customization || { fur: 'brown', hat: 'crown', scarf: 'red', backpack: 'honeypot' },
          };

          const newRoom = {
            hostId: playerId,
            status: 'lobby',
            players: new Map([[ws, playerRecord]]),
          };
          rooms.set(roomId, newRoom);

          ws.send(
            JSON.stringify({
              type: 'room_update',
              room: { ...getRoomPublicInfo(roomId), isHost: true },
            })
          );
          console.log(`[Multiplayer] Room created: ${roomId} by ${playerRecord.name}`);
          break;
        }

        case 'join_room': {
          const roomId = (msg.roomId || '').toUpperCase();
          const room = rooms.get(roomId);

          if (!room) {
            // Auto-create room if not found
            currentRoomId = roomId;
            const playerRecord = {
              id: playerId,
              name: msg.customization?.name || 'Baby Bear 🐻',
              isReady: true,
              customization: msg.customization,
            };
            rooms.set(roomId, {
              hostId: playerId,
              status: 'lobby',
              players: new Map([[ws, playerRecord]]),
            });
            ws.send(
              JSON.stringify({
                type: 'room_update',
                room: { ...getRoomPublicInfo(roomId), isHost: true },
              })
            );
            return;
          }

          if (room.players.size >= 8) {
            ws.send(JSON.stringify({ type: 'error', message: 'Room is full' }));
            return;
          }

          currentRoomId = roomId;
          const playerRecord = {
            id: playerId,
            name: msg.customization?.name || 'Racer Cub',
            isReady: true,
            customization: msg.customization,
          };
          room.players.set(ws, playerRecord);

          // Broadcast updated room state to all players
          broadcastToRoom(roomId, {
            type: 'room_update',
            room: getRoomPublicInfo(roomId),
          });
          break;
        }

        case 'start_race': {
          if (currentRoomId) {
            const room = rooms.get(currentRoomId);
            if (room) {
              room.status = 'racing';
              broadcastToRoom(currentRoomId, { type: 'game_start' });
            }
          }
          break;
        }

        case 'player_update': {
          if (currentRoomId) {
            // Forward movement and physics state to other racers in the room
            broadcastToRoom(
              currentRoomId,
              {
                type: 'player_update',
                ...msg,
              },
              ws // Exclude sender
            );
          }
          break;
        }

        case 'emote': {
          if (currentRoomId) {
            broadcastToRoom(currentRoomId, {
              type: 'emote',
              playerId,
              emote: msg.emote,
            });
          }
          break;
        }

        default:
          break;
      }
    } catch (e) {
      console.warn('Error processing WS packet:', e);
    }
  });

  ws.on('close', () => {
    if (currentRoomId && rooms.has(currentRoomId)) {
      const room = rooms.get(currentRoomId);
      room.players.delete(ws);

      if (room.players.size === 0) {
        rooms.delete(currentRoomId);
        console.log(`[Multiplayer] Room closed: ${currentRoomId}`);
      } else {
        broadcastToRoom(currentRoomId, {
          type: 'room_update',
          room: getRoomPublicInfo(currentRoomId),
        });
      }
    }
  });
});

server.listen(PORT, () => {
  console.log(`====================================================`);
  console.log(`🐻 BEAR DASH: PIXEL ADVENTURE`);
  console.log(`🎮 Game Server & Multiplayer running at: http://localhost:${PORT}`);
  console.log(`⚡ WebSocket path: ws://localhost:${PORT}/ws`);
  console.log(`====================================================`);
});

