// CharacterSelect.tsx - Wardrobe and Character Customization System

import React from 'react';
import { PlayerCustomization, FurColor, HatType, ScarfType, BackpackType } from '../game/types';
import { FUR_COLORS, HATS_CATALOG, SCARVES_CATALOG, BACKPACKS_CATALOG } from '../game/constants';

interface CharacterSelectProps {
  customization: PlayerCustomization;
  setCustomization: (custom: PlayerCustomization) => void;
  onSaveAndClose: () => void;
}

export const CharacterSelect: React.FC<CharacterSelectProps> = ({
  customization,
  setCustomization,
  onSaveAndClose,
}) => {
  const updateField = <K extends keyof PlayerCustomization>(
    field: K,
    val: PlayerCustomization[K]
  ) => {
    const updated = { ...customization, [field]: val };
    setCustomization(updated);
    // Persist in localStorage
    try {
      localStorage.setItem('bear_dash_racer', JSON.stringify(updated));
    } catch (e) {
      // ignore
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row items-start justify-between gap-8">
        {/* Left Column: Live 2D Pixel Bear Preview */}
        <div className="w-full md:w-80 pixel-box p-6 flex flex-col items-center text-center">
          <div className="font-pixel text-xs text-[#FFD166] mb-4">BABY BEAR PREVIEW</div>

          <div className="w-48 h-56 bg-gradient-to-b from-[#2B1B3D] to-[#1F142B] rounded-2xl flex flex-col items-center justify-center relative border-2 border-white/10 shadow-inner mb-4 overflow-hidden">
            {/* Ground */}
            <div className="w-full h-8 bg-[#70E000] absolute bottom-0 border-t-2 border-[#A7FF00]" />

            {/* Live Bear Avatar */}
            <div className="relative z-10 flex flex-col items-center animate-bounce-slow">
              {/* Hat Icon */}
              {customization.hat !== 'none' && (
                <div className="text-2xl -mb-3 z-20">
                  {HATS_CATALOG[customization.hat]?.icon || '👑'}
                </div>
              )}
              {/* Bear Head & Body */}
              <div className="text-6xl drop-shadow-md">🐻</div>
              {/* Accessories indicator */}
              <div className="flex gap-1 -mt-2">
                {customization.scarf !== 'none' && <span className="text-sm">🧣</span>}
                {customization.backpack !== 'none' && (
                  <span className="text-sm">
                    {BACKPACKS_CATALOG[customization.backpack]?.icon || '🎒'}
                  </span>
                )}
              </div>
            </div>
          </div>

          <div className="w-full space-y-3">
            <div>
              <label className="text-[11px] font-pixel text-gray-300 block mb-1">
                RACER NAME
              </label>
              <input
                type="text"
                value={customization.name}
                onChange={(e) => updateField('name', e.target.value.slice(0, 14))}
                placeholder="Name your bear..."
                className="w-full bg-black/40 border-2 border-[#FF758F] rounded-xl px-3 py-2 text-center font-bold text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#FFD166]"
                maxLength={14}
              />
            </div>

            <button
              onClick={onSaveAndClose}
              className="w-full btn-pixel btn-pixel-gold py-3 rounded-xl font-pixel text-xs mt-2"
            >
              SAVE RACER 🐾
            </button>
          </div>
        </div>

        {/* Right Column: Customization Tabs & Options */}
        <div className="flex-1 space-y-6">
          {/* Fur Color Selector */}
          <div className="pixel-box p-5">
            <h3 className="font-pixel text-xs text-[#FFD166] mb-3 flex items-center gap-2">
              <span>🎨</span> FUR COLOR
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {(Object.keys(FUR_COLORS) as FurColor[]).map((f) => {
                const info = FUR_COLORS[f];
                const isSelected = customization.fur === f;
                return (
                  <button
                    key={f}
                    onClick={() => updateField('fur', f)}
                    className={`p-2.5 rounded-xl border-2 transition-all flex items-center gap-2 text-left ${
                      isSelected
                        ? 'border-[#FFD166] bg-[#FFD166]/20 shadow-md'
                        : 'border-white/10 hover:border-white/30 bg-black/20'
                    }`}
                  >
                    <div
                      className="w-6 h-6 rounded-full border border-white/40 shadow-sm"
                      style={{ backgroundColor: info.primary }}
                    />
                    <div className="text-xs font-bold leading-tight truncate">{info.name}</div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Hats Selector */}
          <div className="pixel-box p-5">
            <h3 className="font-pixel text-xs text-[#FF758F] mb-3 flex items-center gap-2">
              <span>👑</span> HATS & HELMETS
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {(Object.keys(HATS_CATALOG) as HatType[]).map((h) => {
                const info = HATS_CATALOG[h];
                const isSelected = customization.hat === h;
                return (
                  <button
                    key={h}
                    onClick={() => updateField('hat', h)}
                    className={`p-2.5 rounded-xl border-2 transition-all flex items-center gap-2 text-left ${
                      isSelected
                        ? 'border-[#FF758F] bg-[#FF758F]/20 shadow-md'
                        : 'border-white/10 hover:border-white/30 bg-black/20'
                    }`}
                  >
                    <span className="text-xl">{info.icon}</span>
                    <div className="truncate text-xs font-bold">{info.name}</div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Scarves Selector */}
          <div className="pixel-box p-5">
            <h3 className="font-pixel text-xs text-[#4CC9F0] mb-3 flex items-center gap-2">
              <span>🧣</span> SCARVES & BOWS
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
              {(Object.keys(SCARVES_CATALOG) as ScarfType[]).map((s) => {
                const info = SCARVES_CATALOG[s];
                const isSelected = customization.scarf === s;
                return (
                  <button
                    key={s}
                    onClick={() => updateField('scarf', s)}
                    className={`p-2.5 rounded-xl border-2 transition-all flex items-center gap-2 text-left ${
                      isSelected
                        ? 'border-[#4CC9F0] bg-[#4CC9F0]/20 shadow-md'
                        : 'border-white/10 hover:border-white/30 bg-black/20'
                    }`}
                  >
                    <div
                      className="w-4 h-4 rounded-full border border-white/40"
                      style={{ backgroundColor: info.color === 'transparent' ? '#666' : info.color }}
                    />
                    <div className="truncate text-xs font-bold">{info.name}</div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Backpacks Selector */}
          <div className="pixel-box p-5">
            <h3 className="font-pixel text-xs text-[#70E000] mb-3 flex items-center gap-2">
              <span>🎒</span> BACKPACKS & GEAR
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
              {(Object.keys(BACKPACKS_CATALOG) as BackpackType[]).map((bp) => {
                const info = BACKPACKS_CATALOG[bp];
                const isSelected = customization.backpack === bp;
                return (
                  <button
                    key={bp}
                    onClick={() => updateField('backpack', bp)}
                    className={`p-2.5 rounded-xl border-2 transition-all flex items-center gap-2 text-left ${
                      isSelected
                        ? 'border-[#70E000] bg-[#70E000]/20 shadow-md'
                        : 'border-white/10 hover:border-white/30 bg-black/20'
                    }`}
                  >
                    <span className="text-xl">{info.icon}</span>
                    <div className="truncate text-xs font-bold">{info.name}</div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

