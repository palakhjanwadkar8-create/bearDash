// powerups.js - Power-Ups Catalog and Activation Management for BearDash

const POWERUPS_CONFIG = {
  magnet: { name: 'Gem Magnet', icon: '🧲', duration: 8.0, color: '#FF758F' },
  speed_boost: { name: 'Speed Boost', icon: '⚡', duration: 6.0, color: '#FFD166' },
  hoverboard: { name: 'Hoverboard', icon: '🛹', duration: 10.0, color: '#4CC9F0' },
  invincibility: { name: 'Invincibility', icon: '⭐', duration: 7.0, color: '#FFBE0B' },
  shield: { name: 'Energy Shield', icon: '🛡️', duration: 15.0, color: '#70E000' },
  slow_motion: { name: 'Slow Motion', icon: '⏱️', duration: 6.5, color: '#9D4EDD' },
  super_jump: { name: 'Super Jump', icon: '🦘', duration: 8.0, color: '#FB5607' },
  dash: { name: 'Quick Dash', icon: '🌀', duration: 0.35, color: '#3A86FF' },
  extra_life: { name: 'Extra Life', icon: '❤️', duration: 0, color: '#E63946' },
  gem_multiplier: { name: 'Gem Multiplier', icon: '💎', duration: 10.0, color: '#06D6A0' },
  golden_bear: { name: 'Golden Bear', icon: '🏆', duration: 9.0, color: '#FFD700' },
};

function activatePowerup(player, type) {
  player.powerupsUsed += 1;
  const cfg = POWERUPS_CONFIG[type];

  if (type === 'extra_life') {
    if (player.lives < 3) {
      player.lives += 1;
      if (player.lives > 1 && player.isLocal) {
        window.soundEngine.stopHeartbeat();
      }
    }
    return;
  }

  // Remove existing instance if already active
  player.activePowerups = player.activePowerups.filter((p) => p.type !== type);

  player.activePowerups.push({
    type,
    remaining: cfg ? cfg.duration : 8.0,
    max: cfg ? cfg.duration : 8.0,
  });
}

window.POWERUPS_CONFIG = POWERUPS_CONFIG;
window.activatePowerup = activatePowerup;
