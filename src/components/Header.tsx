// Header.tsx - Top navigation bar with logo, sound toggle, profile access and quick tabs

import React from 'react';
import { PlayerCustomization } from '../game/types';
import { soundEngine } from '../audio/SoundEngine';

interface HeaderProps {
  currentTab: 'landing' | 'wardrobe' | 'lobby' | 'game';
  setCurrentTab: (tab: 'landing' | 'wardrobe' | 'lobby' | 'game') => void;
  customization: PlayerCustomization;
  onOpenProfile: () => void;
  onOpenAchievements: () => void;
  onOpenSettings: () => void;
  isMuted: boolean;
  setIsMuted: (muted: boolean) => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentTab,
  setCurrentTab,
  customization,
  onOpenProfile,
  onOpenAchievements,
  onOpenSettings,
  isMuted,
  setIsMuted,
}) => {
  const toggleMute = () => {
    const next = !isMuted;
    setIsMuted(next);
    soundEngine.updateSettings({ muted: next });
  };

  return (
    <header className="sticky top-0 z-40 bg-[#1D1427]/90 backdrop-blur-md border-b-4 border-[#FF758F]/40 px-4 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo & Title */}
        <div
          onClick={() => setCurrentTab('landing')}
          className="flex items-center gap-3 cursor-pointer group select-none"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#FF7B54] to-[#FFD166] flex items-center justify-center text-2xl shadow-md transform group-hover:scale-110 transition-transform">
            🐻
          </div>
          <div>
            <div className="font-pixel text-xs sm:text-sm text-[#FFD166] tracking-wider flex items-center gap-2">
              BEAR DASH
              <span className="text-[10px] bg-[#FF758F] text-white px-1.5 py-0.5 rounded font-mono">
                HD PIXEL
              </span>
            </div>
            <div className="text-[11px] text-gray-300 font-fun hidden sm:block">
              Pixel Adventure Racing
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <nav className="flex items-center gap-1 sm:gap-2">
          <button
            onClick={() => setCurrentTab('landing')}
            className={`px-3 py-1.5 rounded-lg text-xs font-pixel transition-all ${
              currentTab === 'landing'
                ? 'bg-[#FF758F] text-white shadow-md'
                : 'text-gray-300 hover:text-white hover:bg-white/10'
            }`}
          >
            Home
          </button>
          <button
            onClick={() => setCurrentTab('wardrobe')}
            className={`px-3 py-1.5 rounded-lg text-xs font-pixel transition-all ${
              currentTab === 'wardrobe'
                ? 'bg-[#FF758F] text-white shadow-md'
                : 'text-gray-300 hover:text-white hover:bg-white/10'
            }`}
          >
            Wardrobe 👑
          </button>
          <button
            onClick={() => setCurrentTab('lobby')}
            className={`px-3 py-1.5 rounded-lg text-xs font-pixel transition-all ${
              currentTab === 'lobby' || currentTab === 'game'
                ? 'bg-[#FFD166] text-[#381A00] font-bold shadow-md'
                : 'text-gray-300 hover:text-white hover:bg-white/10'
            }`}
          >
            Play Now 🏁
          </button>
        </nav>

        {/* Action Icons (Mute, Achievements, Profile, Settings) */}
        <div className="flex items-center gap-2">
          {/* Sound Toggle */}
          <button
            onClick={toggleMute}
            title={isMuted ? 'Unmute Audio' : 'Mute Audio'}
            className="w-9 h-9 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center text-sm transition-all"
          >
            {isMuted ? '🔇' : '🔊'}
          </button>

          {/* Achievements */}
          <button
            onClick={onOpenAchievements}
            title="Achievements"
            className="w-9 h-9 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center text-sm transition-all"
          >
            🏆
          </button>

          {/* Settings */}
          <button
            onClick={onOpenSettings}
            title="Settings"
            className="w-9 h-9 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center text-sm transition-all"
          >
            ⚙️
          </button>

          {/* Quick Profile Badge */}
          <button
            onClick={onOpenProfile}
            className="flex items-center gap-2 bg-[#2D1B3E] hover:bg-[#3D2554] border-2 border-[#FF758F]/60 px-2.5 py-1 rounded-xl transition-all"
          >
            <div className="w-6 h-6 rounded-full bg-[#FFB085] flex items-center justify-center text-xs">
              🐻
            </div>
            <span className="text-xs font-bold text-gray-200 hidden md:inline">
              {customization.name}
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};

