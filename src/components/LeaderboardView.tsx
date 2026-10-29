// LeaderboardView.tsx - Global and Friends Hall of Fame

import React, { useState } from 'react';

interface LeaderboardEntry {
  rank: number;
  name: string;
  fur: string;
  hat: string;
  time: string;
  score: number;
  gems: number;
  wins: number;
}

export const LeaderboardView: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'weekly' | 'today'>('weekly');

  const racers: LeaderboardEntry[] = [
    { rank: 1, name: 'Honey Bear 🍯', fur: 'caramel', hat: 'crown', time: '58.42s', score: 18450, gems: 84, wins: 42 },
    { rank: 2, name: 'Bramble Dash 🍓', fur: 'brown', hat: 'strawberry', time: '61.18s', score: 16920, gems: 76, wins: 38 },
    { rank: 3, name: 'Pip The Panda 🐼', fur: 'panda', hat: 'propeller', time: '63.90s', score: 15400, gems: 71, wins: 31 },
    { rank: 4, name: 'Waffles 🧇', fur: 'golden', hat: 'chef', time: '65.20s', score: 14200, gems: 65, wins: 24 },
    { rank: 5, name: 'Mochi 🍡', fur: 'pink', hat: 'flower', time: '67.05s', score: 13100, gems: 58, wins: 19 },
    { rank: 6, name: 'Barnaby 🎩', fur: 'shadow', hat: 'wizard', time: '69.44s', score: 12500, gems: 52, wins: 16 },
    { rank: 7, name: 'Frosty ❄️', fur: 'white', hat: 'viking', time: '72.30s', score: 11800, gems: 47, wins: 14 },
  ];

  return (
    <section className="py-16 px-4 bg-[#1B1425]">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <div className="font-pixel text-xs text-[#FFD166] uppercase">HALL OF FAME</div>
            <h2 className="text-3xl font-extrabold text-white">Global Leaderboard 🏆</h2>
          </div>

          {/* Time Filter Pills */}
          <div className="flex bg-[#2B1B3D] p-1 rounded-xl border border-white/10">
            {(['today', 'weekly', 'all'] as const).map((t) => (
              <button
                key={t}
                onClick={() => setFilter(t)}
                className={`px-3 py-1.5 rounded-lg text-xs font-pixel capitalize transition-all ${
                  filter === t ? 'bg-[#FF758F] text-white shadow-sm' : 'text-gray-400 hover:text-white'
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        {/* Podium Top 3 Showcase */}
        <div className="grid grid-cols-3 gap-3 items-end pt-6 pb-4">
          {/* 2nd Place */}
          <div className="pixel-box p-4 text-center space-y-2 order-1 bg-[#231731] transform hover:-translate-y-1 transition-transform">
            <div className="text-2xl">🥈</div>
            <div className="text-4xl">🐻</div>
            <div className="font-bold text-xs truncate text-white">{racers[1].name}</div>
            <div className="font-pixel text-[10px] text-[#4CC9F0]">{racers[1].time}</div>
            <div className="text-[11px] text-gray-400 font-mono">{racers[1].score} pts</div>
          </div>

          {/* 1st Place Champion */}
          <div className="pixel-box-gold p-5 text-center space-y-2 order-2 bg-[#2D2115] -translate-y-4 shadow-xl">
            <div className="text-3xl animate-bounce-slow">👑</div>
            <div className="text-5xl">🐻</div>
            <div className="font-bold text-sm text-[#FFD166] truncate">{racers[0].name}</div>
            <div className="font-pixel text-xs text-[#70E000]">{racers[0].time}</div>
            <div className="text-xs text-yellow-200 font-mono font-bold">{racers[0].score} pts</div>
          </div>

          {/* 3rd Place */}
          <div className="pixel-box p-4 text-center space-y-2 order-3 bg-[#231731] transform hover:-translate-y-1 transition-transform">
            <div className="text-2xl">🥉</div>
            <div className="text-4xl">🐻</div>
            <div className="font-bold text-xs truncate text-white">{racers[2].name}</div>
            <div className="font-pixel text-[10px] text-[#FF758F]">{racers[2].time}</div>
            <div className="text-[11px] text-gray-400 font-mono">{racers[2].score} pts</div>
          </div>
        </div>

        {/* Full Table */}
        <div className="bg-[#241733] border-2 border-[#FF758F]/30 rounded-2xl overflow-hidden shadow-lg">
          <div className="grid grid-cols-12 px-4 py-3 bg-[#1D122B] text-[10px] font-pixel text-gray-400 uppercase tracking-wider border-b border-white/5">
            <div className="col-span-2 text-center">Rank</div>
            <div className="col-span-4">Racer</div>
            <div className="col-span-3 text-center">Fastest Time</div>
            <div className="col-span-3 text-right">Score</div>
          </div>

          <div className="divide-y divide-white/5">
            {racers.map((r) => (
              <div
                key={r.rank}
                className="grid grid-cols-12 px-4 py-3 items-center hover:bg-white/5 transition-colors"
              >
                <div className="col-span-2 text-center font-pixel text-xs text-[#FFD166]">
                  #{r.rank}
                </div>
                <div className="col-span-4 flex items-center gap-2">
                  <span className="text-base">🐻</span>
                  <span className="text-xs font-bold text-white truncate">{r.name}</span>
                </div>
                <div className="col-span-3 text-center font-pixel text-xs text-[#4CC9F0]">
                  {r.time}
                </div>
                <div className="col-span-3 text-right font-mono text-xs text-yellow-300 font-bold">
                  {r.score.toLocaleString()}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

