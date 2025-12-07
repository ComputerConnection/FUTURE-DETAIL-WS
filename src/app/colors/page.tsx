'use client';

import { useState } from 'react';
import Link from 'next/link';

const allColors = [
  // Solid Gloss
  { name: 'Gloss Black', hex: '#0A0A0A', finish: 'Gloss', category: 'Solid' },
  { name: 'Gloss White', hex: '#FFFFFF', finish: 'Gloss', category: 'Solid' },
  { name: 'Racing Red', hex: '#C41E3A', finish: 'Gloss', category: 'Solid' },
  { name: 'Miami Blue', hex: '#00CED1', finish: 'Gloss', category: 'Solid', popular: true },
  { name: 'Sunset Orange', hex: '#FF4500', finish: 'Gloss', category: 'Solid' },
  { name: 'Forest Green', hex: '#228B22', finish: 'Gloss', category: 'Solid' },
  { name: 'Royal Purple', hex: '#7851A9', finish: 'Gloss', category: 'Solid' },
  { name: 'Canary Yellow', hex: '#FFEF00', finish: 'Gloss', category: 'Solid' },
  { name: 'Navy Blue', hex: '#000080', finish: 'Gloss', category: 'Solid' },
  { name: 'Hot Pink', hex: '#FF69B4', finish: 'Gloss', category: 'Solid' },
  
  // Metallic Gloss
  { name: 'Midnight Blue Metallic', hex: '#191970', finish: 'Gloss', category: 'Metallic', popular: true },
  { name: 'Champagne Gold Metallic', hex: '#F7E7CE', finish: 'Gloss', category: 'Metallic' },
  { name: 'Frozen Bronze Metallic', hex: '#CD7F32', finish: 'Gloss', category: 'Metallic' },
  { name: 'Deep Space Gray Metallic', hex: '#36454F', finish: 'Gloss', category: 'Metallic' },
  { name: 'Burgundy Metallic', hex: '#800020', finish: 'Gloss', category: 'Metallic' },
  { name: 'Emerald Green Metallic', hex: '#50C878', finish: 'Gloss', category: 'Metallic' },
  { name: 'Copper Metallic', hex: '#B87333', finish: 'Gloss', category: 'Metallic' },
  { name: 'Titanium Gray Metallic', hex: '#878681', finish: 'Gloss', category: 'Metallic' },
  
  // Satin/Matte
  { name: 'Satin Black', hex: '#1A1A1A', finish: 'Satin', category: 'Matte', popular: true },
  { name: 'Nardo Gray', hex: '#6B6B6B', finish: 'Satin', category: 'Matte', popular: true },
  { name: 'Cement Gray', hex: '#8B8B8B', finish: 'Satin', category: 'Matte', popular: true },
  { name: 'Battleship Gray', hex: '#848482', finish: 'Satin', category: 'Matte' },
  { name: 'Midnight Purple', hex: '#4B0082', finish: 'Satin', category: 'Matte' },
  { name: 'Khaki Green', hex: '#4B5320', finish: 'Satin', category: 'Matte' },
  { name: 'Satin White', hex: '#F5F5F5', finish: 'Satin', category: 'Matte' },
  { name: 'Frozen Red', hex: '#B22222', finish: 'Satin', category: 'Matte' },
  { name: 'Matte Blue', hex: '#4169E1', finish: 'Satin', category: 'Matte' },
  { name: 'Stealth Gray', hex: '#5C5C5C', finish: 'Satin', category: 'Matte' },
  
  // Special Effects
  { name: 'Color Shift Purple', hex: '#8B008B', finish: 'Special', category: 'Special' },
  { name: 'Chameleon Teal', hex: '#008B8B', finish: 'Special', category: 'Special' },
  { name: 'Psychedelic', hex: '#FF1493', finish: 'Special', category: 'Special' },
  { name: 'Galaxy Blue', hex: '#000033', finish: 'Special', category: 'Special' },
  { name: 'Carbon Fiber', hex: '#1C1C1C', finish: 'Special', category: 'Special' },
  { name: 'Brushed Steel', hex: '#71797E', finish: 'Special', category: 'Special' },
  
  // Additional Colors
  { name: 'British Racing Green', hex: '#004225', finish: 'Gloss', category: 'Solid' },
  { name: 'Riviera Blue', hex: '#1E90FF', finish: 'Gloss', category: 'Solid' },
  { name: 'Grigio Telesto', hex: '#49494B', finish: 'Gloss', category: 'Metallic' },
  { name: 'Zanzibar Red', hex: '#9B111E', finish: 'Gloss', category: 'Metallic' },
  { name: 'Storm Gray', hex: '#717171', finish: 'Satin', category: 'Matte' },
  { name: 'Army Green', hex: '#4B5320', finish: 'Satin', category: 'Matte' },
  { name: 'Cement Satin', hex: '#A5A5A5', finish: 'Satin', category: 'Matte' },
  { name: 'Dakar Yellow', hex: '#FDDA0D', finish: 'Gloss', category: 'Solid' },
  { name: 'Signal Orange', hex: '#FF7F00', finish: 'Gloss', category: 'Solid' },
  { name: 'Lime Green', hex: '#32CD32', finish: 'Gloss', category: 'Solid' },
];

const categories = ['All', 'Solid', 'Metallic', 'Matte', 'Special'];
const finishes = ['All Finishes', 'Gloss', 'Satin'];

