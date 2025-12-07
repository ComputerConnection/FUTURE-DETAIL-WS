import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Unplugged Performance Accessories | FUTURE DETAIL | Oklahoma City',
  description: 'Authorized Unplugged Performance dealer in Oklahoma. Premium Tesla accessories, aero kits, performance upgrades, wheels, and carbon fiber parts. Professional installation.',
};

const categories = [
  {
    name: 'Aero Body Kits',
    description: 'Aggressive styling with functional aerodynamics',
    icon: '🏎️',
    color: 'cyan',
    products: [
      { name: 'Ascension Front Fascia', price: '2,495', description: 'Complete front end replacement with integrated splitter' },
      { name: 'Ascension Rear Diffuser', price: '1,295', description: 'Aggressive rear diffuser with functional aero' },
      { name: 'Ascension Side Skirts', price: '995', description: 'Extended side skirts for lowered appearance' },
      { name: 'Rear Spoiler', price: '695', description: 'Performance rear spoiler in carbon fiber or painted' },
      { name: 'Front Lip Spoiler', price: '595', description: 'Subtle front lip for improved downforce' },
    ],
  },
  {
    name: 'Performance Wheels',
    description: 'Lightweight forged wheels for style and performance',
    icon: '⚡',
    color: 'purple',
    products: [
      { name: 'UP-01 Forged Wheels (Set of 4)', price: '4,500', description: 'Lightweight forged aluminum, multiple finishes' },
      { name: 'UP-02 Forged Wheels (Set of 4)', price: '4,800', description: 'Split 5-spoke design, flow formed' },
      { name: 'UP-03 Forged Wheels (Set of 4)', price: '5,200', description: 'Multi-spoke performance design' },
      { name: 'Wheel Spacers Kit', price: '295', description: 'Hub-centric spacers for aggressive stance' },
    ],
  },
  {
    name: 'Suspension & Brakes',
    description: 'Track-proven performance upgrades',
    icon: '🔧',
    color: 'amber',
    products: [
      { name: 'Coilover Suspension Kit', price: '3,200', description: 'Adjustable height and damping' },
      { name: 'Lowering Springs', price: '595', description: 'Progressive rate springs, 1" drop' },
      { name: 'Big Brake Kit - Front', price: '4,500', description: '6-piston calipers with 2-piece rotors' },
      { name: 'Big Brake Kit - Rear', price: '3,200', description: '4-piston calipers with 2-piece rotors' },
      { name: 'Brake Pads - Performance', price: '295', description: 'High-temp track pads, front or rear' },
    ],
  },
  {
    name: 'Carbon Fiber',
    description: 'Genuine carbon fiber exterior accents',
    icon: '✨',
    color: 'emerald',
    products: [
      { name: 'Carbon Fiber Mirror Caps', price: '495', description: 'Direct replacement, gloss or matte finish' },
      { name: 'Carbon Fiber Spoiler', price: '895', description: 'Lightweight performance spoiler' },
      { name: 'Carbon Fiber Diffuser', price: '1,495', description: 'Real carbon rear diffuser' },
      { name: 'Carbon Fiber Interior Trim', price: '795', description: 'Dashboard and door accents' },
      { name: 'Carbon Fiber Trunk Lid', price: '2,295', description: 'Full carbon replacement lid' },
    ],
  },
  {
    name: 'Interior Upgrades',
    description: 'Premium interior enhancements',
    icon: '🪑',
    color: 'pink',
    products: [
      { name: 'Sport Pedal Covers', price: '195', description: 'Aluminum pedal set, bolt-on install' },
      { name: 'Alcantara Steering Wheel', price: '895', description: 'Alcantara wrap with contrast stitching' },
      { name: 'Carbon Fiber Steering Wheel', price: '1,495', description: 'Flat-bottom carbon fiber wheel' },
      { name: 'Floor Mat Set', price: '295', description: 'All-weather premium floor mats' },
      { name: 'Seat Covers - Leather', price: '1,295', description: 'Custom-fit leather seat covers' },
    ],
  },
  {
    name: 'Lighting & Exterior',
    description: 'Enhanced visibility and style',
    icon: '💡',
    color: 'blue',
    products: [
      { name: 'LED Headlight Upgrade', price: '895', description: 'Brighter, whiter LED headlight kit' },
      { name: 'Sequential Turn Signals', price: '395', description: 'Dynamic sequential side markers' },
      { name: 'Puddle Lights', price: '95', description: 'Logo projection puddle lights' },
      { name: 'Smoked Taillight Kit', price: '295', description: 'Tinted taillight covers or vinyl' },
      { name: 'Chrome Delete Badges', price: '195', description: 'Blackout badge replacement kit' },
    ],
  },
];

