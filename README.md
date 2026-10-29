# 🐻 Bear Dash: Pixel Adventure

A multiplayer browser-based survival racing game crafted in modern HD pixel art aesthetics, inspired by **Subway Surfers**, **Mario**, **Crossy Road**, **Fall Guys**, and **Celeste**.

---

## 🌟 Highlights & Features

- **Multiplayer Survival Racing (2–8 Players)**: Real-time WebSocket matchmaking, private room creation with room codes (e.g. `BEAR-7788`), or practice mode against smart, adorable AI baby bears (Bramble, Honey, Waffles, Peanut, Barnaby, Pip, Mochi).
- **3-Heart Survival Rule**:
  - Starts with 3 lives: ❤️ ❤️ ❤️
  - Colliding with hazardous obstacles deducts 1 life with red flash, damage squeak, screen shake, and heart-breaking animation.
  - At 2 lives (❤️ ❤️): Bear looks worried with sweat drops.
  - At 1 life (❤️): Bear looks exhausted, panting mouth with tongue out, heartbeat sound starts softly, and screen edges pulse red.
  - At 0 lives (💔): **"BABY BEAR ELIMINATED"** banner with crying animation, poofing into a friendly floating angel ghost with halo and spectator controls.
- **Win Condition**: Only racers who cross the finish line with at least one life remaining win! The fastest surviving baby bear claims the 1st place championship trophy 🏆.
- **6 Handcrafted Adventure Biomes**:
  1. **Enchanted Forest**: Mossy platforms, rolling wooden logs, bouncy mushrooms, cute bushes, jumping frogs, angry bee swarms.
  2. **Whispering River Bridges**: Collapsing rope bridges, waterfalls, rapid water currents, swinging pendulum hammers, spinning blades.
  3. **Luminescent Crystal Caves**: Moving spikes, high-tech pulsing laser beams, falling stalactite rocks, disappearing crystal blocks, spike pits.
  4. **Frosty Sunset Peaks**: Slippery ice sheets with lower friction, rolling boulders, rotating windmills, high-speed cannonballs.
  5. **Molten Castle**: Flaming fireballs leaping from lava pits, exploding red barrels, moving elevator platforms.
  6. **Celestial Rainbow Clouds**: Bouncy cloud pads, golden diamond showers, cheering spectator baby bears waving flags, grand golden arch with flashing lights, red carpet, and victory confetti cannons!
- **11 Boosters & Collectibles**:
  - 🧲 **Gem Magnet**: Automatically pulls nearby gems in a wide radius.
  - ⚡ **Speed Boost**: Run twice as fast with a fiery trail.
  - 🛹 **Hoverboard**: Glide over hazards and absorb 1 obstacle hit.
  - ⭐ **Invincibility**: Rainbow aura, smash through all obstacles safely!
  - 🛡️ **Energy Shield**: Absorbs the next obstacle hit.
  - ⏱️ **Slow Motion**: Slows down spinning blades, logs, and hazards while you run at full speed.
  - 🦘 **Super Jump**: Leap sky-high above obstacles.
  - 🌀 **Quick Dash**: Instant forward warp burst through hazards.
  - ❤️ **Extra Life**: Restores 1 lost heart immediately.
  - 💎 **Gem Multiplier**: Doubles all collected gem points.
  - 🏆 **Golden Bear Mode**: Hyper combo of speed + magnet + golden shine!
- **Complete Baby Bear Customization (Wardrobe)**:
  - **Fur Colors**: Honey Bear, Polar Bear, Caramel Chew, Panda Cub, Berry Blush, Midnight Cub, Golden Bear.
  - **Hats & Helmets**: Royal Crown, Chef Toque, Strawberry Beret, Propeller Beanie, Starry Wizard, Viking Horns, Rainbow Blossom Crown.
  - **Scarves**: Crimson Wool, Rainbow Ribbon, Royal Silk, Emerald Forest, Gentlebear Bowtie.
  - **Backpacks**: Fresh Honey Pot, Tiny Jetpack, Sprout Satchel, Star Bag, Shroom Pack.
- **Web Audio API Procedural Sound Engine**:
  - 100% self-contained chiptune adventure music that dynamically accelerates near the finish line!
  - Full SFX suite: jumps, dashes, gem sparkles with combo streak pitch rise, damage squeaks, heart break, low health heartbeat, shield crack, victory fanfare, and ambient sounds.
