// PixelRenderer.ts - High-Definition Modern Pixel Art Renderer
// Renders the living Golden Hour forest, multi-biome world, adorable baby bears, obstacles, and dynamic particles.

import { LevelData, PlayerState, Obstacle, Gem, MysteryBox, BiomeSegment, Platform } from './types';
import { FUR_COLORS, GAME_CONSTANTS } from './constants';
import { ParticleSystem } from './ParticleSystem';

export class PixelRenderer {
  private ctx: CanvasRenderingContext2D;
  private width: number;
  private height: number;
  private worldTime: number = 0;

  // Background ambient animated elements
  private birds: { x: number; y: number; speed: number; flapTimer: number }[] = [];
  private ambientLeaves: { x: number; y: number; speedX: number; speedY: number; color: string }[] = [];
  private butterflies: { x: number; y: number; baseX: number; timer: number; color: string }[] = [];

  constructor(ctx: CanvasRenderingContext2D, width: number, height: number) {
    this.ctx = ctx;
    this.width = width;
    this.height = height;

    // Initialize ambient flying birds
    for (let i = 0; i < 6; i++) {
      this.birds.push({
        x: Math.random() * 2000,
        y: 60 + Math.random() * 90,
        speed: 1.2 + Math.random() * 0.8,
        flapTimer: Math.random() * 10,
      });
    }

    // Initialize floating leaves
    const leafColors = ['#FF7B54', '#FFB085', '#E76F51', '#FFD166', '#F4A261'];
    for (let i = 0; i < 20; i++) {
      this.ambientLeaves.push({
        x: Math.random() * width * 3,
        y: Math.random() * height,
        speedX: -0.8 - Math.random() * 0.9,
        speedY: 0.3 + Math.random() * 0.5,
        color: leafColors[Math.floor(Math.random() * leafColors.length)],
      });
    }

    // Butterflies
    const butterColors = ['#FF758F', '#4CC9F0', '#FFD166', '#B565F2'];
    for (let i = 0; i < 8; i++) {
      const bx = 300 + i * 1400;
      this.butterflies.push({
        x: bx,
        y: 380,
        baseX: bx,
        timer: Math.random() * 10,
        color: butterColors[i % butterColors.length],
      });
    }
  }

  public resize(width: number, height: number) {
    this.width = width;
    this.height = height;
  }

  public render(
    dt: number,
    level: LevelData,
    players: PlayerState[],
    localPlayer: PlayerState,
    particles: ParticleSystem,
    cameraX: number,
    cameraY: number
  ) {
    this.worldTime += dt;
    const ctx = this.ctx;

    // Enforce pixel-perfect rendering
    ctx.imageSmoothingEnabled = false;

    // 1. Current Biome lookup for dynamic sky & atmosphere
    const currentBiome = this.getCurrentBiome(level.biomes, cameraX + this.width / 2);

    // 2. Render Parallax Golden Hour Sky & Living World
    this.renderParallaxSky(ctx, currentBiome, cameraX);

    // Save camera transform for in-world rendering
    ctx.save();
    ctx.translate(-Math.floor(cameraX), -Math.floor(cameraY));

    // 3. Ambient Midground (Distant Waterfalls, swaying pines)
    this.renderMidgroundScenery(ctx, cameraX, level);

    // 4. Render Platforms & Terrain
    this.renderPlatforms(ctx, level.platforms, currentBiome, cameraX);

    // 5. Render Obstacles
    this.renderObstacles(ctx, level.obstacles, cameraX);

    // 6. Render Collectibles (Gems & Mystery Boxes)
    this.renderGems(ctx, level.gems, cameraX);
    this.renderMysteryBoxes(ctx, level.mysteryBoxes, cameraX);

    // 7. Render Grand Finish Line Arch & Spectators
    this.renderFinishLineArch(ctx, level.finishX);

    // 8. Render Players & AI Baby Bears
    this.renderPlayers(ctx, players, localPlayer);

    // 9. Render In-World Particles & Floating Score Texts
    this.renderParticles(ctx, particles);

    // 10. Ambient Butterflies & Drifting Leaves
    this.renderAmbientFlora(ctx, cameraX);

    ctx.restore();

    // 11. Render Screen Effects (e.g. Danger Red Vignette for 1 life, screen flash)
    this.renderScreenVignette(ctx, localPlayer);
  }

  private getCurrentBiome(biomes: BiomeSegment[], worldX: number): BiomeSegment {
    for (const b of biomes) {
      if (worldX >= b.startX && worldX <= b.endX) {
        return b;
      }
    }
    return biomes[0];
  }

  // --- Parallax Golden Hour Sky & Mountains ---
  private renderParallaxSky(ctx: CanvasRenderingContext2D, biome: BiomeSegment, cameraX: number) {
    // Golden Hour Sky Gradient
    const skyGrad = ctx.createLinearGradient(0, 0, 0, this.height);
    skyGrad.addColorStop(0, biome.skyTopColor);
    skyGrad.addColorStop(0.55, biome.skyBottomColor);
    skyGrad.addColorStop(1, '#FFF2D8');
    ctx.fillStyle = skyGrad;
    ctx.fillRect(0, 0, this.width, this.height);

    // Soft Golden Sun / Twilight Glow
    const sunX = this.width * 0.72 - (cameraX * 0.03) % (this.width * 1.5);
    const sunY = 90;
    const sunGrad = ctx.createRadialGradient(sunX, sunY, 10, sunX, sunY, 140);
    sunGrad.addColorStop(0, 'rgba(255, 238, 173, 0.9)');
    sunGrad.addColorStop(0.3, 'rgba(255, 175, 122, 0.45)');
    sunGrad.addColorStop(1, 'rgba(255, 117, 143, 0)');
    ctx.fillStyle = sunGrad;
    ctx.beginPath();
    ctx.arc(sunX, sunY, 140, 0, Math.PI * 2);
    ctx.fill();

    // Parallax Pixel Clouds (Layer 1 - Distant slow)
    this.renderPixelClouds(ctx, cameraX * 0.08 + this.worldTime * 4, 45, 1.2, 'rgba(255, 230, 220, 0.45)');
    this.renderPixelClouds(ctx, cameraX * 0.15 + this.worldTime * 8, 85, 1.6, 'rgba(255, 255, 255, 0.65)');

    // Distant Pixel Mountains (Layer 2)
    this.renderPixelMountains(ctx, cameraX * 0.18, 220, '#7B4268', '#A25984');

    // Midground Rolling Hills & Pine Silhouette (Layer 3)
    this.renderPixelHills(ctx, cameraX * 0.35, 340, '#532B4C');

    // Flying Birds in flock
    ctx.fillStyle = '#4A2840';
    for (const bird of this.birds) {
      bird.x += bird.speed;
      if (bird.x > this.width + 100) bird.x = -60;
      bird.flapTimer += 0.2;
      const wingUp = Math.sin(bird.flapTimer) > 0;
      const bx = bird.x;
      const by = bird.y + Math.sin(bird.flapTimer * 0.5) * 4;

      // Cute 3-pixel bird
      ctx.fillRect(bx, by, 3, 2);
      if (wingUp) {
        ctx.fillRect(bx - 3, by - 2, 3, 2);
        ctx.fillRect(bx + 3, by - 2, 3, 2);
      } else {
        ctx.fillRect(bx - 3, by + 2, 3, 2);
        ctx.fillRect(bx + 3, by + 2, 3, 2);
      }
    }
  }

