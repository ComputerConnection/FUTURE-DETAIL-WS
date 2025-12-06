'use client';

import { useState, useEffect } from 'react';

const testimonials = [
  {
    quote: "The stealth finish completely transformed my white Model Y. Everett and the team were incredibly professional and the attention to detail was impressive. Worth every penny.",
    author: "Michael R.",
    vehicle: "Model Y Performance",
    service: "Full Body Stealth PPF",
  },
  {
    quote: "Best investment I've made for my Tesla. The ceramic coating makes washing so easy, and the PPF has already saved my hood from multiple rock chips.",
    author: "Sarah T.",
    vehicle: "Model 3 Long Range",
    service: "Full Front PPF + Coating",
  },
  {
    quote: "The LLumar tint made a huge difference in the Oklahoma heat. My Model Y stays so much cooler now. Professional install, no bubbles, perfect edges.",
    author: "James K.",
    vehicle: "Model Y",
    service: "Full Vehicle Tint",
  },
  {
    quote: "Wrapped my Model S in Nardo Gray and couldn't be happier. The color is stunning and the quality is top-notch. Already getting compliments everywhere I go.",
    author: "David M.",
    vehicle: "Model S Plaid",
    service: "Full Color Change Wrap",
  },
  {
    quote: "FUTURE DETAIL is the only shop I trust with my Cybertruck. They took their time to do it right and the results speak for themselves.",
    author: "Chris L.",
    vehicle: "Cybertruck",
    service: "Full Body PPF",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 bg-black">
      <div className="container-wide">
        <div className="text-center mb-12">
          <p className="text-xs font-medium uppercase tracking-widest text-gray-500 mb-4">Customer Reviews</p>
          <h2 className="text-4xl font-extralight">What Tesla Owners Say</h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative min-h-[250px]">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-700 ${
                  index === current ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
                }`}
              >
                <div className="text-center">
                  <div className="flex justify-center gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <blockquote className="text-xl md:text-2xl font-light text-gray-300 mb-8 leading-relaxed">
                    &ldquo;{testimonial.quote}&rdquo;
                  </blockquote>
                  <div>
                    <p className="font-medium text-white">{testimonial.author}</p>
                    <p className="text-sm text-gray-500">{testimonial.vehicle} · {testimonial.service}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === current ? 'bg-cyan-400 w-8' : 'bg-white/20'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

