// GameEngine.ts - Complete Physics, Collision, Powerups, Camera and Gameplay Loop

import {
  ActivePowerup,
  Gem,
  LevelData,
  MysteryBox,
  Obstacle,
  Platform,
  PlayerCustomization,
  PlayerState,
  PowerupType,
  RaceResult,
} from './types';
import { GAME_CONSTANTS, POWERUPS_CONFIG } from './constants';
import { ParticleSystem } from './ParticleSystem';
import { soundEngine } from '../audio/SoundEngine';
import { BotManager } from './BotManager';
import { InputManager } from './InputManager';

export class GameEngine {
  public level: LevelData;
  public players: PlayerState[] = [];
  public localPlayer: PlayerState;
  public botManager: BotManager;
  public input: InputManager;
  public particles: ParticleSystem;

  public isPaused: boolean = false;
  public isGameOver: boolean = false;
  public isRaceFinished: boolean = false;
  public raceStartTime: number = 0;
  public elapsedTimeMs: number = 0;

  // Camera & Screen Shake
  public cameraX: number = 0;
  public cameraY: number = 0;
  public screenShake: number = 0;

  // Race Results & Winner tracking
  public raceResults: RaceResult[] = [];
  public onFinishCallback?: (results: RaceResult[]) => void;
  public onEliminatedCallback?: () => void;

  constructor(
    level: LevelData,
    localCustomization: PlayerCustomization,
    botCount: number = 3
  ) {
    this.level = level;
    this.botManager = new BotManager();
    this.input = new InputManager();
    this.particles = new ParticleSystem();

    // Setup Local Player
    this.localPlayer = {
      id: 'local_player',
      name: localCustomization.name || 'Baby Bear 🐻',
      isBot: false,
      isLocal: true,
      x: 60,
      y: 380,
      vx: 0,
      vy: 0,
      width: GAME_CONSTANTS.PLAYER_WIDTH,
      height: GAME_CONSTANTS.PLAYER_HEIGHT,
      lives: GAME_CONSTANTS.MAX_LIVES,
      score: 0,
      gemsCollected: 0,
      powerupsUsed: 0,
      bonusScore: 0,
      isGrounded: true,
      canDoubleJump: true,
      facingRight: true,
      animState: 'idle',
      animTimer: 0,
      hurtTimer: 0,
      isEliminated: false,
      isWinner: false,
      finishTime: null,
      finishRank: null,
      activePowerups: [],
      customization: localCustomization,
      spectatingIndex: 0,
      ghostX: 60,
      ghostY: 380,
    };

    this.players = [this.localPlayer];

    // Spawn friendly AI baby bears if needed
    if (botCount > 0) {
      const bots = this.botManager.createBots(botCount);
      this.players.push(...bots);
    }

    this.raceStartTime = Date.now();
  }

  public update(dt: number) {
    if (this.isPaused) return;

    this.elapsedTimeMs = Date.now() - this.raceStartTime;

    // 1. Process Input for Local Player
    this.input.update();

    // 2. Update AI Bots
    this.botManager.updateBots(dt, this.level);

    // 3. Update Obstacles & Moving Traps
    this.updateObstacles(dt);

    // 4. Update Platforms (collapsing bridges, etc.)
    this.updatePlatforms(dt);

    // 5. Update Each Player
    for (const player of this.players) {
      this.updatePlayer(player, dt);
    }

    // 6. Update Particle System & Floating Texts
    this.particles.update(dt);

    // 7. Update Camera Lerp & Screen Shake
    this.updateCamera(dt);

    // 8. Dynamic Music speed-up when near finish line (> 75% distance)
    const raceProgress = Math.min(1.0, this.localPlayer.x / this.level.finishX);
    if (raceProgress > 0.75) {
      soundEngine.setDynamicTempo(1.22);
    } else {
      soundEngine.setDynamicTempo(1.0);
    }

    // 9. Screen shake decay
    if (this.screenShake > 0) {
      this.screenShake = Math.max(0, this.screenShake - dt * 25);
    }
  }

