// main.js - Landing Page Interactions and Audio Setup for BearDash

document.addEventListener('DOMContentLoaded', () => {
  // Initialize Web Audio on first user interaction
  const unlockAudio = () => {
    if (window.soundEngine) window.soundEngine.init();
    window.removeEventListener('pointerdown', unlockAudio);
  };
  window.addEventListener('pointerdown', unlockAudio);

  // FAQ Accordion
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach((item) => {
    const questionBtn = item.querySelector('.faq-question');
    if (questionBtn) {
      questionBtn.addEventListener('click', () => {
        const isOpen = item.classList.contains('active');
        faqItems.forEach((i) => i.classList.remove('active'));
        if (!isOpen) item.classList.add('active');
      });
    }
  });

  // Enter Room Code Modal
  const btnEnterCode = document.getElementById('btnEnterCode');
  const codeModal = document.getElementById('codeModal');
  const btnCloseCodeModal = document.getElementById('btnCloseCodeModal');

  if (btnEnterCode && codeModal) {
    btnEnterCode.addEventListener('click', () => {
      codeModal.style.display = 'flex';
    });
  }
  if (btnCloseCodeModal && codeModal) {
    btnCloseCodeModal.addEventListener('click', () => {
      codeModal.style.display = 'none';
    });
  }

  // Load or Save Racer Profile
  const racer = JSON.parse(localStorage.getItem('bear_dash_racer') || '{}');
  const racerNameEl = document.getElementById('heroRacerName');
  if (racerNameEl) {
    racerNameEl.innerText = racer.name || 'Baby Bear 🐻';
  }
});
