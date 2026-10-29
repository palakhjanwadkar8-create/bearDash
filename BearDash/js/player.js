// player.js - Baby Bear Player & AI Bot Class with Emotional States, Wardrobe and Physics

const FUR_COLORS = {
  brown: { primary: '#B86227', secondary: '#D97736', snout: '#FFE3C4', earInner: '#FFC899' },
  white: { primary: '#D6E2E9', secondary: '#FFFFFF', snout: '#EFF6F9', earInner: '#FFD6DE' },
  caramel: { primary: '#9C5821', secondary: '#C97A34', snout: '#FDE4C3', earInner: '#FABD7A' },
  panda: { primary: '#2B2D42', secondary: '#F8F9FA', snout: '#FFFFFF', earInner: '#1E1F29' },
  pink: { primary: '#D94F70', secondary: '#FF758F', snout: '#FFE0E6', earInner: '#FFB3C1' },
  shadow: { primary: '#3A2E59', secondary: '#5C4B82', snout: '#C4B5E8', earInner: '#8068A8' },
  golden: { primary: '#D49B00', secondary: '#FFD166', snout: '#FFF3B0', earInner: '#FFE66D' },
};

class Player {
  constructor(id, name, isLocal = false, isBot = false, customization = {}) {
    this.id = id;
    this.name = name;
    this.isLocal = isLocal;
    this.isBot = isBot;

    this.customization = {
      fur: customization.fur || 'brown',
      hat: customization.hat || 'crown',
      scarf: customization.scarf || 'red',
      backpack: customization.backpack || 'honeypot',
    };

    this.width = 36;
    this.height = 44;
    this.x = 60;
    this.y = 380;
    this.vx = 0;
    this.vy = 0;

    this.lives = 3;
    this.score = 0;
    this.gemsCollected = 0;
    this.powerupsUsed = 0;
    this.bonusScore = 0;

    this.isGrounded = true;
    this.canDoubleJump = true;
    this.facingRight = true;

    this.animState = 'idle'; // 'idle', 'running', 'jump', 'fall', 'hurt', 'victory'
    this.animTimer = 0;
    this.hurtTimer = 0;

    this.isEliminated = false;
    this.isWinner = false;
    this.finishTime = null;
    this.finishRank = null;

    this.ghostX = this.x;
    this.ghostY = this.y;
    this.spectatingIndex = 0;

    this.activePowerups = [];
  }

  update(dt, input, level, particles) {
    this.animTimer += dt;

    if (this.isEliminated) {
      this.updateGhost(dt);
      return;
    }
    if (this.isWinner) {
      this.animState = 'victory';
      this.vx = 0;
      return;
    }

    // Power-up durations
    for (let i = this.activePowerups.length - 1; i >= 0; i--) {
      this.activePowerups[i].remaining -= dt;
      if (this.activePowerups[i].remaining <= 0) {
        this.activePowerups.splice(i, 1);
      }
    }

    if (this.hurtTimer > 0) {
      this.hurtTimer = Math.max(0, this.hurtTimer - dt);
    }

    const hasSpeed = this.hasPowerup('speed_boost') || this.hasPowerup('golden_bear');
    const hasSuperJump = this.hasPowerup('super_jump');
    const hasHover = this.hasPowerup('hoverboard');

    const runSpeed = 4.8 * (hasSpeed ? 1.85 : 1.0);

    // Controls
    if (this.isLocal) {
      let move = 0;
      if (input.left) move -= 1;
      if (input.right) move += 1;

      if (move !== 0) {
        this.vx = move * runSpeed;
        this.facingRight = move > 0;
      } else {
        this.vx *= 0.72;
        if (Math.abs(this.vx) < 0.1) this.vx = 0;
      }

      if (input.jumpJustPressed) {
        if (this.isGrounded) {
          this.vy = hasSuperJump ? -16.5 : -11.5;
          this.isGrounded = false;
          this.canDoubleJump = true;
          window.soundEngine.playJump();
          if (particles) particles.emitJump(this.x + this.width / 2, this.y + this.height);
        } else if (this.canDoubleJump) {
          this.vy = -10.5;
          this.canDoubleJump = false;
          window.soundEngine.playSuperJump();
          if (particles) particles.emitJump(this.x + this.width / 2, this.y + this.height);
        }
      }

      if (input.dashJustPressed && !this.hasPowerup('dash')) {
        this.activePowerups.push({ type: 'dash', remaining: 0.35, max: 0.35 });
        this.vx = (this.facingRight ? 1 : -1) * 12.0;
        window.soundEngine.playDash();
      }
    } else if (this.isBot) {
      this.updateBotAI(level);
    }

    // Gravity
    const gravity = hasHover ? 0.35 : 0.58;
    this.vy = Math.min(14, this.vy + gravity);

    this.x += this.vx;
    this.y += this.vy;

    // Dust particles
    if (this.isGrounded && Math.abs(this.vx) > 1.5 && Math.random() < 0.35 && particles) {
      particles.emitDust(this.x + this.width / 2, this.y + this.height, this.facingRight);
    }

    // Platforms
    this.checkPlatforms(level);

    // Fall in pit
    if (this.y > 600) {
      this.eliminate(particles);
    }

    // Animation state
    if (this.hurtTimer > 0) {
      this.animState = 'hurt';
    } else if (!this.isGrounded) {
      this.animState = this.vy < 0 ? 'jump' : 'fall';
    } else if (Math.abs(this.vx) > 0.4) {
      this.animState = 'running';
    } else {
      this.animState = 'idle';
    }
  }

