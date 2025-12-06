import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Paint Protection Film | FUTURE DETAIL',
  description: 'Premium PPF for Tesla vehicles. Self-healing, UV stable, 10-year warranty.',
};

export default function PPFPage() {
  return (
    <div className="bg-black min-h-screen">
      <section className="py-24">
        <div className="container-wide">
          <p className="text-cyan-400 text-sm font-medium tracking-widest uppercase mb-4">Paint Protection Film</p>
          <h1 className="text-5xl font-extralight mb-6">Stealth <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Protection</span></h1>
          <p className="text-gray-400 text-lg max-w-2xl mb-12">Self-healing, optically clear film that shields your Tesla from rock chips, scratches, and environmental damage.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: 'Full Front', price: '1,500', coverage: '~30%' },
              { name: 'Track Package', price: '2,800', coverage: '~50%', popular: true },
              { name: 'Full Body', price: '5,500', coverage: '100%' },
            ].map((pkg) => (
              <div key={pkg.name} className={`p-6 rounded-2xl border ${pkg.popular ? 'border-cyan-500' : 'border-white/10'}`}>
                {pkg.popular && <span className="text-cyan-400 text-xs font-medium">Most Popular</span>}
                <h3 className="text-xl font-light mt-2">{pkg.name}</h3>
                <p className="text-3xl font-extralight text-cyan-400 my-4">${pkg.price}</p>
                <p className="text-gray-500 text-sm mb-6">Coverage: {pkg.coverage}</p>
                <Link href="/contact" className="block text-center py-3 bg-cyan-500 text-black rounded-full font-medium hover:bg-cyan-400 transition-colors">
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

