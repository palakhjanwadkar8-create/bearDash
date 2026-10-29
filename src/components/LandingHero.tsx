// LandingHero.tsx - Animated Hero Section with Play Buttons, Live Status and Pixel Preview

import React, { useState } from 'react';
import { PlayerCustomization } from '../game/types';

interface LandingHeroProps {
  customization: PlayerCustomization;
  onPlaySinglePlayer: () => void;
  onPlayMultiplayer: () => void;
  onJoinRoomCode: (code: string) => void;
  onCustomize: () => void;
}

export const LandingHero: React.FC<LandingHeroProps> = ({
  customization,
  onPlaySinglePlayer,
  onPlayMultiplayer,
  onJoinRoomCode,
  onCustomize,
}) => {
  const [joinCodeInput, setJoinCodeInput] = useState('');
  const [showCodeModal, setShowCodeModal] = useState(false);

  const handleJoin = (e: React.FormEvent) => {
    e.preventDefault();
    if (joinCodeInput.trim()) {
      onJoinRoomCode(joinCodeInput.trim().toUpperCase());
    }
  };

  return (
    <div className="relative overflow-hidden pt-8 pb-16 px-4 bg-gradient-to-b from-[#2B1B3D] via-[#1F142B] to-[#160E1E]">
      {/* Decorative Floating Pixel Elements */}
      <div className="absolute top-10 left-10 text-3xl animate-float opacity-75">☁️</div>
      <div className="absolute top-20 right-16 text-3xl animate-float delay-1000 opacity-75">🌸</div>
      <div className="absolute bottom-12 left-1/4 text-2xl animate-bounce-slow opacity-60">💎</div>
      <div className="absolute top-36 right-1/3 text-2xl animate-float opacity-70">✨</div>

      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">
        {/* Left Column: Hero Copy & CTA Buttons */}
        <div className="flex-1 text-center lg:text-left space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#FF758F]/20 border border-[#FF758F]/50 text-[#FFD166] text-xs font-pixel">
            <span className="w-2 h-2 rounded-full bg-[#70E000] animate-ping" />
            2–8 PLAYERS MULTIPLAYER RACING
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight">
            Survive. Race. <br />
            <span className="rainbow-text font-pixel text-3xl sm:text-5xl block mt-2">
              BEAR DASH!
            </span>
          </h1>

          <p className="text-gray-300 text-base sm:text-lg max-w-xl font-fun">
            Take control of an adorable baby bear! Dodge spinning blades, hop on bouncing mushrooms,
            grab mystery power-ups, and sprint to the finish line in a magical Golden Hour adventure.
          </p>

          {/* Quick Stats Highlights */}
          <div className="grid grid-cols-3 gap-3 max-w-md mx-auto lg:mx-0 py-2">
            <div className="bg-[#2D1B3E]/80 border-2 border-[#FF758F]/30 p-2.5 rounded-xl text-center">
              <div className="text-xl">❤️ ❤️ ❤️</div>
              <div className="text-[11px] text-gray-300 font-pixel mt-1">3 LIVES</div>
            </div>
            <div className="bg-[#2D1B3E]/80 border-2 border-[#FFD166]/30 p-2.5 rounded-xl text-center">
              <div className="text-xl">🏞️ 6</div>
              <div className="text-[11px] text-gray-300 font-pixel mt-1">BIOMES</div>
            </div>
            <div className="bg-[#2D1B3E]/80 border-2 border-[#4CC9F0]/30 p-2.5 rounded-xl text-center">
              <div className="text-xl">⚡ 11</div>
              <div className="text-[11px] text-gray-300 font-pixel mt-1">BOOSTERS</div>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
            <button
              onClick={onPlayMultiplayer}
              className="btn-pixel btn-pixel-gold px-8 py-4 rounded-2xl font-pixel text-sm sm:text-base flex items-center gap-3 shadow-lg"
            >
              <span>🏁</span> PLAY MULTIPLAYER
            </button>

            <button
              onClick={onPlaySinglePlayer}
              className="btn-pixel btn-pixel-pink px-6 py-4 rounded-2xl font-pixel text-xs sm:text-sm flex items-center gap-2"
            >
              <span>🤖</span> PRACTICE VS BOTS
            </button>

            <button
              onClick={() => setShowCodeModal(true)}
              className="btn-pixel btn-pixel-purple px-5 py-4 rounded-2xl font-pixel text-xs flex items-center gap-2"
            >
              <span>🔑</span> ENTER ROOM CODE
            </button>
          </div>
        </div>

        {/* Right Column: Interactive Character & Stage Showcase Card */}
        <div className="w-full max-w-md">
          <div className="pixel-box p-6 relative">
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div className="flex items-center gap-2 font-pixel text-xs text-[#FFD166]">
                <span>🐻</span> CURRENT RACER
              </div>
              <button
                onClick={onCustomize}
                className="text-xs bg-[#FF758F] hover:bg-[#FF758F]/80 text-white font-pixel px-2.5 py-1 rounded transition-colors"
              >
                CUSTOMIZE
              </button>
            </div>

            {/* Stage Showcase Area */}
            <div className="my-6 py-10 bg-gradient-to-b from-[#FFB085]/20 to-[#70E000]/20 rounded-xl flex flex-col items-center justify-center relative overflow-hidden border border-white/10">
              {/* Little ground platform */}
              <div className="w-48 h-5 bg-[#70E000] rounded-t-lg absolute bottom-4 border-t-2 border-[#A7FF00] shadow-md" />
              <div className="w-48 h-4 bg-[#4A2810] absolute bottom-0" />

              {/* Baby Bear Avatar Preview */}
              <div className="relative z-10 flex flex-col items-center animate-bounce-slow">
                <div className="text-6xl drop-shadow-lg">🐻</div>
                <div className="text-xs font-pixel text-white mt-1 bg-black/50 px-2 py-0.5 rounded">
                  {customization.name}
                </div>
              </div>

              {/* Floating gem icon */}
              <div className="absolute top-4 right-6 text-xl animate-float">💎</div>
              <div className="absolute top-6 left-6 text-xl animate-float delay-700">🎁</div>
            </div>

            <div className="space-y-2 text-xs text-gray-300 font-fun">
              <div className="flex justify-between py-1 border-b border-white/5">
                <span>Fur Style:</span>
                <span className="font-bold text-[#FFD166] capitalize">{customization.fur}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-white/5">
                <span>Hat Accessory:</span>
                <span className="font-bold text-[#FF758F] capitalize">{customization.hat}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-white/5">
                <span>Scarf Accessory:</span>
                <span className="font-bold text-[#4CC9F0] capitalize">{customization.scarf}</span>
              </div>
              <div className="flex justify-between py-1">
                <span>Backpack:</span>
                <span className="font-bold text-[#70E000] capitalize">{customization.backpack}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enter Room Code Modal */}
      {showCodeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
          <div className="pixel-box-gold p-6 max-w-sm w-full space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="font-pixel text-xs text-[#FFD166]">JOIN PRIVATE ROOM</h3>
              <button
                onClick={() => setShowCodeModal(false)}
                className="text-gray-400 hover:text-white font-bold"
              >
                ✕
              </button>
            </div>
            <p className="text-xs text-gray-300">
              Enter the room code shared by your friend (e.g. BEAR-7788):
            </p>
            <form onSubmit={handleJoin} className="space-y-3">
              <input
                type="text"
                placeholder="BEAR-XXXX"
                value={joinCodeInput}
                onChange={(e) => setJoinCodeInput(e.target.value)}
                className="w-full bg-black/50 border-2 border-[#FFD166] rounded-xl px-3 py-2 text-center font-pixel text-base text-white tracking-widest uppercase focus:outline-none focus:ring-2 focus:ring-[#FFD166]"
                maxLength={9}
                autoFocus
              />
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => setShowCodeModal(false)}
                  className="flex-1 py-2 rounded-xl bg-gray-700 hover:bg-gray-600 text-xs font-pixel"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 py-2 rounded-xl btn-pixel btn-pixel-gold text-xs font-pixel"
                >
                  Join Room
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