export default function ColorsPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeFinish, setActiveFinish] = useState('All Finishes');
  const [selectedColor, setSelectedColor] = useState<typeof allColors[0] | null>(null);

  const filteredColors = allColors.filter((color) => {
    const categoryMatch = activeCategory === 'All' || color.category === activeCategory;
    const finishMatch = activeFinish === 'All Finishes' || color.finish === activeFinish;
    return categoryMatch && finishMatch;
  });

  const popularColors = allColors.filter((c) => c.popular);

  return (
    <div className="bg-black min-h-screen pt-20">
      {/* Hero */}
      <section className="py-24">
        <div className="container-wide">
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-purple-400 text-sm font-medium tracking-widest uppercase mb-4">80+ Options</p>
            <h1 className="text-5xl md:text-6xl font-extralight mb-6">
              Color{' '}
              <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                Catalog
              </span>
            </h1>
            <p className="text-gray-400 text-lg">
              Browse our complete collection of premium wrap colors. From subtle elegance to bold statements.
            </p>
          </div>
        </div>
      </section>

      {/* Popular Colors */}
      <section className="py-12 border-t border-white/5">
        <div className="container-wide">
          <h2 className="text-xl font-light mb-6">🔥 Most Popular</h2>
          <div className="flex flex-wrap gap-4">
            {popularColors.map((color) => (
              <button
                key={color.name}
                onClick={() => setSelectedColor(color)}
                className="flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 hover:border-purple-500/50 transition-colors"
              >
                <div 
                  className="w-6 h-6 rounded-full border border-white/20"
                  style={{ backgroundColor: color.hex }}
                />
                <span className="text-sm">{color.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 sticky top-20 bg-black/90 backdrop-blur-xl z-10 border-t border-white/5">
        <div className="container-wide">
          <div className="flex flex-wrap items-center justify-between gap-4">
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    activeCategory === category
                      ? 'bg-purple-500 text-white'
                      : 'bg-white/5 text-gray-400 hover:bg-white/10'
                  }`}
                >
                  {category}
                  {category !== 'All' && (
                    <span className="ml-1 opacity-70">
                      ({allColors.filter((c) => c.category === category).length})
                    </span>
                  )}
                </button>
              ))}
            </div>

            {/* Finish Filter */}
            <div className="flex gap-2">
              {finishes.map((finish) => (
                <button
                  key={finish}
                  onClick={() => setActiveFinish(finish)}
                  className={`px-4 py-2 rounded-full text-sm transition-all ${
                    activeFinish === finish
                      ? 'bg-white/20 text-white'
                      : 'bg-white/5 text-gray-400 hover:bg-white/10'
                  }`}
                >
                  {finish}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Color Grid */}
      <section className="py-16">
        <div className="container-wide">
          <p className="text-gray-500 text-sm mb-8">
            Showing {filteredColors.length} colors
          </p>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {filteredColors.map((color) => (
              <button
                key={color.name}
                onClick={() => setSelectedColor(color)}
                className="group text-center"
              >
                <div 
                  className="aspect-square rounded-2xl mb-3 border border-white/10 group-hover:border-purple-500/50 group-hover:scale-105 transition-all relative overflow-hidden"
                  style={{ backgroundColor: color.hex }}
                >
                  {color.popular && (
                    <span className="absolute top-2 right-2 text-[10px] px-2 py-0.5 rounded-full bg-purple-500/80 text-white">
                      Popular
                    </span>
                  )}
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity text-white text-sm bg-black/50 px-3 py-1 rounded-full">
                      View
                    </span>
                  </div>
                </div>
                <p className="text-sm text-gray-400 group-hover:text-white transition-colors">{color.name}</p>
                <p className="text-xs text-gray-600">{color.finish}</p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Selected Color Modal */}
      {selectedColor && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-lg flex items-center justify-center p-4"
          onClick={() => setSelectedColor(null)}
        >
          <div 
            className="max-w-lg w-full bg-gray-950 rounded-2xl border border-white/10 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Color Preview */}
            <div 
              className="aspect-video"
              style={{ backgroundColor: selectedColor.hex }}
            />
            
            {/* Details */}
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-light">{selectedColor.name}</h3>
                  <p className="text-gray-500 text-sm">{selectedColor.finish} • {selectedColor.category}</p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-gray-500">Hex Code</p>
                  <p className="font-mono text-sm">{selectedColor.hex}</p>
                </div>
              </div>

              <div className="flex gap-3">
                <Link
                  href={`/contact?color=${encodeURIComponent(selectedColor.name)}`}
                  className="flex-1 py-3 text-center bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-medium hover:scale-105 transition-transform"
                >
                  Get Quote for This Color
                </Link>
                <button
                  onClick={() => setSelectedColor(null)}
                  className="px-4 py-3 border border-white/20 rounded-full hover:bg-white/10 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Request Sample */}
      <section className="py-24 bg-gradient-to-t from-gray-950 to-black border-t border-white/5">
        <div className="container-wide text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-extralight mb-4">Can&apos;t Decide?</h2>
            <p className="text-gray-400 mb-8">
              We can order physical samples for you to see in person. Colors look different on screen than in real life — 
              request a sample to make the perfect choice.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact?request=sample"
                className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-medium hover:scale-105 transition-transform"
              >
                Request Color Samples
              </Link>
              <Link 
                href="/contact"
                className="px-8 py-4 border border-white/20 rounded-full font-medium hover:bg-white/10 transition-colors"
              >
                Schedule Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Note */}
      <section className="py-8 border-t border-white/5">
        <div className="container-wide">
          <p className="text-center text-gray-600 text-sm">
            Colors shown are approximate representations. Actual wrap colors may vary. 
            We source from PurePPF, 3M, Avery Dennison, and other premium manufacturers.
          </p>
        </div>
      </section>
    </div>
  );
}