  private renderPixelClouds(
    ctx: CanvasRenderingContext2D,
    offset: number,
    baseY: number,
    scale: number,
    color: string
  ) {
    ctx.fillStyle = color;
    const cloudWidth = 140 * scale;
    const spacing = 280 * scale;
    const startX = -((offset) % spacing) - cloudWidth;

    for (let x = startX; x < this.width + cloudWidth; x += spacing) {
      // Fluffy stepped pixel cloud
      const cy = baseY + Math.sin(x * 0.01) * 8;
      ctx.fillRect(x + 20 * scale, cy, 60 * scale, 18 * scale);
      ctx.fillRect(x + 10 * scale, cy + 6 * scale, 80 * scale, 16 * scale);
      ctx.fillRect(x, cy + 12 * scale, 100 * scale, 14 * scale);
    }
  }

  private renderPixelMountains(
    ctx: CanvasRenderingContext2D,
    offset: number,
    baseY: number,
    peakColor: string,
    bodyColor: string
  ) {
    const mountainWidth = 320;
    const startX = -((offset) % mountainWidth) - mountainWidth;

    for (let mx = startX; mx < this.width + mountainWidth; mx += mountainWidth) {
      ctx.fillStyle = bodyColor;
      ctx.beginPath();
      ctx.moveTo(mx, baseY + 140);
      ctx.lineTo(mx + 160, baseY);
      ctx.lineTo(mx + 320, baseY + 140);
      ctx.fill();

      // Snowy / sunset peak cap
      ctx.fillStyle = peakColor;
      ctx.beginPath();
      ctx.moveTo(mx + 120, baseY + 35);
      ctx.lineTo(mx + 160, baseY);
      ctx.lineTo(mx + 200, baseY + 35);
      ctx.lineTo(mx + 175, baseY + 45);
      ctx.lineTo(mx + 160, baseY + 40);
      ctx.lineTo(mx + 145, baseY + 45);
      ctx.fill();
    }
  }

  private renderPixelHills(ctx: CanvasRenderingContext2D, offset: number, baseY: number, color: string) {
    ctx.fillStyle = color;
    const step = 240;
    const startX = -((offset) % step) - step;

    for (let x = startX; x < this.width + step; x += step) {
      ctx.beginPath();
      ctx.arc(x + 120, baseY + 90, 130, Math.PI, 0, false);
      ctx.fill();

      // Tiny pine trees on hilltop
      for (let p = 0; p < 3; p++) {
        const px = x + 80 + p * 35;
        const py = baseY - 10;
        ctx.fillRect(px + 4, py + 8, 3, 10); // trunk
        ctx.fillStyle = '#32192F';
        ctx.beginPath();
        ctx.moveTo(px - 4, py + 8);
        ctx.lineTo(px + 5.5, py - 6);
        ctx.lineTo(px + 15, py + 8);
        ctx.fill();
        ctx.fillStyle = color;
      }
    }
  }

  // --- Midground Scenery (Waterfalls & Foliage) ---
  private renderMidgroundScenery(ctx: CanvasRenderingContext2D, cameraX: number, level: LevelData) {
    // Waterfalls in River Biome (2300 - 4500)
    if (cameraX + this.width > 2300 && cameraX < 4500) {
      const wfX = 3100;
      // Waterfall flow
      const flowOffset = (this.worldTime * 60) % 20;
      ctx.fillStyle = 'rgba(76, 201, 240, 0.7)';
      ctx.fillRect(wfX, 220, 65, 230);
      ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
      for (let y = 220 + flowOffset; y < 450; y += 20) {
        ctx.fillRect(wfX + 4, y, 57, 5);
      }
      // Water spray foam at base
      ctx.fillStyle = '#FFFFFF';
      for (let i = 0; i < 5; i++) {
        const fx = wfX + (Math.sin(this.worldTime * 6 + i) + 1) * 28;
        ctx.fillRect(fx, 435 + (i % 3) * 3, 8, 6);
      }
    }
  }

