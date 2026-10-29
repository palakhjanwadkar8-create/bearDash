// obstacle.js - Obstacles and Interactive Hazard Elements for BearDash

class Obstacle {
  constructor(data) {
    this.id = data.id;
    this.type = data.type;
    this.x = data.x;
    this.y = data.y;
    this.width = data.width || 32;
    this.height = data.height || 32;

    this.vx = data.vx || 0;
    this.vy = data.vy || 0;
    this.minX = data.minX;
    this.maxX = data.maxX;
    this.minY = data.minY;
    this.maxY = data.maxY;

    this.angle = data.angle || 0;
    this.rotSpeed = data.rotSpeed || 0;
    this.timer = data.timer || 0;
    this.state = data.state !== undefined ? data.state : 1;
    this.hazard = data.hazard !== false;
    this.bounceMultiplier = data.bounceMultiplier || 1.0;
  }

  update(dt, isSlowMo) {
    const mult = isSlowMo ? 0.35 : 1.0;
    this.timer += dt * mult;

    if (this.vx !== 0 && this.minX !== undefined && this.maxX !== undefined) {
      this.x += this.vx * mult;
      if (this.x < this.minX || this.x > this.maxX) this.vx = -this.vx;
    }

    if (this.angle !== undefined && this.rotSpeed !== 0) {
      this.angle += this.rotSpeed * mult;
    }

    if (this.type === 'fireball' && this.minY !== undefined && this.maxY !== undefined) {
      this.y += this.vy * mult;
      this.vy += 0.22 * mult;
      if (this.y > this.maxY) {
        this.y = this.maxY;
        this.vy = -6.5;
      }
    }

    if (this.type === 'laser_beam') {
      this.state = Math.floor(this.timer % 3.4) < 2.2 ? 1 : 0;
    }
  }

  draw(ctx, worldTime) {
    ctx.save();
    ctx.translate(this.x + this.width / 2, this.y + this.height / 2);

    switch (this.type) {
      case 'rolling_log': {
        if (this.angle) ctx.rotate(this.angle);
        ctx.fillStyle = '#8B4513';
        ctx.beginPath();
        ctx.arc(0, 0, this.width / 2, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = '#D2691E';
        ctx.lineWidth = 3;
        ctx.stroke();
        break;
      }

      case 'spinning_blade': {
        if (this.angle) ctx.rotate(this.angle);
        ctx.fillStyle = '#CED4DA';
        ctx.beginPath();
        ctx.arc(0, 0, this.width / 2, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = '#495057';
        for (let i = 0; i < 8; i++) {
          ctx.rotate(Math.PI / 4);
          ctx.fillRect(this.width / 2 - 3, -4, 7, 8);
        }
        break;
      }

      case 'bouncing_mushroom': {
        ctx.fillStyle = '#FF477E';
        ctx.beginPath();
        ctx.ellipse(0, 0, this.width / 2, this.height / 2, 0, Math.PI, 0);
        ctx.fill();
        ctx.fillStyle = '#FFF';
        ctx.fillRect(-8, -10, 5, 5);
        ctx.fillRect(5, -9, 4, 4);
        ctx.fillStyle = '#FFE5EC';
        ctx.fillRect(-5, 0, 10, this.height / 2);
        break;
      }

      case 'angry_bee': {
        const flap = Math.sin(worldTime * 25) * 4;
        ctx.fillStyle = '#FFD166';
        ctx.fillRect(-10, -8, 20, 16);
        ctx.fillStyle = '#222';
        ctx.fillRect(-4, -8, 4, 16);
        ctx.fillRect(4, -8, 4, 16);
        ctx.fillStyle = 'rgba(255, 255, 255, 0.85)';
        ctx.fillRect(-6, -16 + flap, 6, 8);
        ctx.fillRect(2, -16 + flap, 6, 8);
        break;
      }

      case 'swinging_hammer': {
        const angle = Math.sin(this.timer * 2.2) * 0.9;
        ctx.rotate(angle);
        ctx.fillStyle = '#6C757D';
        ctx.fillRect(-2, -this.height / 2, 4, this.height - 20);
        ctx.fillStyle = '#343A40';
        ctx.fillRect(-18, this.height / 2 - 24, 36, 24);
        break;
      }

      case 'fireball': {
        ctx.fillStyle = '#FFBE0B';
        ctx.beginPath();
        ctx.arc(0, 0, this.width / 2, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = '#FF006E';
        ctx.beginPath();
        ctx.arc(0, 3, this.width / 3, 0, Math.PI * 2);
        ctx.fill();
        break;
      }

      case 'laser_beam': {
        if (this.state === 1) {
          ctx.fillStyle = 'rgba(255, 0, 110, 0.7)';
          ctx.fillRect(-this.width / 2, -this.height / 2, this.width, this.height);
          ctx.fillStyle = '#FFFFFF';
          ctx.fillRect(-2, -this.height / 2, 4, this.height);
        }
        ctx.fillStyle = '#495057';
        ctx.fillRect(-8, -this.height / 2 - 4, 16, 6);
        ctx.fillRect(-8, this.height / 2 - 2, 16, 6);
        break;
      }

      case 'exploding_barrel': {
        const isBlink = Math.sin(worldTime * 12) > 0;
        ctx.fillStyle = isBlink ? '#FF0054' : '#9E0031';
        ctx.fillRect(-this.width / 2, -this.height / 2, this.width, this.height);
        ctx.fillStyle = '#FFE600';
        ctx.fillRect(-this.width / 2, -this.height / 4, this.width, 4);
        ctx.fillRect(-this.width / 2, this.height / 4, this.width, 4);
        break;
      }

      case 'rotating_windmill': {
        if (this.angle) ctx.rotate(this.angle);
        ctx.fillStyle = '#4A2810';
        ctx.beginPath();
        ctx.arc(0, 0, 10, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = '#E9D8A6';
        for (let i = 0; i < 4; i++) {
          ctx.rotate(Math.PI / 2);
          ctx.fillRect(-6, 10, 12, this.width / 2 - 10);
        }
        break;
      }

      default: {
        ctx.fillStyle = '#E63946';
        ctx.fillRect(-this.width / 2, -this.height / 2, this.width, this.height);
        break;
      }
    }

    ctx.restore();
  }
}

window.Obstacle = Obstacle;
