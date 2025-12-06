import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ceramic Coating | FUTURE DETAIL',
  description: 'Professional ceramic coating for Tesla. Hydrophobic protection, enhanced gloss, multi-year durability.',
};

export default function CoatingsPage() {
  return (
    <div className="bg-black min-h-screen">
      <section className="py-24">
        <div className="container-wide">
          <p className="text-emerald-400 text-sm font-medium tracking-widest uppercase mb-4">Ceramic Coating</p>
          <h1 className="text-5xl font-extralight mb-6">Lasting <span className="bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent">Protection</span></h1>
          <p className="text-gray-400 text-lg max-w-2xl mb-12">Hydrophobic nano-coating that delivers unmatched gloss, protection, and effortless maintenance.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: 'Paint Coating', price: '800', warranty: '2-year' },
              { name: 'Full Detail + Coating', price: '1,500', warranty: '5-year', popular: true },
              { name: 'PPF + Coating', price: '500', warranty: '2-year', addon: true },
            ].map((pkg) => (
              <div key={pkg.name} className={`p-6 rounded-2xl border ${pkg.popular ? 'border-emerald-500' : 'border-white/10'}`}>
                {pkg.popular && <span className="text-emerald-400 text-xs font-medium">Best Value</span>}
                <h3 className="text-xl font-light mt-2">{pkg.name}</h3>
                <p className="text-3xl font-extralight text-emerald-400 my-4">${pkg.price}</p>
                <p className="text-gray-500 text-sm mb-6">{pkg.warranty} warranty</p>
                <Link href="/contact" className="block text-center py-3 bg-emerald-500 text-black rounded-full font-medium hover:bg-emerald-400 transition-colors">
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

