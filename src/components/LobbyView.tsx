// LobbyView.tsx - Multiplayer Matchmaking, Room Lobby and Host Controls

import React, { useState } from 'react';
import { PlayerCustomization } from '../game/types';
import { FUR_COLORS, HATS_CATALOG } from '../game/constants';

interface LobbyViewProps {
  roomCode: string;
  isHost: boolean;
  customization: PlayerCustomization;
  botCount: number;
  setBotCount: (count: number) => void;
  onStartRace: () => void;
  onLeaveLobby: () => void;
  onCustomize: () => void;
}

export const LobbyView: React.FC<LobbyViewProps> = ({
  roomCode,
  isHost,
  customization,
  botCount,
  setBotCount,
  onStartRace,
  onLeaveLobby,
  onCustomize,
}) => {
  const [copied, setCopied] = useState(false);

  const copyCode = () => {
    navigator.clipboard?.writeText(roomCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const botList = [
    { name: 'Honey 🍯', fur: 'caramel', hat: 'crown' },
    { name: 'Bramble 🍓', fur: 'brown', hat: 'strawberry' },
    { name: 'Waffles 🧇', fur: 'golden', hat: 'chef' },
    { name: 'Pip 🐼', fur: 'panda', hat: 'propeller' },
    { name: 'Mochi 🍡', fur: 'pink', hat: 'flower' },
    { name: 'Barnaby 🎩', fur: 'shadow', hat: 'wizard' },
    { name: 'Frosty ❄️', fur: 'white', hat: 'viking' },
  ].slice(0, botCount);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-6">
      {/* Lobby Header Card */}
      <div className="pixel-box-gold p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <div className="font-pixel text-[11px] text-[#FFD166] uppercase">MULTIPLAYER ROOM</div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
            Lobby: <span className="font-pixel text-yellow-300">{roomCode}</span>
          </h2>
          <p className="text-xs text-gray-300 mt-1 font-fun">
            Share this room code with friends to race together!
          </p>
        </div>

        <div className="flex gap-2">
          <button
            onClick={copyCode}
            className="btn-pixel btn-pixel-gold px-4 py-2.5 rounded-xl text-xs font-pixel"
          >
            {copied ? 'COPIED! ✔' : 'COPY CODE 📋'}
          </button>
          <button
            onClick={onLeaveLobby}
            className="bg-gray-700 hover:bg-gray-600 px-4 py-2.5 rounded-xl text-xs font-pixel text-gray-200"
          >
            LEAVE
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left Column: Racers in Room */}
        <div className="md:col-span-2 pixel-box p-6 space-y-4">
          <div className="flex items-center justify-between pb-2 border-b border-white/10">
            <h3 className="font-pixel text-xs text-[#FF758F] flex items-center gap-2">
              <span>🐻</span> RACERS READY ({1 + botCount} / 8)
            </h3>
            <span className="text-[10px] font-pixel text-[#70E000]">● LIVE SYNC</span>
          </div>

          <div className="space-y-2.5">
            {/* Local Player */}
            <div className="flex items-center justify-between p-3 rounded-xl bg-[#2D1A3D] border-2 border-[#FFD166]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#FF7B54] to-[#FFD166] flex items-center justify-center text-2xl shadow-sm">
                  🐻
                </div>
                <div>
                  <div className="font-pixel text-xs text-white flex items-center gap-2">
                    {customization.name}
                    <span className="text-[9px] bg-[#FFD166] text-[#381A00] font-bold px-1.5 py-0.5 rounded">
                      HOST (YOU)
                    </span>
                  </div>
                  <div className="text-[11px] text-gray-300 capitalize font-fun mt-0.5">
                    {customization.fur} bear • {customization.hat} hat
                  </div>
                </div>
              </div>
              <span className="text-xs font-pixel text-[#70E000]">READY ✔</span>
            </div>

            {/* AI Bot Racers */}
            {botList.map((b, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between p-3 rounded-xl bg-black/20 border border-white/5"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-2xl">
                    🐻
                  </div>
                  <div>
                    <div className="font-pixel text-xs text-gray-200 flex items-center gap-2">
                      {b.name}
                      <span className="text-[9px] bg-purple-600/50 text-purple-200 px-1.5 py-0.5 rounded font-mono">
                        AI BOT
                      </span>
                    </div>
                    <div className="text-[11px] text-gray-400 capitalize font-fun mt-0.5">
                      {b.fur} bear • {HATS_CATALOG[b.hat]?.name || b.hat}
                    </div>
                  </div>
                </div>
                <span className="text-xs font-pixel text-[#70E000]">READY ✔</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Host Match Options & Start */}
        <div className="pixel-box p-6 space-y-6 flex flex-col justify-between">
          <div className="space-y-4">
            <h3 className="font-pixel text-xs text-[#FFD166]">RACE SETTINGS</h3>

            {/* Bot Count Slider */}
            <div>
              <div className="flex justify-between text-xs text-gray-300 font-fun mb-1">
                <span>AI Racers to Fill:</span>
                <span className="font-pixel text-[#FFD166]">{botCount} Bots</span>
              </div>
              <input
                type="range"
                min="0"
                max="7"
                value={botCount}
                onChange={(e) => setBotCount(parseInt(e.target.value, 10))}
                className="w-full accent-[#FFD166]"
              />
            </div>

            <div className="p-3 bg-black/30 rounded-xl border border-white/5 space-y-1 text-xs text-gray-300 font-fun">
              <div className="font-bold text-white">Course Details:</div>
              <div>• Biomes: 6 Distinct Zones</div>
              <div>• Length: 13,200 Pixels</div>
              <div>• Obstacles: High Danger</div>
            </div>

            <button
              onClick={onCustomize}
              className="w-full py-2.5 rounded-xl bg-white/10 hover:bg-white/20 font-pixel text-xs text-gray-200"
            >
              CHANGE WARDROBE 👑
            </button>
          </div>

          <button
            onClick={onStartRace}
            className="w-full btn-pixel btn-pixel-gold py-4 rounded-2xl font-pixel text-sm tracking-wider shadow-lg"
          >
            START RACE NOW 🏁
          </button>
        </div>
      </div>
    </div>
  );
};

