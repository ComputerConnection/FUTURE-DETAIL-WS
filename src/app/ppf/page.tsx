import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Paint Protection Film (PPF) | FUTURE DETAIL | Oklahoma City',
  description: 'Premium XPEL and 3M Paint Protection Film for Tesla vehicles. Self-healing, UV stable, 10-year warranty. Full front, track, and full body packages.',
};

const packages = [
  {
    name: 'Full Front',
    price: '1,500',
    coverage: '~30%',
    installTime: '1-2 days',
    description: 'Essential protection for high-impact areas',
    features: ['Full hood', 'Full fenders', 'Front bumper', 'Side mirrors', 'Headlights'],
  },
  {
    name: 'Track Package',
    price: '2,800',
    coverage: '~50%',
    installTime: '2-3 days',
    description: 'Extended coverage for enthusiast drivers',
    features: ['Everything in Full Front', 'A-pillars', 'Rocker panels', 'Rear wheel arches', 'Door edges & cups'],
    popular: true,
  },
  {
    name: 'Full Body',
    price: '5,500',
    coverage: '100%',
    installTime: '3-5 days',
    description: 'Complete protection for maximum peace of mind',
    features: ['Every painted surface', 'Door jambs', 'Trunk & frunk edges', 'All emblems wrapped', 'Seamless coverage'],
  },
];

const benefits = [
  { title: 'Self-Healing Technology', description: 'Minor scratches and swirl marks disappear with heat exposure, keeping your PPF looking new.', icon: '✨' },
  { title: 'UV Stability', description: 'Non-yellowing film maintains optical clarity for years. Your Tesla stays looking factory-fresh.', icon: '☀️' },
  { title: 'Rock Chip Protection', description: 'Absorbs impacts from road debris, preventing chips and cracks in your factory paint.', icon: '🛡️' },
  { title: 'Chemical Resistance', description: 'Protects against bird droppings, tree sap, bug splatter, and harsh cleaning chemicals.', icon: '🧪' },
  { title: 'Invisible Protection', description: 'Optically clear film is virtually invisible. Nobody knows it is there until you tell them.', icon: '👁️' },
  { title: '10-Year Warranty', description: 'Manufacturer-backed warranty covers yellowing, cracking, peeling, and delamination.', icon: '📋' },
];

export default function PPFPage() {
  return (
    <div className="bg-black pt-20">
      {/* Hero */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-blue-500/5" />
        <div className="container-wide relative">
          <p className="text-cyan-400 text-sm font-medium tracking-widest uppercase mb-4">Paint Protection Film</p>
          <h1 className="text-5xl md:text-6xl font-extralight mb-6">
            Stealth{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Protection
            </span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mb-10">
            Self-healing, optically clear film that shields your Tesla from rock chips, scratches, 
            and environmental damage. Available in gloss or stealth matte finish.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full font-medium hover:scale-105 transition-transform">
              Get a Quote
            </Link>
            <a href="#packages" className="px-8 py-4 border border-white/20 rounded-full font-medium hover:bg-white/10 transition-colors">
              View Packages
            </a>
          </div>
        </div>
      </section>

      {/* Finishes */}
      <section className="py-24 border-t border-white/5">
        <div className="container-wide">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extralight mb-4">Choose Your Finish</h2>
            <p className="text-gray-500">Same protection, different aesthetics</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="p-8 rounded-2xl border border-white/10 hover:border-cyan-500/30 transition-colors">
              <div className="aspect-video bg-gradient-to-br from-white/5 to-white/10 rounded-xl mb-6 flex items-center justify-center">
                <span className="text-gray-600">Gloss PPF Preview</span>
              </div>
              <h3 className="text-xl font-light mb-2">Gloss Finish</h3>
              <p className="text-gray-500 text-sm">Enhances your factory paint with a wet, glossy look while providing invisible protection.</p>
            </div>
            <div className="p-8 rounded-2xl border border-cyan-500 bg-cyan-500/5">
              <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl mb-6 flex items-center justify-center">
                <span className="text-gray-600">Stealth PPF Preview</span>
              </div>
              <h3 className="text-xl font-light mb-2">Stealth (Matte) Finish <span className="text-cyan-400 text-sm">Popular</span></h3>
              <p className="text-gray-500 text-sm">Transforms your glossy paint to a factory-like satin matte while adding protection.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-gradient-to-b from-black to-gray-950">
        <div className="container-wide">
          <div className="text-center mb-16">
            <p className="text-cyan-400 text-sm font-medium uppercase tracking-widest mb-4">Why PPF?</p>
            <h2 className="text-3xl font-extralight mb-4">Protection That Performs</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="p-6 rounded-2xl border border-white/10 hover:border-cyan-500/30 transition-colors">
                <div className="text-2xl mb-4">{benefit.icon}</div>
                <h3 className="text-lg font-light mb-2">{benefit.title}</h3>
                <p className="text-gray-500 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section id="packages" className="py-24">
        <div className="container-wide">
          <div className="text-center mb-16">
            <p className="text-cyan-400 text-sm font-medium uppercase tracking-widest mb-4">Packages</p>
            <h2 className="text-3xl font-extralight mb-4">PPF Packages</h2>
            <p className="text-gray-500">Premium XPEL or 3M film with 10-year warranty</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {packages.map((pkg) => (
              <div key={pkg.name} className={`p-8 rounded-2xl border ${pkg.popular ? 'border-cyan-500 bg-cyan-500/5' : 'border-white/10'}`}>
                {pkg.popular && <span className="text-cyan-400 text-xs font-medium">Most Popular</span>}
                <h3 className="text-xl font-light mt-2 mb-2">{pkg.name}</h3>
                <p className="text-gray-500 text-sm mb-4">{pkg.description}</p>
                <p className="text-4xl font-extralight text-cyan-400 mb-2">${pkg.price}</p>
                <div className="flex gap-4 text-sm text-gray-500 mb-6">
                  <span>{pkg.coverage} coverage</span>
                  <span>•</span>
                  <span>{pkg.installTime}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-sm text-gray-300">
                      <svg className="w-4 h-4 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={`block text-center py-3 rounded-full font-medium transition-colors ${
                    pkg.popular 
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:opacity-90' 
                      : 'bg-white/10 text-white hover:bg-white/20'
                  }`}
                >
                  Get Quote
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-t from-black to-gray-950 border-t border-white/5">
        <div className="container-wide text-center">
          <h2 className="text-4xl font-extralight mb-6">
            Protect Your{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Investment
            </span>
          </h2>
          <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
            Tesla paint is notoriously thin. PPF is the only way to truly protect it from rock chips, 
            scratches, and environmental damage.
          </p>
          <Link href="/contact" className="px-10 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full font-medium hover:scale-105 transition-transform inline-block">
            Schedule Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
