// multiplayer.js - WebSocket Client Synchronization and Room Handling for BearDash

class MultiplayerClient {
  constructor() {
    this.ws = null;
    this.isConnected = false;
    this.ping = 24;
    this.currentRoom = null;
    this.connect();
  }

  connect() {
    const protocol = window.location.protocol === 'https:' ? 'wss:' : 'ws:';
    const host = window.location.host || 'localhost:3000';
    try {
      this.ws = new WebSocket(`${protocol}//${host}/ws`);

      this.ws.onopen = () => {
        this.isConnected = true;
        this.startPing();
      };

      this.ws.onmessage = (e) => {
        try {
          const msg = JSON.parse(e.data);
          this.handlePacket(msg);
        } catch (err) {}
      };

      this.ws.onclose = () => {
        this.isConnected = false;
        setTimeout(() => this.connect(), 3500);
      };
    } catch (e) {
      console.warn('Fallback to local mode:', e);
    }
  }

  startPing() {
    setInterval(() => {
      if (this.ws && this.ws.readyState === WebSocket.OPEN) {
        this.pingStart = Date.now();
        this.send({ type: 'ping' });
      }
    }, 4000);
  }

  handlePacket(msg) {
    if (msg.type === 'pong') {
      this.ping = Math.max(12, Date.now() - this.pingStart);
      const pingEl = document.getElementById('pingIndicator');
      if (pingEl) pingEl.innerText = `${this.ping}ms`;
    } else if (msg.type === 'room_update') {
      this.currentRoom = msg.room;
      if (window.onRoomUpdated) window.onRoomUpdated(msg.room);
    } else if (msg.type === 'game_start') {
      if (window.onMultiplayerGameStart) window.onMultiplayerGameStart();
    }
  }

  createRoom(customization) {
    const code = `BEAR-${Math.floor(1000 + Math.random() * 9000)}`;
    this.send({ type: 'create_room', roomId: code, customization });
    return code;
  }

  joinRoom(code, customization) {
    this.send({ type: 'join_room', roomId: code, customization });
  }

  startRace() {
    this.send({ type: 'start_race' });
  }

  send(data) {
    if (this.ws && this.ws.readyState === WebSocket.OPEN) {
      this.ws.send(JSON.stringify(data));
    }
  }
}

window.multiplayer = new MultiplayerClient();
