'use client';

import { useState } from 'react';

const shades = [
  { vlt: 70, name: 'Light', description: 'Nearly clear, maximum heat rejection', legal: true },
  { vlt: 50, name: 'Medium Light', description: 'Light tint, excellent visibility', legal: true },
  { vlt: 35, name: 'Medium', description: 'Great balance of privacy and visibility', legal: true },
  { vlt: 20, name: 'Dark', description: 'Enhanced privacy, good visibility', legal: false },
  { vlt: 5, name: 'Limo', description: 'Maximum privacy', legal: false },
];

export default function ShadeSimulator() {
  const [selectedShade, setSelectedShade] = useState(shades[2]);
  const [view, setView] = useState<'inside' | 'outside'>('outside');

  return (
    <section className="py-24 bg-black">
      <div className="container-wide">
        <div className="text-center mb-12">
          <p className="text-amber-400 text-sm font-medium uppercase tracking-widest mb-4">Shade Simulator</p>
          <h2 className="text-3xl font-extralight mb-4">See the Difference</h2>
          <p className="text-gray-500">Preview how different tint levels look from inside and outside your Tesla</p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* View Toggle */}
          <div className="flex justify-center gap-4 mb-8">
            <button
              onClick={() => setView('outside')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                view === 'outside' ? 'bg-amber-500 text-black' : 'bg-white/10 text-gray-400'
              }`}
            >
              View from Outside
            </button>
            <button
              onClick={() => setView('inside')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                view === 'inside' ? 'bg-amber-500 text-black' : 'bg-white/10 text-gray-400'
              }`}
            >
              View from Inside
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Preview Window */}
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-white/10">
                {/* Background scene */}
                <div className="absolute inset-0 bg-gradient-to-b from-blue-900 to-gray-800">
                  {/* Sky */}
                  <div className="absolute inset-0 bg-gradient-to-b from-sky-600 to-sky-400 opacity-80" />
                  {/* Sun */}
                  <div className="absolute top-8 right-12 w-16 h-16 rounded-full bg-yellow-300 blur-sm" />
                  {/* Ground */}
                  <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-gray-600 to-gray-500" />
                </div>

                {/* Tint overlay */}
                <div 
                  className="absolute inset-0 bg-black transition-opacity duration-300"
                  style={{ 
                    opacity: view === 'outside' 
                      ? (100 - selectedShade.vlt) / 100 * 0.9
                      : (100 - selectedShade.vlt) / 100 * 0.5
                  }}
                />

                {/* Window frame */}
                <div className="absolute inset-4 border-4 border-gray-900 rounded-xl" />

                {/* Labels */}
                <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                  <div className="bg-black/50 backdrop-blur-sm px-3 py-2 rounded-lg">
                    <p className="text-xs text-gray-400">View</p>
                    <p className="text-sm font-medium">{view === 'outside' ? 'Looking In' : 'Looking Out'}</p>
                  </div>
                  <div className="bg-black/50 backdrop-blur-sm px-3 py-2 rounded-lg text-right">
                    <p className="text-xs text-gray-400">VLT</p>
                    <p className="text-sm font-medium text-amber-400">{selectedShade.vlt}%</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Shade Selection */}
            <div>
              <h3 className="text-sm text-gray-400 uppercase tracking-widest mb-6">Select Tint Level</h3>
              <div className="space-y-3">
                {shades.map((shade) => (
                  <button
                    key={shade.vlt}
                    onClick={() => setSelectedShade(shade)}
                    className={`w-full p-4 rounded-xl border flex items-center gap-4 transition-all ${
                      selectedShade.vlt === shade.vlt
                        ? 'border-amber-500 bg-amber-500/10'
                        : 'border-white/10 hover:border-white/30'
                    }`}
                  >
                    {/* Shade preview circle */}
                    <div 
                      className="w-12 h-12 rounded-full border border-white/20"
                      style={{ backgroundColor: `rgba(0, 0, 0, ${(100 - shade.vlt) / 100})` }}
                    />
                    <div className="flex-1 text-left">
                      <div className="flex items-center gap-2">
                        <span className="font-medium">{shade.vlt}% VLT</span>
                        <span className="text-xs text-gray-500">({shade.name})</span>
                        {shade.legal ? (
                          <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400">Legal Front</span>
                        ) : (
                          <span className="text-[10px] px-2 py-0.5 rounded-full bg-red-500/20 text-red-400">Rear Only</span>
                        )}
                      </div>
                      <p className="text-xs text-gray-500 mt-1">{shade.description}</p>
                    </div>
                  </button>
                ))}
              </div>

              {/* Legal Notice */}
              <div className="mt-6 p-4 rounded-xl bg-amber-500/10 border border-amber-500/30">
                <p className="text-xs text-amber-400">
                  <strong>Oklahoma Law:</strong> Front side windows must allow 25%+ light transmission. 
                  Rear windows have no restrictions. We&apos;ll help you choose a legal setup.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

