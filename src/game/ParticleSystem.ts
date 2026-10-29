// ParticleSystem.ts - High-performance pixel particle effects for Bear Dash

import { Particle, FloatingText } from './types';

export class ParticleSystem {
  public particles: Particle[] = [];
  public floatingTexts: FloatingText[] = [];

  public update(dt: number) {
    // Update particles
    for (let i = this.particles.length - 1; i >= 0; i--) {
      const p = this.particles[i];
      p.x += p.vx;
      p.y += p.vy;
      p.rotation += p.rotSpeed;
      p.life -= dt;
      p.alpha = Math.max(0, p.life / p.maxLife);

      if (p.life <= 0) {
        this.particles.splice(i, 1);
      }
    }

    // Update floating texts
    for (let i = this.floatingTexts.length - 1; i >= 0; i--) {
      const ft = this.floatingTexts[i];
      ft.y += ft.vy;
      ft.life -= dt;
      ft.alpha = Math.max(0, ft.life / ft.maxLife);

      if (ft.life <= 0) {
        this.floatingTexts.splice(i, 1);
      }
    }
  }

  // Dust puff emitted when bear is running on the ground
  public emitRunDust(x: number, y: number, facingRight: boolean) {
    const count = 2;
    for (let i = 0; i < count; i++) {
      this.particles.push({
        x: x + (facingRight ? -6 : 6) + (Math.random() * 6 - 3),
        y: y + Math.random() * 4 - 2,
        vx: (facingRight ? -1 : 1) * (0.8 + Math.random() * 1.2),
        vy: -0.4 - Math.random() * 0.8,
        size: 3 + Math.floor(Math.random() * 3),
        color: '#E8D5B5',
        alpha: 0.8,
        life: 0.35 + Math.random() * 0.15,
        maxLife: 0.45,
        shape: 'square',
        rotation: 0,
        rotSpeed: 0,
      });
    }
  }

  // Jump burst cloud
  public emitJumpDust(x: number, y: number) {
    for (let i = 0; i < 6; i++) {
      const angle = (Math.PI / 6) + (i / 5) * (Math.PI * 2 / 3);
      const speed = 1.2 + Math.random() * 1.8;
      this.particles.push({
        x: x + (Math.random() * 16 - 8),
        y: y,
        vx: Math.cos(angle) * speed,
        vy: -Math.sin(angle) * speed * 0.5,
        size: 4 + Math.floor(Math.random() * 3),
        color: '#F4ECE1',
        alpha: 0.9,
        life: 0.4,
        maxLife: 0.4,
        shape: 'circle',
        rotation: 0,
        rotSpeed: 0,
      });
    }
  }

  // Gem sparkle explosion + floating score text
  public emitGemCollect(x: number, y: number, color: string, value: number) {
    // Add floating score text
    this.floatingTexts.push({
      id: `ft_${Date.now()}_${Math.random()}`,
      x: x - 10,
      y: y - 10,
      text: `+${value}`,
      color: color,
      alpha: 1.0,
      life: 0.85,
      maxLife: 0.85,
      vy: -1.2,
    });

    // Sparkles
    for (let i = 0; i < 8; i++) {
      const angle = (i / 8) * Math.PI * 2 + Math.random() * 0.2;
      const speed = 1.5 + Math.random() * 2.2;
      this.particles.push({
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        size: 3 + Math.floor(Math.random() * 3),
        color: color,
        alpha: 1.0,
        life: 0.45 + Math.random() * 0.2,
        maxLife: 0.65,
        shape: 'sparkle',
        rotation: Math.random() * Math.PI,
        rotSpeed: 0.1,
      });
    }
  }

  // Heart break animation on taking damage
  public emitHeartBreak(x: number, y: number) {
    this.floatingTexts.push({
      id: `ft_dmg_${Date.now()}`,
      x: x - 18,
      y: y - 20,
      text: '-1 ❤️',
      color: '#FF3366',
      alpha: 1.0,
      life: 1.0,
      maxLife: 1.0,
      vy: -1.0,
    });

    for (let i = 0; i < 12; i++) {
      const angle = (i / 12) * Math.PI * 2;
      const speed = 2.0 + Math.random() * 2.5;
      this.particles.push({
        x,
        y: y - 10,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 1.2,
        size: 4 + Math.floor(Math.random() * 3),
        color: i % 2 === 0 ? '#FF2A6D' : '#FF6584',
        alpha: 1.0,
        life: 0.65,
        maxLife: 0.65,
        shape: 'heart',
        rotation: Math.random() * Math.PI,
        rotSpeed: 0.15,
      });
    }
  }

