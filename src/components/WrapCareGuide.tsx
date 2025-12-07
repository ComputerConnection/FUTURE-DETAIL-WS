'use client';

import { useState } from 'react';

const careItems = [
  {
    title: 'Washing Your Wrapped Tesla',
    icon: '🚿',
    content: [
      'Wait 7 days after installation before washing',
      'Hand wash with a pH-neutral car soap',
      'Avoid high-pressure washers on edges and seams',
      'Use microfiber towels only',
      'Touchless car washes are OK after 2 weeks',
    ],
  },
  {
    title: 'Parking & Storage',
    icon: '🅿️',
    content: [
      'Park in shade when possible to extend wrap life',
      'Garage parking is ideal but not required',
      'Avoid parking under trees (sap damage)',
      'Bird droppings should be removed within 24 hours',
      'Covered parking extends wrap life by 2-3 years',
    ],
  },
  {
    title: 'What to Avoid',
    icon: '⚠️',
    content: [
      'No automated brush car washes',
      'Avoid petroleum-based products near wrap',
      'Don\'t use abrasive polishes or compounds',
      'Stay away from pressure washers above 1,800 PSI',
      'Never use heat guns on the wrap yourself',
    ],
  },
  {
    title: 'Minor Damage & Repairs',
    icon: '🔧',
    content: [
      'Small scratches may self-heal with warm water',
      'Edge lifting can be fixed with heat — contact us',
      'Individual panels can be replaced if damaged',
      'Minor bubbles often settle within 2 weeks',
      'Contact us immediately for significant damage',
    ],
  },
];

export default function WrapCareGuide() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-gradient-to-b from-black to-gray-950">
      <div className="container-wide">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-purple-400 text-sm font-medium uppercase tracking-widest mb-4">Care Guide</p>
            <h2 className="text-3xl font-extralight mb-4">Maintaining Your Wrap</h2>
            <p className="text-gray-500">
              Follow these guidelines to keep your wrap looking perfect for years.
            </p>
          </div>

          <div className="space-y-4">
            {careItems.map((item, index) => (
              <div
                key={item.title}
                className={`rounded-2xl border transition-colors ${
                  openIndex === index ? 'border-purple-500/50 bg-purple-500/5' : 'border-white/10'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-2xl">{item.icon}</span>
                    <span className="font-light">{item.title}</span>
                  </div>
                  <svg
                    className={`w-5 h-5 text-gray-500 transition-transform ${openIndex === index ? 'rotate-180' : ''}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {openIndex === index && (
                  <div className="px-6 pb-6">
                    <ul className="space-y-3 pl-12">
                      {item.content.map((tip, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-gray-400">
                          <svg className="w-4 h-4 text-purple-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {tip}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