  private updatePlayer(p: PlayerState, dt: number) {
    p.animTimer += dt;

    // Elimination & Spectator handling
    if (p.isEliminated) {
      this.updateSpectatorGhost(p, dt);
      return;
    }

    // Winner state
    if (p.isWinner) {
      p.animState = 'victory';
      p.vx = 0;
      return;
    }

    // Active power-up duration countdowns
    this.updatePlayerPowerups(p, dt);

    // Speed & Jump multipliers from power-ups
    const hasSpeedBoost = p.activePowerups.some((ap) => ap.type === 'speed_boost' || ap.type === 'golden_bear');
    const hasSuperJump = p.activePowerups.some((ap) => ap.type === 'super_jump');
    const hasHoverboard = p.activePowerups.some((ap) => ap.type === 'hoverboard');

    const speedMultiplier = hasSpeedBoost ? 1.85 : 1.0;
    const currentRunSpeed = GAME_CONSTANTS.BASE_RUN_SPEED * speedMultiplier;

    // Hurt invulnerability cooldown
    if (p.hurtTimer > 0) {
      p.hurtTimer = Math.max(0, p.hurtTimer - dt);
    }

    // Handle Local Player Controls
    if (p.isLocal) {
      let moveDir = 0;
      if (this.input.state.left) moveDir -= 1;
      if (this.input.state.right) moveDir += 1;

      // Running movement
      if (moveDir !== 0) {
        p.vx = moveDir * currentRunSpeed;
        p.facingRight = moveDir > 0;
      } else {
        // Friction / deceleration
        p.vx *= 0.72;
        if (Math.abs(p.vx) < 0.1) p.vx = 0;
      }

      // Jump & Double Jump
      if (this.input.jumpJustPressed) {
        if (p.isGrounded) {
          p.vy = hasSuperJump ? GAME_CONSTANTS.SUPER_JUMP_FORCE : GAME_CONSTANTS.BASE_JUMP_FORCE;
          p.isGrounded = false;
          p.canDoubleJump = true;
          soundEngine.playJump();
          this.particles.emitJumpDust(p.x + p.width / 2, p.y + p.height);
        } else if (p.canDoubleJump) {
          p.vy = GAME_CONSTANTS.BASE_JUMP_FORCE * 0.92;
          p.canDoubleJump = false;
          soundEngine.playSuperJump();
          this.particles.emitJumpDust(p.x + p.width / 2, p.y + p.height);
        }
      }

      // Quick Dash Burst
      if (this.input.dashJustPressed && !p.activePowerups.some((ap) => ap.type === 'dash')) {
        this.activatePowerup(p, 'dash');
        p.vx = (p.facingRight ? 1 : -1) * GAME_CONSTANTS.DASH_IMPULSE;
        soundEngine.playDash();
      }
    }

    // Apply Gravity (reduced if using Hoverboard)
    const gravity = hasHoverboard ? GAME_CONSTANTS.WORLD_GRAVITY * 0.6 : GAME_CONSTANTS.WORLD_GRAVITY;
    p.vy = Math.min(GAME_CONSTANTS.MAX_FALL_SPEED, p.vy + gravity);

    // Apply Velocities
    p.x += p.vx;
    p.y += p.vy;

    // Running Dust particles
    if (p.isGrounded && Math.abs(p.vx) > 1.5 && Math.random() < 0.4) {
      this.particles.emitRunDust(p.x + p.width / 2, p.y + p.height, p.facingRight);
    }

    // Speed boost flame trail
    if (hasSpeedBoost && Math.random() < 0.6) {
      this.particles.emitSpeedTrail(p.x + p.width / 2, p.y, p.facingRight);
    }

    // Platform Collisions (Standing, Ice, Collapsing)
    this.checkPlatformCollisions(p);

    // Collectibles & Magnet
    this.checkGemCollections(p);
    this.checkMysteryBoxes(p);

    // Obstacle & Hazard Collisions
    this.checkObstacleCollisions(p);

    // Fall into bottom pit check
    if (p.y > 600) {
      this.eliminatePlayer(p);
      return;
    }

    // Check Finish Line Win Condition!
    if (p.x >= this.level.finishX && !p.isWinner && p.lives > 0) {
      this.handlePlayerWin(p);
    }

    // Update Player Animation State
    if (p.hurtTimer > 0) {
      p.animState = 'hurt';
    } else if (!p.isGrounded) {
      p.animState = p.vy < 0 ? 'jump' : 'fall';
    } else if (Math.abs(p.vx) > 0.4) {
      p.animState = 'running';
    } else {
      p.animState = 'idle';
    }
  }

