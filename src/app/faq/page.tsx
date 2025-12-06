'use client';

import { useState } from 'react';
import Link from 'next/link';

const faqs = [
  {
    category: 'Paint Protection Film (PPF)',
    questions: [
      {
        q: 'How long does PPF last?',
        a: 'Quality PPF from brands like XPEL and 3M typically lasts 7-10 years with proper care. Our installations come with a 10-year manufacturer warranty against yellowing, cracking, peeling, and delamination.',
      },
      {
        q: 'Will PPF damage my paint when removed?',
        a: 'No. When professionally removed, PPF leaves your factory paint in pristine condition underneath. In fact, the paint will look better than unprotected areas because it has been shielded from UV rays and environmental damage.',
      },
      {
        q: 'What is the difference between gloss and stealth PPF?',
        a: 'Gloss PPF is optically clear and enhances your existing paint with a wet, shiny look. Stealth (matte) PPF transforms glossy paint into a satin matte finish while providing the same protection. Stealth is especially popular on white and black Teslas.',
      },
      {
        q: 'Can PPF be applied over existing scratches?',
        a: 'Minor scratches can sometimes be polished out before PPF application. However, deep scratches may show through the film. We recommend paint correction before PPF installation for the best results.',
      },
      {
        q: 'How long does PPF installation take?',
        a: 'Full front coverage takes 1-2 days. Track package takes 2-3 days. Full body coverage takes 3-5 days. We never rush installations to ensure perfect results.',
      },
    ],
  },
  {
    category: 'Color Change Wraps',
    questions: [
      {
        q: 'Will a wrap damage my factory paint?',
        a: 'No. High-quality wraps from brands like PurePPF actually protect your paint. When removed professionally, your factory paint will be in the same condition as when the wrap was applied—often better since it was protected from UV and debris.',
      },
      {
        q: 'How long do wraps last?',
        a: 'Quality color change wraps typically last 5-7 years with proper care. Our PurePPF wraps come with a 7-year warranty and feature self-healing technology.',
      },
      {
        q: 'Can I wrap a leased Tesla?',
        a: 'Absolutely! Wraps are fully reversible, making them perfect for leased vehicles. Remove the wrap before returning the vehicle and your original paint is preserved.',
      },
      {
        q: 'Do you wrap door jambs?',
        a: 'Yes, our full color change wraps include door jambs for a seamless look when doors are open. This is included in our Full Color Change package.',
      },
    ],
  },
  {
    category: 'Window Tinting',
    questions: [
      {
        q: 'What is ceramic tint?',
        a: 'Ceramic tint uses nano-ceramic particles instead of dyes or metals to block heat. LLumar Ceramic IRX blocks up to 98% of infrared heat without interfering with electronics, GPS, or cell signals.',
      },
      {
        q: 'Is window tint legal in Oklahoma?',
        a: 'Oklahoma allows any tint darkness on rear windows and the back windshield. Front side windows must allow at least 25% light transmission. We help you choose legal options that maximize heat rejection.',
      },
      {
        q: 'How long until I can roll down my windows?',
        a: 'We recommend waiting 3-5 days before rolling down freshly tinted windows. This allows the adhesive to fully cure. In winter months, wait up to 7 days.',
      },
      {
        q: 'Will tint interfere with my Tesla sensors or cameras?',
        a: 'Our professional-grade ceramic tint does not interfere with Tesla Autopilot, cameras, or sensors. We use signal-friendly ceramic technology specifically designed for modern vehicles.',
      },
    ],
  },
  {
    category: 'Ceramic Coating',
    questions: [
      {
        q: 'How is ceramic coating different from wax?',
        a: 'Wax sits on top of paint and wears off in weeks. Ceramic coating chemically bonds with your paint, creating a permanent protective layer that lasts 2-5 years. It provides superior protection, gloss, and hydrophobic properties.',
      },
      {
        q: 'Can ceramic coating be applied over PPF?',
        a: 'Yes! We recommend ceramic coating over PPF. It enhances the hydrophobic properties, makes the PPF easier to clean, and adds an extra layer of UV protection.',
      },
      {
        q: 'Do I still need to wash my car after ceramic coating?',
        a: 'Yes, but much less frequently and with less effort. Dirt and contaminants do not bond to the coated surface, so most can be rinsed off with water. When you do wash, the car cleans up much faster.',
      },
      {
        q: 'How long does ceramic coating take to cure?',
        a: 'Initial cure takes 24 hours—do not get the car wet during this time. Full cure takes about 7 days. We recommend avoiding automatic car washes for the first month.',
      },
    ],
  },
  {
    category: 'General',
    questions: [
      {
        q: 'Do you work on vehicles other than Teslas?',
        a: 'While we specialize in Teslas and have patterns for every model, we also work on other premium vehicles. Contact us to discuss your specific vehicle.',
      },
      {
        q: 'Do you offer financing?',
        a: 'Yes! We partner with Affirm to offer flexible payment plans. Split your purchase into monthly payments with rates as low as 0% APR for qualified buyers.',
      },
      {
        q: 'How do I care for my PPF/wrap/coating?',
        a: 'We provide detailed care instructions with every service. Generally: hand wash or touchless wash only, avoid automatic car washes with brushes, use pH-neutral soaps, and apply a spray sealant every few months for best results.',
      },
      {
        q: 'Do you offer mobile service?',
        a: 'No. Quality PPF, wrap, and coating installation requires a climate-controlled, dust-free environment. All work is performed at our Edmond facility.',
      },
    ],
  },
];

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<string[]>([]);

  const toggleItem = (id: string) => {
    setOpenItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <div className="bg-black pt-20 min-h-screen">
      {/* Hero */}
      <section className="py-24">
        <div className="container-wide">
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-cyan-400 text-sm font-medium tracking-widest uppercase mb-4">FAQ</p>
            <h1 className="text-5xl font-extralight mb-6">
              Frequently Asked{' '}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Questions
              </span>
            </h1>
            <p className="text-gray-400 text-lg">
              Everything you need to know about protecting your Tesla. Can&apos;t find your answer? 
              <Link href="/contact" className="text-cyan-400 hover:underline ml-1">Contact us</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="pb-24">
        <div className="container-wide max-w-4xl">
          {faqs.map((section) => (
            <div key={section.category} className="mb-12">
              <h2 className="text-xl font-light text-cyan-400 mb-6 pb-2 border-b border-white/10">
                {section.category}
              </h2>
              <div className="space-y-4">
                {section.questions.map((faq, index) => {
                  const id = `${section.category}-${index}`;
                  const isOpen = openItems.includes(id);
                  return (
                    <div
                      key={id}
                      className="border border-white/10 rounded-xl overflow-hidden hover:border-white/20 transition-colors"
                    >
                      <button
                        onClick={() => toggleItem(id)}
                        className="w-full px-6 py-4 text-left flex items-center justify-between gap-4"
                      >
                        <span className="font-light">{faq.q}</span>
                        <svg
                          className={`w-5 h-5 text-cyan-400 transition-transform flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      <div
                        className={`px-6 overflow-hidden transition-all duration-300 ${
                          isOpen ? 'pb-4 max-h-96' : 'max-h-0'
                        }`}
                      >
                        <p className="text-gray-400 text-sm leading-relaxed">{faq.a}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-24 bg-gradient-to-t from-gray-950 to-black border-t border-white/5">
        <div className="container-wide text-center">
          <h2 className="text-3xl font-extralight mb-6">Still Have Questions?</h2>
          <p className="text-gray-400 mb-10">
            We&apos;re happy to help. Reach out and we&apos;ll get back to you within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full font-medium hover:scale-105 transition-transform">
              Contact Us
            </Link>
            <a href="tel:+14053159202" className="px-8 py-4 border border-white/20 rounded-full font-medium hover:bg-white/10 transition-colors">
              Call (405) 315-9202
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

