import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Color Change Wraps | FUTURE DETAIL | Oklahoma City',
  description: 'Premium color change wraps for Tesla vehicles. 80+ colors, satin, gloss, and matte finishes. Fully reversible, 7-year warranty. Edmond & OKC.',
};

const packages = [
  {
    name: 'Partial Wrap',
    price: '2,500',
    description: 'Accents, roof, or specific panels',
    features: ['Roof wrap', 'Chrome delete', 'Mirror caps', 'Accent panels', 'Custom designs'],
  },
  {
    name: 'Full Color Change',
    price: '4,500',
    description: 'Complete transformation with PurePPF',
    features: ['Full body coverage', 'Door jambs included', '80+ color options', 'Self-healing film', '7-year warranty'],
    popular: true,
  },
  {
    name: 'Stealth Conversion',
    price: '5,000',
    description: 'Matte transformation with protection',
    features: ['Full body satin/matte', 'Factory color preserved', 'PPF-level protection', 'Self-healing finish', 'Premium appearance'],
  },
];

const finishes = [
  { name: 'Gloss', description: 'Mirror-like shine that enhances depth and color vibrancy', preview: 'bg-gradient-to-br from-white/20 to-white/5' },
  { name: 'Satin', description: 'Subtle sheen with a sophisticated, modern look', preview: 'bg-gradient-to-br from-gray-400/20 to-gray-600/10', popular: true },
  { name: 'Matte', description: 'Flat finish that eliminates reflections for a stealth look', preview: 'bg-gray-800' },
  { name: 'Metallic', description: 'Flake-infused film that sparkles in sunlight', preview: 'bg-gradient-to-br from-cyan-500/30 to-blue-500/20' },
];

const popularColors = [
  { name: 'Nardo Gray', hex: '#6B6B6B' },
  { name: 'Midnight Blue', hex: '#191970' },
  { name: 'Cement Gray', hex: '#8B8B8B' },
  { name: 'Satin Black', hex: '#1A1A1A' },
  { name: 'Miami Blue', hex: '#00CED1' },
  { name: 'Racing Red', hex: '#C41E3A' },
  { name: 'Forest Green', hex: '#228B22' },
  { name: 'Frozen Bronze', hex: '#CD7F32' },
];

const benefits = [
  { title: 'Protect Your Paint', description: 'Wrap acts as a protective layer, shielding your factory paint from UV rays, minor scratches, and road debris.', icon: '🛡️' },
  { title: 'Fully Reversible', description: 'Change your mind? Remove the wrap to reveal pristine factory paint underneath. Perfect for leased vehicles.', icon: '↩️' },
  { title: 'Endless Options', description: 'Choose from 80+ colors and finishes. Create a look that is uniquely yours without permanent modification.', icon: '🎨' },
  { title: 'Preserve Resale Value', description: 'Keep your original paint protected and maintain higher resale value when it is time to sell.', icon: '💰' },
  { title: 'Self-Healing Film', description: 'PurePPF wraps feature self-healing technology. Minor scratches disappear with heat exposure.', icon: '✨' },
  { title: '7-Year Warranty', description: 'Our premium wraps are backed by a comprehensive warranty covering fading, peeling, and cracking.', icon: '📋' },
];