  // Mystery Box burst fanfare particles
  public emitMysteryBurst(x: number, y: number) {
    const rainbow = ['#FF758F', '#FFB085', '#FFD166', '#70E000', '#4CC9F0', '#9D4EDD'];
    for (let i = 0; i < 24; i++) {
      const angle = (i / 24) * Math.PI * 2;
      const speed = 2.5 + Math.random() * 3.5;
      this.particles.push({
        x: x + 16,
        y: y + 16,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 1.5,
        size: 5 + Math.floor(Math.random() * 4),
        color: rainbow[i % rainbow.length],
        alpha: 1.0,
        life: 0.8 + Math.random() * 0.3,
        maxLife: 1.1,
        shape: 'star',
        rotation: Math.random() * Math.PI,
        rotSpeed: 0.2,
      });
    }
  }

  // Elimination poof cloud & weeping tears
  public emitElimination(x: number, y: number) {
    for (let i = 0; i < 20; i++) {
      const angle = (i / 20) * Math.PI * 2;
      const speed = 1.0 + Math.random() * 2.5;
      this.particles.push({
        x: x + 18,
        y: y + 20,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 1.0,
        size: 6 + Math.floor(Math.random() * 5),
        color: '#D8D8E8',
        alpha: 0.85,
        life: 1.1,
        maxLife: 1.1,
        shape: 'circle',
        rotation: 0,
        rotSpeed: 0,
      });
    }

    // Cute falling tears
    for (let i = 0; i < 8; i++) {
      this.particles.push({
        x: x + 10 + (i % 2 === 0 ? 4 : 14),
        y: y + 16,
        vx: (Math.random() * 0.6 - 0.3),
        vy: 1.5 + Math.random() * 1.5,
        size: 4,
        color: '#4CC9F0',
        alpha: 0.9,
        life: 0.8,
        maxLife: 0.8,
        shape: 'tear',
        rotation: 0,
        rotSpeed: 0,
      });
    }
  }

  // Victory Confetti celebration cannons
  public emitVictoryConfetti(x: number, y: number) {
    const rainbow = ['#FFD166', '#FF758F', '#4CC9F0', '#70E000', '#FF7B54', '#9D4EDD', '#FFFFFF'];
    for (let i = 0; i < 50; i++) {
      const angle = -Math.PI / 2 + (Math.random() * 1.6 - 0.8);
      const speed = 4.0 + Math.random() * 6.5;
      this.particles.push({
        x: x + Math.random() * 40 - 20,
        y: y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        size: 4 + Math.floor(Math.random() * 4),
        color: rainbow[Math.floor(Math.random() * rainbow.length)],
        alpha: 1.0,
        life: 1.8 + Math.random() * 0.8,
        maxLife: 2.6,
        shape: Math.random() < 0.5 ? 'square' : 'star',
        rotation: Math.random() * Math.PI,
        rotSpeed: 0.25 * (Math.random() < 0.5 ? 1 : -1),
      });
    }
  }

  // Speed boost / Dash rainbow trail
  public emitSpeedTrail(x: number, y: number, facingRight: boolean) {
    const trailColors = ['#FFD166', '#FF758F', '#4CC9F0', '#70E000'];
    const color = trailColors[Math.floor(Math.random() * trailColors.length)];
    this.particles.push({
      x: x + (facingRight ? -4 : 4),
      y: y + 12 + Math.random() * 16,
      vx: (facingRight ? -2.5 : 2.5),
      vy: Math.random() * 0.8 - 0.4,
      size: 4 + Math.floor(Math.random() * 3),
      color: color,
      alpha: 0.75,
      life: 0.28,
      maxLife: 0.28,
      shape: 'square',
      rotation: 0,
      rotSpeed: 0,
    });
  }

  public clear() {
    this.particles = [];
    this.floatingTexts = [];
  }
}

