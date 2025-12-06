import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ceramic Coating | FUTURE DETAIL | Oklahoma City',
  description: 'Professional ceramic coating for Tesla vehicles. Hydrophobic protection, enhanced gloss, UV resistance. 2-5 year warranties available. Edmond & OKC.',
};

const packages = [
  {
    name: 'Paint Coating',
    price: '800',
    warranty: '2-year',
    description: 'Essential ceramic protection',
    features: ['Paint decontamination', 'Single-stage polish', '2-year ceramic coating', 'Hydrophobic finish', 'UV protection'],
  },
  {
    name: 'Full Detail + Coating',
    price: '1,500',
    warranty: '5-year',
    description: 'Complete correction and protection',
    features: ['Full paint correction', 'Swirl & scratch removal', '5-year ceramic coating', 'Wheels coated', 'Glass coating included'],
    popular: true,
  },
  {
    name: 'PPF + Coating Combo',
    price: '500',
    warranty: '2-year',
    description: 'Add-on for fresh PPF installs',
    features: ['Applied over new PPF', 'Enhanced hydrophobics', 'Easier maintenance', 'Extends PPF life', 'Added UV protection'],
    addon: true,
  },
];

const benefits = [
  { 
    title: 'Hydrophobic Protection', 
    description: 'Water beads and rolls off instantly, taking dirt and contaminants with it. Washing becomes effortless.', 
    icon: '💧',
    stat: '120°+',
    statLabel: 'Contact Angle'
  },
  { 
    title: 'UV Resistance', 
    description: 'Prevents oxidation and fading from harmful UV rays. Your paint stays vibrant year after year.', 
    icon: '☀️',
    stat: '99%',
    statLabel: 'UV Blocked'
  },
  { 
    title: 'Enhanced Gloss', 
    description: 'Adds incredible depth and clarity to your paint. That wet, just-detailed look lasts for years.', 
    icon: '✨',
    stat: '2x',
    statLabel: 'Gloss Depth'
  },
  { 
    title: 'Chemical Resistance', 
    description: 'Protects against bird droppings, tree sap, bug splatter, and harsh environmental contaminants.', 
    icon: '🧪',
    stat: 'pH 2-12',
    statLabel: 'Resistant Range'
  },
  { 
    title: 'Scratch Resistance', 
    description: 'Adds a hard layer of protection that resists light scratches and swirl marks from washing.', 
    icon: '🛡️',
    stat: '9H',
    statLabel: 'Hardness Rating'
  },
  { 
    title: 'Easy Maintenance', 
    description: 'Drastically reduces wash time and frequency. Most dirt rinses off with just water.', 
    icon: '🚿',
    stat: '70%',
    statLabel: 'Less Wash Time'
  },
];

const applications = [
  { area: 'Paint', description: 'Full exterior paint protection', recommended: true },
  { area: 'Wheels', description: 'Brake dust repellent coating', recommended: true },
  { area: 'Glass', description: 'Windshield and windows', recommended: true },
  { area: 'Trim', description: 'Plastic and rubber protection', recommended: false },
  { area: 'Interior', description: 'Leather and fabric protection', recommended: false },
  { area: 'PPF', description: 'Coating over protection film', recommended: true },
];

