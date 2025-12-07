'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const projects = [
  { title: 'Model Y Stealth PPF', category: 'PPF', gradient: 'from-cyan-500/20 to-blue-500/20', color: 'cyan' },
  { title: 'Model 3 Nardo Gray', category: 'Wrap', gradient: 'from-purple-500/20 to-pink-500/20', color: 'purple' },
  { title: 'Cybertruck Full PPF', category: 'PPF', gradient: 'from-cyan-500/20 to-blue-500/20', color: 'cyan' },
  { title: 'Model S Ceramic Coating', category: 'Coating', gradient: 'from-emerald-500/20 to-teal-500/20', color: 'emerald' },
  { title: 'Model X 20% Tint', category: 'Tint', gradient: 'from-amber-500/20 to-orange-500/20', color: 'amber' },
];

export default function ProjectCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % projects.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 bg-black overflow-hidden">
      <div className="container-wide">
        <div className="flex items-center justify-between mb-12">
          <div>
            <p className="text-cyan-400 text-sm font-medium tracking-widest uppercase mb-2">Recent Work</p>
            <h2 className="text-3xl font-extralight">Latest Projects</h2>
          </div>
          <Link href="/gallery" className="text-sm text-cyan-400 hover:underline hidden md:block">
            View all projects →
          </Link>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div 
            className="flex gap-6 transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${activeIndex * (100 / 3 + 2)}%)` }}
          >
            {[...projects, ...projects].map((project, index) => (
              <div
                key={index}
                className={`flex-shrink-0 w-full md:w-[calc(33.333%-16px)] transition-all duration-500 ${
                  index === activeIndex ? 'scale-105' : 'scale-100 opacity-70'
                }`}
              >
                <div className={`aspect-[4/3] rounded-2xl bg-gradient-to-br ${project.gradient} border border-white/10 flex items-center justify-center mb-4`}>
                  <span className="text-gray-600">{project.title}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    project.color === 'cyan' ? 'bg-cyan-500/20 text-cyan-400' :
                    project.color === 'purple' ? 'bg-purple-500/20 text-purple-400' :
                    project.color === 'emerald' ? 'bg-emerald-500/20 text-emerald-400' :
                    'bg-amber-500/20 text-amber-400'
                  }`}>
                    {project.category}
                  </span>
                  <span className="text-sm text-gray-400">{project.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === activeIndex ? 'bg-cyan-400 w-6' : 'bg-white/20'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