  // --- Platforms & Terrain ---
  private renderPlatforms(
    ctx: CanvasRenderingContext2D,
    platforms: Platform[],
    biome: BiomeSegment,
    cameraX: number
  ) {
    const minVisX = cameraX - 100;
    const maxVisX = cameraX + this.width + 100;

    for (const plat of platforms) {
      if (plat.x + plat.width < minVisX || plat.x > maxVisX) continue;

      if (plat.type === 'collapsing') {
        // Collapsing wooden bridge plank
        ctx.fillStyle = '#8B5A2B';
        ctx.fillRect(plat.x, plat.y, plat.width, plat.height);
        // Wood grain
        ctx.fillStyle = '#653E17';
        ctx.fillRect(plat.x + 2, plat.y + 4, plat.width - 4, 3);
        // Ropes & nails
        ctx.fillStyle = '#D4A373';
        ctx.fillRect(plat.x + 3, plat.y + 2, 3, 3);
        ctx.fillRect(plat.x + plat.width - 6, plat.y + 2, 3, 3);
      } else if (plat.type === 'ice') {
        // Slippery Ice platform
        ctx.fillStyle = '#BEE1E6';
        ctx.fillRect(plat.x, plat.y, plat.width, plat.height);
        // Ice shine highlights
        ctx.fillStyle = '#FFFFFF';
        ctx.fillRect(plat.x, plat.y, plat.width, 4);
        ctx.fillStyle = '#89C2D9';
        ctx.fillRect(plat.x, plat.y + plat.height - 4, plat.width, 4);
      } else {
        // Solid Ground or Floating slab
        // Top Grass / Flora Edge
        ctx.fillStyle = biome.groundGrassColor;
        ctx.fillRect(plat.x, plat.y, plat.width, 10);

        // Cute scalloped grass drops
        const scallopW = 12;
        for (let sx = plat.x; sx < plat.x + plat.width - scallopW; sx += scallopW) {
          ctx.fillRect(sx + 3, plat.y + 10, 6, 4);
        }

        // Earth / Stone base
        ctx.fillStyle = biome.groundColor;
        ctx.fillRect(plat.x, plat.y + 14, plat.width, plat.height - 14);

        // Embedded pixel pebbles / gems
        ctx.fillStyle = biome.accentColor;
        const pebbleStep = 45;
        for (let px = plat.x + 15; px < plat.x + plat.width - 15; px += pebbleStep) {
          ctx.fillRect(px, plat.y + 22, 6, 4);
          ctx.fillRect(px + 20, plat.y + 36, 4, 4);
        }

        // Swaying flowers & grass blades on top of platform
        ctx.fillStyle = '#FF758F';
        for (let fx = plat.x + 20; fx < plat.x + plat.width - 25; fx += 80) {
          const sway = Math.sin(this.worldTime * 3 + fx) * 2;
          // Stem
          ctx.fillStyle = '#52B788';
          ctx.fillRect(fx + 2, plat.y - 6, 2, 6);
          // Flower Petals
          ctx.fillStyle = (fx % 160 === 0) ? '#FFD166' : '#FF758F';
          ctx.fillRect(fx + sway, plat.y - 10, 6, 5);
          ctx.fillStyle = '#FFFFFF';
          ctx.fillRect(fx + sway + 2, plat.y - 8, 2, 2);
        }
      }
    }
  }

  // --- Obstacles ---
  private renderObstacles(ctx: CanvasRenderingContext2D, obstacles: Obstacle[], cameraX: number) {
    const minVisX = cameraX - 100;
    const maxVisX = cameraX + this.width + 100;

    for (const obs of obstacles) {
      if (obs.x + obs.width < minVisX || obs.x > maxVisX) continue;

      ctx.save();
      ctx.translate(obs.x + obs.width / 2, obs.y + obs.height / 2);

      switch (obs.type) {
        case 'rolling_log': {
          if (obs.angle !== undefined) ctx.rotate(obs.angle);
          // Round wooden rolling log
          ctx.fillStyle = '#8B4513';
          ctx.beginPath();
          ctx.arc(0, 0, obs.width / 2, 0, Math.PI * 2);
          ctx.fill();
          // Inner rings
          ctx.strokeStyle = '#D2691E';
          ctx.lineWidth = 3;
          ctx.beginPath();
          ctx.arc(0, 0, obs.width / 3, 0, Math.PI * 2);
          ctx.stroke();
          // Wood spokes
          ctx.beginPath();
          ctx.moveTo(-obs.width / 2, 0);
          ctx.lineTo(obs.width / 2, 0);
          ctx.moveTo(0, -obs.height / 2);
          ctx.lineTo(0, obs.height / 2);
          ctx.stroke();
          break;
        }

        case 'spinning_blade': {
          if (obs.angle !== undefined) ctx.rotate(obs.angle);
          // Steel saw blade
          ctx.fillStyle = '#CED4DA';
          ctx.beginPath();
          ctx.arc(0, 0, obs.width / 2, 0, Math.PI * 2);
          ctx.fill();
          // Saw teeth
          ctx.fillStyle = '#E9ECEF';
          for (let i = 0; i < 8; i++) {
            ctx.rotate(Math.PI / 4);
            ctx.fillRect(obs.width / 2 - 3, -4, 7, 8);
          }
          // Center bolt
          ctx.fillStyle = '#495057';
          ctx.beginPath();
          ctx.arc(0, 0, 5, 0, Math.PI * 2);
          ctx.fill();
          break;
        }

        case 'bouncing_mushroom': {
          // Cute bouncy forest mushroom trampoline
          const bounceSquash = (Math.sin(this.worldTime * 5) + 1) * 1.5;
          ctx.fillStyle = '#FF477E';
          ctx.beginPath();
          ctx.ellipse(0, 0 - bounceSquash, obs.width / 2, obs.height / 2, 0, Math.PI, 0);
          ctx.fill();
          // Cute white dots
          ctx.fillStyle = '#FFFFFF';
          ctx.fillRect(-8, -10 - bounceSquash, 5, 5);
          ctx.fillRect(5, -9 - bounceSquash, 4, 4);
          ctx.fillRect(-2, -14 - bounceSquash, 4, 4);
          // Mushroom stalk
          ctx.fillStyle = '#FFE5EC';
          ctx.fillRect(-5, 0 - bounceSquash, 10, obs.height / 2);
          break;
        }

        case 'angry_bee': {
          // Cute chubby bee hovering
          const wingFlap = Math.sin(this.worldTime * 25) * 4;
          // Body
          ctx.fillStyle = '#FFD166';
          ctx.fillRect(-10, -8, 20, 16);
          // Black stripes
          ctx.fillStyle = '#222222';
          ctx.fillRect(-4, -8, 4, 16);
          ctx.fillRect(4, -8, 4, 16);
          // Wings
          ctx.fillStyle = 'rgba(255, 255, 255, 0.85)';
          ctx.fillRect(-6, -16 + wingFlap, 6, 8);
          ctx.fillRect(2, -16 + wingFlap, 6, 8);
          // Angry eyes & stinger
          ctx.fillStyle = '#FF3366';
          ctx.fillRect(-8, -4, 3, 3);
          ctx.fillRect(10, 0, 4, 2); // stinger
          break;
        }

        case 'swinging_hammer': {
          // Pendulum
          const angle = Math.sin((obs.timer || 0) * 2.2) * 0.9;
          ctx.rotate(angle);
          // Chain
          ctx.fillStyle = '#6C757D';
          ctx.fillRect(-2, -obs.height / 2, 4, obs.height - 20);
          // Heavy stone/iron hammer head
          ctx.fillStyle = '#343A40';
          ctx.fillRect(-18, obs.height / 2 - 24, 36, 24);
          ctx.fillStyle = '#CED4DA';
          ctx.fillRect(-16, obs.height / 2 - 22, 4, 20); // highlight
          break;
        }

        case 'fireball': {
          // Flaming fireball
          ctx.fillStyle = '#FFBE0B';
          ctx.beginPath();
          ctx.arc(0, 0, obs.width / 2, 0, Math.PI * 2);
          ctx.fill();
          // Fiery flame flickers
          ctx.fillStyle = '#FF006E';
          ctx.beginPath();
          ctx.arc(0, 3, obs.width / 3, 0, Math.PI * 2);
          ctx.fill();
          // Trail sparks
          ctx.fillStyle = '#FB5607';
          ctx.fillRect(-4, 10, 8, 8);
          break;
        }

        case 'laser_beam': {
          // High-tech pulsing security laser
          const pulse = (Math.sin(this.worldTime * 8) + 1) * 0.5;
          ctx.fillStyle = `rgba(255, 0, 110, ${0.4 + pulse * 0.55})`;
          ctx.fillRect(-obs.width / 2, -obs.height / 2, obs.width, obs.height);
          // Bright core
          ctx.fillStyle = '#FFFFFF';
          ctx.fillRect(-2, -obs.height / 2, 4, obs.height);
          // Emitter nozzles top & bottom
          ctx.fillStyle = '#495057';
          ctx.fillRect(-8, -obs.height / 2 - 4, 16, 6);
          ctx.fillRect(-8, obs.height / 2 - 2, 16, 6);
          break;
        }

        case 'exploding_barrel': {
          // Red TNT / hazard barrel
          const isWarning = Math.sin(this.worldTime * 12) > 0;
          ctx.fillStyle = isWarning ? '#FF0054' : '#9E0031';
          ctx.fillRect(-obs.width / 2, -obs.height / 2, obs.width, obs.height);
          // Metal bands
          ctx.fillStyle = '#FFE600';
          ctx.fillRect(-obs.width / 2, -obs.height / 4, obs.width, 4);
          ctx.fillRect(-obs.width / 2, obs.height / 4, obs.width, 4);
          // Skull / Fire logo
          ctx.fillStyle = '#FFFFFF';
          ctx.fillRect(-4, -4, 8, 8);
          break;
        }

        case 'rotating_windmill': {
          if (obs.angle !== undefined) ctx.rotate(obs.angle);
          // Center hub
          ctx.fillStyle = '#4A2810';
          ctx.beginPath();
          ctx.arc(0, 0, 10, 0, Math.PI * 2);
          ctx.fill();
          // 4 wooden propeller blades
          ctx.fillStyle = '#E9D8A6';
          for (let i = 0; i < 4; i++) {
            ctx.rotate(Math.PI / 2);
            ctx.fillRect(-6, 10, 12, obs.width / 2 - 10);
            ctx.fillStyle = '#9B2226';
            ctx.fillRect(-6, obs.width / 2 - 10, 12, 10); // tip
            ctx.fillStyle = '#E9D8A6';
          }
          break;
        }

        case 'jumping_frog': {
          // Cute green pixel frog
          ctx.fillStyle = '#38B000';
          ctx.fillRect(-12, -8, 24, 16);
          // Eyes on top
          ctx.fillStyle = '#FFFFFF';
          ctx.fillRect(-10, -14, 6, 6);
          ctx.fillRect(4, -14, 6, 6);
          ctx.fillStyle = '#000000';
          ctx.fillRect(-8, -12, 3, 3);
          ctx.fillRect(6, -12, 3, 3);
          // Cheek blush
          ctx.fillStyle = '#FF758F';
          ctx.fillRect(-10, -2, 4, 3);
          ctx.fillRect(6, -2, 4, 3);
          break;
        }

        default: {
          // Default hazard box
          ctx.fillStyle = '#E63946';
          ctx.fillRect(-obs.width / 2, -obs.height / 2, obs.width, obs.height);
          break;
        }
      }

      ctx.restore();
    }
  }

