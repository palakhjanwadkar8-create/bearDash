// AchievementsModal.tsx - Unlockable trophies and milestone rewards

import React, { useState } from 'react';
import { ACHIEVEMENTS_LIST } from '../game/constants';
import { soundEngine } from '../audio/SoundEngine';

interface AchievementsModalProps {
  onClose: () => void;
}

export const AchievementsModal: React.FC<AchievementsModalProps> = ({ onClose }) => {
  // Store unlocked achievement IDs
  const [unlocked, setUnlocked] = useState<string[]>(['first_race', 'daredevil']);
  const [claimed, setClaimed] = useState<string[]>([]);

  const handleClaim = (id: string) => {
    setClaimed([...claimed, id]);
    soundEngine.playGemCollect();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm p-4">
      <div className="pixel-box max-w-lg w-full p-6 space-y-6 max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between pb-3 border-b border-white/10">
          <div className="flex items-center gap-2 font-pixel text-xs text-[#FFD166]">
            <span>🏆</span> TROPHIES & ACHIEVEMENTS
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white font-bold text-lg leading-none"
          >
            ✕
          </button>
        </div>

        <div className="space-y-3">
          {ACHIEVEMENTS_LIST.map((ach) => {
            const isUnlocked = unlocked.includes(ach.id);
            const isClaimed = claimed.includes(ach.id);

            return (
              <div
                key={ach.id}
                className={`p-3.5 rounded-xl border-2 flex items-center justify-between gap-3 transition-colors ${
                  isUnlocked
                    ? 'bg-[#291A39] border-[#FFD166]/60 shadow-md'
                    : 'bg-[#181122] border-white/5 opacity-60'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-black/40 flex items-center justify-center text-2xl flex-shrink-0">
                    {ach.icon}
                  </div>
                  <div>
                    <h4
                      className={`text-xs font-pixel ${
                        isUnlocked ? 'text-[#FFD166]' : 'text-gray-400'
                      }`}
                    >
                      {ach.name}
                    </h4>
                    <p className="text-[11px] text-gray-300 font-fun mt-0.5">{ach.description}</p>
                  </div>
                </div>

                <div className="flex-shrink-0 text-right">
                  {isUnlocked ? (
                    isClaimed ? (
                      <span className="text-[10px] font-pixel text-gray-400">Claimed ✔</span>
                    ) : (
                      <button
                        onClick={() => handleClaim(ach.id)}
                        className="btn-pixel btn-pixel-gold px-2.5 py-1 rounded-lg text-[10px] font-pixel"
                      >
                        +{ach.reward} 💎
                      </button>
                    )
                  ) : (
                    <span className="text-[10px] font-pixel text-gray-500">Locked 🔒</span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <button
          onClick={onClose}
          className="w-full py-3 rounded-xl bg-gray-700 hover:bg-gray-600 font-pixel text-xs"
        >
          Close
        </button>
      </div>
    </div>
  );
};

