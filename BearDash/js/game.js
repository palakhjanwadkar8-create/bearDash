// game.js - Main Game Engine, Parallax Renderer and Loop for BearDash

const CANVAS_WIDTH = 960;
const CANVAS_HEIGHT = 540;

class Game {
  constructor() {
    this.canvas = document.getElementById('gameCanvas');
    this.ctx = this.canvas.getContext('2d');
    this.ctx.imageSmoothingEnabled = false;

    this.input = {
      left: false,
      right: false,
      jump: false,
      dash: false,
      jumpJustPressed: false,
      dashJustPressed: false,
    };
    this.prevJump = false;
    this.prevDash = false;

    this.isPaused = false;
    this.isFinished = false;
    this.cameraX = 0;
    this.cameraY = 0;
    this.screenShake = 0;
    this.worldTime = 0;
    this.startTime = Date.now();

    this.particles = [];
    this.setupInput();
    this.initLevel();
  }

  setupInput() {
    window.addEventListener('keydown', (e) => {
      if (['Space', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.code)) {
        e.preventDefault();
      }
      if (e.key === 'a' || e.key === 'ArrowLeft') this.input.left = true;
      if (e.key === 'd' || e.key === 'ArrowRight') this.input.right = true;
      if (e.key === ' ' || e.key === 'w' || e.key === 'ArrowUp') this.input.jump = true;
      if (e.key === 'Shift') this.input.dash = true;
      if (e.key === 'Escape' || e.key === 'p') this.togglePause();
    });

    window.addEventListener('keyup', (e) => {
      if (e.key === 'a' || e.key === 'ArrowLeft') this.input.left = false;
      if (e.key === 'd' || e.key === 'ArrowRight') this.input.right = false;
      if (e.key === ' ' || e.key === 'w' || e.key === 'ArrowUp') this.input.jump = false;
      if (e.key === 'Shift') this.input.dash = false;
    });

    // Mobile buttons
    const bindTouch = (id, key) => {
      const el = document.getElementById(id);
      if (!el) return;
      el.addEventListener('touchstart', (e) => { e.preventDefault(); this.input[key] = true; });
      el.addEventListener('touchend', (e) => { e.preventDefault(); this.input[key] = false; });
      el.addEventListener('mousedown', () => { this.input[key] = true; });
      el.addEventListener('mouseup', () => { this.input[key] = false; });
    };

    bindTouch('btnLeft', 'left');
    bindTouch('btnRight', 'right');
    bindTouch('btnJump', 'jump');
    bindTouch('btnDash', 'dash');
  }

  initLevel() {
    this.level = window.generateLevel();
    const custom = JSON.parse(localStorage.getItem('bear_dash_racer') || '{}');

    // Local Player
    this.localPlayer = new Player('local', custom.name || 'Baby Bear 🐻', true, false, custom);
    this.players = [this.localPlayer];

    // Spawn AI bots
    const botProfiles = [
      { name: 'Honey 🍯', fur: 'caramel', hat: 'crown', scarf: 'red', backpack: 'honeypot' },
      { name: 'Bramble 🍓', fur: 'brown', hat: 'strawberry', scarf: 'rainbow', backpack: 'leaf' },
      { name: 'Waffles 🧇', fur: 'golden', hat: 'chef', scarf: 'gold_bowtie', backpack: 'star' },
      { name: 'Pip 🐼', fur: 'panda', hat: 'propeller', scarf: 'blue', backpack: 'rocket' },
    ];

    botProfiles.forEach((bp, i) => {
      const bot = new Player(`bot_${i}`, bp.name, false, true, bp);
      bot.x = 40 + i * 28;
      this.players.push(bot);
    });

    this.startTime = Date.now();
    this.isFinished = false;
    window.soundEngine.startBGM();

    window.onLocalPlayerEliminated = () => {
      window.ui.showElimination();
    };
  }

  togglePause() {
    this.isPaused = !this.isPaused;
    window.ui.togglePause(this.isPaused);
  }

