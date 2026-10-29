// ui.js - In-Game HUD, Mobile Controls and Victory Modals for BearDash

class UIManager {
  constructor() {
    this.livesContainer = document.getElementById('hudLives');
    this.gemsCounter = document.getElementById('hudGems');
    this.scoreCounter = document.getElementById('hudScore');
    this.boostersList = document.getElementById('hudBoosters');
    this.progressBar = document.getElementById('progressBarFill');
    this.progressPct = document.getElementById('progressPct');

    this.dangerVignette = document.getElementById('dangerVignette');
    this.eliminationBanner = document.getElementById('eliminationBanner');
    this.pauseModal = document.getElementById('pauseModal');
    this.victoryModal = document.getElementById('victoryModal');
  }

  updateHUD(player, finishX) {
    if (!player) return;

    // Lives
    if (this.livesContainer) {
      const hearts = this.livesContainer.querySelectorAll('.heart-icon');
      hearts.forEach((h, idx) => {
        if (idx < player.lives) {
          h.classList.remove('lost');
        } else {
          h.classList.add('lost');
        }
      });
    }

    // Gems & Score
    if (this.gemsCounter) this.gemsCounter.innerText = player.gemsCollected;
    if (this.scoreCounter) this.scoreCounter.innerText = `${player.score.toLocaleString()} pts`;

    // Active Boosters
    if (this.boostersList) {
      this.boostersList.innerHTML = '';
      player.activePowerups.forEach((ap) => {
        const cfg = window.POWERUPS_CONFIG[ap.type] || { name: ap.type, icon: '⚡' };
        const pct = Math.max(0, (ap.remaining / Math.max(1, ap.max)) * 100);

        const badge = document.createElement('div');
        badge.className = 'booster-badge';
        badge.innerHTML = `
          <span>${cfg.icon}</span>
          <span>${cfg.name}</span>
          <div class="booster-bar"><div class="booster-progress" style="width: ${pct}%"></div></div>
        `;
        this.boostersList.appendChild(badge);
      });
    }

    // Progress Bar
    const pct = Math.min(100, Math.floor((player.x / finishX) * 100));
    if (this.progressBar) this.progressBar.style.width = `${pct}%`;
    if (this.progressPct) this.progressPct.innerText = `🏁 ${pct}%`;

    // 1-life heartbeat danger vignette
    if (this.dangerVignette) {
      if (player.lives === 1 && !player.isEliminated) {
        this.dangerVignette.style.display = 'block';
      } else {
        this.dangerVignette.style.display = 'none';
      }
    }
  }

  showElimination() {
    if (this.eliminationBanner) this.eliminationBanner.style.display = 'flex';
  }

  hideElimination() {
    if (this.eliminationBanner) this.eliminationBanner.style.display = 'none';
  }

  togglePause(isPaused) {
    if (this.pauseModal) {
      this.pauseModal.style.display = isPaused ? 'flex' : 'none';
    }
  }

  showVictory(winner, rank, timeFormatted) {
    if (this.victoryModal) {
      this.victoryModal.style.display = 'flex';

      document.getElementById('winnerName').innerText = winner.name;
      document.getElementById('winnerTime').innerText = timeFormatted;
      document.getElementById('winnerLives').innerText = Array(winner.lives).fill('❤️').join(' ');
      document.getElementById('winnerGems').innerText = winner.gemsCollected;
      document.getElementById('winnerPowerups').innerText = winner.powerupsUsed;
      document.getElementById('winnerBonus').innerText = `+${winner.lives * 500} pts`;
    }
  }
}

window.ui = new UIManager();
