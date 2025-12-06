import Link from 'next/link';
import type { Metadata } from 'next';
import Financing from '@/components/Financing';
import Referral from '@/components/Referral';

export const metadata: Metadata = {
  title: 'Pricing | Tesla PPF, Wraps, Tint & Coating Packages | FUTURE DETAIL',
  description: 'Transparent pricing for Tesla PPF, color wraps, window tinting, and ceramic coatings in Oklahoma City. Financing available. Get a custom quote today.',
};

const ppfPricing = [
  { model: 'Model 3', fullFront: '$1,500', track: '$2,800', fullBody: '$5,500', stealthAdd: '+15%' },
  { model: 'Model Y', fullFront: '$1,600', track: '$3,000', fullBody: '$6,000', stealthAdd: '+15%' },
  { model: 'Model S', fullFront: '$1,800', track: '$3,200', fullBody: '$6,500', stealthAdd: '+15%' },
  { model: 'Model X', fullFront: '$2,000', track: '$3,500', fullBody: '$7,000', stealthAdd: '+15%' },
  { model: 'Cybertruck', fullFront: '$2,200', track: '$4,000', fullBody: '$8,000', stealthAdd: '+20%' },
];

const wrapPricing = [
  { model: 'Model 3', partial: '$2,500', fullColor: '$4,500', stealth: '$5,000' },
  { model: 'Model Y', partial: '$2,800', fullColor: '$5,000', stealth: '$5,500' },
  { model: 'Model S', partial: '$3,000', fullColor: '$5,500', stealth: '$6,000' },
  { model: 'Model X', partial: '$3,500', fullColor: '$6,500', stealth: '$7,000' },
  { model: 'Cybertruck', partial: '$4,000', fullColor: '$7,500', stealth: '$8,500' },
];

const tintPricing = [
  { model: 'Model 3', frontTwo: '$299', full: '$599', fullWindshield: '$899' },
  { model: 'Model Y', frontTwo: '$299', full: '$649', fullWindshield: '$949' },
  { model: 'Model S', frontTwo: '$349', full: '$699', fullWindshield: '$999' },
  { model: 'Model X', frontTwo: '$349', full: '$749', fullWindshield: '$1,099' },
  { model: 'Cybertruck', frontTwo: '$399', full: '$899', fullWindshield: '$1,299' },
];

const coatingPricing = [
  { name: 'Paint Coating', price: '$800', warranty: '2-year', description: 'Paint decontamination, single-stage polish, ceramic coating' },
  { name: 'Full Detail + Coating', price: '$1,500', warranty: '5-year', description: 'Full paint correction, wheels, glass, 5-year ceramic', popular: true },
  { name: 'PPF + Coating Combo', price: '$500', warranty: '2-year', description: 'Add ceramic coating to any PPF installation' },
];

const addOns = [
  { name: 'Door Cup Guards', price: '$75' },
  { name: 'Door Edge Guards', price: '$100' },
  { name: 'Headlight PPF', price: '$150' },
  { name: 'Mirror Caps PPF', price: '$100' },
  { name: 'Rocker Panel PPF', price: '$300' },
  { name: 'Chrome Delete', price: '$400' },
  { name: 'Roof Wrap', price: '$500' },
  { name: 'Wheel Faces Coating', price: '$200' },
];