  // Spectator mode for eliminated players: fly freely or watch alive players
  private updateSpectatorGhost(p: PlayerState, dt: number) {
    if (p.isLocal) {
      // Find remaining alive players
      const alivePlayers = this.players.filter((pl) => !pl.isEliminated);
      if (alivePlayers.length > 0) {
        const target = alivePlayers[p.spectatingIndex % alivePlayers.length];
        p.ghostX += (target.x - p.ghostX) * 0.1;
        p.ghostY += (target.y - 40 - p.ghostY) * 0.1;
      } else {
        // Free float if all are eliminated
        p.ghostX += 2;
      }
    }
  }

  // --- Platform Collisions & Surface Mechanics ---
  private checkPlatformCollisions(p: PlayerState) {
    p.isGrounded = false;

    for (const plat of this.level.platforms) {
      // Bounding box check for landing on top of platform
      const isAbove = p.y + p.height - p.vy <= plat.y + 12;
      const overlapsX = p.x + p.width - 6 >= plat.x && p.x + 6 <= plat.x + plat.width;
      const overlapsY = p.y + p.height >= plat.y && p.y + p.height <= plat.y + plat.height + 10;

      if (isAbove && overlapsX && overlapsY && p.vy >= 0) {
        p.y = plat.y - p.height;
        p.vy = 0;
        p.isGrounded = true;
        p.canDoubleJump = true;

        // Ice patch reduces friction / keeps slide
        if (plat.type === 'ice') {
          p.vx *= 0.96;
        }

        // Trigger collapsing bridge plank timer
        if (plat.type === 'collapsing' && plat.collapseTimer !== undefined) {
          plat.collapseTimer -= 0.04;
          if (plat.collapseTimer <= 0) {
            plat.y += 15; // plank crumbles and falls!
          }
        }
        break;
      }
    }
  }

  // --- Collectibles: Gems & Magnet Attraction ---
  private checkGemCollections(p: PlayerState) {
    const hasMagnet = p.activePowerups.some((ap) => ap.type === 'magnet' || ap.type === 'golden_bear');
    const hasMultiplier = p.activePowerups.some((ap) => ap.type === 'gem_multiplier');
    const magnetRadius = 260;

    for (const gem of this.level.gems) {
      if (gem.collected) continue;

      const dx = gem.x - (p.x + p.width / 2);
      const dy = gem.y - (p.y + p.height / 2);
      const dist = Math.sqrt(dx * dx + dy * dy);

      // Magnet pull
      if (hasMagnet && dist < magnetRadius) {
        gem.x -= (dx / dist) * 9.5;
        gem.y -= (dy / dist) * 9.5;
      }

      // Physical touch collection
      if (dist < 32) {
        gem.collected = true;
        gem.collectedBy = p.id;

        const val = hasMultiplier ? gem.value * 2 : gem.value;
        p.gemsCollected += 1;
        p.score += val;

        if (p.isLocal) {
          soundEngine.playGemCollect();
          const gemColors: Record<string, string> = {
            blue: '#4CC9F0',
            green: '#70E000',
            pink: '#FF758F',
            purple: '#9D4EDD',
            yellow: '#FFD166',
            diamond: '#FFFFFF',
          };
          this.particles.emitGemCollect(gem.x, gem.y, gemColors[gem.type] || '#FFD166', val);
        }
      }
    }
  }

