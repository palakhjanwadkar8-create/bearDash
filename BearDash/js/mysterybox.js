// mysterybox.js - Glowing Mystery Chests and Power-Up Drop Logic

class MysteryBox {
  constructor(id, x, y) {
    this.id = id;
    this.x = x;
    this.y = y;
    this.width = 32;
    this.height = 32;
    this.opened = false;
  }

  update(player) {
    if (this.opened) return;

    const overlapsX = player.x + player.width >= this.x && player.x <= this.x + this.width;
    const overlapsY = player.y + player.height >= this.y && player.y <= this.y + this.height;

    if (overlapsX && overlapsY) {
      this.opened = true;

      if (player.isLocal) {
        window.soundEngine.playMysteryBox();

        const dropPool = [
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
        const selected = dropPool[Math.floor(Math.random() * dropPool.length)];
        window.activatePowerup(player, selected);
      }
    }
  }

  draw(ctx, worldTime) {
    const bobY = this.opened ? 0 : Math.sin(worldTime * 3 + this.x) * 4;
    ctx.save();
    ctx.translate(this.x, this.y + bobY);

    if (this.opened) {
      ctx.fillStyle = '#654321';
      ctx.fillRect(0, 10, 32, 22);
      ctx.fillStyle = '#D4AF37';
      ctx.fillRect(0, 8, 32, 4);
    } else {
      const glow = (Math.sin(worldTime * 6) + 1) * 0.5;
      ctx.fillStyle = `rgba(255, 209, 102, ${0.25 + glow * 0.35})`;
      ctx.fillRect(-4, -4, 40, 40);

      ctx.fillStyle = '#FFB703';
      ctx.fillRect(0, 0, 32, 32);

      ctx.fillStyle = '#FB8500';
      ctx.fillRect(0, 0, 32, 4);
      ctx.fillRect(0, 28, 32, 4);
      ctx.fillRect(0, 0, 4, 32);
      ctx.fillRect(28, 0, 4, 32);

      ctx.fillStyle = '#FFFFFF';
      ctx.font = 'bold 16px "Press Start 2P", monospace';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('?', 16, 17);
    }

    ctx.restore();
  }
}

window.MysteryBox = MysteryBox;
