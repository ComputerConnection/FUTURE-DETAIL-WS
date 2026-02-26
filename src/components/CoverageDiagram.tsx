'use client';

import { useState } from 'react';

const packages = {
  'full-front': {
    name: 'Full Front',
    coverage: '~30%',
    description: 'Essential protection for high-impact zones',
    areas: ['hood', 'fenders', 'bumper', 'mirrors', 'headlights'],
  },
  'track': {
    name: 'Track Package',
    coverage: '~50%',
    description: 'Enhanced coverage for spirited driving',
    areas: ['hood', 'fenders', 'bumper', 'mirrors', 'headlights', 'a-pillars', 'rockers', 'wheel-arches', 'door-edges'],
  },
  'full-body': {
    name: 'Full Body',
    coverage: '100%',
    description: 'Complete protection, inside and out',
    areas: ['hood', 'fenders', 'bumper', 'mirrors', 'headlights', 'a-pillars', 'rockers', 'wheel-arches', 'door-edges', 'roof', 'doors', 'rear', 'trunk'],
  },
};

type PackageKey = keyof typeof packages;

const areaLabels: Record<string, string> = {
  'hood': 'Hood',
  'fenders': 'Front Fenders',
  'bumper': 'Front Bumper',
  'mirrors': 'Side Mirrors',
  'headlights': 'Headlights',
  'a-pillars': 'A-Pillars',
  'rockers': 'Rocker Panels',
  'wheel-arches': 'Wheel Arches',
  'door-edges': 'Door Edges',
  'roof': 'Roof Panel',
  'doors': 'Door Panels',
  'rear': 'Rear Section',
  'trunk': 'Trunk/Liftgate',
};

