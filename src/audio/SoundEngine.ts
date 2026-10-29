// SoundEngine.ts - High Quality Procedural Web Audio API Sound & Chiptune Music Engine
// Recreates the joyful, energetic feel of Nintendo classics (Mario, Kirby, Animal Crossing)

export interface AudioSettings {
  masterVolume: number;
  bgmVolume: number;
  sfxVolume: number;
  muted: boolean;
}

class SoundEngine {
  private ctx: AudioContext | null = null;
  private masterGain: GainNode | null = null;
  private bgmGain: GainNode | null = null;
  private sfxGain: GainNode | null = null;

  private settings: AudioSettings = {
    masterVolume: 0.7,
    bgmVolume: 0.55,
    sfxVolume: 0.75,
    muted: false,
  };

  private isBgmPlaying: boolean = false;
  private bgmTimer: number | null = null;
  private currentStep: number = 0;
  private tempo: number = 136; // Fast upbeat adventure tempo
  private tempoMultiplier: number = 1.0; // Speeds up near finish!
  private heartbeatNode: OscillatorNode | null = null;
  private heartbeatGain: GainNode | null = null;
  private heartbeatInterval: number | null = null;
  private gemStreak: number = 0;
  private lastGemTime: number = 0;

  constructor() {
    // Lazy initialized on first user interaction to comply with browser autoplay policies
  }