  restart() {
    window.ui.hideElimination();
    if (window.ui.victoryModal) window.ui.victoryModal.style.display = 'none';
    this.initLevel();
    this.isPaused = false;
    window.ui.togglePause(false);
  }

  start() {
    let lastTime = 0;
    const loop = (time) => {
      if (lastTime === 0) lastTime = time;
      const dt = Math.min(0.1, (time - lastTime) / 1000);
      lastTime = time;

      this.update(dt);
      this.render(dt);

      requestAnimationFrame(loop);
    };
    requestAnimationFrame(loop);
  }

  update(dt) {
    if (this.isPaused) return;

    this.worldTime += dt;

    // Edge triggers
    this.input.jumpJustPressed = this.input.jump && !this.prevJump;
    this.input.dashJustPressed = this.input.dash && !this.prevDash;
    this.prevJump = this.input.jump;
    this.prevDash = this.input.dash;

    const isSlowMo = this.localPlayer.hasPowerup('slow_motion');

    // Update Obstacles
    this.level.obstacles.forEach((obs) => obs.update(dt, isSlowMo));

    // Update Players
    this.players.forEach((p) => {
      p.update(dt, this.input, this.level, this);

      // Collisions with Obstacles
      this.level.obstacles.forEach((obs) => {
        if (obs.type === 'bouncing_mushroom') {
          if (p.x + p.width >= obs.x && p.x <= obs.x + obs.width &&
              p.y + p.height >= obs.y && p.y + p.height <= obs.y + obs.height + 12 && p.vy >= 0) {
            p.vy = -17.0 * obs.bounceMultiplier;
            p.isGrounded = false;
            p.canDoubleJump = true;
            if (p.isLocal) window.soundEngine.playSuperJump();
          }
        } else if (obs.hazard) {
          if (p.x + p.width - 6 >= obs.x && p.x + 6 <= obs.x + obs.width &&
              p.y + p.height - 6 >= obs.y && p.y + 6 <= obs.y + obs.height) {
            p.takeDamage(this);
          }
        }
      });

      // Gems & Mystery Boxes
      this.level.gems.forEach((g) => g.update(p));
      this.level.mysteryBoxes.forEach((b) => b.update(p));

      // Check Win Condition
      if (p.x >= this.level.finishX && !p.isWinner && p.lives > 0) {
        p.isWinner = true;
        const timeFormatted = `${((Date.now() - this.startTime) / 1000).toFixed(2)}s`;
        if (p.isLocal) {
          this.isFinished = true;
          window.soundEngine.playVictory();
          window.ui.showVictory(p, 1, timeFormatted);
        }
      }
    });

    // Update Particles
    for (let i = this.particles.length - 1; i >= 0; i--) {
      const pt = this.particles[i];
      pt.x += pt.vx;
      pt.y += pt.vy;
      pt.life -= dt;
      if (pt.life <= 0) this.particles.splice(i, 1);
    }

    // Camera Lerp
    const targetX = this.localPlayer.isEliminated
      ? this.localPlayer.ghostX - CANVAS_WIDTH * 0.35
      : this.localPlayer.x - CANVAS_WIDTH * 0.35;

    this.cameraX += (targetX - this.cameraX) * 0.12;

    if (this.screenShake > 0) {
      this.cameraX += (Math.random() * 2 - 1) * this.screenShake;
      this.screenShake = Math.max(0, this.screenShake - dt * 25);
    }

    // Dynamic BGM near finish
    if (this.localPlayer.x / this.level.finishX > 0.75) {
      window.soundEngine.setDynamicTempo(1.25);
    }

    // Sync HUD
    window.ui.updateHUD(this.localPlayer, this.level.finishX);
  }

  // Particle Emitters
  emitDust(x, y, facingRight) {
    this.particles.push({
      x, y,
      vx: (facingRight ? -1 : 1) * 1.5,
      vy: -0.8,
      size: 4,
      color: '#E8D5B5',
      life: 0.35,
    });
  }

  emitJump(x, y) {
    for (let i = 0; i < 5; i++) {
      this.particles.push({
        x: x + (Math.random() * 12 - 6),
        y,
        vx: Math.random() * 2 - 1,
        vy: -Math.random() * 2,
        size: 4,
        color: '#FFF',
        life: 0.4,
      });
    }
  }