export default function CoatingsPage() {
  return (
    <div className="bg-black pt-20">
      {/* Hero */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-teal-500/5" />
        <div className="container-wide relative">
          <p className="text-emerald-400 text-sm font-medium tracking-widest uppercase mb-4">Ceramic Coating</p>
          <h1 className="text-5xl md:text-6xl font-extralight mb-6">
            Lasting{' '}
            <span className="bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent">
              Protection
            </span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mb-10">
            Professional-grade ceramic coating that delivers unmatched hydrophobic protection, 
            enhanced gloss, and effortless maintenance for years.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-black rounded-full font-medium hover:scale-105 transition-transform">
              Get a Quote
            </Link>
            <a href="#packages" className="px-8 py-4 border border-white/20 rounded-full font-medium hover:bg-white/10 transition-colors">
              View Packages
            </a>
          </div>
        </div>
      </section>

      {/* What is Ceramic Coating */}
      <section className="py-24 border-t border-white/5">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-emerald-400 text-sm font-medium uppercase tracking-widest mb-4">The Science</p>
              <h2 className="text-3xl font-extralight mb-6">What is Ceramic Coating?</h2>
              <p className="text-gray-400 leading-relaxed mb-6">
                Ceramic coating is a liquid polymer that chemically bonds with your vehicle&apos;s paint, 
                creating a permanent or semi-permanent layer of protection. Unlike wax or sealants 
                that sit on top of the paint, ceramic coating becomes part of it.
              </p>
              <p className="text-gray-400 leading-relaxed mb-8">
                The result is a hydrophobic surface that repels water, dirt, and contaminants while 
                adding incredible depth and gloss to your paint. Once applied, your Tesla will be 
                easier to clean and maintain for years.
              </p>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { value: '2-5', label: 'Year Protection' },
                  { value: '9H', label: 'Hardness' },
                  { value: '24hr', label: 'Cure Time' },
                ].map((stat) => (
                  <div key={stat.label} className="text-center p-4 rounded-xl border border-white/10">
                    <p className="text-2xl font-extralight text-emerald-400">{stat.value}</p>
                    <p className="text-xs text-gray-500">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-emerald-500/10 to-teal-500/10 border border-white/5 flex items-center justify-center">
              <span className="text-gray-700">Water Beading on Ceramic Coated Surface</span>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-gradient-to-b from-black to-gray-950">
        <div className="container-wide">
          <div className="text-center mb-16">
            <p className="text-emerald-400 text-sm font-medium uppercase tracking-widest mb-4">Benefits</p>
            <h2 className="text-3xl font-extralight mb-4">Why Ceramic Coating?</h2>
            <p className="text-gray-500">Protection that performs, year after year</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="p-6 rounded-2xl border border-white/10 hover:border-emerald-500/30 transition-colors group">
                <div className="flex items-start justify-between mb-4">
                  <div className="text-2xl">{benefit.icon}</div>
                  <div className="text-right">
                    <p className="text-xl font-light text-emerald-400">{benefit.stat}</p>
                    <p className="text-xs text-gray-600">{benefit.statLabel}</p>
                  </div>
                </div>
                <h3 className="text-lg font-light mb-2 group-hover:text-emerald-400 transition-colors">{benefit.title}</h3>
                <p className="text-gray-500 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Areas */}
      <section className="py-24">
        <div className="container-wide">
          <div className="text-center mb-16">
            <p className="text-emerald-400 text-sm font-medium uppercase tracking-widest mb-4">Coverage</p>
            <h2 className="text-3xl font-extralight mb-4">What Can Be Coated?</h2>
            <p className="text-gray-500">Ceramic coating can protect almost every surface</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-4xl mx-auto">
            {applications.map((app) => (
              <div key={app.area} className={`p-4 rounded-xl border text-center ${app.recommended ? 'border-emerald-500/30 bg-emerald-500/5' : 'border-white/10'}`}>
                {app.recommended && <span className="text-emerald-400 text-[10px] font-medium">Recommended</span>}
                <p className="font-light mt-1">{app.area}</p>
                <p className="text-xs text-gray-500 mt-1">{app.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section id="packages" className="py-24 bg-gradient-to-t from-gray-950 to-black">
        <div className="container-wide">
          <div className="text-center mb-16">
            <p className="text-emerald-400 text-sm font-medium uppercase tracking-widest mb-4">Packages</p>
            <h2 className="text-3xl font-extralight mb-4">Coating Packages</h2>
            <p className="text-gray-500">Professional-grade ceramic protection</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {packages.map((pkg) => (
              <div key={pkg.name} className={`p-8 rounded-2xl border ${pkg.popular ? 'border-emerald-500 bg-emerald-500/5' : 'border-white/10'}`}>
                {pkg.popular && <span className="text-emerald-400 text-xs font-medium">Best Value</span>}
                {pkg.addon && <span className="text-gray-500 text-xs font-medium">Add-On</span>}
                <h3 className="text-xl font-light mt-2 mb-2">{pkg.name}</h3>
                <p className="text-gray-500 text-sm mb-4">{pkg.description}</p>
                <p className="text-4xl font-extralight text-emerald-400 mb-1">${pkg.price}</p>
                <p className="text-sm text-gray-500 mb-6">{pkg.warranty} warranty</p>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-sm text-gray-300">
                      <svg className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
                      ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-black hover:opacity-90' 
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

      {/* Before/After */}
      <section className="py-24">
        <div className="container-wide">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extralight mb-4">The Difference</h2>
            <p className="text-gray-500">See how ceramic coating transforms your Tesla</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="aspect-video rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 border border-white/5 flex items-center justify-center">
              <div className="text-center">
                <p className="text-gray-600 text-sm mb-2">Before</p>
                <p className="text-gray-700">Water sits flat on surface</p>
              </div>
            </div>
            <div className="aspect-video rounded-2xl bg-gradient-to-br from-emerald-500/10 to-teal-500/10 border border-emerald-500/20 flex items-center justify-center">
              <div className="text-center">
                <p className="text-emerald-400 text-sm mb-2">After</p>
                <p className="text-gray-500">Water beads and rolls off</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-t from-black to-gray-950 border-t border-white/5">
        <div className="container-wide text-center">
          <h2 className="text-4xl font-extralight mb-6">
            Ready for{' '}
            <span className="bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent">
              Effortless Shine?
            </span>
          </h2>
          <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
            Stop wasting weekends washing your Tesla. Ceramic coating makes maintenance a breeze.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="px-10 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-black rounded-full font-medium hover:scale-105 transition-transform">
              Schedule Coating
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
