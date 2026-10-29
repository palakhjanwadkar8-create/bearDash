// VictoryModal.tsx - Post-Race Victory Celebration & Statistics Breakdown

import React from 'react';
import { RaceResult } from '../game/types';

interface VictoryModalProps {
  results: RaceResult[];
  onPlayAgain: () => void;
  onReturnToLobby: () => void;
}

export const VictoryModal: React.FC<VictoryModalProps> = ({
  results,
  onPlayAgain,
  onReturnToLobby,
}) => {
  const winner = results[0];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4">
      <div className="pixel-box-gold max-w-lg w-full p-6 space-y-6 text-center animate-bounce-slow">
        {/* Trophy & Winner Announcement */}
        <div className="space-y-2">
          <div className="text-5xl">🏆</div>
          <div className="font-pixel text-xs text-[#FFD166] tracking-widest uppercase">
            RACE WINNER
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            {winner?.playerName || 'Baby Bear 🐻'}
          </h2>
          <div className="inline-block px-3 py-1 rounded-full bg-[#70E000]/20 text-[#70E000] text-xs font-pixel border border-[#70E000]/40">
            CHAMPION FINISH!
          </div>
        </div>

        {/* Detailed Statistics Breakdown Required by Prompt */}
        <div className="bg-[#1D1426] p-4 rounded-2xl border border-white/10 space-y-2.5 text-left text-xs font-fun">
          <div className="flex justify-between items-center py-1 border-b border-white/5">
            <span className="text-gray-300">⏱️ Race Time:</span>
            <span className="font-mono font-bold text-[#4CC9F0] text-sm">
              {winner?.timeFormatted || '00:00'}
            </span>
          </div>

          <div className="flex justify-between items-center py-1 border-b border-white/5">
            <span className="text-gray-300">❤️ Remaining Lives:</span>
            <span className="font-bold text-[#FF758F]">
              {Array(winner?.livesRemaining || 0)
                .fill('❤️')
                .join(' ')}
            </span>
          </div>

          <div className="flex justify-between items-center py-1 border-b border-white/5">
            <span className="text-gray-300">💎 Total Gems Collected:</span>
            <span className="font-mono font-bold text-yellow-300">{winner?.gemsCount || 0}</span>
          </div>

          <div className="flex justify-between items-center py-1 border-b border-white/5">
            <span className="text-gray-300">⚡ Power-Ups Used:</span>
            <span className="font-mono font-bold text-purple-300">{winner?.powerupsUsed || 0}</span>
          </div>

          <div className="flex justify-between items-center py-1">
            <span className="text-gray-300">🌟 Bonus Survival Score:</span>
            <span className="font-mono font-bold text-[#70E000]">
              +{(winner?.livesRemaining || 0) * 500} pts
            </span>
          </div>
        </div>

        {/* Leaderboard Podiums of this race */}
        <div className="space-y-1.5 text-xs">
          <div className="font-pixel text-[10px] text-gray-400 text-left uppercase">
            FINAL PLACEMENTS
          </div>
          {results.map((r, idx) => (
            <div
              key={r.playerId}
              className={`flex items-center justify-between p-2 rounded-xl ${
                r.isLocal ? 'bg-[#FF758F]/20 border border-[#FF758F]' : 'bg-black/20'
              }`}
            >
              <div className="flex items-center gap-2">
                <span className="font-pixel text-[11px] text-[#FFD166]">#{idx + 1}</span>
                <span className="font-bold text-white">{r.playerName}</span>
                {r.isLocal && (
                  <span className="text-[9px] bg-[#FF758F] text-white px-1.5 py-0.5 rounded font-mono">
                    YOU
                  </span>
                )}
              </div>
              <div className="font-mono text-gray-300">{r.timeFormatted}</div>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          <button
            onClick={onPlayAgain}
            className="flex-1 btn-pixel btn-pixel-gold py-3.5 rounded-xl font-pixel text-xs"
          >
            PLAY AGAIN 🔄
          </button>
          <button
            onClick={onReturnToLobby}
            className="flex-1 btn-pixel btn-pixel-purple py-3.5 rounded-xl font-pixel text-xs"
          >
            LOBBY 🏁
          </button>
        </div>
      </div>
    </div>
  );
};

