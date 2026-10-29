// FeaturesSection.tsx - Showcase of the 6 core pillars of Bear Dash

import React from 'react';

export const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: '🏁',
      title: '2–8 Player Multiplayer',
      desc: 'Race in real time with private rooms, custom invite codes, or instant single-player practice with adorable AI baby bears.',
      color: '#FFD166',
    },
    {
      icon: '❤️',
      title: '3-Heart Survival Drama',
      desc: 'Start with 3 lives. Take a hit and your bear flashes red. At 1 life, your heart races and screen edges pulse red. Reach 0 to float as an angelic ghost spectator!',
      color: '#FF758F',
    },
    {
      icon: '🏞️',
      title: '6 Seamless Biomes',
      desc: 'Over 13,000 pixels of handcrafted adventure across Peach Forest, River Bridges, Crystal Caves, Snowy Peaks, Molten Castle, and Rainbow Clouds.',
      color: '#70E000',
    },
    {
      icon: '🎁',
      title: '11 Power-Ups & Mystery Boxes',
      desc: 'Shatter glowing treasure chests to unleash Gem Magnets, Speed Boosts, Hoverboards, Invincibility, Super Jumps, Slow-Mo and Golden Bear mode!',
      color: '#4CC9F0',
    },
    {
      icon: '✨',
      title: 'Modern HD Pixel Art',
      desc: 'Alive with golden sunset lighting, swaying trees, fluttering butterflies, waterfalls, floating leaves, and pixel dust under little bear paws.',
      color: '#9D4EDD',
    },
    {
      icon: '🎵',
      title: 'Dynamic Chiptune Audio',
      desc: 'Energetic procedural 16-bit soundtracks inspired by Mario and Kirby that dynamically speed up when sprinting towards the finish line!',
      color: '#FF7B54',
    },
  ];

  return (
    <section className="py-16 px-4 bg-[#1B1425]">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center space-y-3">
          <div className="font-pixel text-xs text-[#FF758F] tracking-widest uppercase">
            WHY YOU WILL LOVE IT
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white">
            Designed for Pure Joy & Excitement
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base font-fun">
            Inspired by Subway Surfers, Mario, Crossy Road, Fall Guys, and Celeste — combining tight
            retro platforming with modern multiplayer racing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feat, i) => (
            <div
              key={i}
              className="pixel-box p-6 space-y-3 transition-transform hover:-translate-y-1"
              style={{ borderColor: `${feat.color}60` }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl shadow-inner"
                style={{ backgroundColor: `${feat.color}25` }}
              >
                {feat.icon}
              </div>
              <h3 className="text-lg font-bold text-white font-fun" style={{ color: feat.color }}>
                {feat.title}
              </h3>
              <p className="text-gray-300 text-xs sm:text-sm font-fun leading-relaxed">
                {feat.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