  updateBotAI(level) {
    this.vx = 4.2 + Math.sin(this.animTimer * 0.5) * 0.8;
    this.facingRight = true;

    // Simple forward hazard scan
    const scanX = this.x + 75;
    let needJump = false;

    for (const obs of level.obstacles) {
      if (obs.hazard && Math.abs(obs.x - scanX) < 40 && Math.abs(obs.y - this.y) < 70) {
        needJump = true;
        break;
      }
    }

    // Gap check
    let hasGround = false;
    for (const plat of level.platforms) {
      if (scanX >= plat.x && scanX <= plat.x + plat.width && Math.abs(plat.y - 440) < 50) {
        hasGround = true;
        break;
      }
    }
    if (!hasGround && this.isGrounded) needJump = true;

    if (needJump && this.isGrounded) {
      this.vy = -11.5;
      this.isGrounded = false;
    }
  }

  checkPlatforms(level) {
    this.isGrounded = false;
    for (const plat of level.platforms) {
      const isAbove = this.y + this.height - this.vy <= plat.y + 12;
      const overlapsX = this.x + this.width - 6 >= plat.x && this.x + 6 <= plat.x + plat.width;
      const overlapsY = this.y + this.height >= plat.y && this.y + this.height <= plat.y + plat.height + 10;

      if (isAbove && overlapsX && overlapsY && this.vy >= 0) {
        this.y = plat.y - this.height;
        this.vy = 0;
        this.isGrounded = true;
        this.canDoubleJump = true;

        if (plat.type === 'ice') this.vx *= 0.96;
        if (plat.type === 'collapsing' && plat.timer !== undefined) {
          plat.timer -= 0.04;
          if (plat.timer <= 0) plat.y += 15;
        }
        break;
      }
    }
  }

  hasPowerup(type) {
    return this.activePowerups.some((p) => p.type === type);
  }

  takeDamage(particles) {
    if (this.hurtTimer > 0 || this.isEliminated || this.isWinner) return;

    if (this.hasPowerup('invincibility') || this.hasPowerup('golden_bear') || this.hasPowerup('dash')) {
      return;
    }

    // Shield / Hoverboard absorb
    const shieldIdx = this.activePowerups.findIndex((p) => p.type === 'shield' || p.type === 'hoverboard');
    if (shieldIdx !== -1) {
      this.activePowerups.splice(shieldIdx, 1);
      this.hurtTimer = 0.8;
      if (this.isLocal) window.soundEngine.playShieldBreak();
      return;
    }

    this.lives = Math.max(0, this.lives - 1);
    this.hurtTimer = 1.6;
    this.vy = -6.5;
    this.vx = this.facingRight ? -4 : 4;

    if (this.isLocal) {
      window.soundEngine.playDamage();
      window.soundEngine.playHeartBreak();
      if (particles) particles.emitHeartBreak(this.x + this.width / 2, this.y + this.height / 2);
      if (this.lives === 1) window.soundEngine.startHeartbeat();
    }

    if (this.lives <= 0) {
      this.eliminate(particles);
    }
  }

