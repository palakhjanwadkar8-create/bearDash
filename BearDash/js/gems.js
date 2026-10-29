// gems.js - Collectible Gems and Magnet Attraction Logic

const GEM_COLORS = {
  blue: { main: '#4CC9F0', light: '#E0FAFF', value: 10 },
  green: { main: '#70E000', light: '#D8F3DC', value: 20 },
  pink: { main: '#FF758F', light: '#FFE5EC', value: 30 },
  purple: { main: '#9D4EDD', light: '#F3C4FB', value: 50 },
  yellow: { main: '#FFD166', light: '#FFF3B0', value: 75 },
  diamond: { main: '#FFFFFF', light: '#E0FAFF', value: 150 },
};

class Gem {
  constructor(id, x, y, type = 'blue') {
    this.id = id;
    this.x = x;
    this.y = y;
    this.type = type;
    this.info = GEM_COLORS[type] || GEM_COLORS.blue;
    this.value = this.info.value;
    this.collected = false;
  }

  update(player) {
    if (this.collected) return;

    const dx = this.x - (player.x + player.width / 2);
    const dy = this.y - (player.y + player.height / 2);
    const dist = Math.sqrt(dx * dx + dy * dy);

    // Magnet check
    const hasMagnet = player.hasPowerup('magnet') || player.hasPowerup('golden_bear');
    if (hasMagnet && dist < 260) {
      this.x -= (dx / dist) * 9.5;
      this.y -= (dy / dist) * 9.5;
    }

    // Touch collection
    if (dist < 32) {
      this.collected = true;
      const mult = player.hasPowerup('gem_multiplier') ? 2 : 1;
      const earned = this.value * mult;
      player.gemsCollected += 1;
      player.score += earned;

      if (player.isLocal) {
        window.soundEngine.playGem();
      }
    }
  }

  draw(ctx, worldTime) {
    if (this.collected) return;

    const bobY = Math.sin(worldTime * 4 + this.x * 0.1) * 4;
    ctx.save();
    ctx.translate(this.x, this.y + bobY);

    // Diamond cut hexagon
    ctx.fillStyle = this.info.main;
    ctx.beginPath();
    ctx.moveTo(0, -9);
    ctx.lineTo(8, -3);
    ctx.lineTo(8, 3);
    ctx.lineTo(0, 9);
    ctx.lineTo(-8, 3);
    ctx.lineTo(-8, -3);
    ctx.closePath();
    ctx.fill();

    // Top highlight facet
    ctx.fillStyle = this.info.light;
    ctx.beginPath();
    ctx.moveTo(0, -9);
    ctx.lineTo(8, -3);
    ctx.lineTo(-8, -3);
    ctx.closePath();
    ctx.fill();

    ctx.restore();
  }
}

window.Gem = Gem;