const packages = [
  {
    name: 'Street Style Package',
    price: '2,995',
    description: 'Entry-level styling upgrades',
    color: 'cyan',
    includes: [
      'Front Lip Spoiler',
      'Side Skirt Extensions',
      'Rear Diffuser',
      'Chrome Delete Kit',
      'Professional Installation',
    ],
  },
  {
    name: 'Track Ready Package',
    price: '8,995',
    description: 'Performance-focused upgrades',
    color: 'purple',
    popular: true,
    includes: [
      'Ascension Front Fascia',
      'Lowering Springs',
      'UP-01 Forged Wheels',
      'Performance Brake Pads',
      'Carbon Fiber Spoiler',
      'Professional Installation',
    ],
  },
  {
    name: 'Ultimate Package',
    price: '18,995',
    description: 'Complete transformation',
    color: 'amber',
    includes: [
      'Full Ascension Aero Kit',
      'Coilover Suspension',
      'Big Brake Kit (Front & Rear)',
      'UP-02 Forged Wheels',
      'Carbon Fiber Accents',
      'Interior Upgrade Package',
      'Professional Installation',
    ],
  },
];

const teslaModels = [
  { name: 'Model 3', available: true },
  { name: 'Model Y', available: true },
  { name: 'Model S', available: true },
  { name: 'Model X', available: true },
  { name: 'Cybertruck', available: true },
];

