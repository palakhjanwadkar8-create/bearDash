// socket.js - WebSocket Multiplayer Manager for BearDash

const WebSocket = require('ws');

class SocketManager {
  constructor(server) {
    this.wss = new WebSocket.Server({ server, path: '/ws' });
    this.rooms = new Map(); // roomId -> { hostId, players: Map<socket, playerData>, status }
    this.init();
  }

  init() {
    this.wss.on('connection', (ws) => {
      let currentRoom = null;
      const playerId = `player_${Math.random().toString(36).substr(2, 9)}`;

      ws.on('message', (raw) => {
        try {
          const msg = JSON.parse(raw);

          switch (msg.type) {
            case 'ping':
              ws.send(JSON.stringify({ type: 'pong' }));
              break;

            case 'create_room': {
              const roomId = (msg.roomId || `BEAR-${Math.floor(1000 + Math.random() * 9000)}`).toUpperCase();
              currentRoom = roomId;

              const playerRecord = {
                id: playerId,
                name: msg.customization?.name || 'Baby Bear 🐻',
                customization: msg.customization || { fur: 'brown', hat: 'crown' },
                isReady: true,
              };

              this.rooms.set(roomId, {
                hostId: playerId,
                status: 'lobby',
                players: new Map([[ws, playerRecord]]),
              });

              ws.send(JSON.stringify({
                type: 'room_update',
                room: this.getRoomInfo(roomId, true),
              }));
              console.log(`[Socket] Room created: ${roomId}`);
              break;
            }

            case 'join_room': {
              const roomId = (msg.roomId || '').toUpperCase();
              let room = this.rooms.get(roomId);

              if (!room) {
                // Auto create
                currentRoom = roomId;
                const playerRecord = {
                  id: playerId,
                  name: msg.customization?.name || 'Baby Bear 🐻',
                  customization: msg.customization,
                  isReady: true,
                };
                this.rooms.set(roomId, {
                  hostId: playerId,
                  status: 'lobby',
                  players: new Map([[ws, playerRecord]]),
                });
                ws.send(JSON.stringify({
                  type: 'room_update',
                  room: this.getRoomInfo(roomId, true),
                }));
                return;
              }

              if (room.players.size >= 8) {
                ws.send(JSON.stringify({ type: 'error', message: 'Room full' }));
                return;
              }

              currentRoom = roomId;
              room.players.set(ws, {
                id: playerId,
                name: msg.customization?.name || 'Racer Cub',
                customization: msg.customization,
                isReady: true,
              });

              this.broadcast(roomId, {
                type: 'room_update',
                room: this.getRoomInfo(roomId, false),
              });
              break;
            }

            case 'start_race': {
              if (currentRoom && this.rooms.has(currentRoom)) {
                this.rooms.get(currentRoom).status = 'racing';
                this.broadcast(currentRoom, { type: 'game_start' });
              }
              break;
            }

            case 'player_update': {
              if (currentRoom) {
                this.broadcast(currentRoom, msg, ws);
              }
              break;
            }

            default:
              break;
          }
        } catch (e) {}
      });

      ws.on('close', () => {
        if (currentRoom && this.rooms.has(currentRoom)) {
          const room = this.rooms.get(currentRoom);
          room.players.delete(ws);
          if (room.players.size === 0) {
            this.rooms.delete(currentRoom);
          } else {
            this.broadcast(currentRoom, {
              type: 'room_update',
              room: this.getRoomInfo(currentRoom, false),
            });
          }
        }
      });
    });
  }

  getRoomInfo(roomId, isHost) {
    const room = this.rooms.get(roomId);
    if (!room) return null;
    const playerList = [];
    for (const [, p] of room.players) {
      playerList.push(p);
    }
    return {
      roomId,
      isHost,
      playerCount: room.players.size,
      maxPlayers: 8,
      players: playerList,
      status: room.status,
    };
  }

  broadcast(roomId, data, excludeWs = null) {
    const room = this.rooms.get(roomId);
    if (!room) return;
    const str = JSON.stringify(data);
    for (const [socket] of room.players) {
      if (socket !== excludeWs && socket.readyState === WebSocket.OPEN) {
        socket.send(str);
      }
    }
  }
}

module.exports = SocketManager;