  // --- Mystery Boxes ---
  private checkMysteryBoxes(p: PlayerState) {
    for (const box of this.level.mysteryBoxes) {
      if (box.opened) continue;

      const overlapsX = p.x + p.width >= box.x && p.x <= box.x + 32;
      const overlapsY = p.y + p.height >= box.y && p.y <= box.y + 32;

      if (overlapsX && overlapsY) {
        box.opened = true;
        box.openedBy = p.id;

        if (p.isLocal) {
          soundEngine.playMysteryBox();
          this.particles.emitMysteryBurst(box.x, box.y);

          // Select random powerup
          const powerupsList: PowerupType[] = [
            'magnet',
            'speed_boost',
            'hoverboard',
            'invincibility',
            'shield',
            'slow_motion',
            'super_jump',
            'extra_life',
            'gem_multiplier',
            'golden_bear',
          ];
          const chosen = powerupsList[Math.floor(Math.random() * powerupsList.length)];
          this.activatePowerup(p, chosen);
        }
      }
    }
  }

  // --- Obstacle Collision & Damage Rules ---
  private checkObstacleCollisions(p: PlayerState) {
    if (p.hurtTimer > 0 || p.isEliminated || p.isWinner) return;

    const isInvincible = p.activePowerups.some(
      (ap) => ap.type === 'invincibility' || ap.type === 'golden_bear' || ap.type === 'dash'
    );

    for (const obs of this.level.obstacles) {
      // Bouncing mushroom interaction (trampoline, not damage)
      if (obs.type === 'bouncing_mushroom') {
        const overlapsX = p.x + p.width >= obs.x && p.x <= obs.x + obs.width;
        const overlapsY = p.y + p.height >= obs.y && p.y + p.height <= obs.y + obs.height + 12;

        if (overlapsX && overlapsY && p.vy >= 0) {
          p.vy = GAME_CONSTANTS.BOUNCE_PAD_FORCE * (obs.bounceMultiplier || 1.0);
          p.isGrounded = false;
          p.canDoubleJump = true;
          if (p.isLocal) {
            soundEngine.playSuperJump();
            this.particles.emitJumpDust(obs.x + obs.width / 2, obs.y);
          }
          continue;
        }
      }

      // Water current impulse
      if (obs.type === 'water_current') {
        const overlapsX = p.x + p.width >= obs.x && p.x <= obs.x + obs.width;
        const overlapsY = p.y + p.height >= obs.y && p.y <= obs.y + obs.height;
        if (overlapsX && overlapsY) {
          p.vx -= 1.8; // river push
        }
        continue;
      }

      // Hazard collisions
      if (obs.hazard) {
        // Laser beam active check
        if (obs.type === 'laser_beam' && obs.state === 0) {
          continue; // laser is currently turned off
        }

        const hitBoxPad = 6;
        const overlapsX = p.x + p.width - hitBoxPad >= obs.x && p.x + hitBoxPad <= obs.x + obs.width;
        const overlapsY = p.y + p.height - hitBoxPad >= obs.y && p.y + hitBoxPad <= obs.y + obs.height;

        if (overlapsX && overlapsY) {
          if (isInvincible) {
            // Invincible bear smashes through hazards!
            continue;
          }

          // Check if shielded or on hoverboard
          const shieldIdx = p.activePowerups.findIndex((ap) => ap.type === 'shield');
          const hoverIdx = p.activePowerups.findIndex((ap) => ap.type === 'hoverboard');

          if (shieldIdx !== -1) {
            p.activePowerups.splice(shieldIdx, 1);
            p.hurtTimer = 0.8;
            if (p.isLocal) {
              soundEngine.playShieldBreak();
              this.screenShake = 6;
            }
            continue;
          }

          if (hoverIdx !== -1) {
            p.activePowerups.splice(hoverIdx, 1);
            p.hurtTimer = 0.8;
            if (p.isLocal) {
              soundEngine.playShieldBreak();
              this.screenShake = 6;
            }
            continue;
          }

          // Take 1 Damage!
          this.damagePlayer(p);
          break;
        }
      }
    }
  }

