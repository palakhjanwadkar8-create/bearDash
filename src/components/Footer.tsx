// Footer.tsx - Game Lore, FAQ, Controls Overview and Credits

import React, { useState } from 'react';

export const Footer: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      q: 'How does the survival rule work?',
      a: 'Each baby bear starts with 3 lives (❤️❤️❤️). Touching hazardous obstacles (spinning blades, rolling logs, fireballs, spikes) costs 1 life. At 1 life remaining, your heartbeat accelerates and screen edges glow red. If you lose all 3 lives, you are eliminated and turn into a floating spectator ghost!',
    },
    {
      q: 'What is required to win a race?',
      a: 'To be crowned champion, you must physically reach the finish line with at least one life remaining! The fastest surviving baby bear takes 1st place on the victory podium.',
    },
    {
      q: 'Can I play with friends in private rooms?',
      a: 'Yes! Create a private room from the Play menu to get a custom invite code (e.g. BEAR-7788). Friends can enter this code in the hero banner to join your lobby instantly.',
    },
    {
      q: 'How do power-ups work?',
      a: 'Break open glowing golden mystery boxes on platforms to receive random boosters like Gem Magnets, 2x Speed, Hoverboards, Invincibility, Super Jumps, Slow-Motion, and Golden Bear Mode.',
    },
    {
      q: 'Does it work on mobile phones and tablets?',
      a: 'Yes, full touch controls with responsive D-pad buttons, Jump, and Dash are provided for smartphones and tablets in both landscape and portrait orientations.',
    },
  ];

  return (
    <footer className="bg-[#150D1C] text-gray-400 border-t-4 border-[#FF758F]/30 pt-16 pb-12 px-4 font-fun">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="text-center space-y-2">
            <div className="font-pixel text-xs text-[#FFD166]">GOT QUESTIONS?</div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Frequently Asked Questions
            </h3>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="bg-[#21152D] rounded-xl border border-white/5 overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full px-5 py-4 text-left flex justify-between items-center text-sm font-bold text-gray-200 hover:text-white"
                  >
                    <span>{faq.q}</span>
                    <span className="text-xs text-[#FF758F] font-pixel ml-2">
                      {isOpen ? '▲' : '▼'}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-4 text-xs sm:text-sm text-gray-300 leading-relaxed border-t border-white/5 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Credits & Copyright */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <div className="flex items-center gap-2">
            <span className="text-xl">🐻</span>
            <span className="font-pixel text-[11px] text-[#FFD166]">Bear Dash: Pixel Adventure</span>
          </div>

          <div className="text-center sm:text-right">
            Crafted with ❤️ for Pixel Game Enthusiasts worldwide.
          </div>
        </div>
      </div>
    </footer>
  );
};