  // --- Collectibles: Gems & Mystery Boxes ---
  private renderGems(ctx: CanvasRenderingContext2D, gems: Gem[], cameraX: number) {
    const minVisX = cameraX - 100;
    const maxVisX = cameraX + this.width + 100;

    for (const gem of gems) {
      if (gem.collected || gem.x < minVisX || gem.x > maxVisX) continue;

      const bobY = Math.sin(this.worldTime * 4 + gem.x * 0.1) * 4;
      const gx = gem.x;
      const gy = gem.y + bobY;

      ctx.save();
      ctx.translate(gx, gy);

      // Gem Color Map
      const gemColors: Record<string, { main: string; light: string; dark: string }> = {
        blue: { main: '#4CC9F0', light: '#E0FAFF', dark: '#0077B6' },
        green: { main: '#70E000', light: '#D8F3DC', dark: '#38B000' },
        pink: { main: '#FF758F', light: '#FFE5EC', dark: '#C9184A' },
        purple: { main: '#9D4EDD', light: '#F3C4FB', dark: '#5A189A' },
        yellow: { main: '#FFD166', light: '#FFF3B0', dark: '#E76F51' },
        diamond: { main: '#FFFFFF', light: '#E0FAFF', dark: '#48CAE4' },
      };

      const pal = gemColors[gem.type] || gemColors.blue;

      // Sparkling Diamond Cut Hexagon
      ctx.fillStyle = pal.main;
      ctx.beginPath();
      ctx.moveTo(0, -9);
      ctx.lineTo(8, -3);
      ctx.lineTo(8, 3);
      ctx.lineTo(0, 9);
      ctx.lineTo(-8, 3);
      ctx.lineTo(-8, -3);
      ctx.closePath();
      ctx.fill();

      // Top Highlight Facet
      ctx.fillStyle = pal.light;
      ctx.beginPath();
      ctx.moveTo(0, -9);
      ctx.lineTo(8, -3);
      ctx.lineTo(-8, -3);
      ctx.closePath();
      ctx.fill();

      // Shimmer Glint
      if (Math.sin(this.worldTime * 8 + gem.x) > 0.6) {
        ctx.fillStyle = '#FFFFFF';
        ctx.fillRect(-2, -5, 4, 4);
      }

      ctx.restore();
    }
  }

