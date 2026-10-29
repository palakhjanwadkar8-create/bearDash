// PowerupsGuide.tsx - Visual Encyclopedia of all 11 Boosters & Collectibles

import React from 'react';
import { POWERUPS_CONFIG } from '../game/constants';

export const PowerupsGuide: React.FC = () => {
  return (
    <section className="py-16 px-4 bg-[#231731] border-t border-b border-white/5">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center space-y-3">
          <div className="font-pixel text-xs text-[#FFD166] tracking-widest uppercase">
            COLLECTIBLES & BOOSTERS
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Power-Ups Catalog 🎁
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-sm font-fun">
            Crack open glowing mystery chests along the course to turn the tide of the race.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {Object.entries(POWERUPS_CONFIG).map(([key, p]) => (
            <div
              key={key}
              className="bg-[#1C1229] border-2 rounded-2xl p-4 flex flex-col justify-between hover:border-white/40 transition-colors shadow-md"
              style={{ borderColor: `${p.color}50` }}
            >
              <div className="flex items-start gap-3">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
                  style={{ backgroundColor: `${p.color}25` }}
                >
                  {p.icon}
                </div>
                <div>
                  <h4 className="font-bold text-sm text-white font-fun" style={{ color: p.color }}>
                    {p.name}
                  </h4>
                  <div className="text-[10px] text-gray-400 font-pixel mt-0.5">
                    {p.duration > 0 ? `${p.duration}s Active` : 'Instant'}
                  </div>
                </div>
              </div>
              <p className="text-xs text-gray-300 font-fun mt-3 leading-relaxed">
                {p.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

