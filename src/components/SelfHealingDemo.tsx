'use client';

import { useState, useEffect } from 'react';

export default function SelfHealingDemo() {
  const [isHealing, setIsHealing] = useState(false);
  const [scratchWidth, setScratchWidth] = useState(100);

  useEffect(() => {
    if (isHealing) {
      const interval = setInterval(() => {
        setScratchWidth((prev) => {
          if (prev <= 0) {
            clearInterval(interval);
            return 0;
          }
          return prev - 5;
        });
      }, 50);
      return () => clearInterval(interval);
    }
  }, [isHealing]);

  const handleHeal = () => {
    if (scratchWidth === 0) {
      setScratchWidth(100);
      setIsHealing(false);
    } else {
      setIsHealing(true);
    }
  };

  return (
    <section className="py-24 bg-gradient-to-b from-black to-gray-950">
      <div className="container-wide">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-cyan-400 text-sm font-medium uppercase tracking-widest mb-4">Self-Healing Technology</p>
            <h2 className="text-3xl font-extralight mb-4">Watch Scratches Disappear</h2>
            <p className="text-gray-500">
              Our PPF uses advanced polymer technology that allows minor scratches to heal themselves when exposed to heat.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Interactive Demo */}
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 border border-white/10 overflow-hidden">
                {/* Surface */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5" />
                
                {/* Scratch lines */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <line
                    x1="20" y1="30"
                    x2={20 + scratchWidth * 0.6} y2="30"
                    stroke="rgba(255,255,255,0.3)"
                    strokeWidth="0.5"
                    className="transition-all duration-100"
                  />
                  <line
                    x1="30" y1="50"
                    x2={30 + scratchWidth * 0.5} y2="45"
                    stroke="rgba(255,255,255,0.4)"
                    strokeWidth="0.3"
                    className="transition-all duration-100"
                  />
                  <line
                    x1="25" y1="70"
                    x2={25 + scratchWidth * 0.7} y2="65"
                    stroke="rgba(255,255,255,0.35)"
                    strokeWidth="0.4"
                    className="transition-all duration-100"
                  />
                </svg>

                {/* Heat indicator */}
                {isHealing && scratchWidth > 0 && (
                  <div className="absolute inset-0 bg-gradient-to-t from-orange-500/20 to-transparent animate-pulse" />
                )}

                {/* Status */}
                <div className="absolute bottom-4 left-4 right-4 text-center">
                  <p className={`text-sm transition-colors ${scratchWidth === 0 ? 'text-cyan-400' : 'text-gray-500'}`}>
                    {scratchWidth === 0 ? '✓ Fully healed!' : isHealing ? 'Healing in progress...' : 'Scratched surface'}
                  </p>
                </div>
              </div>

              {/* Heat button */}
              <button
                onClick={handleHeal}
                className={`mt-6 w-full py-4 rounded-full font-medium transition-all ${
                  scratchWidth === 0
                    ? 'bg-white/10 text-white hover:bg-white/20'
                    : 'bg-gradient-to-r from-orange-500 to-red-500 text-white hover:scale-105'
                }`}
              >
                {scratchWidth === 0 ? 'Reset Demo' : '☀️ Apply Heat'}
              </button>
            </div>

            {/* Explanation */}
            <div>
              <h3 className="text-xl font-light mb-6">How It Works</h3>
              <div className="space-y-6">
                {[
                  {
                    step: '01',
                    title: 'Scratch Occurs',
                    description: 'Light scratches and swirl marks indent the top layer of the PPF.',
                  },
                  {
                    step: '02',
                    title: 'Heat Applied',
                    description: 'Warm water, sunlight, or a heat gun activates the film\'s memory.',
                  },
                  {
                    step: '03',
                    title: 'Polymers Reform',
                    description: 'The elastomeric polymers return to their original smooth state.',
                  },
                  {
                    step: '04',
                    title: 'Scratch Gone',
                    description: 'The surface is restored to optical clarity in minutes.',
                  },
                ].map((item) => (
                  <div key={item.step} className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center flex-shrink-0">
                      <span className="text-xs text-cyan-400">{item.step}</span>
                    </div>
                    <div>
                      <h4 className="font-light mb-1">{item.title}</h4>
                      <p className="text-sm text-gray-500">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

