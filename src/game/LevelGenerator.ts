// LevelGenerator.ts - Procedural and handcrafted multi-biome adventure map generator

import { BiomeSegment, Gem, LevelData, MysteryBox, Obstacle, Platform } from './types';
import { GAME_CONSTANTS } from './constants';

export class LevelGenerator {
  public static generateLevel(): LevelData {
    const finishX = GAME_CONSTANTS.FINISH_X;

    // Define 6 distinct adventure biomes with vibrant Golden Hour / Sunset & Sunrise transitions
    const biomes: BiomeSegment[] = [
      {
        startX: 0,
        endX: 2300,
        type: 'forest',
        name: 'Enchanted Peach Forest',
        skyTopColor: '#FF7B54',
        skyBottomColor: '#FFB085',
        groundColor: '#4A2810',
        groundGrassColor: '#70E000',
        accentColor: '#FF758F',
      },
      {
        startX: 2300,
        endX: 4500,
        type: 'river',
        name: 'Whispering River Bridges',
        skyTopColor: '#FF758F',
        skyBottomColor: '#FFB085',
        groundColor: '#362419',
        groundGrassColor: '#52B788',
        accentColor: '#4CC9F0',
      },
      {
        startX: 4500,
        endX: 6800,
        type: 'cave',
        name: 'Luminescent Crystal Caves',
        skyTopColor: '#3A1C52',
        skyBottomColor: '#6B2D8C',
        groundColor: '#201633',
        groundGrassColor: '#9D4EDD',
        accentColor: '#E0AAFF',
      },
      {
        startX: 6800,
        endX: 9000,
        type: 'mountain',
        name: 'Frosty Sunset Peaks',
        skyTopColor: '#7B2CBF',
        skyBottomColor: '#C77DFF',
        groundColor: '#3E4254',
        groundGrassColor: '#D8F3DC',
        accentColor: '#A0C4FF',
      },
      {
        startX: 9000,
        endX: 11200,
        type: 'castle',
        name: 'Molten Castle Ramparts',
        skyTopColor: '#590D22',
        skyBottomColor: '#A4133C',
        groundColor: '#2B1116',
        groundGrassColor: '#FF4D6D',
        accentColor: '#FFB703',
      },
      {
        startX: 11200,
        endX: finishX + 800,
        type: 'cloud',
        name: 'Celestial Rainbow Clouds',
        skyTopColor: '#FF9E00',
        skyBottomColor: '#FFD166',
        groundColor: '#7209B7',
        groundGrassColor: '#F72585',
        accentColor: '#4CC9F0',
      },
    ];

    const platforms: Platform[] = [];
    const obstacles: Obstacle[] = [];
    const gems: Gem[] = [];
    const mysteryBoxes: MysteryBox[] = [];

    const groundY = 440;
    let currX = 0;
    let gemId = 0;
    let boxId = 0;
    let obsId = 0;

    // Helper: Add continuous ground platforms with occasional pits/elevations
    while (currX < finishX + 600) {
      const isPit = currX > 600 && currX < finishX - 500 && Math.random() < 0.22;
      const groundSegmentWidth = 350 + Math.floor(Math.random() * 450);

      if (isPit) {
        // Pit gap: add floating platform or collapsing bridge
        const gapSize = 130 + Math.floor(Math.random() * 110);
        const bridgeX = currX + 20;

        // In river/bridge biome: place collapsing bridge planks!
        if (currX >= 2300 && currX < 4500) {
          const plankCount = 4;
          const plankW = (gapSize - 20) / plankCount;
          for (let p = 0; p < plankCount; p++) {
            platforms.push({
              id: `plat_bridge_${currX}_${p}`,
              x: bridgeX + p * (plankW + 4),
              y: groundY + 10,
              width: plankW,
              height: 18,
              type: 'collapsing',
              collapseTimer: 0.65,
            });
          }
        } else {
          // Normal floating platform over pit
          platforms.push({
            id: `plat_float_${currX}`,
            x: bridgeX + 20,
            y: groundY - 50 - Math.floor(Math.random() * 40),
            width: gapSize - 40,
            height: 24,
            type: currX >= 6800 && currX < 9000 ? 'ice' : 'floating',
          });
        }

        // Add gems over the gap in an arc!
        for (let g = 0; g < 4; g++) {
          gems.push({
            id: `gem_${gemId++}`,
            x: bridgeX + g * (gapSize / 4) + 15,
            y: groundY - 60 - Math.sin((g / 3) * Math.PI) * 45,
            type: g === 2 ? 'purple' : 'blue',
            value: g === 2 ? 50 : 10,
            collected: false,
          });
        }

        currX += gapSize;
      }

      // Solid ground slab
      platforms.push({
        id: `plat_ground_${currX}`,
        x: currX,
        y: groundY,
        width: groundSegmentWidth,
        height: 140,
        type: currX >= 6800 && currX < 9000 ? 'ice' : 'ground',
      });

      // Biome-specific elevated structures and platforms
      if (Math.random() < 0.6) {
        const elevatedY = groundY - 90 - Math.floor(Math.random() * 60);
        const elevatedW = 120 + Math.floor(Math.random() * 140);
        const elevatedX = currX + 60;

        platforms.push({
          id: `plat_high_${elevatedX}`,
          x: elevatedX,
          y: elevatedY,
          width: elevatedW,
          height: 22,
          type: 'floating',
        });

        // Gems on elevated platforms
        for (let g = 0; g < 3; g++) {
          gems.push({
            id: `gem_${gemId++}`,
            x: elevatedX + 25 + g * 35,
            y: elevatedY - 30,
            type: Math.random() < 0.3 ? 'yellow' : 'pink',
            value: 30,
            collected: false,
          });
        }

        // Mystery box placement on elevated platforms
        if (Math.random() < 0.45 && elevatedX > 500 && elevatedX < finishX - 300) {
          mysteryBoxes.push({
            id: `mbox_${boxId++}`,
            x: elevatedX + elevatedW / 2 - 16,
            y: elevatedY - 34,
            opened: false,
            burstAnim: 0,
          });
        }
      }

      // Ground gems
      const gemCount = 2 + Math.floor(Math.random() * 3);
      for (let g = 0; g < gemCount; g++) {
        const gx = currX + 50 + g * 55;
        if (gx < currX + groundSegmentWidth - 40) {
          const gemTypeRandom = Math.random();
          const gType = gemTypeRandom > 0.85 ? 'yellow' : gemTypeRandom > 0.6 ? 'green' : 'blue';
          gems.push({
            id: `gem_${gemId++}`,
            x: gx,
            y: groundY - 26,
            type: gType,
            value: gType === 'yellow' ? 75 : gType === 'green' ? 20 : 10,
            collected: false,
          });
        }
      }

      currX += groundSegmentWidth;
    }

    // Now populate biomes with rich, animated obstacles!
    // Biome 1: Forest (Rolling logs, bouncing mushrooms, jumping frogs, angry bees)
    for (let x = 400; x < 2200; x += 220 + Math.floor(Math.random() * 150)) {
      const r = Math.random();
      if (r < 0.25) {
        // Bouncing mushroom
        obstacles.push({
          id: `obs_${obsId++}`,
          type: 'bouncing_mushroom',
          x,
          y: groundY - 32,
          width: 40,
          height: 32,
          bounceMultiplier: 1.45,
          hazard: false,
        });
      } else if (r < 0.5) {
        // Rolling log
        obstacles.push({
          id: `obs_${obsId++}`,
          type: 'rolling_log',
          x,
          y: groundY - 28,
          width: 32,
          height: 28,
          vx: -1.8,
          minX: x - 180,
          maxX: x + 180,
          angle: 0,
          rotSpeed: 0.12,
          hazard: true,
        });
      } else if (r < 0.75) {
        // Angry bee swarm moving vertically in sine wave
        obstacles.push({
          id: `obs_${obsId++}`,
          type: 'angry_bee',
          x,
          y: groundY - 80,
          width: 28,
          height: 28,
          minY: groundY - 120,
          maxY: groundY - 40,
          vy: 1.5,
          timer: Math.random() * 10,
          hazard: true,
        });
      } else {
        // Jumping frog
        obstacles.push({
          id: `obs_${obsId++}`,
          type: 'jumping_frog',
          x,
          y: groundY - 24,
          width: 30,
          height: 24,
          timer: 0,
          hazard: true,
        });
      }
    }

    // Biome 2: River & Bridges (Swinging hammers, spinning blades, water currents)
    for (let x = 2400; x < 4400; x += 240 + Math.floor(Math.random() * 160)) {
      const r = Math.random();
      if (r < 0.35) {
        // Swinging hammer pendulum
        obstacles.push({
          id: `obs_${obsId++}`,
          type: 'swinging_hammer',
          x,
          y: groundY - 140,
          width: 38,
          height: 120,
          angle: 0,
          timer: Math.random() * 5,
          hazard: true,
        });
      } else if (r < 0.7) {
        // Spinning circular blade moving back and forth
        obstacles.push({
          id: `obs_${obsId++}`,
          type: 'spinning_blade',
          x,
          y: groundY - 36,
          width: 36,
          height: 36,
          vx: 2.0,
          minX: x - 120,
          maxX: x + 120,
          angle: 0,
          rotSpeed: 0.22,
          hazard: true,
        });
      } else {
        // Water current hazard pushing bear backward
        obstacles.push({
          id: `obs_${obsId++}`,
          type: 'water_current',
          x,
          y: groundY - 15,
          width: 90,
          height: 20,
          hazard: true,
        });
      }
    }

    // Biome 3: Crystal Caves (Moving spikes, laser beams, falling rocks/stalactites, disappearing blocks)
    for (let x = 4600; x < 6700; x += 230 + Math.floor(Math.random() * 140)) {
      const r = Math.random();
      if (r < 0.3) {
        // Pulsing laser beam
        obstacles.push({
          id: `obs_${obsId++}`,
          type: 'laser_beam',
          x,
          y: groundY - 90,
          width: 14,
          height: 90,
          timer: Math.random() * 3,
          state: 1, // active / inactive cycle
          hazard: true,
        });
      } else if (r < 0.6) {
        // Falling stalactite rock
        obstacles.push({
          id: `obs_${obsId++}`,
          type: 'falling_rock',
          x,
          y: groundY - 220,
          width: 30,
          height: 40,
          vy: 0,
          minY: groundY - 220,
          maxY: groundY - 20,
          isTriggered: false,
          timer: 0,
          hazard: true,
        });
      } else if (r < 0.8) {
        // Moving spike trap
        obstacles.push({
          id: `obs_${obsId++}`,
          type: 'moving_spikes',
          x,
          y: groundY - 24,
          width: 48,
          height: 24,
          vx: 1.6,
          minX: x - 80,
          maxX: x + 80,
          hazard: true,
        });
      } else {
        // Disappearing crystal block
        obstacles.push({
          id: `obs_${obsId++}`,
          type: 'disappearing_block',
          x,
          y: groundY - 70,
          width: 60,
          height: 20,
          timer: Math.random() * 4,
          state: 1,
          hazard: false,
        });
      }
    }

    // Biome 4: Mountain Peaks (Rotating windmills, rolling boulders, cannonballs, ice patches)
    for (let x = 6900; x < 8900; x += 250 + Math.floor(Math.random() * 150)) {
      const r = Math.random();
      if (r < 0.35) {
        // Rotating 4-blade windmill
        obstacles.push({
          id: `obs_${obsId++}`,
          type: 'rotating_windmill',
          x,
          y: groundY - 90,
          width: 90,
          height: 90,
          angle: 0,
          rotSpeed: 0.05,
          hazard: true,
        });
      } else if (r < 0.7) {
        // High speed cannonball
        obstacles.push({
          id: `obs_${obsId++}`,
          type: 'cannonball',
          x: x + 150,
          y: groundY - 45,
          width: 26,
          height: 26,
          vx: -3.6,
          minX: x - 180,
          maxX: x + 180,
          hazard: true,
        });
      } else {
        // Ice patch (slippery)
        obstacles.push({
          id: `obs_${obsId++}`,
          type: 'ice_patch',
          x,
          y: groundY - 8,
          width: 100,
          height: 12,
          hazard: false,
        });
      }
    }

    // Biome 5: Castle & Molten (Fireballs, exploding barrels, moving platforms)
    for (let x = 9100; x < 11100; x += 240 + Math.floor(Math.random() * 150)) {
      const r = Math.random();
      if (r < 0.4) {
        // Jumping fireball from molten pit
        obstacles.push({
          id: `obs_${obsId++}`,
          type: 'fireball',
          x,
          y: groundY - 10,
          width: 24,
          height: 24,
          minY: groundY - 160,
          maxY: groundY + 20,
          vy: -6.0,
          timer: Math.random() * 3,
          hazard: true,
        });
      } else if (r < 0.7) {
        // Exploding barrel
        obstacles.push({
          id: `obs_${obsId++}`,
          type: 'exploding_barrel',
          x,
          y: groundY - 34,
          width: 32,
          height: 34,
          timer: 0,
          hazard: true,
        });
      } else {
        // Vertical moving elevator platform
        obstacles.push({
          id: `obs_${obsId++}`,
          type: 'moving_platform',
          x,
          y: groundY - 60,
          width: 70,
          height: 18,
          minY: groundY - 140,
          maxY: groundY - 30,
          vy: 1.4,
          hazard: false,
        });
      }
    }

    // Biome 6: Rainbow Cloud Finish Stretch (11200 to Finish)
    // Dreamy bounce pads, rainbow balloons, huge gem showers, final sprint!
    for (let x = 11300; x < finishX - 300; x += 220) {
      // Bouncy cloud mushrooms
      obstacles.push({
        id: `obs_${obsId++}`,
        type: 'bouncing_mushroom',
        x,
        y: groundY - 30,
        width: 44,
        height: 30,
        bounceMultiplier: 1.6,
        hazard: false,
      });

      // Showers of diamond and purple gems!
      for (let g = 0; g < 4; g++) {
        gems.push({
          id: `gem_${gemId++}`,
          x: x + g * 35,
          y: groundY - 80 - Math.sin((g / 3) * Math.PI) * 40,
          type: g === 1 ? 'diamond' : 'purple',
          value: g === 1 ? 150 : 50,
          collected: false,
        });
      }
    }

    // Grand finish line mystery box & Diamond cascade right before finish!
    mysteryBoxes.push({
      id: `mbox_final`,
      x: finishX - 160,
      y: groundY - 34,
      opened: false,
      burstAnim: 0,
    });

    gems.push({
      id: `gem_trophy_1`,
      x: finishX - 90,
      y: groundY - 45,
      type: 'diamond',
      value: 150,
      collected: false,
    });
    gems.push({
      id: `gem_trophy_2`,
      x: finishX - 45,
      y: groundY - 65,
      type: 'diamond',
      value: 150,
      collected: false,
    });

    return {
      finishX,
      biomes,
      platforms,
      obstacles,
      gems,
      mysteryBoxes,
    };
  }
}

