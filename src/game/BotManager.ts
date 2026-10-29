// BotManager.ts - AI Baby Bears racing system with natural jumping, pathing and obstacle avoidance

import { PlayerState, LevelData, HatType, FurColor, ScarfType, BackpackType } from './types';
import { GAME_CONSTANTS } from './constants';

export class BotManager {
  private bots: PlayerState[] = [];

  public createBots(count: number): PlayerState[] {
    const botProfiles: {
      name: string;
      fur: FurColor;
      hat: HatType;
      scarf: ScarfType;
      backpack: BackpackType;
    }[] = [
      { name: 'Honey 🍯', fur: 'caramel', hat: 'crown', scarf: 'red', backpack: 'honeypot' },
      { name: 'Bramble 🍓', fur: 'brown', hat: 'strawberry', scarf: 'rainbow', backpack: 'leaf' },
      { name: 'Waffles 🧇', fur: 'golden', hat: 'chef', scarf: 'gold_bowtie', backpack: 'star' },
      { name: 'Pip 🐼', fur: 'panda', hat: 'propeller', scarf: 'blue', backpack: 'rocket' },
      { name: 'Mochi 🍡', fur: 'pink', hat: 'flower', scarf: 'rainbow', backpack: 'mushroom' },
      { name: 'Barnaby 🎩', fur: 'shadow', hat: 'wizard', scarf: 'emerald', backpack: 'star' },
      { name: 'Frosty ❄️', fur: 'white', hat: 'viking', scarf: 'blue', backpack: 'none' },
    ];

    this.bots = [];
    const actualCount = Math.min(count, botProfiles.length);

    for (let i = 0; i < actualCount; i++) {
      const prof = botProfiles[i];
      const bot: PlayerState = {
        id: `bot_${i}_${Date.now()}`,
        name: prof.name,
        isBot: true,
        isLocal: false,
        x: 40 + i * 28,
        y: 380,
        vx: 0,
        vy: 0,
        width: GAME_CONSTANTS.PLAYER_WIDTH,
        height: GAME_CONSTANTS.PLAYER_HEIGHT,
        lives: 3,
        score: 0,
        gemsCollected: 0,
        powerupsUsed: 0,
        bonusScore: 0,
        isGrounded: true,
        canDoubleJump: true,
        facingRight: true,
        animState: 'idle',
        animTimer: Math.random() * 5,
        hurtTimer: 0,
        isEliminated: false,
        isWinner: false,
        finishTime: null,
        finishRank: null,
        activePowerups: [],
        customization: {
          name: prof.name,
          fur: prof.fur,
          hat: prof.hat,
          scarf: prof.scarf,
          backpack: prof.backpack,
        },
        spectatingIndex: 0,
        ghostX: 40 + i * 28,
        ghostY: 380,
      };
      this.bots.push(bot);
    }

    return this.bots;
  }

  public updateBots(dt: number, level: LevelData) {
    for (const bot of this.bots) {
      if (bot.isEliminated || bot.isWinner) continue;

      // Desired speed with slight natural variation
      const targetSpeed = GAME_CONSTANTS.BASE_RUN_SPEED * (0.88 + Math.sin(bot.animTimer * 0.4) * 0.18);
      bot.vx = targetSpeed;
      bot.facingRight = true;

      // Check upcoming obstacles or pit gaps ahead of the bot
      const lookAheadDist = 65 + Math.random() * 25;
      const scanX = bot.x + lookAheadDist;

      // Obstacle detection
      let shouldJump = false;
      for (const obs of level.obstacles) {
        if (obs.hazard && Math.abs(obs.x - scanX) < 40 && Math.abs(obs.y - bot.y) < 70) {
          shouldJump = true;
          break;
        }
      }

      // Pit detection: check if there is ground underneath lookAhead point
      let groundAhead = false;
      for (const plat of level.platforms) {
        if (scanX >= plat.x && scanX <= plat.x + plat.width && Math.abs(plat.y - 440) < 60) {
          groundAhead = true;
          break;
        }
      }
      if (!groundAhead && bot.isGrounded) {
        shouldJump = true;
      }

      // Execute jump
      if (shouldJump && bot.isGrounded) {
        bot.vy = GAME_CONSTANTS.BASE_JUMP_FORCE;
        bot.isGrounded = false;
      }
    }
  }
}

