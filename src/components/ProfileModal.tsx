// ProfileModal.tsx - Player Profile, Lifetime Statistics, and Daily Reward Wheel

import React, { useState, useEffect } from 'react';
import { PlayerCustomization } from '../game/types';
import { soundEngine } from '../audio/SoundEngine';

interface ProfileModalProps {
  customization: PlayerCustomization;
  onClose: () => void;
}

export const ProfileModal: React.FC<ProfileModalProps> = ({ customization, onClose }) => {
  const [stats, setStats] = useState({
    racesPlayed: 14,
    racesWon: 8,
    totalGems: 480,
    totalDistanceM: 184800,
    favoritePowerup: 'Gem Magnet 🧲',
  });

  const [dailyClaimed, setDailyClaimed] = useState(false);
  const [dailyReward, setDailyReward] = useState<number | null>(null);

  useEffect(() => {
    // Check localStorage for saved stats or load defaults
    try {
      const saved = localStorage.getItem('bear_dash_stats');
      if (saved) setStats(JSON.parse(saved));
      const claimedToday = localStorage.getItem('bear_dash_daily_' + new Date().toDateString());
      if (claimedToday) setDailyClaimed(true);
    } catch (e) {
      // ignore
    }
  }, []);

  const claimDailyReward = () => {
    if (dailyClaimed) return;
    const rewards = [100, 150, 250, 300, 500];
    const picked = rewards[Math.floor(Math.random() * rewards.length)];
    setDailyReward(picked);
    setDailyClaimed(true);
    soundEngine.playVictory();

    const newStats = { ...stats, totalGems: stats.totalGems + picked };
    setStats(newStats);
    try {
      localStorage.setItem('bear_dash_stats', JSON.stringify(newStats));
      localStorage.setItem('bear_dash_daily_' + new Date().toDateString(), 'true');
    } catch (e) {
      // ignore
    }
  };

  const winRate = ((stats.racesWon / Math.max(1, stats.racesPlayed)) * 100).toFixed(0);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm p-4">
      <div className="pixel-box max-w-lg w-full p-6 space-y-6 max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between pb-3 border-b border-white/10">
          <div className="flex items-center gap-2 font-pixel text-xs text-[#FFD166]">
            <span>🐾</span> RACER PROFILE
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white font-bold text-lg leading-none"
          >
            ✕
          </button>
        </div>

        {/* Profile Card Header */}
        <div className="flex items-center gap-4 bg-[#1E132B] p-4 rounded-xl border border-white/10">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-[#FF7B54] to-[#FFD166] flex items-center justify-center text-3xl shadow-md border-2 border-white/20">
            🐻
          </div>
          <div>
            <h3 className="font-pixel text-sm text-white">{customization.name}</h3>
            <div className="text-xs text-gray-400 font-fun mt-1 flex items-center gap-2">
              <span className="bg-[#70E000]/20 text-[#70E000] px-2 py-0.5 rounded font-bold">
                Level 6 Racer
              </span>
              <span>•</span>
              <span className="text-[#FF758F] font-bold">Master Cub</span>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-center">
          <div className="bg-[#1C1227] p-3 rounded-xl border border-white/5">
            <div className="text-[10px] font-pixel text-gray-400">RACES</div>
            <div className="font-mono text-lg font-bold text-white mt-1">{stats.racesPlayed}</div>
          </div>
          <div className="bg-[#1C1227] p-3 rounded-xl border border-white/5">
            <div className="text-[10px] font-pixel text-gray-400">VICTORIES 🏆</div>
            <div className="font-mono text-lg font-bold text-[#FFD166] mt-1">{stats.racesWon}</div>
          </div>
          <div className="bg-[#1C1227] p-3 rounded-xl border border-white/5">
            <div className="text-[10px] font-pixel text-gray-400">WIN RATE</div>
            <div className="font-mono text-lg font-bold text-[#70E000] mt-1">{winRate}%</div>
          </div>
          <div className="bg-[#1C1227] p-3 rounded-xl border border-white/5">
            <div className="text-[10px] font-pixel text-gray-400">TOTAL GEMS 💎</div>
            <div className="font-mono text-lg font-bold text-[#4CC9F0] mt-1">{stats.totalGems}</div>
          </div>
          <div className="bg-[#1C1227] p-3 rounded-xl border border-white/5 col-span-2">
            <div className="text-[10px] font-pixel text-gray-400">FAVORITE BOOSTER</div>
            <div className="text-xs font-bold text-[#FF758F] mt-1 truncate">
              {stats.favoritePowerup}
            </div>
          </div>
        </div>

        {/* Daily Reward Wheel Box */}
        <div className="pixel-box-gold p-4 space-y-3">
          <div className="flex items-center justify-between">
            <div className="font-pixel text-[11px] text-[#FFD166] flex items-center gap-2">
              <span>🎁</span> DAILY HONEY REWARD
            </div>
            {dailyClaimed && (
              <span className="text-[10px] font-pixel bg-[#70E000] text-black px-2 py-0.5 rounded">
                CLAIMED TODAY
              </span>
            )}
          </div>
          <p className="text-xs text-gray-300 font-fun">
            Log in every 24 hours to collect bonus gems and unlock rare accessories!
          </p>

          {dailyReward && (
            <div className="p-2 bg-[#70E000]/20 border border-[#70E000] rounded-lg text-center text-xs font-bold text-[#70E000] animate-bounce-slow">
              🎉 Claimed +{dailyReward} Gems!
            </div>
          )}

          <button
            onClick={claimDailyReward}
            disabled={dailyClaimed}
            className={`w-full py-2.5 rounded-xl font-pixel text-xs transition-all ${
              dailyClaimed
                ? 'bg-gray-700 text-gray-400 cursor-not-allowed'
                : 'btn-pixel btn-pixel-gold'
            }`}
          >
            {dailyClaimed ? 'Check back tomorrow!' : 'Claim Daily Reward 🎁'}
          </button>
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

