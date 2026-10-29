// server.js - Static HTTP File Server & WebSocket Runner for BearDash

const http = require('http');
const fs = require('fs');
const path = require('path');
const SocketManager = require('./socket');

const PORT = process.env.PORT || 3000;
const ROOT_DIR = path.join(__dirname, '..');

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.mp3': 'audio/mpeg',
  '.wav': 'audio/wav',
};

const server = http.createServer((req, res) => {
  let reqPath = req.url.split('?')[0];
  if (reqPath === '/' || reqPath === '') reqPath = '/index.html';

  const filePath = path.join(ROOT_DIR, reqPath);

  // Security boundary check
  if (!filePath.startsWith(ROOT_DIR)) {
    res.writeHead(403);
    res.end('Forbidden');
    return;
  }

  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('404 Not Found');
      return;
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    fs.readFile(filePath, (readErr, content) => {
      if (readErr) {
        res.writeHead(500);
        res.end('Server Error');
      } else {
        res.writeHead(200, {
          'Content-Type': contentType,
          'Cache-Control': 'no-cache',
        });
        res.end(content);
      }
    });
  });
});

// Attach WebSocket Manager
new SocketManager(server);

server.listen(PORT, () => {
  console.log(`====================================================`);
  console.log(`🐻 Bear Dash: Pixel Adventure (Vanilla Web Edition)`);
  console.log(`🎮 Game Server Running: http://localhost:${PORT}`);
  console.log(`🏠 Landing: http://localhost:${PORT}/index.html`);
  console.log(`👑 Lobby:   http://localhost:${PORT}/lobby.html`);
  console.log(`🏁 Race:    http://localhost:${PORT}/game.html`);
  console.log(`⚡ WebSocket path: ws://localhost:${PORT}/ws`);
  console.log(`====================================================`);
});