  private renderMysteryBoxes(ctx: CanvasRenderingContext2D, boxes: MysteryBox[], cameraX: number) {
    const minVisX = cameraX - 100;
    const maxVisX = cameraX + this.width + 100;

    for (const box of boxes) {
      if (box.x < minVisX || box.x > maxVisX) continue;

      const bobY = box.opened ? 0 : Math.sin(this.worldTime * 3 + box.x) * 4;
      const bx = box.x;
      const by = box.y + bobY;

      ctx.save();
      ctx.translate(bx, by);

      if (box.opened) {
        // Open wooden chest
        ctx.fillStyle = '#654321';
        ctx.fillRect(0, 10, 32, 22);
        ctx.fillStyle = '#D4AF37';
        ctx.fillRect(0, 8, 32, 4);
      } else {
        // Glowing Floating Golden Mystery Chest
        const glow = (Math.sin(this.worldTime * 6) + 1) * 0.5;
        // Outer aura
        ctx.fillStyle = `rgba(255, 209, 102, ${0.25 + glow * 0.35})`;
        ctx.fillRect(-4, -4, 40, 40);

        // Chest Body
        ctx.fillStyle = '#FFB703';
        ctx.fillRect(0, 0, 32, 32);

        // Gold Trim
        ctx.fillStyle = '#FB8500';
        ctx.fillRect(0, 0, 32, 4);
        ctx.fillRect(0, 28, 32, 4);
        ctx.fillRect(0, 0, 4, 32);
        ctx.fillRect(28, 0, 4, 32);

        // Center Pulsing '?'
        ctx.fillStyle = '#FFFFFF';
        ctx.font = 'bold 16px "Press Start 2P", monospace';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText('?', 16, 17);
      }

      ctx.restore();
    }
  }

  // --- Grand Finish Line Arch & Spectators ---
  private renderFinishLineArch(ctx: CanvasRenderingContext2D, finishX: number) {
    const archY = 240;

    // Red Carpet
    ctx.fillStyle = '#E63946';
    ctx.fillRect(finishX - 120, 436, 240, 8);
    ctx.fillStyle = '#FFD166';
    ctx.fillRect(finishX - 120, 436, 240, 2);
    ctx.fillRect(finishX - 120, 442, 240, 2);

    // Left Arch Pillar
    ctx.fillStyle = '#FFD166';
    ctx.fillRect(finishX - 24, archY, 18, 200);
    ctx.fillStyle = '#E09F3E';
    ctx.fillRect(finishX - 24, archY, 4, 200);

    // Right Arch Pillar
    ctx.fillStyle = '#FFD166';
    ctx.fillRect(finishX + 46, archY, 18, 200);
    ctx.fillStyle = '#E09F3E';
    ctx.fillRect(finishX + 46, archY, 4, 200);

    // Top Crossbar Arch
    ctx.fillStyle = '#FFD166';
    ctx.fillRect(finishX - 32, archY, 104, 28);

    // Checkered Finish Ribbon
    const checkW = 10;
    for (let cx = finishX - 28; cx < finishX + 68; cx += checkW) {
      const isWhite = Math.floor((cx - (finishX - 28)) / checkW) % 2 === 0;
      ctx.fillStyle = isWhite ? '#FFFFFF' : '#222222';
      ctx.fillRect(cx, archY + 4, checkW, 10);
      ctx.fillStyle = isWhite ? '#222222' : '#FFFFFF';
      ctx.fillRect(cx, archY + 14, checkW, 10);
    }

    // Grand Winner Banner Text
    ctx.fillStyle = '#FFFFFF';
    ctx.font = 'bold 12px "Press Start 2P", monospace';
    ctx.textAlign = 'center';
    ctx.fillText('FINISH', finishX + 20, archY - 10);

    // Golden Cup on Top
    ctx.fillStyle = '#FFF3B0';
    ctx.fillText('🏆', finishX + 20, archY - 26);

    // Flashing colored bulbs along arch
    const bulbColors = ['#FF758F', '#FFD166', '#70E000', '#4CC9F0', '#9D4EDD'];
    for (let b = 0; b < 6; b++) {
      const color = bulbColors[(b + Math.floor(this.worldTime * 4)) % bulbColors.length];
      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.arc(finishX - 24 + b * 18, archY + 34, 4, 0, Math.PI * 2);
      ctx.fill();
    }

    // Cheering baby bear spectators along the side!
    this.renderSpectatorBear(ctx, finishX + 80, 440, 'brown', true);
    this.renderSpectatorBear(ctx, finishX + 115, 440, 'pink', false);
    this.renderSpectatorBear(ctx, finishX + 145, 440, 'panda', true);
  }

  private renderSpectatorBear(
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number,
    fur: string,
    waveUp: boolean
  ) {
    const jumpY = Math.abs(Math.sin(this.worldTime * 4 + x)) * 12;
    const by = y - 36 - jumpY;

    const pal = FUR_COLORS[fur] || FUR_COLORS.brown;
    // Head
    ctx.fillStyle = pal.secondary;
    ctx.fillRect(x, by, 22, 20);
    // Ears
    ctx.fillStyle = pal.primary;
    ctx.fillRect(x - 2, by - 4, 6, 6);
    ctx.fillRect(x + 18, by - 4, 6, 6);
    // Face
    ctx.fillStyle = '#222';
    ctx.fillRect(x + 5, by + 6, 3, 3);
    ctx.fillRect(x + 14, by + 6, 3, 3);
    // Flag or cheering paws
    ctx.fillStyle = pal.primary;
    if (waveUp) {
      ctx.fillRect(x - 4, by + 2, 4, 6);
      ctx.fillRect(x + 22, by + 2, 4, 6);
      // Tiny flag
      ctx.fillStyle = '#FF758F';
      ctx.fillRect(x + 24, by - 8, 10, 8);
    } else {
      ctx.fillRect(x - 4, by + 10, 4, 6);
      ctx.fillRect(x + 22, by + 10, 4, 6);
    }
  }

  // --- Players & AI Baby Bears ---
  private renderPlayers(
    ctx: CanvasRenderingContext2D,
    players: PlayerState[],
    localPlayer: PlayerState
  ) {
    for (const player of players) {
      this.renderSingleBear(ctx, player, player.id === localPlayer.id);
    }
  }

