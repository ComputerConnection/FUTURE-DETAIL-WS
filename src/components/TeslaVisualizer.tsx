'use client';

import { useState } from 'react';
import Link from 'next/link';

const teslaColors = [
  { name: 'Pearl White', value: '#F2F2F2' },
  { name: 'Solid Black', value: '#1A1A1A' },
  { name: 'Midnight Silver', value: '#4A4A4A' },
  { name: 'Deep Blue', value: '#1E3A5F' },
  { name: 'Red Multi-Coat', value: '#A82424' },
];

const wrapColors = [
  { name: 'Nardo Gray', value: '#6B6B6B' },
  { name: 'Miami Blue', value: '#00CED1' },
  { name: 'Racing Red', value: '#C41E3A' },
  { name: 'Midnight Purple', value: '#4B0082' },
  { name: 'Frozen Bronze', value: '#CD7F32' },
  { name: 'Forest Green', value: '#228B22' },
  { name: 'Cement Gray', value: '#8B8B8B' },
  { name: 'Satin Black', value: '#1A1A1A' },
];

export default function TeslaVisualizer() {
  const [currentColor, setCurrentColor] = useState(teslaColors[0]);
  const [wrapColor, setWrapColor] = useState(wrapColors[0]);
  const [showWrap, setShowWrap] = useState(false);

  return (
    <section className="py-24 bg-black">
      <div className="container-wide">
        <div className="text-center mb-12">
          <p className="text-purple-400 text-sm font-medium uppercase tracking-widest mb-4">Color Visualizer</p>
          <h2 className="text-3xl font-extralight mb-4">Preview Your Wrap</h2>
          <p className="text-gray-500">Select your current Tesla color, then choose a wrap to see the transformation</p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Preview */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 relative">
              {/* Current color layer */}
              <div 
                className="absolute inset-0 transition-opacity duration-500"
                style={{ 
                  backgroundColor: currentColor.value,
                  opacity: showWrap ? 0 : 1,
                }}
              />
              {/* Wrap color layer */}
              <div 
                className="absolute inset-0 transition-opacity duration-500"
                style={{ 
                  backgroundColor: wrapColor.value,
                  opacity: showWrap ? 1 : 0,
                }}
              />
              {/* Car silhouette overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <svg className="w-48 h-32 mx-auto opacity-20" viewBox="0 0 200 80" fill="white">
                    <path d="M20 50 L35 50 L45 35 L70 28 L130 28 L155 35 L165 50 L180 50 L180 60 L20 60 Z" />
                    <circle cx="50" cy="60" r="10" />
                    <circle cx="150" cy="60" r="10" />
                  </svg>
                  <p className="text-white/50 text-sm mt-4">
                    {showWrap ? wrapColor.name : currentColor.name}
                  </p>
                </div>
              </div>
              
              {/* Toggle label */}
              <div className="absolute top-4 left-4">
                <span className={`text-xs px-3 py-1 rounded-full ${showWrap ? 'bg-purple-500/20 text-purple-400' : 'bg-white/10 text-gray-400'}`}>
                  {showWrap ? 'After Wrap' : 'Current Color'}
                </span>
              </div>
            </div>

            {/* Toggle */}
            <div className="flex justify-center mt-6">
              <button
                onClick={() => setShowWrap(!showWrap)}
                className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-medium hover:scale-105 transition-transform"
              >
                {showWrap ? 'Show Original' : 'Preview Wrap'}
              </button>
            </div>
          </div>

          {/* Color Selection */}
          <div className="space-y-8">
            {/* Current Color */}
            <div>
              <h3 className="text-sm text-gray-400 uppercase tracking-widest mb-4">Your Current Tesla Color</h3>
              <div className="flex flex-wrap gap-3">
                {teslaColors.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => setCurrentColor(color)}
                    className={`w-12 h-12 rounded-xl border-2 transition-all ${
                      currentColor.name === color.name ? 'border-white scale-110' : 'border-white/20'
                    }`}
                    style={{ backgroundColor: color.value }}
                    title={color.name}
                  />
                ))}
              </div>
              <p className="text-sm text-gray-500 mt-2">{currentColor.name}</p>
            </div>

            {/* Wrap Color */}
            <div>
              <h3 className="text-sm text-gray-400 uppercase tracking-widest mb-4">Choose a Wrap Color</h3>
              <div className="flex flex-wrap gap-3">
                {wrapColors.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => { setWrapColor(color); setShowWrap(true); }}
                    className={`w-12 h-12 rounded-xl border-2 transition-all ${
                      wrapColor.name === color.name ? 'border-purple-500 scale-110' : 'border-white/20'
                    }`}
                    style={{ backgroundColor: color.value }}
                    title={color.name}
                  />
                ))}
              </div>
              <p className="text-sm text-gray-500 mt-2">{wrapColor.name}</p>
            </div>

            {/* CTA */}
            <div className="pt-4">
              <p className="text-gray-500 text-sm mb-4">
                Love this combination? Let&apos;s make it happen.
              </p>
              <Link 
                href="/contact" 
                className="inline-flex items-center gap-2 px-6 py-3 border border-purple-500/50 text-purple-400 rounded-full hover:bg-purple-500/10 transition-colors"
              >
                Get a Quote for {wrapColor.name}
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