export default function PricingPage() {
  return (
    <div className="bg-black pt-20">
      {/* Hero */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-purple-500/5" />
        <div className="container-wide relative">
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-cyan-400 text-sm font-medium tracking-widest uppercase mb-4">Transparent Pricing</p>
            <h1 className="text-5xl md:text-6xl font-extralight mb-6">
              Investment{' '}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Guide
              </span>
            </h1>
            <p className="text-gray-400 text-lg">
              Quality protection is an investment in your Tesla. Here&apos;s what to expect. 
              All prices are starting points—final quotes depend on vehicle condition.
            </p>
          </div>
        </div>
      </section>

      {/* PPF Pricing */}
      <section className="py-24 border-t border-white/5">
        <div className="container-wide">
          <div className="flex items-center justify-between mb-12">
            <div>
              <p className="text-cyan-400 text-sm font-medium uppercase tracking-widest mb-2">Paint Protection Film</p>
              <h2 className="text-3xl font-extralight">PPF Packages</h2>
            </div>
            <Link href="/ppf" className="text-sm text-cyan-400 hover:underline hidden md:block">
              Learn more about PPF →
            </Link>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px]">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-4 px-4 text-sm font-medium text-gray-500">Model</th>
                  <th className="text-center py-4 px-4 text-sm font-medium text-gray-500">Full Front</th>
                  <th className="text-center py-4 px-4 text-sm font-medium text-gray-500">Track Package</th>
                  <th className="text-center py-4 px-4 text-sm font-medium text-gray-500">Full Body</th>
                  <th className="text-center py-4 px-4 text-sm font-medium text-gray-500">Stealth Add</th>
                </tr>
              </thead>
              <tbody>
                {ppfPricing.map((row) => (
                  <tr key={row.model} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                    <td className="py-4 px-4 font-light">{row.model}</td>
                    <td className="py-4 px-4 text-center text-gray-400">{row.fullFront}</td>
                    <td className="py-4 px-4 text-center text-cyan-400 font-medium">{row.track}</td>
                    <td className="py-4 px-4 text-center text-gray-400">{row.fullBody}</td>
                    <td className="py-4 px-4 text-center text-gray-500 text-sm">{row.stealthAdd}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 flex flex-wrap gap-4 text-xs text-gray-500">
            <span>• Full Front: Hood, fenders, bumper, mirrors, headlights</span>
            <span>• Track: Full Front + A-pillars, rockers, wheel arches</span>
            <span>• Full Body: Every painted surface</span>
          </div>
        </div>
      </section>

      {/* Wrap Pricing */}
      <section className="py-24 bg-gradient-to-b from-black to-gray-950">
        <div className="container-wide">
          <div className="flex items-center justify-between mb-12">
            <div>
              <p className="text-purple-400 text-sm font-medium uppercase tracking-widest mb-2">Color Change Wraps</p>
              <h2 className="text-3xl font-extralight">Wrap Packages</h2>
            </div>
            <Link href="/wraps" className="text-sm text-purple-400 hover:underline hidden md:block">
              Browse 80+ colors →
            </Link>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[500px]">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-4 px-4 text-sm font-medium text-gray-500">Model</th>
                  <th className="text-center py-4 px-4 text-sm font-medium text-gray-500">Partial Wrap</th>
                  <th className="text-center py-4 px-4 text-sm font-medium text-gray-500">Full Color Change</th>
                  <th className="text-center py-4 px-4 text-sm font-medium text-gray-500">Stealth Conversion</th>
                </tr>
              </thead>
              <tbody>
                {wrapPricing.map((row) => (
                  <tr key={row.model} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                    <td className="py-4 px-4 font-light">{row.model}</td>
                    <td className="py-4 px-4 text-center text-gray-400">{row.partial}</td>
                    <td className="py-4 px-4 text-center text-purple-400 font-medium">{row.fullColor}</td>
                    <td className="py-4 px-4 text-center text-gray-400">{row.stealth}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Tint Pricing */}
      <section className="py-24">
        <div className="container-wide">
          <div className="flex items-center justify-between mb-12">
            <div>
              <p className="text-amber-400 text-sm font-medium uppercase tracking-widest mb-2">Window Tinting</p>
              <h2 className="text-3xl font-extralight">LLumar Ceramic IRX</h2>
            </div>
            <Link href="/tint" className="text-sm text-amber-400 hover:underline hidden md:block">
              Learn about ceramic tint →
            </Link>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[500px]">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-4 px-4 text-sm font-medium text-gray-500">Model</th>
                  <th className="text-center py-4 px-4 text-sm font-medium text-gray-500">Front Two</th>
                  <th className="text-center py-4 px-4 text-sm font-medium text-gray-500">Full Vehicle</th>
                  <th className="text-center py-4 px-4 text-sm font-medium text-gray-500">Full + Windshield</th>
                </tr>
              </thead>
              <tbody>
                {tintPricing.map((row) => (
                  <tr key={row.model} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                    <td className="py-4 px-4 font-light">{row.model}</td>
                    <td className="py-4 px-4 text-center text-gray-400">{row.frontTwo}</td>
                    <td className="py-4 px-4 text-center text-amber-400 font-medium">{row.full}</td>
                    <td className="py-4 px-4 text-center text-gray-400">{row.fullWindshield}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Coating Pricing */}
      <section className="py-24 bg-gradient-to-t from-gray-950 to-black">
        <div className="container-wide">
          <div className="flex items-center justify-between mb-12">
            <div>
              <p className="text-emerald-400 text-sm font-medium uppercase tracking-widest mb-2">Ceramic Coating</p>
              <h2 className="text-3xl font-extralight">Coating Packages</h2>
            </div>
            <Link href="/coatings" className="text-sm text-emerald-400 hover:underline hidden md:block">
              Learn about coatings →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {coatingPricing.map((pkg) => (
              <div key={pkg.name} className={`p-6 rounded-2xl border ${pkg.popular ? 'border-emerald-500 bg-emerald-500/5' : 'border-white/10'}`}>
                {pkg.popular && <span className="text-emerald-400 text-xs font-medium">Most Popular</span>}
                <h3 className="text-lg font-light mt-2">{pkg.name}</h3>
                <p className="text-3xl font-extralight text-emerald-400 my-3">{pkg.price}</p>
                <p className="text-sm text-gray-500 mb-2">{pkg.warranty} warranty</p>
                <p className="text-xs text-gray-600">{pkg.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-Ons */}
      <section className="py-24">
        <div className="container-wide">
          <div className="text-center mb-12">
            <p className="text-gray-400 text-sm font-medium uppercase tracking-widest mb-2">À La Carte</p>
            <h2 className="text-3xl font-extralight">Popular Add-Ons</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {addOns.map((addon) => (
              <div key={addon.name} className="p-4 rounded-xl border border-white/10 flex justify-between items-center">
                <span className="text-sm text-gray-300">{addon.name}</span>
                <span className="text-sm text-cyan-400">{addon.price}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Financing */}
      <Financing />

      {/* Referral */}
      <Referral />

      {/* CTA */}
      <section className="py-24 border-t border-white/5">
        <div className="container-wide text-center">
          <h2 className="text-4xl font-extralight mb-6">
            Ready for a{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Custom Quote?
            </span>
          </h2>
          <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
            Every Tesla is unique. Contact us for a personalized quote based on your specific 
            vehicle and protection goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="px-10 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full font-medium hover:scale-105 transition-transform">
              Get Your Quote
            </Link>
            <a href="tel:+14053159202" className="px-10 py-4 border border-white/20 rounded-full font-medium hover:bg-white/10 transition-colors flex items-center justify-center gap-2">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              (405) 315-9202
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
