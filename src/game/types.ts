// types.ts - Game types, models and configurations for Bear Dash: Pixel Adventure

export type FurColor = 'brown' | 'white' | 'caramel' | 'panda' | 'pink' | 'shadow' | 'golden';

export type HatType = 'none' | 'crown' | 'chef' | 'strawberry' | 'propeller' | 'wizard' | 'viking' | 'flower';

export type ScarfType = 'none' | 'red' | 'rainbow' | 'blue' | 'emerald' | 'gold_bowtie';

export type BackpackType = 'none' | 'honeypot' | 'rocket' | 'leaf' | 'star' | 'mushroom';

export type EmoteType = 'happy' | 'wave' | 'dance' | 'crying' | 'flex' | 'worried' | 'exhausted';

export interface PlayerCustomization {
  name: string;
  fur: FurColor;
  hat: HatType;
  scarf: ScarfType;
  backpack: BackpackType;
}

export type PowerupType =
  | 'magnet'
  | 'speed_boost'
  | 'hoverboard'
  | 'invincibility'
  | 'shield'
  | 'slow_motion'
  | 'super_jump'
  | 'dash'
  | 'extra_life'
  | 'gem_multiplier'
  | 'golden_bear';

export interface ActivePowerup {
  type: PowerupType;
  remainingDuration: number; // in seconds
  maxDuration: number;
}

export type ObstacleType =
  | 'rolling_log'
  | 'spinning_blade'
  | 'moving_spikes'
  | 'fireball'
  | 'swinging_hammer'
  | 'falling_rock'
  | 'collapsing_bridge'
  | 'exploding_barrel'
  | 'poison_plant'
  | 'laser_beam'
  | 'rotating_windmill'
  | 'bouncing_mushroom'
  | 'jumping_frog'
  | 'angry_bee'
  | 'ice_patch'
  | 'water_current'
  | 'moving_platform'
  | 'disappearing_block'
  | 'spike_pit'
  | 'cannonball';

export type BiomeType = 'forest' | 'river' | 'cave' | 'mountain' | 'castle' | 'cloud';

export interface BiomeSegment {
  startX: number;
  endX: number;
  type: BiomeType;
  name: string;
  skyTopColor: string;
  skyBottomColor: string;
  groundColor: string;
  groundGrassColor: string;
  accentColor: string;
}

export type GemType = 'blue' | 'green' | 'pink' | 'purple' | 'yellow' | 'diamond';

export interface Gem {
  id: string;
  x: number;
  y: number;
  type: GemType;
  value: number;
  collected: boolean;
  collectedBy?: string;
  flyProgress?: number; // 0 to 1 for flying to HUD animation
  flyStartX?: number;
  flyStartY?: number;
}

export interface MysteryBox {
  id: string;
  x: number;
  y: number;
  opened: boolean;
  openedBy?: string;
  burstAnim: number; // 0 to 1
  revealedPowerup?: PowerupType;
}

export interface Obstacle {
  id: string;
  type: ObstacleType;
  x: number;
  y: number;
  width: number;
  height: number;
  vx?: number;
  vy?: number;
  minX?: number;
  maxX?: number;
  minY?: number;
  maxY?: number;
  angle?: number;
  rotSpeed?: number;
  timer?: number;
  state?: number | string;
  isTriggered?: boolean;
  fallDelay?: number;
  isSolid?: boolean;
  hazard?: boolean;
  bounceMultiplier?: number;
}

export interface Platform {
  id: string;
  x: number;
  y: number;
  width: number;
  height: number;
  type?: 'ground' | 'floating' | 'collapsing' | 'ice' | 'bouncy' | 'water';
  vx?: number;
  minX?: number;
  maxX?: number;
  collapseTimer?: number;
  isCollapsed?: boolean;
}

export type AnimationState =
  | 'idle'
  | 'running'
  | 'jump'
  | 'fall'
  | 'hurt'
  | 'worried'
  | 'exhausted'
  | 'eliminated'
  | 'victory';

export interface PlayerState {
  id: string;
  name: string;
  isBot: boolean;
  isLocal: boolean;
  x: number;
  y: number;
  vx: number;
  vy: number;
  width: number;
  height: number;
  lives: number; // starts at 3
  score: number;
  gemsCollected: number;
  powerupsUsed: number;
  bonusScore: number;
  isGrounded: boolean;
  canDoubleJump: boolean;
  facingRight: boolean;
  animState: AnimationState;
  animTimer: number;
  hurtTimer: number; // invulnerability frames on damage
  isEliminated: boolean;
  isWinner: boolean;
  finishTime: number | null;
  finishRank: number | null;
  activePowerups: ActivePowerup[];
  customization: PlayerCustomization;
  spectatingIndex: number; // for eliminated players
  ghostX: number;
  ghostY: number;
  emote?: EmoteType;
  emoteTimer?: number;
}

export interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  alpha: number;
  life: number;
  maxLife: number;
  shape: 'circle' | 'square' | 'sparkle' | 'leaf' | 'star' | 'heart' | 'tear';
  rotation: number;
  rotSpeed: number;
}

export interface FloatingText {
  id: string;
  x: number;
  y: number;
  text: string;
  color: string;
  alpha: number;
  life: number;
  maxLife: number;
  vy: number;
}

export interface LevelData {
  finishX: number;
  biomes: BiomeSegment[];
  platforms: Platform[];
  obstacles: Obstacle[];
  gems: Gem[];
  mysteryBoxes: MysteryBox[];
}

export interface RaceResult {
  playerId: string;
  playerName: string;
  isLocal: boolean;
  rank: number;
  timeFormatted: string;
  timeMs: number;
  livesRemaining: number;
  gemsCount: number;
  powerupsUsed: number;
  totalScore: number;
  customization: PlayerCustomization;
}

