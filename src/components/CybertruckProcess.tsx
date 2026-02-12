'use client';

import { useState, useEffect } from 'react';

const steps = [
  {
    number: '01',
    title: 'Consultation',
    description: 'We assess your Cybertruck\'s current condition, discuss your protection goals, and recommend the right package for your driving style and budget.',
  },
  {
    number: '02',
    title: 'Surface Preparation',
    description: 'Thorough decontamination and correction of the stainless steel. We remove existing fingerprints, water spots, and contaminants to ensure perfect adhesion.',
  },
  {
    number: '03',
    title: 'Precision Installation',
    description: 'Custom-cut films are applied panel by panel in our climate-controlled studio. Every edge and angle is handled with techniques developed specifically for the Cybertruck\'s geometry.',
  },
  {
    number: '04',
    title: 'Quality Inspection',
    description: 'Multi-point inspection under controlled lighting. We check every edge, seam, and surface before your truck leaves the studio.',
  },
  {
    number: '05',
    title: 'Delivery & Care',
    description: 'Walk-through of the completed work, care instructions specific to your protection package, and warranty registration.',
  },
];

export default function CybertruckProcess() {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="max-w-3xl mx-auto">
      <div className="space-y-3">
        {steps.map((step, index) => (
          <button
            key={step.number}
            onClick={() => setActiveStep(index)}
            className={`w-full text-left p-6 rounded-2xl border transition-all duration-500 ${
              index === activeStep
                ? 'border-cyan-500/30 bg-cyan-500/5'
                : 'border-white/5 hover:border-white/10'
            }`}
          >
            <div className="flex items-start gap-5">
              <div
                className={`flex-shrink-0 w-11 h-11 rounded-full border-2 flex items-center justify-center transition-all duration-500 ${
                  index === activeStep
                    ? 'border-cyan-400 bg-cyan-400/10'
                    : index < activeStep
                    ? 'border-cyan-400/30 bg-cyan-400/5'
                    : 'border-white/10'
                }`}
              >
                <span
                  className={`text-sm font-light transition-colors duration-500 ${
                    index === activeStep ? 'text-cyan-400' : 'text-gray-600'
                  }`}
                >
                  {step.number}
                </span>
              </div>
              <div className="flex-1 min-w-0">
                <h3
                  className={`text-lg font-light transition-colors duration-500 ${
                    index === activeStep ? 'text-white' : 'text-gray-500'
                  }`}
                >
                  {step.title}
                </h3>
                <div
                  className={`overflow-hidden transition-all duration-500 ${
                    index === activeStep ? 'max-h-32 opacity-100 mt-2' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="text-sm text-gray-400 leading-relaxed">{step.description}</p>
                </div>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