  eliminate(particles) {
    this.isEliminated = true;
    this.lives = 0;
    this.ghostX = this.x;
    this.ghostY = this.y;

    if (this.isLocal) {
      window.soundEngine.playElimination();
      if (particles) particles.emitElimination(this.x, this.y);
      if (window.onLocalPlayerEliminated) window.onLocalPlayerEliminated();
    }
  }

  updateGhost(dt) {
    this.ghostX += 2.5;
  }

  draw(ctx, worldTime) {
    ctx.save();

    if (this.isEliminated) {
      this.drawGhost(ctx, worldTime);
      ctx.restore();
      return;
    }

    // Shadow
    ctx.fillStyle = 'rgba(0, 0, 0, 0.28)';
    ctx.beginPath();
    ctx.ellipse(this.x + this.width / 2, this.y + this.height - 2, 16, 5, 0, 0, Math.PI * 2);
    ctx.fill();

    // Powerup Auras
    this.drawPowerupAuras(ctx, worldTime);

    ctx.translate(this.x + this.width / 2, this.y + this.height / 2);
    if (!this.facingRight) ctx.scale(-1, 1);

    const isHurting = this.hurtTimer > 0 && Math.floor(this.hurtTimer * 14) % 2 === 0;
    const pal = FUR_COLORS[this.customization.fur] || FUR_COLORS.brown;

    let headOffsetY = 0;
    let legOffset = 0;
    if (this.animState === 'running') {
      headOffsetY = Math.sin(this.animTimer * 14) * 2.5;
      legOffset = Math.sin(this.animTimer * 14) * 5;
    } else if (this.animState === 'jump') {
      headOffsetY = -4;
    } else if (this.animState === 'victory') {
      headOffsetY = -Math.abs(Math.sin(this.animTimer * 8)) * 8;
    }

    // Body
    ctx.fillStyle = isHurting ? '#FF3366' : pal.primary;
    ctx.fillRect(-10, -4 + headOffsetY, 20, 20);

    // Chubby tummy
    ctx.fillStyle = isHurting ? '#FFA3B8' : pal.snout;
    ctx.fillRect(-6, 0 + headOffsetY, 12, 14);

    // Legs
    ctx.fillStyle = isHurting ? '#FF3366' : pal.primary;
    if (this.animState === 'running') {
      ctx.fillRect(-9, 14 + legOffset, 7, 7);
      ctx.fillRect(2, 14 - legOffset, 7, 7);
    } else {
      ctx.fillRect(-9, 14, 7, 7);
      ctx.fillRect(2, 14, 7, 7);
    }

    // Oversized head
    ctx.fillStyle = isHurting ? '#FF3366' : pal.secondary;
    ctx.fillRect(-14, -26 + headOffsetY, 28, 24);

    // Tiny round ears
    ctx.fillStyle = isHurting ? '#FF3366' : pal.primary;
    ctx.fillRect(-16, -30 + headOffsetY, 8, 8);
    ctx.fillRect(8, -30 + headOffsetY, 8, 8);
    ctx.fillStyle = pal.earInner;
    ctx.fillRect(-14, -28 + headOffsetY, 4, 4);
    ctx.fillRect(10, -28 + headOffsetY, 4, 4);

    // Snout
    ctx.fillStyle = pal.snout;
    ctx.fillRect(-6, -14 + headOffsetY, 12, 10);
    ctx.fillStyle = '#22150C';
    ctx.fillRect(-3, -13 + headOffsetY, 6, 4);

    // Facial expressions based on lives
    this.drawFace(ctx, headOffsetY, isHurting);

    // Scarf
    if (this.customization.scarf !== 'none') {
      ctx.fillStyle = this.customization.scarf === 'gold_bowtie' ? '#FFD166' : '#FF758F';
      ctx.fillRect(-12, -4 + headOffsetY, 24, 5);
    }

    // Hat
    if (this.customization.hat === 'crown') {
      ctx.fillStyle = '#FFD166';
      ctx.fillRect(-10, -36 + headOffsetY, 20, 10);
      ctx.fillStyle = '#FF3366';
      ctx.fillRect(-8, -38 + headOffsetY, 3, 3);
      ctx.fillRect(-1, -40 + headOffsetY, 3, 3);
      ctx.fillRect(6, -38 + headOffsetY, 3, 3);
    }

    ctx.restore();

    // Overhead UI
    ctx.font = 'bold 9px "Press Start 2P", monospace';
    ctx.fillStyle = this.isLocal ? '#FFD166' : '#FFFFFF';
    ctx.textAlign = 'center';
    ctx.fillText(this.name, this.x + this.width / 2, this.y - 12);
  }

