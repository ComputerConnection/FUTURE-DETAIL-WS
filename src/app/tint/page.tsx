import Link from 'next/link';
import type { Metadata } from 'next';
import ShadeSimulator from '@/components/ShadeSimulator';
import HeatDemo from '@/components/HeatDemo';

export const metadata: Metadata = {
  title: 'Window Tint | LLumar Ceramic IRX | FUTURE DETAIL | Oklahoma City',
  description: 'Premium LLumar Ceramic IRX window tinting for Tesla vehicles in Oklahoma City. Superior heat rejection, UV protection, and crystal-clear visibility. Professional installation.',
};

const specs = [
  { value: '98%', label: 'IR Rejection', description: 'Infrared heat blocked' },
  { value: '99%', label: 'UV Block', description: 'Harmful rays rejected' },
  { value: '60%', label: 'Heat Reduction', description: 'Interior temp drop' },
];

const packages = [
  {
    name: 'Front Two',
    price: '299',
    description: 'Driver & passenger windows',
    features: ['2 front door windows', 'LLumar Ceramic IRX', 'Lifetime warranty', 'Same-day install'],
  },
  {
    name: 'Full Vehicle',
    price: '599',
    description: 'Complete window coverage',
    features: ['All side windows', 'Rear windshield', 'LLumar Ceramic IRX', 'Lifetime warranty'],
    popular: true,
  },
  {
    name: 'Full + Windshield',
    price: '899',
    description: 'Maximum heat rejection',
    features: ['Full vehicle tint', 'Windshield strip or full', 'LLumar AIR80 clear', 'Premium package'],
  },
];

const benefits = [
  { title: 'Superior Heat Rejection', description: 'LLumar Ceramic IRX blocks up to 98% of infrared heat, keeping your Tesla cool even on the hottest Oklahoma days.', icon: '☀️' },
  { title: 'UV Protection', description: '99% UV rejection protects your skin and prevents interior fading, cracking, and discoloration over time.', icon: '🛡️' },
  { title: 'Crystal Clear Visibility', description: 'No purple haze, no bubbling. LLumar ceramic technology ensures perfect optical clarity day and night.', icon: '👁️' },
  { title: 'Signal Friendly', description: "Ceramic technology won't interfere with GPS, cell signals, Bluetooth, or Tesla's connectivity features.", icon: '📶' },
  { title: 'Glare Reduction', description: 'Reduces harsh glare from sun and headlights for safer, more comfortable driving.', icon: '🚗' },
  { title: 'Lifetime Warranty', description: "LLumar's lifetime warranty covers bubbling, peeling, cracking, and color change for as long as you own your Tesla.", icon: '✓' },
];

const teslaWindows = [
  { model: 'Model 3', frontTwo: '$299', full: '$599', fullWindshield: '$899' },
  { model: 'Model Y', frontTwo: '$299', full: '$649', fullWindshield: '$949' },
  { model: 'Model S', frontTwo: '$349', full: '$699', fullWindshield: '$999' },
  { model: 'Model X', frontTwo: '$349', full: '$749', fullWindshield: '$1,099' },
  { model: 'Cybertruck', frontTwo: '$399', full: '$899', fullWindshield: '$1,299' },
];