  private renderSingleBear(ctx: CanvasRenderingContext2D, p: PlayerState, isLocal: boolean) {
    ctx.save();

    // If eliminated, render as a cute friendly floating translucent ghost with a glowing halo!
    if (p.isEliminated) {
      this.renderGhostBear(ctx, p);
      ctx.restore();
      return;
    }

    // Shadow on ground beneath bear
    ctx.fillStyle = 'rgba(0, 0, 0, 0.28)';
    ctx.beginPath();
    ctx.ellipse(p.x + p.width / 2, p.y + p.height - 2, 16, 5, 0, 0, Math.PI * 2);
    ctx.fill();

    // Damage flash (flashes red when hurt)
    const isHurting = p.hurtTimer > 0 && Math.floor(p.hurtTimer * 14) % 2 === 0;

    // Active Power-Up Effects (Shield, Invincible, Hoverboard)
    this.renderActivePowerupAuras(ctx, p);

    // Orientation & Coordinates
    ctx.translate(p.x + p.width / 2, p.y + p.height / 2);
    if (!p.facingRight) {
      ctx.scale(-1, 1);
    }

    // Procedural Animation calculations
    const pal = FUR_COLORS[p.customization.fur] || FUR_COLORS.brown;
    let headOffsetY = 0;
    let bodySquash = 1.0;
    let legOffset = 0;

    if (p.animState === 'running') {
      headOffsetY = Math.sin(p.animTimer * 14) * 2.5;
      legOffset = Math.sin(p.animTimer * 14) * 5;
    } else if (p.animState === 'jump') {
      headOffsetY = -4;
      bodySquash = 1.15;
    } else if (p.animState === 'fall') {
      headOffsetY = 2;
    } else if (p.animState === 'victory') {
      headOffsetY = -Math.abs(Math.sin(p.animTimer * 8)) * 8;
    }

    // 1. Bear Body
    ctx.fillStyle = isHurting ? '#FF3366' : pal.primary;
    ctx.fillRect(-10, -4 + headOffsetY, 20, 20 * bodySquash);

    // 2. Cute chubby tummy
    ctx.fillStyle = isHurting ? '#FFA3B8' : pal.snout;
    ctx.fillRect(-6, 0 + headOffsetY, 12, 14 * bodySquash);

    // 3. Legs & Paws (animated run cycle)
    ctx.fillStyle = isHurting ? '#FF3366' : pal.primary;
    if (p.animState === 'running') {
      ctx.fillRect(-9, 14 + legOffset, 7, 7);
      ctx.fillRect(2, 14 - legOffset, 7, 7);
    } else {
      ctx.fillRect(-9, 14, 7, 7);
      ctx.fillRect(2, 14, 7, 7);
    }

    // 4. Oversized Cute Head
    ctx.fillStyle = isHurting ? '#FF3366' : pal.secondary;
    ctx.fillRect(-14, -26 + headOffsetY, 28, 24);

    // 5. Tiny Round Ears
    ctx.fillStyle = isHurting ? '#FF3366' : pal.primary;
    ctx.fillRect(-16, -30 + headOffsetY, 8, 8);
    ctx.fillRect(8, -30 + headOffsetY, 8, 8);
    // Inner ear blush
    ctx.fillStyle = pal.earInner;
    ctx.fillRect(-14, -28 + headOffsetY, 4, 4);
    ctx.fillRect(10, -28 + headOffsetY, 4, 4);

    // 6. Snout & Cute Nose
    ctx.fillStyle = pal.snout;
    ctx.fillRect(-6, -14 + headOffsetY, 12, 10);
    ctx.fillStyle = '#22150C';
    ctx.fillRect(-3, -13 + headOffsetY, 6, 4); // Tiny nose

    // 7. Expressive Eyes & Emotions based on Lives!
    this.renderBearFacialExpression(ctx, p, headOffsetY, isHurting);

    // 8. Customization: Scarf
    if (p.customization.scarf !== 'none') {
      this.renderScarf(ctx, p.customization.scarf, headOffsetY);
    }

    // 9. Customization: Backpack
    if (p.customization.backpack !== 'none') {
      this.renderBackpack(ctx, p.customization.backpack, headOffsetY);
    }

    // 10. Customization: Hat
    if (p.customization.hat !== 'none') {
      this.renderHat(ctx, p.customization.hat, headOffsetY);
    }

    ctx.restore();

    // 11. Overhead Player Name & Live Rank Badge
    this.renderPlayerOverheadUI(ctx, p, isLocal);
  }

  // Facial expressions: Cheerful (3 lives) -> Worried (2 lives) -> Exhausted (1 life) -> Victory
  private renderBearFacialExpression(
    ctx: CanvasRenderingContext2D,
    p: PlayerState,
    headOffsetY: number,
    isHurting: boolean
  ) {
    if (isHurting) {
      // Hurt blinking X eyes
      ctx.fillStyle = '#FFFFFF';
      ctx.font = 'bold 9px monospace';
      ctx.fillText('x', -8, -16 + headOffsetY);
      ctx.fillText('x', 4, -16 + headOffsetY);
      return;
    }

    if (p.animState === 'victory') {
      // Happy closed curved eyes ^_^
      ctx.fillStyle = '#1D1E2C';
      ctx.fillRect(-8, -16 + headOffsetY, 4, 2);
      ctx.fillRect(-9, -17 + headOffsetY, 2, 2);
      ctx.fillRect(4, -16 + headOffsetY, 4, 2);
      ctx.fillRect(7, -17 + headOffsetY, 2, 2);
      // Open joyful mouth
      ctx.fillStyle = '#FF758F';
      ctx.fillRect(-3, -8 + headOffsetY, 6, 4);
      return;
    }

    if (p.lives === 1) {
      // EXHAUSTED: Heavy droopy eyes, panting mouth with pink tongue out!
      ctx.fillStyle = '#22150C';
      ctx.fillRect(-8, -15 + headOffsetY, 5, 3);
      ctx.fillRect(3, -15 + headOffsetY, 5, 3);
      // Drooping mouth & tongue
      ctx.fillStyle = '#22150C';
      ctx.fillRect(-3, -8 + headOffsetY, 6, 3);
      ctx.fillStyle = '#FF758F';
      ctx.fillRect(-2, -6 + headOffsetY, 4, 5); // Tongue panting!
      // Sweat drop falling from head
      ctx.fillStyle = '#4CC9F0';
      ctx.fillRect(12, -22 + headOffsetY, 3, 5);
      return;
    }

    if (p.lives === 2) {
      // WORRIED: Nervous wide eyes with small sweat drop
      ctx.fillStyle = '#22150C';
      ctx.fillRect(-8, -17 + headOffsetY, 5, 5);
      ctx.fillRect(3, -17 + headOffsetY, 5, 5);
      // Highlights
      ctx.fillStyle = '#FFFFFF';
      ctx.fillRect(-7, -16 + headOffsetY, 2, 2);
      ctx.fillRect(4, -16 + headOffsetY, 2, 2);
      // Small nervous wavy mouth
      ctx.fillStyle = '#22150C';
      ctx.fillRect(-3, -8 + headOffsetY, 6, 2);
      // Small sweat bead
      ctx.fillStyle = '#4CC9F0';
      ctx.fillRect(11, -20 + headOffsetY, 2, 3);
      return;
    }

    // 3 LIVES: HAPPY & FULL OF ENERGY! Shiny anime-style eyes
    ctx.fillStyle = '#1D1E2C';
    ctx.fillRect(-8, -17 + headOffsetY, 5, 6);
    ctx.fillRect(3, -17 + headOffsetY, 5, 6);
    // Sparkle eye reflection
    ctx.fillStyle = '#FFFFFF';
    ctx.fillRect(-7, -16 + headOffsetY, 2, 2);
    ctx.fillRect(4, -16 + headOffsetY, 2, 2);
    // Cute smile
    ctx.fillStyle = '#22150C';
    ctx.fillRect(-3, -8 + headOffsetY, 6, 2);
    // Rosy pink cheek blush
    ctx.fillStyle = 'rgba(255, 117, 143, 0.7)';
    ctx.fillRect(-11, -12 + headOffsetY, 4, 3);
    ctx.fillRect(7, -12 + headOffsetY, 4, 3);
  }

