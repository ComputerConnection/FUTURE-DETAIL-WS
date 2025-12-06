'use client';

import Link from 'next/link';
import { useRef, useState } from 'react';

interface ServiceCardProps {
  title: string;
  description: string;
  href: string;
  features: string[];
  gradient: string;
  icon: React.ReactNode;
  index: number;
}

export default function AnimatedServiceCard({
  title,
  description,
  href,
  features,
  gradient,
  icon,
  index,
}: ServiceCardProps) {
  const cardRef = useRef<HTMLAnchorElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      setMousePosition({
        x: ((e.clientX - rect.left) / rect.width) * 100,
        y: ((e.clientY - rect.top) / rect.height) * 100,
      });
    }
  };

  return (
    <Link
      ref={cardRef}
      href={href}
      onMouseMove={handleMouseMove}
      className="group relative block p-8 rounded-2xl border border-white/10 bg-black overflow-hidden transition-all duration-500 hover:border-white/20 hover:-translate-y-2"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Spotlight effect */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, ${gradient} 0%, transparent 50%)`,
        }}
      />

      {/* Content */}
      <div className="relative z-10">
        <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-cyan-400 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
          {icon}
        </div>

        <h3 className="text-xl font-light mb-3 text-white group-hover:text-cyan-400 transition-colors">
          {title}
        </h3>

        <p className="text-gray-500 text-sm mb-6 leading-relaxed">{description}</p>

        <ul className="space-y-2 mb-6">
          {features.map((feature, i) => (
            <li key={i} className="flex items-center gap-2 text-sm text-gray-400">
              <svg className="w-4 h-4 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              {feature}
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2 text-sm font-medium text-white group-hover:text-cyan-400 transition-colors">
          <span>Learn More</span>
          <svg className="w-4 h-4 group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      </div>
    </Link>
  );
}