export default function TintPage() {
  return (
    <div className="bg-black pt-20">
      {/* Hero */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 via-transparent to-orange-500/5" />
        <div className="container-wide relative">
          <p className="text-amber-400 text-sm font-medium tracking-widest uppercase mb-4">LLumar Ceramic IRX</p>
          <h1 className="text-5xl md:text-6xl font-extralight mb-6">
            Premium{' '}
            <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
              Window Tint
            </span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mb-10">
            Superior heat rejection, UV protection, and crystal-clear visibility. 
            Oklahoma&apos;s trusted Tesla window tinting specialists.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-black rounded-full font-medium hover:scale-105 transition-transform">
              Book Tint Install
            </Link>
            <a href="#pricing" className="px-8 py-4 border border-white/20 rounded-full font-medium hover:bg-white/10 transition-colors flex items-center justify-center gap-2">
              View Pricing
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Specs */}
      <section className="py-16 border-y border-white/5">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {specs.map((spec) => (
              <div key={spec.label} className="text-center p-8 rounded-2xl bg-white/[0.02] border border-white/5">
                <p className="text-5xl font-extralight text-amber-400 mb-2">{spec.value}</p>
                <p className="text-lg font-light text-white mb-1">{spec.label}</p>
                <p className="text-sm text-gray-500">{spec.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Shade Simulator */}
      <ShadeSimulator />

      {/* Heat Demo */}
      <HeatDemo />

      {/* Oklahoma Legal Info */}
      <section className="py-24 bg-gradient-to-b from-black to-gray-950">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto">
            <div className="p-8 rounded-2xl border border-amber-500/30 bg-amber-500/5">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-amber-500/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-light mb-3 text-amber-400">Oklahoma Tint Laws</h3>
                  <div className="space-y-4 text-gray-400 text-sm">
                    <p>
                      <strong className="text-white">Front Side Windows:</strong> Must allow more than 25% of light through (VLT). 
                      We recommend 35% or lighter for front doors to stay compliant.
                    </p>
                    <p>
                      <strong className="text-white">Back Side & Rear Windows:</strong> Any darkness level is legal. 
                      You can go as dark as 5% (limo) on rear windows.
                    </p>
                    <p>
                      <strong className="text-white">Windshield:</strong> Non-reflective tint is allowed on the top 5 inches, 
                      or to the AS-1 line. Clear ceramic for heat rejection is popular and legal.
                    </p>
                    <p className="text-amber-400">
                      We&apos;ll help you choose a legal setup that maximizes heat rejection and privacy.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why LLumar */}
      <section className="py-24">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-amber-500/10 to-orange-500/10 border border-white/5 flex items-center justify-center">
              <span className="text-gray-700">LLumar Ceramic IRX Film Close-up</span>
            </div>
            <div>
              <p className="text-amber-400 text-sm font-medium uppercase tracking-widest mb-4">Why LLumar Ceramic IRX?</p>
              <h2 className="text-3xl md:text-4xl font-extralight mb-6">The Premium Choice</h2>
              <p className="text-gray-400 leading-relaxed mb-8">
                LLumar Ceramic IRX uses advanced nano-ceramic particle technology to deliver 
                the highest levels of heat rejection without metallic interference. Unlike 
                cheap dyed films that fade and bubble, ceramic IRX maintains its performance 
                and appearance for the life of your vehicle.
              </p>
              <ul className="space-y-4">
                {[
                  "Non-metallic — won't interfere with electronics",
                  'Nano-ceramic particles for maximum heat rejection',
                  'Color-stable — no purple fading over time',
                  'Scratch-resistant hard coat finish',
                  "Backed by LLumar's lifetime warranty",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-gray-300">
                    <svg className="w-5 h-5 text-amber-400 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-gradient-to-b from-black to-gray-950">
        <div className="container-wide">
          <div className="text-center mb-16">
            <p className="text-amber-400 text-sm font-medium uppercase tracking-widest mb-4">Benefits</p>
            <h2 className="text-3xl md:text-4xl font-extralight mb-4">Why Ceramic Tint?</h2>
            <p className="text-gray-500">More than just looks — ceramic window film delivers real performance.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="p-6 rounded-2xl border border-white/10 hover:border-amber-500/30 transition-colors">
                <div className="text-2xl mb-4">{benefit.icon}</div>
                <h3 className="text-lg font-light mb-2">{benefit.title}</h3>
                <p className="text-gray-500 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section id="pricing" className="py-24">
        <div className="container-wide">
          <div className="text-center mb-16">
            <p className="text-amber-400 text-sm font-medium uppercase tracking-widest mb-4">Packages</p>
            <h2 className="text-3xl md:text-4xl font-extralight mb-4">Tinting Packages</h2>
            <p className="text-gray-500">All packages include LLumar Ceramic IRX film and lifetime warranty.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {packages.map((pkg) => (
              <div key={pkg.name} className={`p-8 rounded-2xl border ${pkg.popular ? 'border-amber-500 bg-amber-500/5' : 'border-white/10'}`}>
                {pkg.popular && <span className="text-amber-400 text-xs font-medium">Most Popular</span>}
                <h3 className="text-xl font-light mt-2 mb-2">{pkg.name}</h3>
                <p className="text-gray-500 text-sm mb-4">{pkg.description}</p>
                <p className="text-4xl font-extralight text-amber-400 mb-6">${pkg.price}</p>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-sm text-gray-300">
                      <svg className="w-4 h-4 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/contact?service=tint-${pkg.name.toLowerCase().replace(' ', '-')}`}
                  className={`block text-center py-3 rounded-full font-medium transition-colors ${
                    pkg.popular 
                      ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-black hover:opacity-90' 
                      : 'bg-white/10 text-white hover:bg-white/20'
                  }`}
                >
                  Book Now
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Model Pricing Table */}
      <section className="py-24 bg-gradient-to-t from-gray-950 to-black">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extralight mb-4">Pricing by Model</h2>
            <p className="text-gray-500">LLumar Ceramic IRX pricing for each Tesla model</p>
          </div>
          <div className="max-w-4xl mx-auto overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-4 px-4 text-sm font-medium text-gray-500">Model</th>
                  <th className="text-center py-4 px-4 text-sm font-medium text-gray-500">Front Two</th>
                  <th className="text-center py-4 px-4 text-sm font-medium text-gray-500">Full Vehicle</th>
                  <th className="text-center py-4 px-4 text-sm font-medium text-gray-500">Full + Windshield</th>
                </tr>
              </thead>
              <tbody>
                {teslaWindows.map((row) => (
                  <tr key={row.model} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                    <td className="py-4 px-4 font-light">{row.model}</td>
                    <td className="py-4 px-4 text-center text-gray-400">{row.frontTwo}</td>
                    <td className="py-4 px-4 text-center text-amber-400">{row.full}</td>
                    <td className="py-4 px-4 text-center text-gray-400">{row.fullWindshield}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-center text-gray-600 text-xs mt-6">
            * Windshield tinting uses LLumar AIR80 (80% VLT ceramic film) for legal compliance.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 border-t border-white/5">
        <div className="container-wide text-center">
          <h2 className="text-4xl font-extralight mb-6">
            Ready to{' '}
            <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
              Stay Cool?
            </span>
          </h2>
          <p className="text-gray-400 text-lg mb-10">
            Beat the Oklahoma heat with LLumar Ceramic IRX. Book your tint installation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="px-10 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-black rounded-full font-medium hover:scale-105 transition-transform">
              Book Tint Install
            </Link>
            <a href="tel:+14053159202" className="px-10 py-4 border border-white/20 rounded-full font-medium hover:bg-white/10 transition-colors flex items-center justify-center gap-2">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call (405) 315-9202
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