  // Spectator Ghost form when eliminated
  private renderGhostBear(ctx: CanvasRenderingContext2D, p: PlayerState) {
    const floatY = Math.sin(this.worldTime * 4 + p.ghostX) * 6;
    const gx = p.ghostX;
    const gy = p.ghostY + floatY;

    ctx.save();
    ctx.translate(gx + p.width / 2, gy + p.height / 2);

    // Glowing Angelic Halo
    ctx.strokeStyle = '#FFD166';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.ellipse(0, -28, 14, 5, 0, 0, Math.PI * 2);
    ctx.stroke();

    // Translucent Ghost Body
    ctx.fillStyle = 'rgba(235, 240, 255, 0.75)';
    ctx.beginPath();
    ctx.arc(0, -8, 16, Math.PI, 0, false);
    ctx.lineTo(16, 12);
    // Wavy ghost skirt
    ctx.lineTo(8, 6);
    ctx.lineTo(0, 12);
    ctx.lineTo(-8, 6);
    ctx.lineTo(-16, 12);
    ctx.closePath();
    ctx.fill();

    // Cute crying eyes & tears
    ctx.fillStyle = '#4CC9F0';
    ctx.fillRect(-8, -10, 4, 6);
    ctx.fillRect(4, -10, 4, 6);
    ctx.fillStyle = '#2B2D42';
    ctx.fillRect(-6, -12, 3, 3);
    ctx.fillRect(6, -12, 3, 3);

    ctx.restore();

    // Spectating label overhead
    ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
    ctx.font = 'bold 9px "Press Start 2P", monospace';
    ctx.textAlign = 'center';
    ctx.fillText(`${p.name} (👻 Spectating)`, gx + p.width / 2, gy - 20);
  }

  // Cosmetics rendering
  private renderHat(ctx: CanvasRenderingContext2D, hat: string, headOffsetY: number) {
    const hy = -26 + headOffsetY;
    switch (hat) {
      case 'crown':
        ctx.fillStyle = '#FFD166';
        ctx.fillRect(-10, hy - 10, 20, 10);
        // Crown points
        ctx.fillStyle = '#E63946';
        ctx.fillRect(-8, hy - 12, 3, 3);
        ctx.fillRect(-1, hy - 14, 3, 3);
        ctx.fillRect(6, hy - 12, 3, 3);
        break;
      case 'chef':
        ctx.fillStyle = '#FFFFFF';
        ctx.fillRect(-12, hy - 14, 24, 14);
        ctx.fillStyle = '#E9ECEF';
        ctx.fillRect(-10, hy - 18, 20, 6);
        break;
      case 'strawberry':
        ctx.fillStyle = '#FF477E';
        ctx.beginPath();
        ctx.ellipse(0, hy - 6, 12, 8, 0, 0, Math.PI * 2);
        ctx.fill();
        // Green stem
        ctx.fillStyle = '#70E000';
        ctx.fillRect(-2, hy - 14, 4, 5);
        break;
      case 'propeller':
        ctx.fillStyle = '#3A86FF';
        ctx.fillRect(-10, hy - 6, 20, 6);
        // Spinning propeller
        ctx.fillStyle = '#FFBE0B';
        const propW = Math.abs(Math.sin(this.worldTime * 20)) * 14;
        ctx.fillRect(-propW, hy - 10, propW * 2, 3);
        break;
      case 'wizard':
        ctx.fillStyle = '#7209B7';
        ctx.beginPath();
        ctx.moveTo(-12, hy);
        ctx.lineTo(0, hy - 22);
        ctx.lineTo(12, hy);
        ctx.fill();
        // Star on tip
        ctx.fillStyle = '#FFD166';
        ctx.fillRect(-2, hy - 24, 4, 4);
        break;
      case 'flower':
        ctx.fillStyle = '#52B788';
        ctx.fillRect(-12, hy - 4, 24, 3);
        const blossoms = ['#FF758F', '#FFD166', '#4CC9F0'];
        for (let i = 0; i < 3; i++) {
          ctx.fillStyle = blossoms[i];
          ctx.beginPath();
          ctx.arc(-8 + i * 8, hy - 6, 4, 0, Math.PI * 2);
          ctx.fill();
        }
        break;
      default:
        break;
    }
  }

  private renderScarf(ctx: CanvasRenderingContext2D, scarf: string, headOffsetY: number) {
    const sy = -4 + headOffsetY;
    const scarfColors: Record<string, string> = {
      red: '#E63946',
      rainbow: '#FF758F',
      blue: '#4CC9F0',
      emerald: '#52B788',
      gold_bowtie: '#FFD166',
    };
    const col = scarfColors[scarf] || '#E63946';

    if (scarf === 'gold_bowtie') {
      ctx.fillStyle = col;
      ctx.fillRect(-5, sy, 10, 5);
      ctx.fillStyle = '#E09F3E';
      ctx.fillRect(-2, sy, 4, 5);
    } else {
      ctx.fillStyle = col;
      ctx.fillRect(-12, sy, 24, 5);
      // Floating scarf tail behind bear
      const flutter = Math.sin(this.worldTime * 12) * 3;
      ctx.fillRect(-14, sy + 3, 5, 8 + flutter);
    }
  }