export default function CoverageDiagram() {
  const [activePackage, setActivePackage] = useState<PackageKey>('track');
  const [hoveredArea, setHoveredArea] = useState<string | null>(null);
  const pkg = packages[activePackage];

  const isProtected = (area: string) => pkg.areas.includes(area);

  return (
    <section className="py-24 bg-gradient-to-b from-black via-gray-950 to-black">
      <div className="container-wide">
        <div className="text-center mb-12">
          <p className="text-cyan-400 text-sm font-medium uppercase tracking-widest mb-4">Coverage Guide</p>
          <h2 className="text-3xl md:text-4xl font-extralight mb-4">
            What&apos;s{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Protected?
            </span>
          </h2>
          <p className="text-gray-500 max-w-md mx-auto">
            Explore our PPF packages and see exactly what areas are covered
          </p>
        </div>

        {/* Package Selector */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {(Object.keys(packages) as PackageKey[]).map((key) => (
            <button
              key={key}
              onClick={() => setActivePackage(key)}
              className={`group relative px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                activePackage === key
                  ? 'text-white shadow-lg shadow-cyan-500/25'
                  : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
              }`}
            >
              {activePackage === key && (
                <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full" />
              )}
              <span className="relative flex items-center gap-2">
                {packages[key].name}
                <span className={`text-xs ${activePackage === key ? 'text-white/70' : 'text-gray-500'}`}>
                  {packages[key].coverage}
                </span>
              </span>
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-5xl mx-auto">
          {/* Top-Down Vehicle Diagram */}
          <div className="relative aspect-[4/3] rounded-2xl border border-white/10 overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 via-black to-gray-900/50" />

            {/* Grid pattern overlay */}
            <div className="absolute inset-0 opacity-[0.03]" style={{
              backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
              backgroundSize: '20px 20px'
            }} />

            {/* Hovered area label */}
            {hoveredArea && (
              <div className="absolute top-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-black/80 backdrop-blur-sm rounded-full border border-cyan-500/30 text-sm text-cyan-400 z-10 transition-all">
                {areaLabels[hoveredArea] || hoveredArea}
              </div>
            )}

            <svg viewBox="0 0 200 300" className="relative w-full h-full p-6">
              {/* Gradient definitions */}
              <defs>
                <linearGradient id="protectedGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="rgb(6, 182, 212)" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="rgb(59, 130, 246)" stopOpacity="0.3" />
                </linearGradient>
                <linearGradient id="secondaryGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="rgb(59, 130, 246)" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="rgb(139, 92, 246)" stopOpacity="0.25" />
                </linearGradient>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>

              {/* Vehicle body outline with glow */}
              <path
                d="M40 45 Q40 25, 100 20 Q160 25, 160 45 L160 255 Q160 275, 100 280 Q40 275, 40 255 Z"
                fill="transparent"
                stroke="rgba(255,255,255,0.2)"
                strokeWidth="1.5"
              />

              {/* Hood - interactive */}
              <path
                d="M45 45 Q45 30, 100 26 Q155 30, 155 45 L155 85 L45 85 Z"
                className={`cursor-pointer transition-all duration-500 ${
                  isProtected('hood')
                    ? hoveredArea === 'hood' ? 'fill-cyan-400/60' : 'fill-[url(#protectedGradient)]'
                    : 'fill-white/[0.02] hover:fill-white/5'
                }`}
                stroke={isProtected('hood') ? 'rgba(6,182,212,0.4)' : 'rgba(255,255,255,0.1)'}
                strokeWidth="0.5"
                onMouseEnter={() => setHoveredArea('hood')}
                onMouseLeave={() => setHoveredArea(null)}
              />

              {/* Front bumper - interactive */}
              <path
                d="M40 45 Q40 25, 100 20 Q160 25, 160 45 L155 45 Q155 30, 100 26 Q45 30, 45 45 Z"
                className={`cursor-pointer transition-all duration-500 ${
                  isProtected('bumper')
                    ? hoveredArea === 'bumper' ? 'fill-cyan-400/60' : 'fill-[url(#protectedGradient)]'
                    : 'fill-white/[0.02] hover:fill-white/5'
                }`}
                stroke={isProtected('bumper') ? 'rgba(6,182,212,0.4)' : 'rgba(255,255,255,0.1)'}
                strokeWidth="0.5"
                onMouseEnter={() => setHoveredArea('bumper')}
                onMouseLeave={() => setHoveredArea(null)}
              />

              {/* Windshield / A-pillars - interactive */}
              <path
                d="M50 85 L150 85 L145 110 L55 110 Z"
                className={`cursor-pointer transition-all duration-500 ${
                  isProtected('a-pillars')
                    ? hoveredArea === 'a-pillars' ? 'fill-blue-400/50' : 'fill-[url(#secondaryGradient)]'
                    : 'fill-white/[0.03]'
                }`}
                stroke="rgba(255,255,255,0.15)"
                strokeWidth="0.5"
                onMouseEnter={() => setHoveredArea('a-pillars')}
                onMouseLeave={() => setHoveredArea(null)}
              />

              {/* Roof - interactive */}
              <path
                d="M55 110 L145 110 L145 170 L55 170 Z"
                className={`cursor-pointer transition-all duration-500 ${
                  isProtected('roof')
                    ? hoveredArea === 'roof' ? 'fill-cyan-400/60' : 'fill-[url(#protectedGradient)]'
                    : 'fill-white/[0.03]'
                }`}
                stroke="rgba(255,255,255,0.15)"
                strokeWidth="0.5"
                onMouseEnter={() => setHoveredArea('roof')}
                onMouseLeave={() => setHoveredArea(null)}
              />

              {/* Rear window */}
              <path
                d="M55 170 L145 170 L150 195 L50 195 Z"
                fill="rgba(255,255,255,0.03)"
                stroke="rgba(255,255,255,0.15)"
                strokeWidth="0.5"
              />

              {/* Trunk/Rear - interactive */}
              <path
                d="M45 195 L155 195 L155 255 Q155 270, 100 274 Q45 270, 45 255 Z"
                className={`cursor-pointer transition-all duration-500 ${
                  isProtected('trunk') || isProtected('rear')
                    ? hoveredArea === 'trunk' || hoveredArea === 'rear' ? 'fill-cyan-400/60' : 'fill-[url(#protectedGradient)]'
                    : 'fill-white/[0.02] hover:fill-white/5'
                }`}
                stroke={isProtected('trunk') ? 'rgba(6,182,212,0.4)' : 'rgba(255,255,255,0.1)'}
                strokeWidth="0.5"
                onMouseEnter={() => setHoveredArea('trunk')}
                onMouseLeave={() => setHoveredArea(null)}
              />

              {/* Left fender - interactive */}
              <path
                d="M40 50 L45 50 L45 85 L40 85 Z"
                className={`cursor-pointer transition-all duration-500 ${
                  isProtected('fenders')
                    ? hoveredArea === 'fenders' ? 'fill-cyan-400/60' : 'fill-[url(#protectedGradient)]'
                    : 'fill-white/[0.02]'
                }`}
                stroke={isProtected('fenders') ? 'rgba(6,182,212,0.3)' : 'rgba(255,255,255,0.1)'}
                onMouseEnter={() => setHoveredArea('fenders')}
                onMouseLeave={() => setHoveredArea(null)}
              />

              {/* Right fender */}
              <path
                d="M155 50 L160 50 L160 85 L155 85 Z"
                className={`cursor-pointer transition-all duration-500 ${
                  isProtected('fenders')
                    ? hoveredArea === 'fenders' ? 'fill-cyan-400/60' : 'fill-[url(#protectedGradient)]'
                    : 'fill-white/[0.02]'
                }`}
                stroke={isProtected('fenders') ? 'rgba(6,182,212,0.3)' : 'rgba(255,255,255,0.1)'}
                onMouseEnter={() => setHoveredArea('fenders')}
                onMouseLeave={() => setHoveredArea(null)}
              />

              {/* Left doors - interactive */}
              <path
                d="M40 95 L50 95 L50 185 L40 185 Z"
                className={`cursor-pointer transition-all duration-500 ${
                  isProtected('doors')
                    ? hoveredArea === 'doors' ? 'fill-cyan-400/60' : 'fill-[url(#protectedGradient)]'
                    : 'fill-white/[0.02]'
                }`}
                stroke={isProtected('doors') ? 'rgba(6,182,212,0.3)' : 'rgba(255,255,255,0.1)'}
                onMouseEnter={() => setHoveredArea('doors')}
                onMouseLeave={() => setHoveredArea(null)}
              />

              {/* Right doors */}
              <path
                d="M150 95 L160 95 L160 185 L150 185 Z"
                className={`cursor-pointer transition-all duration-500 ${
                  isProtected('doors')
                    ? hoveredArea === 'doors' ? 'fill-cyan-400/60' : 'fill-[url(#protectedGradient)]'
                    : 'fill-white/[0.02]'
                }`}
                stroke={isProtected('doors') ? 'rgba(6,182,212,0.3)' : 'rgba(255,255,255,0.1)'}
                onMouseEnter={() => setHoveredArea('doors')}
                onMouseLeave={() => setHoveredArea(null)}
              />

              {/* Rockers - left */}
              <path
                d="M36 90 L40 90 L40 190 L36 190 Z"
                className={`cursor-pointer transition-all duration-500 ${
                  isProtected('rockers')
                    ? hoveredArea === 'rockers' ? 'fill-blue-400/60' : 'fill-[url(#secondaryGradient)]'
                    : 'fill-white/[0.02]'
                }`}
                stroke={isProtected('rockers') ? 'rgba(59,130,246,0.4)' : 'rgba(255,255,255,0.1)'}
                onMouseEnter={() => setHoveredArea('rockers')}
                onMouseLeave={() => setHoveredArea(null)}
              />

              {/* Rockers - right */}
              <path
                d="M160 90 L164 90 L164 190 L160 190 Z"
                className={`cursor-pointer transition-all duration-500 ${
                  isProtected('rockers')
                    ? hoveredArea === 'rockers' ? 'fill-blue-400/60' : 'fill-[url(#secondaryGradient)]'
                    : 'fill-white/[0.02]'
                }`}
                stroke={isProtected('rockers') ? 'rgba(59,130,246,0.4)' : 'rgba(255,255,255,0.1)'}
                onMouseEnter={() => setHoveredArea('rockers')}
                onMouseLeave={() => setHoveredArea(null)}
              />

              {/* Wheels with metallic effect */}
              <rect x="23" y="55" width="14" height="35" rx="4"
                fill="rgba(40,40,40,0.8)"
                stroke="rgba(255,255,255,0.2)"
                strokeWidth="0.5"
              />
              <rect x="163" y="55" width="14" height="35" rx="4"
                fill="rgba(40,40,40,0.8)"
                stroke="rgba(255,255,255,0.2)"
                strokeWidth="0.5"
              />
              <rect x="23" y="200" width="14" height="35" rx="4"
                fill="rgba(40,40,40,0.8)"
                stroke="rgba(255,255,255,0.2)"
                strokeWidth="0.5"
              />
              <rect x="163" y="200" width="14" height="35" rx="4"
                fill="rgba(40,40,40,0.8)"
                stroke="rgba(255,255,255,0.2)"
                strokeWidth="0.5"
              />

              {/* Wheel arches - front left */}
              <path
                d="M37 55 L40 55 L40 90 L37 90 Z"
                className={`cursor-pointer transition-all duration-500 ${
                  isProtected('wheel-arches')
                    ? hoveredArea === 'wheel-arches' ? 'fill-blue-400/60' : 'fill-[url(#secondaryGradient)]'
                    : 'fill-transparent'
                }`}
                onMouseEnter={() => setHoveredArea('wheel-arches')}
                onMouseLeave={() => setHoveredArea(null)}
              />
              {/* Front right */}
              <path
                d="M160 55 L163 55 L163 90 L160 90 Z"
                className={`cursor-pointer transition-all duration-500 ${
                  isProtected('wheel-arches')
                    ? hoveredArea === 'wheel-arches' ? 'fill-blue-400/60' : 'fill-[url(#secondaryGradient)]'
                    : 'fill-transparent'
                }`}
                onMouseEnter={() => setHoveredArea('wheel-arches')}
                onMouseLeave={() => setHoveredArea(null)}
              />
              {/* Rear left */}
              <path
                d="M37 200 L40 200 L40 235 L37 235 Z"
                className={`cursor-pointer transition-all duration-500 ${
                  isProtected('wheel-arches')
                    ? 'fill-[url(#secondaryGradient)]'
                    : 'fill-transparent'
                }`}
              />
              {/* Rear right */}
              <path
                d="M160 200 L163 200 L163 235 L160 235 Z"
                className={`cursor-pointer transition-all duration-500 ${
                  isProtected('wheel-arches')
                    ? 'fill-[url(#secondaryGradient)]'
                    : 'fill-transparent'
                }`}
              />

              {/* Mirrors with glow when protected */}
              <ellipse cx="30" cy="100" rx="7" ry="4"
                className={`cursor-pointer transition-all duration-500 ${
                  isProtected('mirrors')
                    ? hoveredArea === 'mirrors' ? 'fill-cyan-400' : 'fill-cyan-500/70'
                    : 'fill-gray-700'
                }`}
                filter={isProtected('mirrors') ? 'url(#glow)' : undefined}
                onMouseEnter={() => setHoveredArea('mirrors')}
                onMouseLeave={() => setHoveredArea(null)}
              />
              <ellipse cx="170" cy="100" rx="7" ry="4"
                className={`cursor-pointer transition-all duration-500 ${
                  isProtected('mirrors')
                    ? hoveredArea === 'mirrors' ? 'fill-cyan-400' : 'fill-cyan-500/70'
                    : 'fill-gray-700'
                }`}
                filter={isProtected('mirrors') ? 'url(#glow)' : undefined}
                onMouseEnter={() => setHoveredArea('mirrors')}
                onMouseLeave={() => setHoveredArea(null)}
              />

              {/* Headlights with glow effect */}
              <ellipse cx="60" cy="32" rx="14" ry="6"
                className={`cursor-pointer transition-all duration-500 ${
                  isProtected('headlights')
                    ? hoveredArea === 'headlights' ? 'fill-yellow-300' : 'fill-yellow-400/80'
                    : 'fill-gray-600/40'
                }`}
                filter={isProtected('headlights') ? 'url(#glow)' : undefined}
                onMouseEnter={() => setHoveredArea('headlights')}
                onMouseLeave={() => setHoveredArea(null)}
              />
              <ellipse cx="140" cy="32" rx="14" ry="6"
                className={`cursor-pointer transition-all duration-500 ${
                  isProtected('headlights')
                    ? hoveredArea === 'headlights' ? 'fill-yellow-300' : 'fill-yellow-400/80'
                    : 'fill-gray-600/40'
                }`}
                filter={isProtected('headlights') ? 'url(#glow)' : undefined}
                onMouseEnter={() => setHoveredArea('headlights')}
                onMouseLeave={() => setHoveredArea(null)}
              />

              {/* Taillights - always styled */}
              <ellipse cx="60" cy="268" rx="12" ry="5" fill="rgba(239,68,68,0.5)" filter="url(#glow)" />
              <ellipse cx="140" cy="268" rx="12" ry="5" fill="rgba(239,68,68,0.5)" filter="url(#glow)" />

              {/* Door edges - glowing lines when protected */}
              <line x1="50" y1="112" x2="50" y2="168"
                className={`transition-all duration-500 ${
                  isProtected('door-edges') ? 'stroke-cyan-400' : 'stroke-transparent'
                }`}
                strokeWidth="2"
                strokeLinecap="round"
                filter={isProtected('door-edges') ? 'url(#glow)' : undefined}
                opacity={isProtected('door-edges') ? 0.7 : 0}
                onMouseEnter={() => setHoveredArea('door-edges')}
                onMouseLeave={() => setHoveredArea(null)}
              />
              <line x1="150" y1="112" x2="150" y2="168"
                className={`transition-all duration-500 ${
                  isProtected('door-edges') ? 'stroke-cyan-400' : 'stroke-transparent'
                }`}
                strokeWidth="2"
                strokeLinecap="round"
                filter={isProtected('door-edges') ? 'url(#glow)' : undefined}
                opacity={isProtected('door-edges') ? 0.7 : 0}
              />

              {/* Front arrow indicator */}
              <text x="100" y="12" textAnchor="middle" fill="rgba(255,255,255,0.3)" fontSize="8" fontWeight="300">
                FRONT
              </text>
            </svg>

            {/* Legend */}
            <div className="absolute bottom-4 left-4 right-4 flex justify-center gap-6 text-xs">
              <span className="flex items-center gap-2 text-gray-400">
                <span className="w-4 h-3 rounded-sm bg-gradient-to-r from-cyan-500/50 to-blue-500/30 border border-cyan-500/30" />
                Protected
              </span>
              <span className="flex items-center gap-2 text-gray-500">
                <span className="w-4 h-3 rounded-sm bg-white/5 border border-white/10" />
                Not included
              </span>
            </div>

            {/* Hover instruction */}
            <p className="absolute top-4 right-4 text-[10px] text-gray-600 hidden lg:block">
              Hover to explore
            </p>
          </div>

          {/* Package Details */}
          <div className="lg:pl-4">
            {/* Package header with animated border */}
            <div className="relative mb-8 pb-6 border-b border-white/10">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-2xl md:text-3xl font-light mb-2">{pkg.name}</h3>
                  <p className="text-gray-500 text-sm">{pkg.description}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-500 mt-1">{pkg.coverage} coverage</p>
                </div>
              </div>
            </div>

            {/* Areas covered with better visual */}
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-widest mb-4 flex items-center gap-2">
                <svg className="w-4 h-4 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                Areas Protected
              </p>
              <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                {pkg.areas.map((area) => (
                  <div
                    key={area}
                    className={`flex items-center gap-2 text-sm py-1.5 px-2 rounded-lg transition-all duration-300 cursor-default ${
                      hoveredArea === area
                        ? 'bg-cyan-500/10 text-cyan-400'
                        : 'text-gray-300 hover:bg-white/5'
                    }`}
                    onMouseEnter={() => setHoveredArea(area)}
                    onMouseLeave={() => setHoveredArea(null)}
                  >
                    <svg
                      className={`w-4 h-4 shrink-0 transition-colors ${
                        hoveredArea === area ? 'text-cyan-400' : 'text-cyan-500/70'
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{areaLabels[area] || area}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick benefit callouts */}
            <div className="mt-8 pt-6 border-t border-white/10">
              <div className="flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 text-xs text-gray-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                  Self-healing
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 text-xs text-gray-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                  10-year warranty
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 text-xs text-gray-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                  UV protection
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

