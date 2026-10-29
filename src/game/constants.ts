// constants.ts - Game physics, palettes, cosmetics and catalog definitions

export const GAME_CONSTANTS = {
  CANVAS_WIDTH: 960,
  CANVAS_HEIGHT: 540,
  WORLD_GRAVITY: 0.58,
  MAX_FALL_SPEED: 14,
  BASE_RUN_SPEED: 4.8,
  BASE_JUMP_FORCE: -11.5,
  SUPER_JUMP_FORCE: -16.5,
  DASH_IMPULSE: 12.0,
  DASH_COOLDOWN: 1.2,
  BOUNCE_PAD_FORCE: -17.0,
  PLAYER_WIDTH: 36,
  PLAYER_HEIGHT: 44,
  FINISH_X: 13200, // Total adventure map length in pixels
  HURT_INVULNERABLE_TIME: 1.6, // seconds of damage invincibility
  MAX_LIVES: 3,
};

export const COLOR_PALETTES = {
  peach: '#FFB085',
  orange: '#FF7B54',
  pink: '#FF758F',
  purple: '#9D4EDD',
  blue: '#4CC9F0',
  softGreen: '#70E000',
  warmYellow: '#FFD166',
  darkBg: '#1B1425',
};

export const FUR_COLORS: Record<string, { name: string; primary: string; secondary: string; snout: string; earInner: string }> = {
  brown: {
    name: 'Honey Bear',
    primary: '#B86227',
    secondary: '#D97736',
    snout: '#FFE3C4',
    earInner: '#FFC899',
  },
  white: {
    name: 'Polar Bear',
    primary: '#D6E2E9',
    secondary: '#FFFFFF',
    snout: '#EFF6F9',
    earInner: '#FFD6DE',
  },
  caramel: {
    name: 'Caramel Chew',
    primary: '#9C5821',
    secondary: '#C97A34',
    snout: '#FDE4C3',
    earInner: '#FABD7A',
  },
  panda: {
    name: 'Panda Cub',
    primary: '#2B2D42',
    secondary: '#F8F9FA',
    snout: '#FFFFFF',
    earInner: '#1E1F29',
  },
  pink: {
    name: 'Berry Blush',
    primary: '#D94F70',
    secondary: '#FF758F',
    snout: '#FFE0E6',
    earInner: '#FFB3C1',
  },
  shadow: {
    name: 'Midnight Cub',
    primary: '#3A2E59',
    secondary: '#5C4B82',
    snout: '#C4B5E8',
    earInner: '#8068A8',
  },
  golden: {
    name: 'Golden Bear',
    primary: '#D49B00',
    secondary: '#FFD166',
    snout: '#FFF3B0',
    earInner: '#FFE66D',
  },
};

export const HATS_CATALOG: Record<string, { name: string; icon: string; description: string }> = {
  none: { name: 'Bare Ears', icon: '🐻', description: 'Cute natural baby bear ears' },
  crown: { name: 'Royal Crown', icon: '👑', description: 'Gleaming golden crown with jewels' },
  chef: { name: 'Chef Toque', icon: '👨‍🍳', description: 'Fluffy white pastry chef hat' },
  strawberry: { name: 'Berry Cap', icon: '🍓', description: 'Delicious sweet strawberry beret' },
  propeller: { name: 'Propeller Beanie', icon: '🚁', description: 'Spins merrily in the wind' },
  wizard: { name: 'Starry Wizard', icon: '🧙‍♂️', description: 'Pointy magical wizard hat' },
  viking: { name: 'Viking Horns', icon: '⚔️', description: 'Brave miniature horned helm' },
  flower: { name: 'Rainbow Crown', icon: '🌸', description: 'Woven blossoms from the magical forest' },
};

export const SCARVES_CATALOG: Record<string, { name: string; color: string; description: string }> = {
  none: { name: 'No Scarf', color: 'transparent', description: 'Clean cozy look' },
  red: { name: 'Crimson Wool', color: '#E63946', description: 'Warm hand-knitted red scarf' },
  rainbow: { name: 'Rainbow Ribbon', color: '#FF758F', description: 'Shimmers with all forest colors' },
  blue: { name: 'Royal Silk', color: '#4CC9F0', description: 'Soft flowing sky blue scarf' },
  emerald: { name: 'Emerald Forest', color: '#52B788', description: 'Infused with enchanted forest leaves' },
  gold_bowtie: { name: 'Gentlebear Bowtie', color: '#FFD166', description: 'Dapper golden bowtie' },
};

