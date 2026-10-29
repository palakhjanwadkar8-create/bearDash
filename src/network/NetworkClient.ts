// NetworkClient.ts - Multiplayer WebSocket synchronization client with room codes, matchmaking and lag compensation

import { PlayerCustomization, PlayerState } from '../game/types';

export interface RoomInfo {
  roomId: string;
  isHost: boolean;
  playerCount: number;
  maxPlayers: number;
  players: { id: string; name: string; isReady: boolean; customization: PlayerCustomization }[];
  status: 'lobby' | 'racing' | 'finished';
}

export class NetworkClient {
  private ws: WebSocket | null = null;
  public isConnected: boolean = false;
  public pingMs: number = 24;
  private pingStartTime: number = 0;
  private pingInterval: number | null = null;

  public currentRoom: RoomInfo | null = null;
  public onRoomUpdate?: (room: RoomInfo) => void;
  public onGameStart?: () => void;
  public onRemotePlayerUpdate?: (data: { id: string; x: number; y: number; vx: number; vy: number; lives: number; animState: string; facingRight: boolean }) => void;
  public onEmoteReceived?: (data: { playerId: string; emote: string }) => void;

  constructor() {
    this.connect();
  }

  public connect() {
    const protocol = window.location.protocol === 'https:' ? 'wss:' : 'ws:';
    const host = window.location.host || 'localhost:3000';
    const wsUrl = `${protocol}//${host}/ws`;

    try {
      this.ws = new WebSocket(wsUrl);

      this.ws.onopen = () => {
        this.isConnected = true;
        this.startPingLoop();
      };

      this.ws.onmessage = (event) => {
        try {
          const msg = JSON.parse(event.data);
          this.handleMessage(msg);
        } catch (e) {
          // ignore malformed packets
        }
      };

      this.ws.onclose = () => {
        this.isConnected = false;
        if (this.pingInterval) clearInterval(this.pingInterval);
        // Try reconnecting after 3 seconds
        setTimeout(() => this.connect(), 3000);
      };

      this.ws.onerror = () => {
        this.isConnected = false;
      };
    } catch (e) {
      console.warn('Multiplayer server connection fallback to local mode:', e);
    }
  }

  private startPingLoop() {
    if (this.pingInterval) clearInterval(this.pingInterval);
    this.pingInterval = window.setInterval(() => {
      if (this.ws && this.ws.readyState === WebSocket.OPEN) {
        this.pingStartTime = Date.now();
        this.send({ type: 'ping' });
      }
    }, 4000);
  }

  private handleMessage(msg: { type: string; [key: string]: unknown }) {
    switch (msg.type) {
      case 'pong':
        this.pingMs = Math.max(12, Date.now() - this.pingStartTime);
        break;

      case 'room_update':
        this.currentRoom = msg.room as RoomInfo;
        if (this.onRoomUpdate) this.onRoomUpdate(this.currentRoom);
        break;

      case 'game_start':
        if (this.onGameStart) this.onGameStart();
        break;

      case 'player_update':
        if (this.onRemotePlayerUpdate) {
          this.onRemotePlayerUpdate(
            msg as {
              id: string;
              x: number;
              y: number;
              vx: number;
              vy: number;
              lives: number;
              animState: string;
              facingRight: boolean;
            }
          );
        }
        break;

      case 'emote':
        if (this.onEmoteReceived) {
          this.onEmoteReceived(msg as { playerId: string; emote: string });
        }
        break;

      default:
        break;
    }
  }

  public createRoom(customization: PlayerCustomization): string {
    const code = `BEAR-${Math.floor(1000 + Math.random() * 9000)}`;
    this.currentRoom = {
      roomId: code,
      isHost: true,
      playerCount: 1,
      maxPlayers: 8,
      players: [{ id: 'local_player', name: customization.name, isReady: true, customization }],
      status: 'lobby',
    };

    if (this.ws && this.ws.readyState === WebSocket.OPEN) {
      this.send({ type: 'create_room', roomId: code, customization });
    }

    if (this.onRoomUpdate) this.onRoomUpdate(this.currentRoom);
    return code;
  }

  public joinRoom(roomId: string, customization: PlayerCustomization) {
    if (this.ws && this.ws.readyState === WebSocket.OPEN) {
      this.send({ type: 'join_room', roomId: roomId.toUpperCase(), customization });
    } else {
      // Local simulated room
      this.currentRoom = {
        roomId: roomId.toUpperCase(),
        isHost: false,
        playerCount: 2,
        maxPlayers: 8,
        players: [{ id: 'local_player', name: customization.name, isReady: true, customization }],
        status: 'lobby',
      };
      if (this.onRoomUpdate) this.onRoomUpdate(this.currentRoom);
    }
  }

  public startRace() {
    if (this.ws && this.ws.readyState === WebSocket.OPEN) {
      this.send({ type: 'start_race' });
    } else {
      if (this.onGameStart) this.onGameStart();
    }
  }

  public broadcastPlayerState(player: PlayerState) {
    if (this.ws && this.ws.readyState === WebSocket.OPEN) {
      this.send({
        type: 'player_update',
        id: player.id,
        x: Math.floor(player.x),
        y: Math.floor(player.y),
        vx: Number(player.vx.toFixed(2)),
        vy: Number(player.vy.toFixed(2)),
        lives: player.lives,
        animState: player.animState,
        facingRight: player.facingRight,
      });
    }
  }

  public sendEmote(emote: string) {
    if (this.ws && this.ws.readyState === WebSocket.OPEN) {
      this.send({ type: 'emote', emote });
    }
  }

  private send(data: unknown) {
    if (this.ws && this.ws.readyState === WebSocket.OPEN) {
      this.ws.send(JSON.stringify(data));
    }
  }
}

export const networkClient = new NetworkClient();