  public init() {
    if (this.ctx) {
      if (this.ctx.state === 'suspended') {
        this.ctx.resume();
      }
      return;
    }

    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();

      this.masterGain = this.ctx.createGain();
      this.bgmGain = this.ctx.createGain();
      this.sfxGain = this.ctx.createGain();

      this.bgmGain.connect(this.masterGain);
      this.sfxGain.connect(this.masterGain);
      this.masterGain.connect(this.ctx.destination);

      this.applySettings();
    } catch (e) {
      console.warn('Web Audio not supported or blocked:', e);
    }
  }

  public updateSettings(newSettings: Partial<AudioSettings>) {
    this.settings = { ...this.settings, ...newSettings };
    this.applySettings();
  }

  public getSettings(): AudioSettings {
    return { ...this.settings };
  }

  private applySettings() {
    if (!this.masterGain || !this.bgmGain || !this.sfxGain) return;
    const now = this.ctx ? this.ctx.currentTime : 0;
    const isMuted = this.settings.muted;

    this.masterGain.gain.setValueAtTime(isMuted ? 0 : this.settings.masterVolume, now);
    this.bgmGain.gain.setValueAtTime(this.settings.bgmVolume, now);
    this.sfxGain.gain.setValueAtTime(this.settings.sfxVolume, now);
  }

  // --- Sound Effects (Synthesized with precise retro waveforms) ---

  // Jump - Cheerful Spring Boing
  public playJump() {
    this.init();
    if (!this.ctx || !this.sfxGain || this.settings.muted) return;
    const now = this.ctx.currentTime;

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(150, now);
    osc.frequency.exponentialRampToValueAtTime(520, now + 0.16);

    gain.gain.setValueAtTime(0.4, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.18);

    osc.connect(gain);
    gain.connect(this.sfxGain);

    osc.start(now);
    osc.stop(now + 0.19);
  }

  // Super Jump - High energetic boing
  public playSuperJump() {
    this.init();
    if (!this.ctx || !this.sfxGain || this.settings.muted) return;
    const now = this.ctx.currentTime;

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(220, now);
    osc.frequency.exponentialRampToValueAtTime(880, now + 0.25);

    gain.gain.setValueAtTime(0.5, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.28);

    osc.connect(gain);
    gain.connect(this.sfxGain);

    osc.start(now);
    osc.stop(now + 0.29);
  }

  // Dash - Air Whoosh
  public playDash() {
    this.init();
    if (!this.ctx || !this.sfxGain || this.settings.muted) return;
    const now = this.ctx.currentTime;

    const bufferSize = this.ctx.sampleRate * 0.18;
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const output = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      output[i] = Math.random() * 2 - 1;
    }

    const whiteNoise = this.ctx.createBufferSource();
    whiteNoise.buffer = buffer;

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(800, now);
    filter.frequency.exponentialRampToValueAtTime(3200, now + 0.18);
    filter.Q.value = 3;

    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(0.45, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.18);

    whiteNoise.connect(filter);
    filter.connect(gain);
    gain.connect(this.sfxGain);

    whiteNoise.start(now);
  }

  // Gem Collection - Sparkly Chime with pitch ascension for combo streaks!
  public playGemCollect() {
    this.init();
    if (!this.ctx || !this.sfxGain || this.settings.muted) return;
    const now = this.ctx.currentTime;

    if (Date.now() - this.lastGemTime < 600) {
      this.gemStreak = Math.min(this.gemStreak + 1, 8);
    } else {
      this.gemStreak = 0;
    }
    this.lastGemTime = Date.now();

    const baseFreqs = [523.25, 659.25, 783.99, 1046.5, 1318.51, 1567.98, 2093.0]; // C5 E5 G5 C6 E6 G6 C7
    const rootIndex = this.gemStreak % baseFreqs.length;
    const f1 = baseFreqs[rootIndex];
    const f2 = f1 * 1.5;

    [f1, f2].forEach((freq, idx) => {
      const osc = this.ctx!.createOscillator();
      const gain = this.ctx!.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now + idx * 0.05);

      gain.gain.setValueAtTime(0.35, now + idx * 0.05);
      gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.05 + 0.18);

      osc.connect(gain);
      gain.connect(this.sfxGain!);

      osc.start(now + idx * 0.05);
      osc.stop(now + idx * 0.05 + 0.2);
    });
  }

  // Mystery Box Open - Triumphant Fanfare Sparkle
  public playMysteryBox() {
    this.init();
    if (!this.ctx || !this.sfxGain || this.settings.muted) return;
    const now = this.ctx.currentTime;

    const notes = [440, 554.37, 659.25, 880, 1108.73]; // A4, C#5, E5, A5, C#6
    notes.forEach((freq, i) => {
      const osc = this.ctx!.createOscillator();
      const gain = this.ctx!.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, now + i * 0.07);

      gain.gain.setValueAtTime(0.3, now + i * 0.07);
      gain.gain.exponentialRampToValueAtTime(0.01, now + i * 0.07 + 0.25);

      osc.connect(gain);
      gain.connect(this.sfxGain!);

      osc.start(now + i * 0.07);
      osc.stop(now + i * 0.07 + 0.26);
    });
  }

  // Obstacle Hit / Damage - Funny Baby Bear Squeak + Low Thud
  public playDamage() {
    this.init();
    if (!this.ctx || !this.sfxGain || this.settings.muted) return;
    const now = this.ctx.currentTime;

    // High cute squeak
    const squeak = this.ctx.createOscillator();
    const squeakGain = this.ctx.createGain();
    squeak.type = 'sine';
    squeak.frequency.setValueAtTime(900, now);
    squeak.frequency.exponentialRampToValueAtTime(350, now + 0.22);
    squeakGain.gain.setValueAtTime(0.55, now);
    squeakGain.gain.exponentialRampToValueAtTime(0.01, now + 0.22);
    squeak.connect(squeakGain);
    squeakGain.connect(this.sfxGain);
    squeak.start(now);
    squeak.stop(now + 0.23);

    // Low crunch impact
    const thud = this.ctx.createOscillator();
    const thudGain = this.ctx.createGain();
    thud.type = 'triangle';
    thud.frequency.setValueAtTime(140, now);
    thud.frequency.exponentialRampToValueAtTime(40, now + 0.25);
    thudGain.gain.setValueAtTime(0.6, now);
    thudGain.gain.exponentialRampToValueAtTime(0.01, now + 0.25);
    thud.connect(thudGain);
    thudGain.connect(this.sfxGain);
    thud.start(now);
    thud.stop(now + 0.26);

    // Vibration on supported mobile devices
    if (typeof navigator !== 'undefined' && 'vibrate' in navigator) {
      navigator.vibrate([70, 40, 90]);
    }
  }

  // Heart Break Ping
  public playHeartBreak() {
    this.init();
    if (!this.ctx || !this.sfxGain || this.settings.muted) return;
    const now = this.ctx.currentTime;

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(600, now);
    osc.frequency.exponentialRampToValueAtTime(120, now + 0.35);

    gain.gain.setValueAtTime(0.35, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);

    osc.connect(gain);
    gain.connect(this.sfxGain);
    osc.start(now);
    osc.stop(now + 0.36);
  }

  // Powerup Pickup / Activation
  public playPowerup() {
    this.init();
    if (!this.ctx || !this.sfxGain || this.settings.muted) return;
    const now = this.ctx.currentTime;

    const notes = [329.63, 440, 554.37, 659.25, 880];
    notes.forEach((n, i) => {
      const osc = this.ctx!.createOscillator();
      const gain = this.ctx!.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(n, now + i * 0.05);
      gain.gain.setValueAtTime(0.28, now + i * 0.05);
      gain.gain.exponentialRampToValueAtTime(0.01, now + i * 0.05 + 0.16);
      osc.connect(gain);
      gain.connect(this.sfxGain!);
      osc.start(now + i * 0.05);
      osc.stop(now + i * 0.05 + 0.18);
    });
  }

  // Shield Break
  public playShieldBreak() {
    this.init();
    if (!this.ctx || !this.sfxGain || this.settings.muted) return;
    const now = this.ctx.currentTime;

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'square';
    osc.frequency.setValueAtTime(320, now);
    osc.frequency.exponentialRampToValueAtTime(100, now + 0.2);

    gain.gain.setValueAtTime(0.4, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.2);

    osc.connect(gain);
    gain.connect(this.sfxGain);
    osc.start(now);
    osc.stop(now + 0.22);
  }

  // Heartbeat Loop (starts softly when lives === 1)
  public startHeartbeat() {
    if (this.heartbeatInterval) return;
    this.init();

    this.heartbeatInterval = window.setInterval(() => {
      if (!this.ctx || !this.sfxGain || this.settings.muted) return;
      const now = this.ctx.currentTime;

      // First beat (lub)
      const osc1 = this.ctx.createOscillator();
      const gain1 = this.ctx.createGain();
      osc1.type = 'sine';
      osc1.frequency.setValueAtTime(75, now);
      osc1.frequency.exponentialRampToValueAtTime(45, now + 0.1);
      gain1.gain.setValueAtTime(0.3, now);
      gain1.gain.exponentialRampToValueAtTime(0.01, now + 0.12);
      osc1.connect(gain1);
      gain1.connect(this.sfxGain);
      osc1.start(now);
      osc1.stop(now + 0.13);

      // Second beat (dub)
      const osc2 = this.ctx.createOscillator();
      const gain2 = this.ctx.createGain();
      osc2.type = 'sine';
      osc2.frequency.setValueAtTime(85, now + 0.18);
      osc2.frequency.exponentialRampToValueAtTime(50, now + 0.28);
      gain2.gain.setValueAtTime(0.38, now + 0.18);
      gain2.gain.exponentialRampToValueAtTime(0.01, now + 0.3);
      osc2.connect(gain2);
      gain2.connect(this.sfxGain);
      osc2.start(now + 0.18);
      osc2.stop(now + 0.31);
    }, 850);
  }

  public stopHeartbeat() {
    if (this.heartbeatInterval) {
      clearInterval(this.heartbeatInterval);
      this.heartbeatInterval = null;
    }
  }

  // Elimination Wah-Wah
  public playElimination() {
    this.stopHeartbeat();
    this.init();
    if (!this.ctx || !this.sfxGain || this.settings.muted) return;
    const now = this.ctx.currentTime;

    const notes = [350, 330, 311, 290];
    notes.forEach((freq, i) => {
      const osc = this.ctx!.createOscillator();
      const gain = this.ctx!.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(freq, now + i * 0.18);
      gain.gain.setValueAtTime(0.4, now + i * 0.18);
      gain.gain.exponentialRampToValueAtTime(0.01, now + i * 0.18 + 0.19);
      osc.connect(gain);
      gain.connect(this.sfxGain!);
      osc.start(now + i * 0.18);
      osc.stop(now + i * 0.18 + 0.2);
    });
  }

  // Victory Fanfare
  public playVictory() {
    this.stopHeartbeat();
    this.init();
    if (!this.ctx || !this.sfxGain || this.settings.muted) return;
    const now = this.ctx.currentTime;

    const fanfare = [
      { f: 523.25, d: 0.12 }, // C5
      { f: 659.25, d: 0.12 }, // E5
      { f: 783.99, d: 0.12 }, // G5
      { f: 1046.5, d: 0.28 }, // C6
      { f: 880.0,  d: 0.14 }, // A5
      { f: 1046.5, d: 0.4 },  // C6
    ];

    let t = now;
    fanfare.forEach((n) => {
      const osc = this.ctx!.createOscillator();
      const gain = this.ctx!.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(n.f, t);
      gain.gain.setValueAtTime(0.45, t);
      gain.gain.exponentialRampToValueAtTime(0.01, t + n.d);
      osc.connect(gain);
      gain.connect(this.sfxGain!);
      osc.start(t);
      osc.stop(t + n.d + 0.05);
      t += n.d + 0.03;
    });
  }

  // --- Dynamic Chiptune Background Music Engine ---
  // Catchy, joyful 16-bar loop inspired by Mario & Kirby adventure themes

  public startBGM() {
    if (this.isBgmPlaying) return;
    this.init();
    this.isBgmPlaying = true;
    this.currentStep = 0;
    this.scheduleNextBgmBeat();
  }

  public stopBGM() {
    this.isBgmPlaying = false;
    if (this.bgmTimer) {
      clearTimeout(this.bgmTimer);
      this.bgmTimer = null;
    }
  }

  public setDynamicTempo(multiplier: number) {
    // 1.0 = normal, 1.25 = exciting near finish!
    this.tempoMultiplier = Math.max(0.8, Math.min(1.4, multiplier));
  }

  private scheduleNextBgmBeat() {
    if (!this.isBgmPlaying) return;

    // Melody: Upbeat Adventure theme in C Major / Pentatonic
    // (C4=261.63, D4=293.66, E4=329.63, G4=392.00, A4=440.00, C5=523.25, D5=587.33, E5=659.25, G5=783.99)
    const melody = [
      523.25, 0, 659.25, 783.99,  0, 659.25, 523.25, 0,
      587.33, 0, 659.25, 587.33,  523.25, 0, 440.00, 0,
      392.00, 0, 523.25, 659.25,  783.99, 0, 880.00, 783.99,
      659.25, 523.25, 587.33, 0,  523.25, 0, 0, 0,
    ];

    const bass = [
      130.81, 0, 130.81, 0, 164.81, 0, 196.00, 0,
      146.83, 0, 146.83, 0, 196.00, 0, 130.81, 0,
      174.61, 0, 174.61, 0, 196.00, 0, 196.00, 0,
      130.81, 0, 196.00, 0, 130.81, 0, 0, 0,
    ];

    const step = this.currentStep % melody.length;
    const now = this.ctx ? this.ctx.currentTime : 0;

    if (this.ctx && this.bgmGain && !this.settings.muted) {
      // Melody note
      const mNote = melody[step];
      if (mNote > 0) {
        const mOsc = this.ctx.createOscillator();
        const mGain = this.ctx.createGain();
        mOsc.type = 'square';
        mOsc.frequency.setValueAtTime(mNote, now);
        mGain.gain.setValueAtTime(0.08, now);
        mGain.gain.exponentialRampToValueAtTime(0.001, now + 0.14);
        mOsc.connect(mGain);
        mGain.connect(this.bgmGain);
        mOsc.start(now);
        mOsc.stop(now + 0.15);
      }

      // Bass note
      const bNote = bass[step];
      if (bNote > 0) {
        const bOsc = this.ctx.createOscillator();
        const bGain = this.ctx.createGain();
        bOsc.type = 'triangle';
        bOsc.frequency.setValueAtTime(bNote, now);
        bGain.gain.setValueAtTime(0.18, now);
        bGain.gain.exponentialRampToValueAtTime(0.01, now + 0.16);
        bOsc.connect(bGain);
        bGain.connect(this.bgmGain);
        bOsc.start(now);
        bOsc.stop(now + 0.17);
      }

      // Percussion: Snare on beats 4 & 12, Hi-hat on even steps
      if (step % 8 === 4) {
        // Snare pop
        const bufferSize = Math.floor(this.ctx.sampleRate * 0.05);
        const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
        const out = buffer.getChannelData(0);
        for (let i = 0; i < bufferSize; i++) out[i] = (Math.random() * 2 - 1) * 0.3;
        const noise = this.ctx.createBufferSource();
        noise.buffer = buffer;
        const nGain = this.ctx.createGain();
        nGain.gain.setValueAtTime(0.12, now);
        nGain.gain.exponentialRampToValueAtTime(0.005, now + 0.05);
        noise.connect(nGain);
        nGain.connect(this.bgmGain);
        noise.start(now);
      } else if (step % 2 === 0) {
        // Soft hi-hat tick
        const hOsc = this.ctx.createOscillator();
        const hGain = this.ctx.createGain();
        hOsc.type = 'sine';
        hOsc.frequency.setValueAtTime(6000, now);
        hGain.gain.setValueAtTime(0.04, now);
        hGain.gain.exponentialRampToValueAtTime(0.001, now + 0.03);
        hOsc.connect(hGain);
        hGain.connect(this.bgmGain);
        hOsc.start(now);
        hOsc.stop(now + 0.035);
      }
    }

    this.currentStep++;
    const stepDurationMs = ((60 / this.tempo) / 4) * 1000 / this.tempoMultiplier;
    this.bgmTimer = window.setTimeout(() => this.scheduleNextBgmBeat(), stepDurationMs);
  }
}

export const soundEngine = new SoundEngine();