export default function WrapsPage() {
  return (
    <div className="bg-black pt-20">
      {/* Hero */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-pink-500/5" />
        <div className="container-wide relative">
          <p className="text-purple-400 text-sm font-medium tracking-widest uppercase mb-4">Color Change Wraps</p>
          <h1 className="text-5xl md:text-6xl font-extralight mb-6">
            Bold{' '}
            <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Transformation
            </span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mb-10">
            Transform your Tesla with premium vinyl in any color or finish. 
            Fully reversible, fully remarkable. Over 80 colors available.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-medium hover:scale-105 transition-transform">
              Get a Quote
            </Link>
            <Link href="/colors" className="px-8 py-4 border border-white/20 rounded-full font-medium hover:bg-white/10 transition-colors flex items-center justify-center gap-2">
              Browse Colors
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Finishes */}
      <section className="py-24 border-t border-white/5">
        <div className="container-wide">
          <div className="text-center mb-16">
            <p className="text-purple-400 text-sm font-medium uppercase tracking-widest mb-4">Finish Options</p>
            <h2 className="text-3xl font-extralight mb-4">Choose Your Finish</h2>
            <p className="text-gray-500">Each finish creates a completely different aesthetic</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {finishes.map((finish) => (
              <div key={finish.name} className={`p-6 rounded-2xl border ${finish.popular ? 'border-purple-500 bg-purple-500/5' : 'border-white/10'} hover:border-purple-500/50 transition-colors`}>
                {finish.popular && <span className="text-purple-400 text-xs font-medium">Most Popular</span>}
                <div className={`aspect-square rounded-xl mb-4 ${finish.preview}`} />
                <h3 className="text-lg font-light mb-2">{finish.name}</h3>
                <p className="text-gray-500 text-sm">{finish.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Colors */}
      <section className="py-24 bg-gradient-to-b from-black to-gray-950">
        <div className="container-wide">
          <div className="text-center mb-16">
            <p className="text-purple-400 text-sm font-medium uppercase tracking-widest mb-4">Color Options</p>
            <h2 className="text-3xl font-extralight mb-4">Popular Colors</h2>
            <p className="text-gray-500">A preview of our most requested wrap colors</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {popularColors.map((color) => (
              <div key={color.name} className="text-center group">
                <div 
                  className="aspect-square rounded-2xl mb-3 border border-white/10 group-hover:border-purple-500/50 transition-colors"
                  style={{ backgroundColor: color.hex }}
                />
                <p className="text-sm text-gray-400">{color.name}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/colors" className="inline-flex items-center gap-2 px-8 py-4 border border-purple-500/50 text-purple-400 rounded-full font-medium hover:bg-purple-500/10 transition-colors">
              View All 80+ Colors
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24">
        <div className="container-wide">
          <div className="text-center mb-16">
            <p className="text-purple-400 text-sm font-medium uppercase tracking-widest mb-4">Why Wrap?</p>
            <h2 className="text-3xl font-extralight mb-4">More Than Just Color</h2>
            <p className="text-gray-500">A wrap does more than change your car&apos;s appearance</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="p-6 rounded-2xl border border-white/10 hover:border-purple-500/30 transition-colors">
                <div className="text-2xl mb-4">{benefit.icon}</div>
                <h3 className="text-lg font-light mb-2">{benefit.title}</h3>
                <p className="text-gray-500 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-24 bg-gradient-to-t from-gray-950 to-black">
        <div className="container-wide">
          <div className="text-center mb-16">
            <p className="text-purple-400 text-sm font-medium uppercase tracking-widest mb-4">Packages</p>
            <h2 className="text-3xl font-extralight mb-4">Wrap Packages</h2>
            <p className="text-gray-500">Premium PurePPF color-change film with 7-year warranty</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {packages.map((pkg) => (
              <div key={pkg.name} className={`p-8 rounded-2xl border ${pkg.popular ? 'border-purple-500 bg-purple-500/5' : 'border-white/10'}`}>
                {pkg.popular && <span className="text-purple-400 text-xs font-medium">Most Popular</span>}
                <h3 className="text-xl font-light mt-2 mb-2">{pkg.name}</h3>
                <p className="text-gray-500 text-sm mb-4">{pkg.description}</p>
                <p className="text-4xl font-extralight text-purple-400 mb-6">${pkg.price}+</p>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-sm text-gray-300">
                      <svg className="w-4 h-4 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:opacity-90' 
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

      {/* Process */}
      <section className="py-24">
        <div className="container-wide">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extralight mb-4">Our Wrap Process</h2>
            <p className="text-gray-500">Precision at every step for flawless results</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Consultation', desc: 'Choose your color and finish with our expert guidance' },
              { step: '02', title: 'Preparation', desc: 'Deep clean and paint decontamination' },
              { step: '03', title: 'Installation', desc: '3-5 days of meticulous hand-fitted application' },
              { step: '04', title: 'Quality Check', desc: 'Final inspection and care instructions' },
            ].map((item, index) => (
              <div key={item.step} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full border border-purple-500/30 bg-purple-500/10 mb-4">
                  <span className="text-2xl font-extralight text-purple-400">{item.step}</span>
                </div>
                <h3 className="text-lg font-light mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-t from-black to-gray-950 border-t border-white/5">
        <div className="container-wide text-center">
          <h2 className="text-4xl font-extralight mb-6">
            Ready to{' '}
            <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Transform?
            </span>
          </h2>
          <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
            Your Tesla deserves to stand out. Let us help you create something truly unique.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="px-10 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-medium hover:scale-105 transition-transform">
              Book Consultation
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
