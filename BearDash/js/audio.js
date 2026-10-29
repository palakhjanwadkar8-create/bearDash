// audio.js - Web Audio API Procedural Sound Effects & Chiptune Music Engine
// Recreates the upbeat Nintendo / Mario / Kirby adventure feel with zero external dependencies.

class AudioEngine {
  constructor() {
    this.ctx = null;
    this.masterGain = null;
    this.bgmGain = null;
    this.sfxGain = null;

    this.settings = {
      master: 0.7,
      bgm: 0.5,
      sfx: 0.7,
      muted: false,
    };

    this.isBgmPlaying = false;
    this.bgmTimer = null;
    this.step = 0;
    this.tempo = 138;
    this.tempoMult = 1.0;
    this.heartbeatTimer = null;
    this.gemStreak = 0;
    this.lastGemTime = 0;
  }

  init() {
    if (this.ctx) {
      if (this.ctx.state === 'suspended') this.ctx.resume();
      return;
    }

    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioCtx();

      this.masterGain = this.ctx.createGain();
      this.bgmGain = this.ctx.createGain();
      this.sfxGain = this.ctx.createGain();

      this.bgmGain.connect(this.masterGain);
      this.sfxGain.connect(this.masterGain);
      this.masterGain.connect(this.ctx.destination);

      this.applyVolume();
    } catch (e) {
      console.warn('Web Audio not supported:', e);
    }
  }

  applyVolume() {
    if (!this.masterGain || !this.ctx) return;
    const now = this.ctx.currentTime;
    this.masterGain.gain.setValueAtTime(this.settings.muted ? 0 : this.settings.master, now);
    this.bgmGain.gain.setValueAtTime(this.settings.bgm, now);
    this.sfxGain.gain.setValueAtTime(this.settings.sfx, now);
  }

  setMuted(muted) {
    this.settings.muted = muted;
    this.applyVolume();
  }

  // --- Sound Effects ---

  playJump() {
    this.init();
    if (!this.ctx || this.settings.muted) return;
    const now = this.ctx.currentTime;

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(160, now);
    osc.frequency.exponentialRampToValueAtTime(540, now + 0.16);

    gain.gain.setValueAtTime(0.4, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.18);

    osc.connect(gain);
    gain.connect(this.sfxGain);
    osc.start(now);
    osc.stop(now + 0.19);
  }

  playSuperJump() {
    this.init();
    if (!this.ctx || this.settings.muted) return;
    const now = this.ctx.currentTime;

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(240, now);
    osc.frequency.exponentialRampToValueAtTime(880, now + 0.25);

    gain.gain.setValueAtTime(0.5, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.28);

    osc.connect(gain);
    gain.connect(this.sfxGain);
    osc.start(now);
    osc.stop(now + 0.29);
  }

  playDash() {
    this.init();
    if (!this.ctx || this.settings.muted) return;
    const now = this.ctx.currentTime;

    const bufferSize = this.ctx.sampleRate * 0.18;
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const output = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) output[i] = Math.random() * 2 - 1;

    const noise = this.ctx.createBufferSource();
    noise.buffer = buffer;
    const filter = this.ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(800, now);
    filter.frequency.exponentialRampToValueAtTime(3200, now + 0.18);

    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(0.4, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.18);

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(this.sfxGain);
    noise.start(now);
  }

  playGem() {
    this.init();
    if (!this.ctx || this.settings.muted) return;
    const now = this.ctx.currentTime;

    if (Date.now() - this.lastGemTime < 600) {
      this.gemStreak = Math.min(this.gemStreak + 1, 7);
    } else {
      this.gemStreak = 0;
    }
    this.lastGemTime = Date.now();

    const baseFreqs = [523.25, 659.25, 783.99, 1046.5, 1318.51, 1567.98, 2093.0];
    const f = baseFreqs[this.gemStreak % baseFreqs.length];

    [f, f * 1.5].forEach((freq, idx) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now + idx * 0.04);
      gain.gain.setValueAtTime(0.35, now + idx * 0.04);
      gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.04 + 0.18);

      osc.connect(gain);
      gain.connect(this.sfxGain);
      osc.start(now + idx * 0.04);
      osc.stop(now + idx * 0.04 + 0.2);
    });
  }

  playMysteryBox() {
    this.init();
    if (!this.ctx || this.settings.muted) return;
    const now = this.ctx.currentTime;

    const notes = [440, 554.37, 659.25, 880, 1108.73];
    notes.forEach((freq, i) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, now + i * 0.06);
      gain.gain.setValueAtTime(0.3, now + i * 0.06);
      gain.gain.exponentialRampToValueAtTime(0.01, now + i * 0.06 + 0.22);
      osc.connect(gain);
      gain.connect(this.sfxGain);
      osc.start(now + i * 0.06);
      osc.stop(now + i * 0.06 + 0.23);
    });
  }

  playDamage() {
    this.init();
    if (!this.ctx || this.settings.muted) return;
    const now = this.ctx.currentTime;

    // Cute baby bear squeak
    const squeak = this.ctx.createOscillator();
    const squeakGain = this.ctx.createGain();
    squeak.type = 'sine';
    squeak.frequency.setValueAtTime(900, now);
    squeak.frequency.exponentialRampToValueAtTime(320, now + 0.22);
    squeakGain.gain.setValueAtTime(0.5, now);
    squeakGain.gain.exponentialRampToValueAtTime(0.01, now + 0.22);
    squeak.connect(squeakGain);
    squeakGain.connect(this.sfxGain);
    squeak.start(now);
    squeak.stop(now + 0.23);

    // Impact thud
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

    if (navigator.vibrate) navigator.vibrate([70, 40, 90]);
  }

  playHeartBreak() {
    this.init();
    if (!this.ctx || this.settings.muted) return;
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(550, now);
    osc.frequency.exponentialRampToValueAtTime(100, now + 0.35);
    gain.gain.setValueAtTime(0.35, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);
    osc.connect(gain);
    gain.connect(this.sfxGain);
    osc.start(now);
    osc.stop(now + 0.36);
  }

  playShieldBreak() {
    this.init();
    if (!this.ctx || this.settings.muted) return;
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'square';
    osc.frequency.setValueAtTime(300, now);
    osc.frequency.exponentialRampToValueAtTime(80, now + 0.2);
    gain.gain.setValueAtTime(0.4, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.2);
    osc.connect(gain);
    gain.connect(this.sfxGain);
    osc.start(now);
    osc.stop(now + 0.22);
  }

  startHeartbeat() {
    if (this.heartbeatTimer) return;
    this.init();
    this.heartbeatTimer = setInterval(() => {
      if (!this.ctx || this.settings.muted) return;
      const now = this.ctx.currentTime;
      const osc1 = this.ctx.createOscillator();
      const gain1 = this.ctx.createGain();
      osc1.type = 'sine';
      osc1.frequency.setValueAtTime(75, now);
      osc1.frequency.exponentialRampToValueAtTime(45, now + 0.1);
      gain1.gain.setValueAtTime(0.35, now);
      gain1.gain.exponentialRampToValueAtTime(0.01, now + 0.12);
      osc1.connect(gain1);
      gain1.connect(this.sfxGain);
      osc1.start(now);
      osc1.stop(now + 0.13);

      const osc2 = this.ctx.createOscillator();
      const gain2 = this.ctx.createGain();
      osc2.type = 'sine';
      osc2.frequency.setValueAtTime(85, now + 0.18);
      osc2.frequency.exponentialRampToValueAtTime(50, now + 0.28);
      gain2.gain.setValueAtTime(0.4, now + 0.18);
      gain2.gain.exponentialRampToValueAtTime(0.01, now + 0.3);
      osc2.connect(gain2);
      gain2.connect(this.sfxGain);
      osc2.start(now + 0.18);
      osc2.stop(now + 0.31);
    }, 850);
  }

  stopHeartbeat() {
    if (this.heartbeatTimer) {
      clearInterval(this.heartbeatTimer);
      this.heartbeatTimer = null;
    }
  }

  playElimination() {
    this.stopHeartbeat();
    this.init();
    if (!this.ctx || this.settings.muted) return;
    const now = this.ctx.currentTime;
    const notes = [350, 330, 311, 290];
    notes.forEach((freq, i) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(freq, now + i * 0.18);
      gain.gain.setValueAtTime(0.4, now + i * 0.18);
      gain.gain.exponentialRampToValueAtTime(0.01, now + i * 0.18 + 0.19);
      osc.connect(gain);
      gain.connect(this.sfxGain);
      osc.start(now + i * 0.18);
      osc.stop(now + i * 0.18 + 0.2);
    });
  }

  playVictory() {
    this.stopHeartbeat();
    this.init();
    if (!this.ctx || this.settings.muted) return;
    const now = this.ctx.currentTime;
    const fanfare = [
      { f: 523.25, d: 0.12 },
      { f: 659.25, d: 0.12 },
      { f: 783.99, d: 0.12 },
      { f: 1046.5, d: 0.28 },
      { f: 880.0,  d: 0.14 },
      { f: 1046.5, d: 0.4 },
    ];
    let t = now;
    fanfare.forEach((n) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(n.f, t);
      gain.gain.setValueAtTime(0.45, t);
      gain.gain.exponentialRampToValueAtTime(0.01, t + n.d);
      osc.connect(gain);
      gain.connect(this.sfxGain);
      osc.start(t);
      osc.stop(t + n.d + 0.05);
      t += n.d + 0.03;
    });
  }

  // --- Dynamic Chiptune Music Engine ---

  startBGM() {
    if (this.isBgmPlaying) return;
    this.init();
    this.isBgmPlaying = true;
    this.step = 0;
    this.scheduleNextBeat();
  }

  stopBGM() {
    this.isBgmPlaying = false;
    if (this.bgmTimer) {
      clearTimeout(this.bgmTimer);
      this.bgmTimer = null;
    }
  }

  setDynamicTempo(multiplier) {
    this.tempoMult = Math.max(0.8, Math.min(1.4, multiplier));
  }

  scheduleNextBeat() {
    if (!this.isBgmPlaying) return;

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

    const s = this.step % melody.length;
    const now = this.ctx ? this.ctx.currentTime : 0;

    if (this.ctx && !this.settings.muted) {
      if (melody[s] > 0) {
        const osc = this.ctx.createOscillator();
        const g = this.ctx.createGain();
        osc.type = 'square';
        osc.frequency.setValueAtTime(melody[s], now);
        g.gain.setValueAtTime(0.08, now);
        g.gain.exponentialRampToValueAtTime(0.001, now + 0.14);
        osc.connect(g);
        g.connect(this.bgmGain);
        osc.start(now);
        osc.stop(now + 0.15);
      }
      if (bass[s] > 0) {
        const bOsc = this.ctx.createOscillator();
        const bGain = this.ctx.createGain();
        bOsc.type = 'triangle';
        bOsc.frequency.setValueAtTime(bass[s], now);
        bGain.gain.setValueAtTime(0.18, now);
        bGain.gain.exponentialRampToValueAtTime(0.01, now + 0.16);
        bOsc.connect(bGain);
        bGain.connect(this.bgmGain);
        bOsc.start(now);
        bOsc.stop(now + 0.17);
      }
      if (s % 8 === 4) {
        // Snare pop
        const buf = this.ctx.createBuffer(1, Math.floor(this.ctx.sampleRate * 0.05), this.ctx.sampleRate);
        const data = buf.getChannelData(0);
        for (let i = 0; i < data.length; i++) data[i] = (Math.random() * 2 - 1) * 0.28;
        const noise = this.ctx.createBufferSource();
        noise.buffer = buf;
        const nGain = this.ctx.createGain();
        nGain.gain.setValueAtTime(0.12, now);
        nGain.gain.exponentialRampToValueAtTime(0.005, now + 0.05);
        noise.connect(nGain);
        nGain.connect(this.bgmGain);
        noise.start(now);
      }
    }

    this.step++;
    const stepDurationMs = ((60 / this.tempo) / 4) * 1000 / this.tempoMult;
    this.bgmTimer = setTimeout(() => this.scheduleNextBeat(), stepDurationMs);
  }
}

window.soundEngine = new AudioEngine();