export const BACKPACKS_CATALOG: Record<string, { name: string; icon: string; description: string }> = {
  none: { name: 'No Backpack', icon: '🎒', description: 'Travel light and free' },
  honeypot: { name: 'Honey Pot', icon: '🍯', description: 'Fresh golden wild honey jar' },
  rocket: { name: 'Tiny Jetpack', icon: '🚀', description: 'Cute twin booster rockets' },
  leaf: { name: 'Sprout Satchel', icon: '🌱', description: 'Made from giant forest leaves' },
  star: { name: 'Star Bag', icon: '⭐', description: 'Stores twinkling starlight' },
  mushroom: { name: 'Shroom Pack', icon: '🍄', description: 'Spotted mushroom cap pack' },
};

export const POWERUPS_CONFIG: Record<
  string,
  { name: string; icon: string; duration: number; description: string; color: string }
> = {
  magnet: {
    name: 'Gem Magnet',
    icon: '🧲',
    duration: 8.0,
    description: 'Automatically attracts all nearby gems!',
    color: '#FF758F',
  },
  speed_boost: {
    name: 'Speed Boost',
    icon: '⚡',
    duration: 6.0,
    description: 'Run twice as fast with a fiery trail!',
    color: '#FFD166',
  },
  hoverboard: {
    name: 'Hoverboard',
    icon: '🛹',
    duration: 10.0,
    description: 'Glide gracefully and absorb 1 obstacle hit!',
    color: '#4CC9F0',
  },
  invincibility: {
    name: 'Invincibility',
    icon: '⭐',
    duration: 7.0,
    description: 'Rainbow aura! Ignore all obstacles and hazards!',
    color: '#FFBE0B',
  },
  shield: {
    name: 'Energy Shield',
    icon: '🛡️',
    duration: 15.0,
    description: 'Absorbs the next obstacle collision.',
    color: '#70E000',
  },
  slow_motion: {
    name: 'Slow Motion',
    icon: '⏱️',
    duration: 6.5,
    description: 'Slows down spinning blades, logs and traps!',
    color: '#9D4EDD',
  },
  super_jump: {
    name: 'Super Jump',
    icon: '🦘',
    duration: 8.0,
    description: 'Leap soaring high above obstacles!',
    color: '#FB5607',
  },
  dash: {
    name: 'Quick Dash',
    icon: '🌀',
    duration: 0.4,
    description: 'Instant forward invulnerable warp burst!',
    color: '#3A86FF',
  },
  extra_life: {
    name: 'Extra Life',
    icon: '❤️',
    duration: 0,
    description: 'Restores one lost heart immediately!',
    color: '#E63946',
  },
  gem_multiplier: {
    name: 'Gem Multiplier',
    icon: '💎',
    duration: 10.0,
    description: 'Doubles all collected gem points!',
    color: '#06D6A0',
  },
  golden_bear: {
    name: 'Golden Bear Mode',
    icon: '🏆',
    duration: 9.0,
    description: 'Supreme combo: Super speed + magnet + golden shine!',
    color: '#FFD700',
  },
};

export const ACHIEVEMENTS_LIST = [
  { id: 'first_race', name: 'First Steps', icon: '🐾', description: 'Complete your first Bear Dash race', reward: 100 },
  { id: 'gem_hoarder', name: 'Gem Hoarder', icon: '💎', description: 'Collect 100 total gems across races', reward: 250 },
  { id: 'speed_demon', name: 'Speed Demon', icon: '⚡', description: 'Reach the finish line in under 75 seconds', reward: 400 },
  { id: 'flawless', name: 'Flawless Fur', icon: '💖', description: 'Finish a race with all 3 hearts intact', reward: 500 },
  { id: 'daredevil', name: 'Daredevil', icon: '🛹', description: 'Survive with only 1 heart remaining', reward: 300 },
  { id: 'power_hungry', name: 'Power Packed', icon: '⭐', description: 'Use 5 or more power-ups in a single race', reward: 200 },
  { id: 'podium_champ', name: 'Grand Champion', icon: '🏆', description: 'Take 1st place in a multiplayer race', reward: 600 },
  { id: 'fashion_bear', name: 'Dressed to Impress', icon: '👑', description: 'Equip a custom hat, scarf and backpack', reward: 150 },
];