  drawFace(ctx, headOffsetY, isHurting) {
    if (isHurting) {
      ctx.fillStyle = '#FFF';
      ctx.font = 'bold 9px monospace';
      ctx.fillText('x', -8, -16 + headOffsetY);
      ctx.fillText('x', 4, -16 + headOffsetY);
      return;
    }
    if (this.lives === 1) {
      // Exhausted
      ctx.fillStyle = '#22150C';
      ctx.fillRect(-8, -15 + headOffsetY, 5, 3);
      ctx.fillRect(3, -15 + headOffsetY, 5, 3);
      ctx.fillStyle = '#FF758F';
      ctx.fillRect(-2, -6 + headOffsetY, 4, 5); // Tongue panting
      ctx.fillStyle = '#4CC9F0';
      ctx.fillRect(12, -22 + headOffsetY, 3, 5); // Sweat drop
      return;
    }
    if (this.lives === 2) {
      // Worried
      ctx.fillStyle = '#22150C';
      ctx.fillRect(-8, -17 + headOffsetY, 5, 5);
      ctx.fillRect(3, -17 + headOffsetY, 5, 5);
      ctx.fillStyle = '#4CC9F0';
      ctx.fillRect(11, -20 + headOffsetY, 2, 3);
      return;
    }
    // 3 Lives: Happy
    ctx.fillStyle = '#1D1E2C';
    ctx.fillRect(-8, -17 + headOffsetY, 5, 6);
    ctx.fillRect(3, -17 + headOffsetY, 5, 6);
    ctx.fillStyle = '#FFFFFF';
    ctx.fillRect(-7, -16 + headOffsetY, 2, 2);
    ctx.fillRect(4, -16 + headOffsetY, 2, 2);
    ctx.fillStyle = 'rgba(255, 117, 143, 0.7)';
    ctx.fillRect(-11, -12 + headOffsetY, 4, 3);
    ctx.fillRect(7, -12 + headOffsetY, 4, 3);
  }

  drawGhost(ctx, worldTime) {
    const gy = this.ghostY + Math.sin(worldTime * 4) * 6;
    ctx.translate(this.ghostX + this.width / 2, gy + this.height / 2);
    // Angel halo
    ctx.strokeStyle = '#FFD166';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.ellipse(0, -28, 14, 5, 0, 0, Math.PI * 2);
    ctx.stroke();

    // Ghost body
    ctx.fillStyle = 'rgba(235, 240, 255, 0.75)';
    ctx.beginPath();
    ctx.arc(0, -8, 16, Math.PI, 0, false);
    ctx.lineTo(16, 12);
    ctx.lineTo(8, 6);
    ctx.lineTo(0, 12);
    ctx.lineTo(-8, 6);
    ctx.lineTo(-16, 12);
    ctx.closePath();
    ctx.fill();

    // Crying tears
    ctx.fillStyle = '#4CC9F0';
    ctx.fillRect(-8, -10, 4, 6);
    ctx.fillRect(4, -10, 4, 6);
  }

  drawPowerupAuras(ctx, worldTime) {
    if (this.hasPowerup('shield')) {
      ctx.strokeStyle = '#4CC9F0';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.arc(this.x + this.width / 2, this.y + this.height / 2, 28, 0, Math.PI * 2);
      ctx.stroke();
    }
    if (this.hasPowerup('invincibility') || this.hasPowerup('golden_bear')) {
      const rainbow = ['#FF758F', '#FFD166', '#70E000', '#4CC9F0', '#9D4EDD'];
      ctx.strokeStyle = rainbow[Math.floor(worldTime * 10) % rainbow.length];
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.arc(this.x + this.width / 2, this.y + this.height / 2, 30, 0, Math.PI * 2);
      ctx.stroke();
    }
  }
}

window.Player = Player;
