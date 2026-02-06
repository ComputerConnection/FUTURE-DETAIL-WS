'use client';

import { useState } from 'react';
import Link from 'next/link';

const serviceExamples = [
  { name: 'Full Front PPF', price: 1500 },
  { name: 'Track Package PPF', price: 2800 },
  { name: 'Full Body PPF', price: 5500 },
  { name: 'Full Color Wrap', price: 5000 },
  { name: 'Full Tint + Windshield', price: 899 },
  { name: 'Ceramic Coating', price: 1500 },
];

const termOptions = [
  { months: 3, apr: 0 },
  { months: 6, apr: 0 },
  { months: 12, apr: 10 },
  { months: 18, apr: 15 },
  { months: 24, apr: 15 },
];

function calculatePayment(principal: number, months: number, apr: number): number {
  if (apr === 0) {
    return principal / months;
  }
  const monthlyRate = apr / 100 / 12;
  return (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) / (Math.pow(1 + monthlyRate, months) - 1);
}

export default function Financing() {
  const [selectedService, setSelectedService] = useState(serviceExamples[2]); // Full Body PPF default
  const [selectedTerm, setSelectedTerm] = useState(termOptions[2]); // 12 months default

  const monthlyPayment = calculatePayment(selectedService.price, selectedTerm.months, selectedTerm.apr);

  return (
    <section className="py-24 bg-gradient-to-b from-black to-gray-950">
      <div className="container-wide">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <p className="text-cyan-400 text-sm font-medium uppercase tracking-widest mb-4">Flexible Payments</p>
            <h2 className="text-3xl md:text-4xl font-extralight mb-4">
              Financing{' '}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Available
              </span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Protect your Tesla today and pay over time. We partner with Affirm to offer
              flexible payment plans that fit your budget.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Benefits */}
            <div>
              <h3 className="text-xl font-light mb-6">Why Finance?</h3>
              <ul className="space-y-4 mb-8">
                {[
                  { text: 'Get protection now, pay over time', desc: 'Don\'t wait for rock chips to happen' },
                  { text: 'Rates as low as 0% APR', desc: 'For qualified buyers on select terms' },
                  { text: 'No hidden fees', desc: 'The price you see is the price you pay' },
                  { text: 'Quick approval', desc: 'Know your rate in seconds, not days' },
                  { text: 'Soft credit check', desc: 'Checking rates won\'t affect your score' },
                ].map((item) => (
                  <li key={item.text} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-cyan-400 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <span className="text-gray-200">{item.text}</span>
                      <p className="text-sm text-gray-500">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>

              {/* Affirm Badge */}
              <div className="p-4 rounded-xl border border-white/10 bg-white/[0.02] flex items-center gap-4">
                <div className="w-16 h-16 rounded-lg bg-[#0fa0ea] flex items-center justify-center text-white font-bold text-xl">
                  affirm
                </div>
                <div>
                  <p className="text-sm text-gray-300">Powered by Affirm</p>
                  <p className="text-xs text-gray-500">Trusted by millions of customers</p>
                </div>
              </div>
            </div>

            {/* Interactive Calculator */}
            <div className="p-8 rounded-2xl border border-white/10 bg-white/[0.02]">
              <h3 className="text-lg font-light mb-6 text-center">Payment Calculator</h3>

              {/* Service Selection */}
              <div className="mb-6">
                <label className="block text-sm text-gray-400 mb-2">Select a service:</label>
                <div className="grid grid-cols-2 gap-2">
                  {serviceExamples.map((service) => (
                    <button
                      key={service.name}
                      onClick={() => setSelectedService(service)}
                      className={`p-3 rounded-lg text-left text-sm transition-all ${
                        selectedService.name === service.name
                          ? 'bg-cyan-500/20 border-cyan-500 border'
                          : 'bg-white/5 border border-white/10 hover:bg-white/10'
                      }`}
                    >
                      <span className="block text-gray-200">{service.name}</span>
                      <span className="text-cyan-400">${service.price.toLocaleString()}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Term Selection */}
              <div className="mb-6">
                <label className="block text-sm text-gray-400 mb-2">Choose your term:</label>
                <div className="flex gap-2">
                  {termOptions.map((term) => (
                    <button
                      key={term.months}
                      onClick={() => setSelectedTerm(term)}
                      className={`flex-1 py-2 px-3 rounded-lg text-sm transition-all ${
                        selectedTerm.months === term.months
                          ? 'bg-cyan-500 text-black font-medium'
                          : 'bg-white/5 text-gray-400 hover:bg-white/10'
                      }`}
                    >
                      {term.months}mo
                    </button>
                  ))}
                </div>
              </div>

              {/* Result */}
              <div className="text-center p-6 rounded-xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 mb-6">
                <p className="text-sm text-gray-400 mb-1">{selectedService.name}</p>
                <p className="text-4xl font-extralight text-white mb-2">
                  ${Math.round(monthlyPayment).toLocaleString()}
                  <span className="text-lg text-gray-400">/mo</span>
                </p>
                <p className="text-sm text-gray-500">
                  for {selectedTerm.months} months
                  {selectedTerm.apr > 0 && ` at ${selectedTerm.apr}% APR`}
                  {selectedTerm.apr === 0 && ' at 0% APR*'}
                </p>
                <div className="mt-3 pt-3 border-t border-white/10">
                  <p className="text-xs text-gray-500">
                    Total: ${selectedService.price.toLocaleString()}
                    {selectedTerm.apr > 0 && (
                      <span> + ${Math.round((monthlyPayment * selectedTerm.months) - selectedService.price).toLocaleString()} interest</span>
                    )}
                  </p>
                </div>
              </div>

              {/* CTA */}
              <Link
                href="/contact"
                className="block text-center py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full font-medium hover:scale-[1.02] transition-transform"
              >
                Apply for Financing
              </Link>

              <p className="text-[10px] text-gray-600 text-center mt-4">
                *0% APR available on 3-6 month terms for qualified buyers. Rates from 10-30% APR on longer terms.
                Subject to credit approval. Payment calculator is for estimation purposes only.
              </p>
            </div>
          </div>

          {/* FAQ */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl border border-white/10">
              <h4 className="font-medium mb-2">How does it work?</h4>
              <p className="text-sm text-gray-500">
                Choose Affirm at checkout. You&apos;ll get a real-time decision in seconds and can select the payment plan that works for you.
              </p>
            </div>
            <div className="p-6 rounded-xl border border-white/10">
              <h4 className="font-medium mb-2">Will this affect my credit?</h4>
              <p className="text-sm text-gray-500">
                Checking your eligibility uses a soft credit check that won&apos;t impact your credit score. Only completing a purchase may affect your score.
              </p>
            </div>
            <div className="p-6 rounded-xl border border-white/10">
              <h4 className="font-medium mb-2">Can I pay off early?</h4>
              <p className="text-sm text-gray-500">
                Yes! There are no prepayment penalties. Pay off your balance at any time with no additional fees.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
