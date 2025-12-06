import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Color Change Wraps | FUTURE DETAIL',
  description: 'Premium color change wraps for Tesla. 80+ colors, fully reversible, 7-year warranty.',
};

export default function WrapsPage() {
  return (
    <div className="bg-black min-h-screen">
      <section className="py-24">
        <div className="container-wide">
          <p className="text-purple-400 text-sm font-medium tracking-widest uppercase mb-4">Color Change Wraps</p>
          <h1 className="text-5xl font-extralight mb-6">Bold <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Transformation</span></h1>
          <p className="text-gray-400 text-lg max-w-2xl mb-12">Transform your Tesla with premium vinyl in any color or finish. Fully reversible, fully remarkable.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: 'Partial Wrap', price: '2,500', desc: 'Accents, roof, or panels' },
              { name: 'Full Color Change', price: '4,500', desc: '80+ color options', popular: true },
              { name: 'Stealth Conversion', price: '5,000', desc: 'Matte transformation' },
            ].map((pkg) => (
              <div key={pkg.name} className={`p-6 rounded-2xl border ${pkg.popular ? 'border-purple-500' : 'border-white/10'}`}>
                {pkg.popular && <span className="text-purple-400 text-xs font-medium">Most Popular</span>}
                <h3 className="text-xl font-light mt-2">{pkg.name}</h3>
                <p className="text-3xl font-extralight text-purple-400 my-4">${pkg.price}</p>
                <p className="text-gray-500 text-sm mb-6">{pkg.desc}</p>
                <Link href="/contact" className="block text-center py-3 bg-purple-500 text-white rounded-full font-medium hover:bg-purple-400 transition-colors">
                  Get Quote
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

