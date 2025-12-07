'use client';

import { useState, useEffect } from 'react';

export default function HeatDemo() {
  const [hasTint, setHasTint] = useState(false);
  const [temperature, setTemperature] = useState(70);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (hasTint) {
      setTemperature(70);
      interval = setInterval(() => {
        setTemperature((prev) => Math.min(prev + 1, 85));
      }, 100);
    } else {
      setTemperature(70);
      interval = setInterval(() => {
        setTemperature((prev) => Math.min(prev + 2, 130));
      }, 100);
    }

    return () => clearInterval(interval);
  }, [hasTint]);

  const getTemperatureColor = (temp: number) => {
    if (temp < 80) return 'text-emerald-400';
    if (temp < 100) return 'text-yellow-400';
    if (temp < 115) return 'text-orange-400';
    return 'text-red-500';
  };

  return (
    <section className="py-24 bg-gradient-to-b from-gray-950 to-black">
      <div className="container-wide">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-amber-400 text-sm font-medium uppercase tracking-widest mb-4">Heat Rejection Demo</p>
            <h2 className="text-3xl font-extralight mb-4">Feel the Difference</h2>
            <p className="text-gray-500">
              LLumar Ceramic IRX blocks up to 98% of infrared heat. See how it keeps your Tesla cool.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* No Tint */}
            <div 
              className={`p-8 rounded-2xl border transition-all cursor-pointer ${
                !hasTint ? 'border-red-500/50 bg-red-500/5' : 'border-white/10 opacity-50'
              }`}
              onClick={() => setHasTint(false)}
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-light">No Tint</h3>
                <div className={`w-4 h-4 rounded-full ${!hasTint ? 'bg-red-500' : 'bg-white/20'}`} />
              </div>

              <div className="aspect-video rounded-xl bg-gradient-to-b from-orange-500/30 to-red-500/30 relative mb-6 overflow-hidden">
                {/* Sun rays */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32">
                  <div className="w-full h-full bg-gradient-to-b from-yellow-400/60 to-transparent" 
                       style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }} />
                </div>
                {/* Car interior */}
                <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-gray-900 to-transparent" />
                {/* Heat waves */}
                {!hasTint && (
                  <>
                    <div className="absolute inset-0 bg-gradient-to-b from-orange-500/20 to-transparent animate-pulse" />
                    <div className="absolute top-1/4 left-1/2 -translate-x-1/2 text-4xl animate-bounce">☀️</div>
                  </>
                )}
              </div>

              <div className="text-center">
                <p className="text-xs text-gray-500 mb-2">Interior Temperature</p>
                <p className={`text-5xl font-extralight ${!hasTint ? getTemperatureColor(temperature) : 'text-gray-600'}`}>
                  {!hasTint ? temperature : '--'}°F
                </p>
              </div>
            </div>

            {/* With Ceramic Tint */}
            <div 
              className={`p-8 rounded-2xl border transition-all cursor-pointer ${
                hasTint ? 'border-emerald-500/50 bg-emerald-500/5' : 'border-white/10 opacity-50'
              }`}
              onClick={() => setHasTint(true)}
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-light">LLumar Ceramic IRX</h3>
                <div className={`w-4 h-4 rounded-full ${hasTint ? 'bg-emerald-500' : 'bg-white/20'}`} />
              </div>

              <div className="aspect-video rounded-xl bg-gradient-to-b from-amber-500/10 to-cyan-500/10 relative mb-6 overflow-hidden">
                {/* Sun rays blocked */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32">
                  <div className="w-full h-full bg-gradient-to-b from-yellow-400/20 to-transparent" 
                       style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }} />
                </div>
                {/* Tint barrier */}
                <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-amber-500/50 via-amber-400/50 to-amber-500/50" />
                {/* Car interior - cooler */}
                <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-gray-900 to-transparent" />
                {/* Cool indicator */}
                {hasTint && (
                  <div className="absolute top-1/4 left-1/2 -translate-x-1/2 text-4xl">❄️</div>
                )}
                {/* IR rejection text */}
                <div className="absolute top-4 left-4 px-2 py-1 rounded bg-emerald-500/20 text-xs text-emerald-400">
                  98% IR Blocked
                </div>
              </div>

              <div className="text-center">
                <p className="text-xs text-gray-500 mb-2">Interior Temperature</p>
                <p className={`text-5xl font-extralight ${hasTint ? getTemperatureColor(temperature) : 'text-gray-600'}`}>
                  {hasTint ? temperature : '--'}°F
                </p>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-12 grid grid-cols-3 gap-4 text-center">
            <div className="p-4 rounded-xl border border-white/10">
              <p className="text-2xl font-extralight text-amber-400">45°F</p>
              <p className="text-xs text-gray-500">Cooler Interior</p>
            </div>
            <div className="p-4 rounded-xl border border-white/10">
              <p className="text-2xl font-extralight text-amber-400">98%</p>
              <p className="text-xs text-gray-500">IR Heat Blocked</p>
            </div>
            <div className="p-4 rounded-xl border border-white/10">
              <p className="text-2xl font-extralight text-amber-400">60%</p>
              <p className="text-xs text-gray-500">Less A/C Needed</p>
            </div>
          </div>

          <p className="text-center text-gray-600 text-xs mt-8">
            Click each panel to simulate heat buildup. Demonstration based on typical Oklahoma summer conditions.
          </p>
        </div>
      </div>
    </section>
  );
}

