// InputManager.ts - Unified Input System for Desktop (Keyboard/Mouse), Mobile (Touch Joystick) and Gamepad

export interface InputState {
  left: boolean;
  right: boolean;
  up: boolean;
  down: boolean;
  jump: boolean;
  dash: boolean;
  usePowerup: boolean;
  pause: boolean;
}

export class InputManager {
  public state: InputState = {
    left: false,
    right: false,
    up: false,
    down: false,
    jump: false,
    dash: false,
    usePowerup: false,
    pause: false,
  };

  private prevJump: boolean = false;
  private prevDash: boolean = false;
  private prevPause: boolean = false;
  private prevUsePowerup: boolean = false;

  public jumpJustPressed: boolean = false;
  public dashJustPressed: boolean = false;
  public pauseJustPressed: boolean = false;
  public usePowerupJustPressed: boolean = false;

  private activeKeys: Set<string> = new Set();
  private touchInputs: Partial<InputState> = {};

  constructor() {
    this.setupKeyboardListeners();
  }

  private setupKeyboardListeners() {
    window.addEventListener('keydown', (e) => {
      // Prevent scrolling on Space and Arrow keys during gameplay
      if (['Space', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.code)) {
        e.preventDefault();
      }
      this.activeKeys.add(e.code.toLowerCase());
      this.activeKeys.add(e.key.toLowerCase());
    });

    window.addEventListener('keyup', (e) => {
      this.activeKeys.delete(e.code.toLowerCase());
      this.activeKeys.delete(e.key.toLowerCase());
    });

    // Reset keys if window loses focus
    window.addEventListener('blur', () => {
      this.activeKeys.clear();
      this.touchInputs = {};
    });
  }

  public setTouchInput(key: keyof InputState, active: boolean) {
    this.touchInputs[key] = active;
  }

  public update() {
    // Poll Gamepad if connected
    this.pollGamepad();

    const keys = this.activeKeys;
    const touches = this.touchInputs;

    const left =
      keys.has('arrowleft') ||
      keys.has('keya') ||
      keys.has('a') ||
      !!touches.left;

    const right =
      keys.has('arrowright') ||
      keys.has('keyd') ||
      keys.has('d') ||
      !!touches.right;

    const up =
      keys.has('arrowup') ||
      keys.has('keyw') ||
      keys.has('w') ||
      !!touches.up;

    const down =
      keys.has('arrowdown') ||
      keys.has('keys') ||
      keys.has('s') ||
      !!touches.down;

    const jump =
      keys.has('space') ||
      keys.has(' ') ||
      keys.has('arrowup') ||
      keys.has('keyw') ||
      keys.has('w') ||
      !!touches.jump;

    const dash =
      keys.has('shiftleft') ||
      keys.has('shiftright') ||
      keys.has('shift') ||
      keys.has('keyj') ||
      !!touches.dash;

    const usePowerup =
      keys.has('keye') ||
      keys.has('e') ||
      keys.has('keyk') ||
      !!touches.usePowerup;

    const pause =
      keys.has('escape') ||
      keys.has('keyp') ||
      keys.has('p') ||
      !!touches.pause;

    this.state = { left, right, up, down, jump, dash, usePowerup, pause };

    // Edge triggers (just pressed)
    this.jumpJustPressed = jump && !this.prevJump;
    this.dashJustPressed = dash && !this.prevDash;
    this.pauseJustPressed = pause && !this.prevPause;
    this.usePowerupJustPressed = usePowerup && !this.prevUsePowerup;

    this.prevJump = jump;
    this.prevDash = dash;
    this.prevPause = pause;
    this.prevUsePowerup = usePowerup;
  }

  private pollGamepad() {
    if (typeof navigator === 'undefined' || !navigator.getGamepads) return;
    const gamepads = navigator.getGamepads();
    if (!gamepads) return;

    for (const gp of gamepads) {
      if (!gp) continue;

      // Stick / Dpad
      const stickX = gp.axes[0] || 0;
      if (stickX < -0.3 || (gp.buttons[14] && gp.buttons[14].pressed)) {
        this.activeKeys.add('arrowleft');
      }
      if (stickX > 0.3 || (gp.buttons[15] && gp.buttons[15].pressed)) {
        this.activeKeys.add('arrowright');
      }

      // Buttons: A (0) = Jump, X (2) = Dash, B (1) = Powerup, Start (9) = Pause
      if (gp.buttons[0] && gp.buttons[0].pressed) this.activeKeys.add('space');
      if (gp.buttons[2] && gp.buttons[2].pressed) this.activeKeys.add('shiftleft');
      if (gp.buttons[1] && gp.buttons[1].pressed) this.activeKeys.add('keye');
      if (gp.buttons[9] && gp.buttons[9].pressed) this.activeKeys.add('escape');
    }
  }
}