  private renderBackpack(ctx: CanvasRenderingContext2D, pack: string, headOffsetY: number) {
    const px = -15;
    const py = 0 + headOffsetY;
    switch (pack) {
      case 'honeypot':
        ctx.fillStyle = '#E07A5F';
        ctx.fillRect(px, py, 6, 12);
        ctx.fillStyle = '#FFD166';
        ctx.fillRect(px - 1, py + 2, 7, 4); // Honey drip
        break;
      case 'rocket':
        ctx.fillStyle = '#E63946';
        ctx.fillRect(px, py, 6, 14);
        // Rocket exhaust flame
        ctx.fillStyle = '#FFBE0B';
        ctx.fillRect(px + 1, py + 14, 4, 4 + Math.random() * 3);
        break;
      default:
        ctx.fillStyle = '#81B29A';
        ctx.fillRect(px, py, 6, 10);
        break;
    }
  }

  private renderActivePowerupAuras(ctx: CanvasRenderingContext2D, p: PlayerState) {
    for (const ap of p.activePowerups) {
      if (ap.type === 'shield') {
        // Cyan shimmering energy sphere
        ctx.strokeStyle = `rgba(76, 201, 240, ${0.7 + Math.sin(this.worldTime * 10) * 0.25})`;
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.arc(p.x + p.width / 2, p.y + p.height / 2, 28, 0, Math.PI * 2);
        ctx.stroke();
      } else if (ap.type === 'invincibility' || ap.type === 'golden_bear') {
        // Rainbow rotating star aura
        const rainbow = ['#FF758F', '#FFD166', '#70E000', '#4CC9F0', '#9D4EDD'];
        ctx.strokeStyle = rainbow[Math.floor(this.worldTime * 10) % rainbow.length];
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.arc(p.x + p.width / 2, p.y + p.height / 2, 30, 0, Math.PI * 2);
        ctx.stroke();
      } else if (ap.type === 'hoverboard') {
        // Futuristic floating hoverboard under feet
        ctx.fillStyle = '#4CC9F0';
        ctx.fillRect(p.x - 4, p.y + p.height - 4, p.width + 8, 5);
        ctx.fillStyle = '#FFFFFF';
        ctx.fillRect(p.x, p.y + p.height - 2, p.width, 2);
      }
    }
  }

  private renderPlayerOverheadUI(
    ctx: CanvasRenderingContext2D,
    p: PlayerState,
    isLocal: boolean
  ) {
    const rx = p.x + p.width / 2;
    const ry = p.y - 14;

    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    // Player name with color distinction
    ctx.font = 'bold 9px "Press Start 2P", monospace';
    ctx.fillStyle = isLocal ? '#FFD166' : '#FFFFFF';
    ctx.strokeStyle = '#000000';
    ctx.lineWidth = 2;
    ctx.strokeText(p.name, rx, ry);
    ctx.fillText(p.name, rx, ry);

    // Hearts indicator above head (❤️ ❤️ ❤️)
    let heartsStr = '';
    for (let h = 0; h < p.lives; h++) heartsStr += '❤️';
    ctx.font = '8px sans-serif';
    ctx.fillText(heartsStr, rx, ry - 11);
  }

  // --- Particles & Floating Texts ---
  private renderParticles(ctx: CanvasRenderingContext2D, ps: ParticleSystem) {
    for (const p of ps.particles) {
      ctx.save();
      ctx.globalAlpha = p.alpha;
      ctx.fillStyle = p.color;
      ctx.translate(p.x, p.y);
      if (p.rotation !== 0) ctx.rotate(p.rotation);

      if (p.shape === 'circle') {
        ctx.beginPath();
        ctx.arc(0, 0, p.size / 2, 0, Math.PI * 2);
        ctx.fill();
      } else if (p.shape === 'star' || p.shape === 'sparkle') {
        ctx.fillRect(-p.size / 2, -1, p.size, 2);
        ctx.fillRect(-1, -p.size / 2, 2, p.size);
      } else if (p.shape === 'heart') {
        ctx.fillText('❤️', 0, 0);
      } else {
        ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
      }
      ctx.restore();
    }

    // Floating score / damage texts
    for (const ft of ps.floatingTexts) {
      ctx.save();
      ctx.globalAlpha = ft.alpha;
      ctx.font = 'bold 11px "Press Start 2P", monospace';
      ctx.fillStyle = ft.color;
      ctx.strokeStyle = '#000000';
      ctx.lineWidth = 2;
      ctx.strokeText(ft.text, ft.x, ft.y);
      ctx.fillText(ft.text, ft.x, ft.y);
      ctx.restore();
    }
  }

  // --- Ambient Butterflies & Drifting Leaves ---
  private renderAmbientFlora(ctx: CanvasRenderingContext2D, cameraX: number) {
    // Drifting leaves
    for (const leaf of this.ambientLeaves) {
      leaf.x += leaf.speedX;
      leaf.y += leaf.speedY;
      if (leaf.x < cameraX - 100) leaf.x = cameraX + this.width + 100;
      if (leaf.y > this.height) leaf.y = -10;

      ctx.fillStyle = leaf.color;
      ctx.fillRect(leaf.x, leaf.y, 4, 3);
    }

    // Fluttering butterflies
    for (const bf of this.butterflies) {
      bf.timer += 0.05;
      const x = bf.baseX + Math.sin(bf.timer) * 40;
      const y = bf.y + Math.cos(bf.timer * 2) * 15;
      const flap = Math.sin(bf.timer * 15) * 4;

      ctx.fillStyle = bf.color;
      ctx.fillRect(x - 4, y - flap, 4, 5);
      ctx.fillRect(x, y - flap, 4, 5);
      ctx.fillStyle = '#222';
      ctx.fillRect(x - 1, y, 2, 4);
    }
  }

  // --- Screen Vignette (Warning when 1 life remains) ---
  private renderScreenVignette(ctx: CanvasRenderingContext2D, localPlayer: PlayerState) {
    if (localPlayer.lives === 1 && !localPlayer.isEliminated) {
      const pulse = (Math.sin(this.worldTime * 6) + 1) * 0.5;
      const grad = ctx.createRadialGradient(
        this.width / 2,
        this.height / 2,
        this.width * 0.35,
        this.width / 2,
        this.height / 2,
        this.width * 0.55
      );
      grad.addColorStop(0, 'rgba(239, 68, 68, 0)');
      grad.addColorStop(1, `rgba(239, 68, 68, ${0.25 + pulse * 0.45})`);
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, this.width, this.height);
    }
  }
}

