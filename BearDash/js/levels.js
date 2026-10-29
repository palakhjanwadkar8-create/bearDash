// levels.js - Handcrafted Multi-Biome Adventure Level Generator for BearDash

const LEVEL_BIOMES = [
  {
    startX: 0,
    endX: 2300,
    type: 'forest',
    name: 'Enchanted Peach Forest',
    skyTop: '#FF7B54',
    skyBottom: '#FFB085',
    ground: '#4A2810',
    grass: '#70E000',
    accent: '#FF758F',
  },
  {
    startX: 2300,
    endX: 4500,
    type: 'river',
    name: 'Whispering River Bridges',
    skyTop: '#FF758F',
    skyBottom: '#FFB085',
    ground: '#362419',
    grass: '#52B788',
    accent: '#4CC9F0',
  },
  {
    startX: 4500,
    endX: 6800,
    type: 'cave',
    name: 'Luminescent Crystal Caves',
    skyTop: '#3A1C52',
    skyBottom: '#6B2D8C',
    ground: '#201633',
    grass: '#9D4EDD',
    accent: '#E0AAFF',
  },
  {
    startX: 6800,
    endX: 9000,
    type: 'mountain',
    name: 'Frosty Sunset Peaks',
    skyTop: '#7B2CBF',
    skyBottom: '#C77DFF',
    ground: '#3E4254',
    grass: '#D8F3DC',
    accent: '#A0C4FF',
  },
  {
    startX: 9000,
    endX: 11200,
    type: 'castle',
    name: 'Molten Castle Ramparts',
    skyTop: '#590D22',
    skyBottom: '#A4133C',
    ground: '#2B1116',
    grass: '#FF4D6D',
    accent: '#FFB703',
  },
  {
    startX: 11200,
    endX: 14000,
    type: 'cloud',
    name: 'Celestial Rainbow Clouds',
    skyTop: '#FF9E00',
    skyBottom: '#FFD166',
    ground: '#7209B7',
    grass: '#F72585',
    accent: '#4CC9F0',
  },
];

