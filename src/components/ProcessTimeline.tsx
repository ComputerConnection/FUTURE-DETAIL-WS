'use client';

import { useState, useEffect } from 'react';

const steps = [
  { number: '01', title: 'Consultation', description: 'Discuss your goals and choose the right protection package.' },
  { number: '02', title: 'Preparation', description: 'Thorough cleaning and paint correction as needed.' },
  { number: '03', title: 'Installation', description: 'Precision application in our climate-controlled studio.' },
  { number: '04', title: 'Delivery', description: 'Final inspection and care instructions for lasting protection.' },
];

export default function ProcessTimeline() {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 bg-black">
      <div className="container-wide">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extralight mb-4">Our Process</h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Precision at every step. From consultation to delivery, we maintain the highest standards.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className={`relative text-center transition-all duration-500 ${
                index === activeStep ? 'opacity-100' : 'opacity-50'
              }`}
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-1/2 w-full h-px bg-white/10">
                  <div
                    className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 transition-all duration-500"
                    style={{ width: index < activeStep ? '100%' : '0%' }}
                  />
                </div>
              )}

              {/* Step circle */}
              <div
                className={`relative inline-flex items-center justify-center w-16 h-16 rounded-full border-2 mb-6 transition-all duration-500 ${
                  index === activeStep
                    ? 'border-cyan-400 bg-cyan-400/10'
                    : index < activeStep
                    ? 'border-cyan-400/50 bg-cyan-400/5'
                    : 'border-white/20 bg-white/5'
                }`}
              >
                <span className={`text-2xl font-extralight ${index === activeStep ? 'text-cyan-400' : 'text-gray-500'}`}>
                  {step.number}
                </span>
                {index === activeStep && (
                  <div className="absolute inset-0 rounded-full border-2 border-cyan-400 animate-ping opacity-20" />
                )}
              </div>

              <h3 className="text-lg font-light mb-2 text-white">{step.title}</h3>
              <p className="text-sm text-gray-500">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

