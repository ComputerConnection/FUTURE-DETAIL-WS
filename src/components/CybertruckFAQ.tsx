'use client';

import { useState } from 'react';

const faqs = [
  {
    question: 'Will PPF adhere properly to the stainless steel body?',
    answer: 'Yes. We use XPEL and 3M films specifically tested for adhesion on stainless steel surfaces. The key is proper surface preparation — we use specialized cleaning and prep solutions designed for bare metal. Our films have shown excellent adhesion and durability on every Cybertruck we\'ve protected.',
  },
  {
    question: 'Can PPF be removed later without damaging the stainless steel?',
    answer: 'Absolutely. PPF is designed to be removable. The adhesive leaves no residue on stainless steel and the underlying surface remains completely unaffected. We can remove and replace individual panels if needed.',
  },
  {
    question: 'Do I need both PPF and ceramic coating?',
    answer: 'It depends on your priorities. PPF provides physical protection against scratches, rock chips, and scuffs — it\'s a clear film barrier. Ceramic coating provides hydrophobic properties, fingerprint resistance, and easier cleaning. For maximum protection, we recommend PPF on high-impact areas with ceramic coating on top and on any uncovered panels.',
  },
  {
    question: 'How long does a full body PPF installation take?',
    answer: 'A full body Cybertruck PPF installation typically takes 3-5 days. The angular panels and large flat surfaces require precision cutting and careful application to avoid lifting edges. We don\'t rush the process — your truck stays in our climate-controlled studio until every panel is perfect.',
  },
  {
    question: 'Will tint cover the massive rear glass and roof?',
    answer: 'Yes. We tint the full roof glass, rear window, and all side windows. The Cybertruck\'s large glass area makes ceramic tint especially valuable — LLumar IRX blocks 98% of infrared heat, making a significant difference in cabin temperature, particularly in Oklahoma summers.',
  },
  {
    question: 'My Cybertruck already has fingerprints and water spots. Can you fix that?',
    answer: 'Yes. Before any protection service, we perform a thorough decontamination and surface correction on the stainless steel. This removes existing fingerprints, water spots, and light surface marks. The ceramic coating we apply afterward makes the surface highly resistant to future fingerprints.',
  },
];

export default function CybertruckFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="max-w-3xl mx-auto">
      {faqs.map((faq, index) => (
        <div key={index} className="border-b border-white/10">
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full py-6 flex items-center justify-between text-left group"
          >
            <span
              className={`text-lg font-light pr-8 transition-colors ${
                openIndex === index ? 'text-cyan-400' : 'text-white group-hover:text-gray-300'
              }`}
            >
              {faq.question}
            </span>
            <svg
              className={`w-5 h-5 flex-shrink-0 transition-all duration-300 ${
                openIndex === index ? 'rotate-180 text-cyan-400' : 'text-gray-600'
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              openIndex === index ? 'max-h-96 pb-6' : 'max-h-0'
            }`}
          >
            <p className="text-gray-400 text-sm leading-relaxed">{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