- **Responsive Controls**:
  - **Desktop**: `A` / `D` or Arrow Keys to Run, `Space` / `W` / `Up` to Jump & Double Jump, `Shift` to Dash, `Esc` to Pause.
  - **Mobile / Tablet**: On-screen touch D-pad, Jump, and Dash buttons with haptic feedback vibration.
  - **Gamepad**: Full Gamepad API integration.

---

## 🚀 Quick Start

### 1. Build Client Bundle
```bash
.\run-node.cmd build.js
```

### 2. Start Game Server
```bash
.\run-node.cmd src/server/server.js
```

### 3. Play the Game
Open your browser and navigate to:
```
http://localhost:3000
```

---

## 🏗️ Architecture & Codebase Structure

```
├── public/
│   ├── index.html        # HTML5 Shell with Google Fonts ('Press Start 2P', 'Fredoka', 'Silkscreen')
│   ├── styles.css        # Pixel styling, CRT scanlines, vignettes, custom buttons
│   └── bundle.js         # Compiled high-performance client bundle (React 18 + TS)
├── src/
│   ├── audio/
│   │   └── SoundEngine.ts      # Procedural Web Audio API sound generator & chiptune dynamic music
│   ├── game/
│   │   ├── types.ts            # Type definitions for biomes, obstacles, players, powerups
│   │   ├── constants.ts        # Physics config, color palettes, cosmetics catalog
│   │   ├── LevelGenerator.ts   # Multi-biome generator across 13,200px map
│   │   ├── PixelRenderer.ts    # Crisp modern HD pixel renderer & animations
│   │   ├── ParticleSystem.ts   # Dust puffs, sparkles, leaves, confetti, heart break
│   │   ├── BotManager.ts       # AI baby bears with intelligent jumping & racing
│   │   ├── InputManager.ts     # Keyboard, Gamepad, and Mobile touch input
│   │   └── GameEngine.ts       # Central gameplay, physics, collision & scoring loop
│   ├── network/
│   │   └── NetworkClient.ts    # WebSocket multiplayer client with room codes & lag compensation
│   ├── components/
│   │   ├── Header.tsx          # Top navigation, sound toggle, profile badge
│   │   ├── LandingHero.tsx     # Hero banner, play now, enter room code modal
│   │   ├── FeaturesSection.tsx # 6 core gameplay feature cards
│   │   ├── PowerupsGuide.tsx   # Catalog of all 11 power-ups
│   │   ├── LeaderboardView.tsx # Global rankings & podium winners
│   │   ├── CharacterSelect.tsx # Wardrobe & baby bear customizer
│   │   ├── LobbyView.tsx       # Multiplayer lobby, room codes, host bot selector
│   │   ├── GameCanvas.tsx      # Main game view with HUD, mobile controls, pause menu
│   │   ├── VictoryModal.tsx    # Winner podium, statistics breakdown, play again
│   │   ├── ProfileModal.tsx    # Player profile, stats, daily honey reward wheel
│   │   ├── AchievementsModal.tsx# 8+ unlockable trophies and rewards
│   │   ├── SettingsModal.tsx   # Volume sliders, graphics, scanlines, colorblind modes
│   │   └── Footer.tsx          # FAQ accordion and credits
│   ├── server/
│   │   └── server.js           # Static HTTP server & WebSocket multiplayer room server
│   ├── App.tsx                 # Root React application
│   └── index.tsx               # DOM root mount
├── build.js                    # esbuild bundler configuration
└── run-node.cmd                # Workspace Node.js execution wrapper
```

---

## 🎨 Art & Visual Design

- **Golden Hour Ambiance**: Peach, orange, pink, purple, sky blue, and warm yellow hues.
- **Living Environment**:
  - Parallax mountains and rolling hills
  - Fluffy pixel clouds moving at stepped speeds
  - Flocks of birds with animated wing flaps
  - Waterfalls with animated foam spray
  - Fluttering butterflies and drifting leaves
  - Cheering baby bear spectators along the finish stretch
- **Expressive Baby Bears**:
  - Smiling at 3 lives
  - Worried with sweat drops at 2 lives
  - Heavy panting with pink tongue out at 1 life
  - Translucent angel ghost with glowing halo at 0 lives
  - Joyful victory dance with paws in the air on crossing the finish line!

---

Enjoy playing **Bear Dash: Pixel Adventure**! 🐻🏁