  // --- Damage System (3 -> 2 -> 1 -> 0 Elimination) ---
  public damagePlayer(p: PlayerState) {
    p.lives = Math.max(0, p.lives - 1);
    p.hurtTimer = GAME_CONSTANTS.HURT_INVULNERABLE_TIME;
    p.vy = -6.5; // recoil bounce
    p.vx = p.facingRight ? -4 : 4;

    if (p.isLocal) {
      soundEngine.playDamage();
      soundEngine.playHeartBreak();
      this.screenShake = 12;
      this.particles.emitHeartBreak(p.x + p.width / 2, p.y + p.height / 2);

      // Heartbeat sound loop starts when lives === 1!
      if (p.lives === 1) {
        soundEngine.startHeartbeat();
      }
    }

    if (p.lives <= 0) {
      this.eliminatePlayer(p);
    }
  }

  // --- Elimination: "BABY BEAR ELIMINATED" ---
  public eliminatePlayer(p: PlayerState) {
    p.isEliminated = true;
    p.lives = 0;
    p.ghostX = p.x;
    p.ghostY = p.y;

    if (p.isLocal) {
      soundEngine.playElimination();
      this.screenShake = 16;
      this.particles.emitElimination(p.x, p.y);
      if (this.onEliminatedCallback) {
        this.onEliminatedCallback();
      }
    }
  }

  // --- Win Condition: Finish Line Victory ---
  public handlePlayerWin(p: PlayerState) {
    p.isWinner = true;
    p.finishTime = this.elapsedTimeMs;
    p.finishRank = this.raceResults.length + 1;

    const timeFormatted = `${(this.elapsedTimeMs / 1000).toFixed(2)}s`;
    const bonus = p.lives * 500 + p.gemsCollected * 50;
    p.bonusScore = bonus;
    p.score += bonus;

    this.raceResults.push({
      playerId: p.id,
      playerName: p.name,
      isLocal: p.isLocal,
      rank: p.finishRank,
      timeFormatted,
      timeMs: this.elapsedTimeMs,
      livesRemaining: p.lives,
      gemsCount: p.gemsCollected,
      powerupsUsed: p.powerupsUsed,
      totalScore: p.score,
      customization: p.customization,
    });

    if (p.isLocal) {
      soundEngine.playVictory();
      this.particles.emitVictoryConfetti(p.x + 20, p.y - 40);
      this.isRaceFinished = true;
      if (this.onFinishCallback) {
        this.onFinishCallback(this.raceResults);
      }
    }
  }

  // --- Power-Up System ---
  public activatePowerup(p: PlayerState, type: PowerupType) {
    p.powerupsUsed += 1;
    const cfg = POWERUPS_CONFIG[type];

    if (type === 'extra_life') {
      if (p.lives < GAME_CONSTANTS.MAX_LIVES) {
        p.lives += 1;
        if (p.lives > 1 && p.isLocal) {
          soundEngine.stopHeartbeat();
        }
      }
      this.particles.emitGemCollect(p.x, p.y - 20, '#FF3366', 100);
      return;
    }

    soundEngine.playPowerup();

    // Remove existing if already present
    p.activePowerups = p.activePowerups.filter((ap) => ap.type !== type);

    p.activePowerups.push({
      type,
      remainingDuration: cfg ? cfg.duration : 8.0,
      maxDuration: cfg ? cfg.duration : 8.0,
    });
  }

  private updatePlayerPowerups(p: PlayerState, dt: number) {
    for (let i = p.activePowerups.length - 1; i >= 0; i--) {
      const ap = p.activePowerups[i];
      ap.remainingDuration -= dt;
      if (ap.remainingDuration <= 0) {
        p.activePowerups.splice(i, 1);
      }
    }
  }

