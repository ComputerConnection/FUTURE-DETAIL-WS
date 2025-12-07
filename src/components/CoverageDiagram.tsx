'use client';

import { useState } from 'react';

const packages = {
  'full-front': {
    name: 'Full Front',
    price: '$1,500+',
    coverage: '~30%',
    color: 'cyan',
    areas: ['hood', 'fenders', 'bumper', 'mirrors', 'headlights'],
  },
  'track': {
    name: 'Track Package',
    price: '$2,800+',
    coverage: '~50%',
    color: 'blue',
    areas: ['hood', 'fenders', 'bumper', 'mirrors', 'headlights', 'a-pillars', 'rockers', 'wheel-arches', 'door-edges'],
  },
  'full-body': {
    name: 'Full Body',
    price: '$5,500+',
    coverage: '100%',
    color: 'purple',
    areas: ['hood', 'fenders', 'bumper', 'mirrors', 'headlights', 'a-pillars', 'rockers', 'wheel-arches', 'door-edges', 'roof', 'doors', 'rear', 'trunk'],
  },
};

type PackageKey = keyof typeof packages;

export default function CoverageDiagram() {
  const [activePackage, setActivePackage] = useState<PackageKey>('track');
  const pkg = packages[activePackage];

  return (
    <section className="py-24 bg-black">
      <div className="container-wide">
        <div className="text-center mb-12">
          <p className="text-cyan-400 text-sm font-medium uppercase tracking-widest mb-4">Coverage Guide</p>
          <h2 className="text-3xl font-extralight mb-4">What&apos;s Covered?</h2>
          <p className="text-gray-500">Click a package to see what&apos;s protected</p>
        </div>

        {/* Package Selector */}
        <div className="flex justify-center gap-4 mb-12">
          {(Object.keys(packages) as PackageKey[]).map((key) => (
            <button
              key={key}
              onClick={() => setActivePackage(key)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all ${
                activePackage === key
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white scale-105'
                  : 'bg-white/5 text-gray-400 hover:bg-white/10'
              }`}
            >
              {packages[key].name}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          {/* Car Diagram */}
          <div className="relative aspect-[4/3] bg-gradient-to-br from-gray-900 to-black rounded-2xl border border-white/10 p-8">
            {/* Simplified car outline */}
            <svg viewBox="0 0 200 120" className="w-full h-full">
              {/* Car body outline */}
              <path
                d="M20 70 L40 70 L50 50 L80 40 L120 40 L150 50 L160 70 L180 70 L180 85 L20 85 Z"
                fill="transparent"
                stroke="rgba(255,255,255,0.2)"
                strokeWidth="1"
              />
              
              {/* Hood */}
              <path
                d="M50 50 L80 40 L80 55 L50 60 Z"
                className={`transition-all duration-300 ${pkg.areas.includes('hood') ? 'fill-cyan-500/40' : 'fill-transparent'}`}
                stroke="rgba(255,255,255,0.1)"
              />
              
              {/* Roof */}
              <path
                d="M80 40 L120 40 L120 50 L80 50 Z"
                className={`transition-all duration-300 ${pkg.areas.includes('roof') ? 'fill-cyan-500/40' : 'fill-transparent'}`}
                stroke="rgba(255,255,255,0.1)"
              />
              
              {/* Front bumper */}
              <path
                d="M20 70 L40 70 L50 60 L50 75 L20 75 Z"
                className={`transition-all duration-300 ${pkg.areas.includes('bumper') ? 'fill-cyan-500/40' : 'fill-transparent'}`}
                stroke="rgba(255,255,255,0.1)"
              />
              
              {/* Fenders */}
              <path
                d="M40 70 L50 60 L50 75 L40 75 Z"
                className={`transition-all duration-300 ${pkg.areas.includes('fenders') ? 'fill-cyan-500/40' : 'fill-transparent'}`}
                stroke="rgba(255,255,255,0.1)"
              />
              
              {/* Doors */}
              <path
                d="M80 50 L120 50 L120 75 L80 75 Z"
                className={`transition-all duration-300 ${pkg.areas.includes('doors') ? 'fill-cyan-500/40' : 'fill-transparent'}`}
                stroke="rgba(255,255,255,0.1)"
              />
              
              {/* Rear */}
              <path
                d="M150 50 L160 70 L180 70 L180 75 L150 75 Z"
                className={`transition-all duration-300 ${pkg.areas.includes('rear') ? 'fill-cyan-500/40' : 'fill-transparent'}`}
                stroke="rgba(255,255,255,0.1)"
              />
              
              {/* Rockers */}
              <path
                d="M40 80 L160 80 L160 85 L40 85 Z"
                className={`transition-all duration-300 ${pkg.areas.includes('rockers') ? 'fill-blue-500/40' : 'fill-transparent'}`}
                stroke="rgba(255,255,255,0.1)"
              />
              
              {/* Wheels */}
              <circle cx="55" cy="85" r="12" fill="rgba(255,255,255,0.1)" />
              <circle cx="145" cy="85" r="12" fill="rgba(255,255,255,0.1)" />
              
              {/* Headlights */}
              <circle
                cx="30" cy="72"
                r="4"
                className={`transition-all duration-300 ${pkg.areas.includes('headlights') ? 'fill-yellow-400' : 'fill-gray-700'}`}
              />
              
              {/* Mirrors */}
              <rect
                x="75" y="55"
                width="6" height="4"
                className={`transition-all duration-300 ${pkg.areas.includes('mirrors') ? 'fill-cyan-500/60' : 'fill-gray-700'}`}
              />
            </svg>

            {/* Legend */}
            <div className="absolute bottom-4 left-4 right-4 flex justify-center gap-4 text-xs">
              <span className="flex items-center gap-1">
                <span className="w-3 h-3 rounded bg-cyan-500/40" />
                Protected
              </span>
              <span className="flex items-center gap-1">
                <span className="w-3 h-3 rounded bg-white/10" />
                Not included
              </span>
            </div>
          </div>

          {/* Package Details */}
          <div>
            <div className="mb-6">
              <h3 className="text-2xl font-light mb-2">{pkg.name}</h3>
              <p className="text-4xl font-extralight text-cyan-400">{pkg.price}</p>
              <p className="text-gray-500 text-sm">{pkg.coverage} coverage</p>
            </div>

            <div className="space-y-3">
              <p className="text-sm text-gray-400 uppercase tracking-widest mb-4">Areas Covered:</p>
              <div className="grid grid-cols-2 gap-2">
                {pkg.areas.map((area) => (
                  <div key={area} className="flex items-center gap-2 text-sm">
                    <svg className="w-4 h-4 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="capitalize text-gray-300">{area.replace('-', ' ')}</span>
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

