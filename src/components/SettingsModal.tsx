// SettingsModal.tsx - Audio, Graphics, Controls and Accessibility Settings

import React, { useState } from 'react';
import { soundEngine, AudioSettings } from '../audio/SoundEngine';

interface SettingsModalProps {
  onClose: () => void;
  screenShakeEnabled: boolean;
  setScreenShakeEnabled: (enabled: boolean) => void;
  scanlinesEnabled: boolean;
  setScanlinesEnabled: (enabled: boolean) => void;
  colorblindMode: string;
  setColorblindMode: (mode: string) => void;
}

export const SettingsModal: React.FC<SettingsModalProps> = ({
  onClose,
  screenShakeEnabled,
  setScreenShakeEnabled,
  scanlinesEnabled,
  setScanlinesEnabled,
  colorblindMode,
  setColorblindMode,
}) => {
  const [audio, setAudio] = useState<AudioSettings>(soundEngine.getSettings());

  const handleAudioChange = (field: keyof AudioSettings, val: number | boolean) => {
    const updated = { ...audio, [field]: val };
    setAudio(updated);
    soundEngine.updateSettings({ [field]: val });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm p-4">
      <div className="pixel-box max-w-lg w-full p-6 space-y-6 max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between pb-3 border-b border-white/10">
          <div className="flex items-center gap-2 font-pixel text-xs text-[#FFD166]">
            <span>⚙️</span> GAME SETTINGS
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white font-bold text-lg leading-none"
          >
            ✕
          </button>
        </div>

        {/* Audio Settings */}
        <div className="space-y-4 bg-[#1E132B] p-4 rounded-xl border border-white/5">
          <h4 className="font-pixel text-[11px] text-[#FF758F] flex items-center gap-2">
            <span>🔊</span> SOUND & MUSIC
          </h4>

          {/* Master Volume */}
          <div>
            <div className="flex justify-between text-xs font-fun text-gray-300 mb-1">
              <span>Master Volume</span>
              <span className="font-mono">{Math.round(audio.masterVolume * 100)}%</span>
            </div>
            <input
              type="range"
              min="0"
              max="1"
              step="0.05"
              value={audio.masterVolume}
              onChange={(e) => handleAudioChange('masterVolume', parseFloat(e.target.value))}
              className="w-full accent-[#FF758F]"
            />
          </div>

          {/* BGM Volume */}
          <div>
            <div className="flex justify-between text-xs font-fun text-gray-300 mb-1">
              <span>Music (BGM) Volume</span>
              <span className="font-mono">{Math.round(audio.bgmVolume * 100)}%</span>
            </div>
            <input
              type="range"
              min="0"
              max="1"
              step="0.05"
              value={audio.bgmVolume}
              onChange={(e) => handleAudioChange('bgmVolume', parseFloat(e.target.value))}
              className="w-full accent-[#FFD166]"
            />
          </div>

          {/* SFX Volume */}
          <div>
            <div className="flex justify-between text-xs font-fun text-gray-300 mb-1">
              <span>Sound Effects (SFX)</span>
              <span className="font-mono">{Math.round(audio.sfxVolume * 100)}%</span>
            </div>
            <input
              type="range"
              min="0"
              max="1"
              step="0.05"
              value={audio.sfxVolume}
              onChange={(e) => handleAudioChange('sfxVolume', parseFloat(e.target.value))}
              className="w-full accent-[#4CC9F0]"
            />
          </div>
        </div>

        {/* Graphics & Effects */}
        <div className="space-y-3 bg-[#1E132B] p-4 rounded-xl border border-white/5">
          <h4 className="font-pixel text-[11px] text-[#4CC9F0] flex items-center gap-2">
            <span>🖥️</span> GRAPHICS & CAMERA
          </h4>

          <label className="flex items-center justify-between cursor-pointer py-1">
            <span className="text-xs text-gray-300 font-fun">Screen Shake on Impact</span>
            <input
              type="checkbox"
              checked={screenShakeEnabled}
              onChange={(e) => setScreenShakeEnabled(e.target.checked)}
              className="w-4 h-4 accent-[#FF758F] rounded"
            />
          </label>

          <label className="flex items-center justify-between cursor-pointer py-1">
            <span className="text-xs text-gray-300 font-fun">Retro CRT Scanlines Overlay</span>
            <input
              type="checkbox"
              checked={scanlinesEnabled}
              onChange={(e) => setScanlinesEnabled(e.target.checked)}
              className="w-4 h-4 accent-[#FFD166] rounded"
            />
          </label>

          {/* Colorblind Accessibility */}
          <div className="pt-2">
            <span className="text-xs text-gray-300 font-fun block mb-1">
              Colorblind Accessibility
            </span>
            <select
              value={colorblindMode}
              onChange={(e) => setColorblindMode(e.target.value)}
              className="w-full bg-black/40 border border-white/20 rounded-lg px-2.5 py-1.5 text-xs text-white"
            >
              <option value="none">Default (Rich Vibrant Palette)</option>
              <option value="protanopia">Protanopia (Red-Green Friendly)</option>
              <option value="deuteranopia">Deuteranopia</option>
              <option value="tritanopia">Tritanopia (Blue-Yellow Friendly)</option>
            </select>
          </div>
        </div>

        {/* Controls Quick Reference */}
        <div className="bg-[#1E132B] p-4 rounded-xl border border-white/5 space-y-2">
          <h4 className="font-pixel text-[11px] text-[#70E000] flex items-center gap-2">
            <span>🎮</span> CONTROLS
          </h4>
          <div className="grid grid-cols-2 gap-2 text-xs text-gray-300 font-fun">
            <div>
              <span className="font-mono bg-black/40 px-1.5 py-0.5 rounded text-[#FFD166]">
                A / D
              </span>{' '}
              or <span className="font-mono bg-black/40 px-1.5 py-0.5 rounded text-[#FFD166]">← →</span> Run
            </div>
            <div>
              <span className="font-mono bg-black/40 px-1.5 py-0.5 rounded text-[#FF758F]">
                Space
              </span>{' '}
              or <span className="font-mono bg-black/40 px-1.5 py-0.5 rounded text-[#FF758F]">W / ↑</span> Jump
            </div>
            <div>
              <span className="font-mono bg-black/40 px-1.5 py-0.5 rounded text-[#4CC9F0]">
                Shift
              </span>{' '}
              Quick Dash
            </div>
            <div>
              <span className="font-mono bg-black/40 px-1.5 py-0.5 rounded text-[#70E000]">
                Esc
              </span>{' '}
              Pause Menu
            </div>
          </div>
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