  // --- Obstacle Animated Updates ---
  private updateObstacles(dt: number) {
    const slowMoActive = this.localPlayer.activePowerups.some((ap) => ap.type === 'slow_motion');
    const speedMult = slowMoActive ? 0.35 : 1.0;

    for (const obs of this.level.obstacles) {
      obs.timer = (obs.timer || 0) + dt * speedMult;

      switch (obs.type) {
        case 'rolling_log':
        case 'spinning_blade':
        case 'moving_spikes':
        case 'cannonball': {
          if (obs.vx !== undefined && obs.minX !== undefined && obs.maxX !== undefined) {
            obs.x += obs.vx * speedMult;
            if (obs.x < obs.minX || obs.x > obs.maxX) {
              obs.vx = -obs.vx;
            }
          }
          if (obs.angle !== undefined && obs.rotSpeed !== undefined) {
            obs.angle += obs.rotSpeed * speedMult;
          }
          break;
        }

        case 'rotating_windmill': {
          if (obs.angle !== undefined && obs.rotSpeed !== undefined) {
            obs.angle += obs.rotSpeed * speedMult;
          }
          break;
        }

        case 'fireball': {
          if (obs.vy !== undefined && obs.minY !== undefined && obs.maxY !== undefined) {
            obs.y += obs.vy * speedMult;
            obs.vy += 0.22 * speedMult;
            if (obs.y > obs.maxY) {
              obs.y = obs.maxY;
              obs.vy = -6.5; // leap back up from molten lava
            }
          }
          break;
        }

        case 'laser_beam': {
          // Pulsing laser beam toggle (active for 2.2s, off for 1.2s)
          obs.state = Math.floor(obs.timer % 3.4) < 2.2 ? 1 : 0;
          break;
        }

        case 'moving_platform': {
          if (obs.vy !== undefined && obs.minY !== undefined && obs.maxY !== undefined) {
            obs.y += obs.vy * speedMult;
            if (obs.y < obs.minY || obs.y > obs.maxY) {
              obs.vy = -obs.vy;
            }
          }
          break;
        }

        default:
          break;
      }
    }
  }

  private updatePlatforms(dt: number) {
    for (const plat of this.level.platforms) {
      if (plat.vx !== undefined && plat.minX !== undefined && plat.maxX !== undefined) {
        plat.x += plat.vx;
        if (plat.x < plat.minX || plat.x > plat.maxX) {
          plat.vx = -plat.vx;
        }
      }
    }
  }

  // --- Camera Tracking ---
  private updateCamera(dt: number) {
    let focusX = this.localPlayer.x;
    let focusY = this.localPlayer.y;

    // If local player eliminated, camera focuses on ghost spectator position
    if (this.localPlayer.isEliminated) {
      focusX = this.localPlayer.ghostX;
      focusY = this.localPlayer.ghostY;
    }

    const targetCameraX = focusX - GAME_CONSTANTS.CANVAS_WIDTH * 0.35;
    const targetCameraY = Math.max(0, focusY - GAME_CONSTANTS.CANVAS_HEIGHT * 0.55);

    // Smooth lerp
    this.cameraX += (targetCameraX - this.cameraX) * 0.12;
    this.cameraY += (targetCameraY - this.cameraY) * 0.1;

    // Apply Screen Shake
    if (this.screenShake > 0) {
      const shakeAmt = this.screenShake;
      this.cameraX += (Math.random() * 2 - 1) * shakeAmt;
      this.cameraY += (Math.random() * 2 - 1) * shakeAmt;
    }
  }

  public cycleSpectator(direction: 1 | -1) {
    const alivePlayers = this.players.filter((p) => !p.isEliminated);
    if (alivePlayers.length === 0) return;
    this.localPlayer.spectatingIndex = (this.localPlayer.spectatingIndex + direction + alivePlayers.length) % alivePlayers.length;
  }
}

