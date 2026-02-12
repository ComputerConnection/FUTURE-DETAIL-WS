'use client';

import { useEffect, useState, useRef } from 'react';

interface Stat {
  value: number;
  suffix: string;
  label: string;
  sublabel: string;
}

const stats: Stat[] = [
  { value: 20, suffix: '+', label: 'Cybertrucks Protected', sublabel: 'Since launch day' },
  { value: 100, suffix: '%', label: 'Satisfaction Rate', sublabel: 'Zero comebacks' },
  { value: 10, suffix: 'yr', label: 'PPF Warranty', sublabel: 'Industry-leading coverage' },
  { value: 5, suffix: '.0', label: 'Google Rating', sublabel: 'Verified reviews' },
];

export default function CybertruckStats() {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState(stats.map(() => 0));
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const totalSteps = 60;
    const interval = duration / totalSteps;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const progress = step / totalSteps;
      const eased = 1 - Math.pow(1 - progress, 3);
      setCounts(stats.map((stat) => Math.round(stat.value * eased)));
      if (step >= totalSteps) clearInterval(timer);
    }, interval);

    return () => clearInterval(timer);
  }, [isVisible]);

  return (
    <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-8">
      {stats.map((stat, index) => (
        <div
          key={stat.label}
          className={`text-center transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: `${index * 150}ms` }}
        >
          <div className="text-4xl md:text-5xl font-extralight mb-2">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              {counts[index]}{stat.suffix}
            </span>
          </div>
          <div className="text-sm font-light text-white mb-1">{stat.label}</div>
          <div className="text-xs text-gray-600">{stat.sublabel}</div>
        </div>
      ))}
    </div>
  );
}