function generateLevel() {
  const finishX = 13200;
  const platforms = [];
  const obstacles = [];
  const gems = [];
  const mysteryBoxes = [];

  const groundY = 440;
  let currX = 0;
  let gemId = 0;
  let obsId = 0;
  let boxId = 0;

  while (currX < finishX + 600) {
    const isPit = currX > 600 && currX < finishX - 500 && Math.random() < 0.22;
    const segWidth = 350 + Math.floor(Math.random() * 450);

    if (isPit) {
      const gap = 140 + Math.floor(Math.random() * 100);
      const bridgeX = currX + 20;

      // Collapsing bridge planks in river biome
      if (currX >= 2300 && currX < 4500) {
        for (let p = 0; p < 4; p++) {
          platforms.push({
            x: bridgeX + p * 34,
            y: groundY + 10,
            width: 30,
            height: 18,
            type: 'collapsing',
            timer: 0.65,
          });
        }
      } else {
        platforms.push({
          x: bridgeX + 20,
          y: groundY - 60,
          width: gap - 40,
          height: 22,
          type: currX >= 6800 && currX < 9000 ? 'ice' : 'floating',
        });
      }

      // Gems arc
      for (let g = 0; g < 4; g++) {
        gems.push(
          new Gem(
            `g_${gemId++}`,
            bridgeX + g * 35 + 10,
            groundY - 60 - Math.sin((g / 3) * Math.PI) * 45,
            g === 2 ? 'purple' : 'blue'
          )
        );
      }
      currX += gap;
    }

    platforms.push({
      x: currX,
      y: groundY,
      width: segWidth,
      height: 140,
      type: currX >= 6800 && currX < 9000 ? 'ice' : 'ground',
    });

    // High platform
    if (Math.random() < 0.6) {
      const highX = currX + 60;
      const highY = groundY - 90;
      platforms.push({
        x: highX,
        y: highY,
        width: 140,
        height: 22,
        type: 'floating',
      });
      // Mystery box
      if (Math.random() < 0.5 && highX > 500 && highX < finishX - 300) {
        mysteryBoxes.push(new MysteryBox(`box_${boxId++}`, highX + 50, highY - 34));
      }
    }

    // Ground gems
    for (let g = 0; g < 3; g++) {
      const gx = currX + 40 + g * 50;
      if (gx < currX + segWidth - 30) {
        gems.push(new Gem(`g_${gemId++}`, gx, groundY - 26, Math.random() < 0.3 ? 'yellow' : 'green'));
      }
    }

    currX += segWidth;
  }

  // Populate Biome Obstacles
  // Forest
  for (let x = 400; x < 2200; x += 260) {
    const r = Math.random();
    if (r < 0.3) {
      obstacles.push(new Obstacle({ id: `obs_${obsId++}`, type: 'bouncing_mushroom', x, y: groundY - 32, width: 40, height: 32, hazard: false, bounceMultiplier: 1.45 }));
    } else if (r < 0.65) {
      obstacles.push(new Obstacle({ id: `obs_${obsId++}`, type: 'rolling_log', x, y: groundY - 28, width: 32, height: 28, vx: -1.8, minX: x - 150, maxX: x + 150, rotSpeed: 0.12 }));
    } else {
      obstacles.push(new Obstacle({ id: `obs_${obsId++}`, type: 'angry_bee', x, y: groundY - 70, width: 28, height: 28 }));
    }
  }

  // River
  for (let x = 2400; x < 4400; x += 280) {
    if (Math.random() < 0.5) {
      obstacles.push(new Obstacle({ id: `obs_${obsId++}`, type: 'swinging_hammer', x, y: groundY - 140, width: 36, height: 120 }));
    } else {
      obstacles.push(new Obstacle({ id: `obs_${obsId++}`, type: 'spinning_blade', x, y: groundY - 36, width: 36, height: 36, vx: 2.0, minX: x - 120, maxX: x + 120, rotSpeed: 0.2 }));
    }
  }

  // Caves
  for (let x = 4600; x < 6700; x += 280) {
    if (Math.random() < 0.5) {
      obstacles.push(new Obstacle({ id: `obs_${obsId++}`, type: 'laser_beam', x, y: groundY - 90, width: 14, height: 90 }));
    } else {
      obstacles.push(new Obstacle({ id: `obs_${obsId++}`, type: 'spinning_blade', x, y: groundY - 36, width: 36, height: 36, vx: 1.8, minX: x - 80, maxX: x + 80, rotSpeed: 0.18 }));
    }
  }

  // Mountain
  for (let x = 6900; x < 8900; x += 300) {
    obstacles.push(new Obstacle({ id: `obs_${obsId++}`, type: 'rotating_windmill', x, y: groundY - 90, width: 90, height: 90, rotSpeed: 0.05 }));
  }

  // Molten Castle
  for (let x = 9100; x < 11100; x += 280) {
    if (Math.random() < 0.5) {
      obstacles.push(new Obstacle({ id: `obs_${obsId++}`, type: 'fireball', x, y: groundY - 10, width: 24, height: 24, minY: groundY - 160, maxY: groundY + 20, vy: -6.0 }));
    } else {
      obstacles.push(new Obstacle({ id: `obs_${obsId++}`, type: 'exploding_barrel', x, y: groundY - 34, width: 32, height: 34 }));
    }
  }

  // Cloud Finish Stretch
  for (let x = 11300; x < finishX - 250; x += 250) {
    obstacles.push(new Obstacle({ id: `obs_${obsId++}`, type: 'bouncing_mushroom', x, y: groundY - 30, width: 44, height: 30, bounceMultiplier: 1.6, hazard: false }));
    gems.push(new Gem(`g_${gemId++}`, x + 50, groundY - 80, 'diamond'));
  }

  // Final Mystery Box right before finish!
  mysteryBoxes.push(new MysteryBox('box_final', finishX - 160, groundY - 34));

  return {
    finishX,
    biomes: LEVEL_BIOMES,
    platforms,
    obstacles,
    gems,
    mysteryBoxes,
  };
}

window.generateLevel = generateLevel;