export default function AccessoriesPage() {
  return (
    <div className="bg-black pt-20">
      {/* Hero */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 via-transparent to-orange-500/5" />
        <div className="container-wide relative">
          <div className="flex items-center gap-3 mb-6">
            <div className="px-4 py-2 rounded-full bg-red-500/10 border border-red-500/30">
              <span className="text-red-400 text-sm font-medium">Authorized Dealer</span>
            </div>
          </div>
          <p className="text-red-400 text-sm font-medium tracking-widest uppercase mb-4">Unplugged Performance</p>
          <h1 className="text-5xl md:text-6xl font-extralight mb-6">
            Tesla{' '}
            <span className="bg-gradient-to-r from-red-400 to-orange-500 bg-clip-text text-transparent">
              Accessories
            </span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mb-10">
            As an authorized Unplugged Performance dealer, we offer premium aftermarket accessories, 
            aero kits, and performance upgrades for your Tesla. Expert installation included.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact?service=accessories" className="px-8 py-4 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-full font-medium hover:scale-105 transition-transform">
              Shop Accessories
            </Link>
            <a href="#packages" className="px-8 py-4 border border-white/20 rounded-full font-medium hover:bg-white/10 transition-colors">
              View Packages
            </a>
          </div>
        </div>
      </section>

      {/* Tesla Models */}
      <section className="py-8 border-y border-white/5">
        <div className="container-wide">
          <div className="flex flex-wrap items-center justify-center gap-4">
            <span className="text-gray-500 text-sm">Available for:</span>
            {teslaModels.map((model) => (
              <div 
                key={model.name}
                className="px-4 py-2 rounded-full bg-white/5 text-sm text-gray-300"
              >
                {model.name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section id="packages" className="py-24">
        <div className="container-wide">
          <div className="text-center mb-16">
            <p className="text-red-400 text-sm font-medium uppercase tracking-widest mb-4">Curated Builds</p>
            <h2 className="text-3xl font-extralight mb-4">Accessory Packages</h2>
            <p className="text-gray-500">Pre-configured packages for easy ordering. Installation included.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {packages.map((pkg) => (
              <div 
                key={pkg.name} 
                className={`p-8 rounded-2xl border ${
                  pkg.popular ? 'border-red-500 bg-red-500/5' : 'border-white/10'
                }`}
              >
                {pkg.popular && <span className="text-red-400 text-xs font-medium">Most Popular</span>}
                <h3 className="text-xl font-light mt-2 mb-2">{pkg.name}</h3>
                <p className="text-gray-500 text-sm mb-4">{pkg.description}</p>
                <p className="text-4xl font-extralight text-red-400 mb-6">${pkg.price}</p>
                <ul className="space-y-3 mb-8">
                  {pkg.includes.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm text-gray-300">
                      <svg className="w-4 h-4 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/contact?service=accessories&package=${encodeURIComponent(pkg.name)}`}
                  className={`block text-center py-3 rounded-full font-medium transition-colors ${
                    pkg.popular 
                      ? 'bg-gradient-to-r from-red-500 to-orange-500 text-white hover:opacity-90' 
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

      {/* Categories */}
      {categories.map((category, index) => (
        <section 
          key={category.name}
          className={`py-24 ${index % 2 === 0 ? 'bg-gradient-to-b from-black to-gray-950' : ''}`}
        >
          <div className="container-wide">
            <div className="flex items-center justify-between mb-12">
              <div className="flex items-center gap-4">
                <span className="text-3xl">{category.icon}</span>
                <div>
                  <h2 className="text-2xl font-extralight">{category.name}</h2>
                  <p className="text-gray-500 text-sm">{category.description}</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {category.products.map((product) => (
                <div 
                  key={product.name}
                  className="p-6 rounded-xl border border-white/10 hover:border-red-500/30 transition-colors group"
                >
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-light group-hover:text-red-400 transition-colors">{product.name}</h3>
                    <span className="text-red-400 font-medium">${product.price}</span>
                  </div>
                  <p className="text-sm text-gray-500 mb-4">{product.description}</p>
                  <Link 
                    href={`/contact?service=accessories&product=${encodeURIComponent(product.name)}`}
                    className="text-xs text-red-400 hover:underline"
                  >
                    Inquire →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Why Buy From Us */}
      <section className="py-24 border-t border-white/5">
        <div className="container-wide">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extralight mb-4">Why Buy From FUTURE DETAIL?</h2>
            <p className="text-gray-500">Your authorized Unplugged Performance dealer in Oklahoma</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { icon: '✓', title: 'Authorized Dealer', desc: 'Genuine Unplugged Performance parts with full warranty' },
              { icon: '🔧', title: 'Expert Installation', desc: 'Professional installation by certified technicians' },
              { icon: '🛡️', title: 'Combine Services', desc: 'Add PPF, wrap, or coating during install' },
              { icon: '💰', title: 'Package Pricing', desc: 'Save when you bundle multiple accessories' },
            ].map((item) => (
              <div key={item.title} className="p-6 rounded-2xl border border-white/10 text-center">
                <div className="text-2xl mb-3">{item.icon}</div>
                <h3 className="font-light mb-2">{item.title}</h3>
                <p className="text-xs text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Combo Deals */}
      <section className="py-24 bg-gradient-to-t from-gray-950 to-black">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-red-400 text-sm font-medium uppercase tracking-widest mb-4">Bundle & Save</p>
            <h2 className="text-3xl font-extralight mb-6">Combine with Protection</h2>
            <p className="text-gray-400 mb-8">
              Installing accessories? Add PPF, ceramic coating, or tinting at the same time and save on labor. 
              Protect your new parts the moment they go on.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="p-4 rounded-xl border border-cyan-500/30 bg-cyan-500/5">
                <p className="text-cyan-400 text-sm font-medium">PPF + Accessories</p>
                <p className="text-xs text-gray-500 mt-1">Protect aero parts with clear film</p>
              </div>
              <div className="p-4 rounded-xl border border-emerald-500/30 bg-emerald-500/5">
                <p className="text-emerald-400 text-sm font-medium">Coating + Accessories</p>
                <p className="text-xs text-gray-500 mt-1">Ceramic coat carbon fiber parts</p>
              </div>
              <div className="p-4 rounded-xl border border-amber-500/30 bg-amber-500/5">
                <p className="text-amber-400 text-sm font-medium">Tint + Accessories</p>
                <p className="text-xs text-gray-500 mt-1">Complete your build in one visit</p>
              </div>
            </div>
            <Link 
              href="/contact?service=accessories-bundle"
              className="inline-block px-8 py-4 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-full font-medium hover:scale-105 transition-transform"
            >
              Build Your Bundle
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 border-t border-white/5">
        <div className="container-wide text-center">
          <h2 className="text-4xl font-extralight mb-6">
            Ready to{' '}
            <span className="bg-gradient-to-r from-red-400 to-orange-500 bg-clip-text text-transparent">
              Upgrade?
            </span>
          </h2>
          <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
            Transform your Tesla with premium Unplugged Performance accessories. 
            Contact us for pricing, availability, and installation scheduling.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact?service=accessories" className="px-10 py-4 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-full font-medium hover:scale-105 transition-transform">
              Get Started
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