  emitHeartBreak(x, y) {
    this.screenShake = 12;
    for (let i = 0; i < 8; i++) {
      this.particles.push({
        x, y,
        vx: Math.random() * 4 - 2,
        vy: Math.random() * 4 - 3,
        size: 5,
        color: '#FF3366',
        life: 0.6,
      });
    }
  }

  emitElimination(x, y) {
    this.screenShake = 16;
    for (let i = 0; i < 16; i++) {
      this.particles.push({
        x, y,
        vx: Math.random() * 4 - 2,
        vy: Math.random() * 4 - 2,
        size: 6,
        color: '#E0E0F0',
        life: 1.0,
      });
    }
  }

  render(dt) {
    const ctx = this.ctx;
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

    // Parallax Golden Hour Sky
    const sky = ctx.createLinearGradient(0, 0, 0, CANVAS_HEIGHT);
    sky.addColorStop(0, '#FF7B54');
    sky.addColorStop(0.55, '#FFB085');
    sky.addColorStop(1, '#FFF2D8');
    ctx.fillStyle = sky;
    ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

    // Sun Glow
    const sunGrad = ctx.createRadialGradient(CANVAS_WIDTH * 0.75, 90, 10, CANVAS_WIDTH * 0.75, 90, 130);
    sunGrad.addColorStop(0, 'rgba(255, 238, 173, 0.9)');
    sunGrad.addColorStop(1, 'rgba(255, 117, 143, 0)');
    ctx.fillStyle = sunGrad;
    ctx.beginPath();
    ctx.arc(CANVAS_WIDTH * 0.75, 90, 130, 0, Math.PI * 2);
    ctx.fill();

    ctx.save();
    ctx.translate(-Math.floor(this.cameraX), -Math.floor(this.cameraY));

    // Distant Mountains
    ctx.fillStyle = '#7B4268';
    for (let mx = -400; mx < this.level.finishX + 1000; mx += 320) {
      ctx.beginPath();
      ctx.moveTo(mx, 360);
      ctx.lineTo(mx + 160, 220);
      ctx.lineTo(mx + 320, 360);
      ctx.fill();
    }

    // Platforms
    this.level.platforms.forEach((plat) => {
      if (plat.type === 'collapsing') {
        ctx.fillStyle = '#8B5A2B';
        ctx.fillRect(plat.x, plat.y, plat.width, plat.height);
      } else if (plat.type === 'ice') {
        ctx.fillStyle = '#BEE1E6';
        ctx.fillRect(plat.x, plat.y, plat.width, plat.height);
      } else {
        // Ground
        ctx.fillStyle = '#70E000';
        ctx.fillRect(plat.x, plat.y, plat.width, 10);
        ctx.fillStyle = '#4A2810';
        ctx.fillRect(plat.x, plat.y + 10, plat.width, plat.height - 10);
      }
    });

    // Obstacles
    this.level.obstacles.forEach((obs) => obs.draw(ctx, this.worldTime));

    // Gems & Mystery Boxes
    this.level.gems.forEach((g) => g.draw(ctx, this.worldTime));
    this.level.mysteryBoxes.forEach((b) => b.draw(ctx, this.worldTime));

    // Finish Line Arch
    const fx = this.level.finishX;
    ctx.fillStyle = '#FFD166';
    ctx.fillRect(fx - 20, 240, 16, 200);
    ctx.fillRect(fx + 50, 240, 16, 200);
    ctx.fillRect(fx - 28, 240, 100, 26);
    ctx.fillStyle = '#FFF';
    ctx.font = 'bold 12px "Press Start 2P"';
    ctx.fillText('FINISH', fx + 22, 230);

    // Players
    this.players.forEach((p) => p.draw(ctx, this.worldTime));

    // Particles
    this.particles.forEach((pt) => {
      ctx.fillStyle = pt.color;
      ctx.fillRect(pt.x, pt.y, pt.size, pt.size);
    });

    ctx.restore();
  }
}

window.Game = Game;
