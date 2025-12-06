import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pricing | FUTURE DETAIL',
  description: 'Transparent pricing for Tesla PPF, wraps, window tinting, and ceramic coatings.',
};

export default function PricingPage() {
  return (
    <div className="bg-black min-h-screen py-24">
      <div className="container-wide">
        <h1 className="text-5xl font-extralight mb-6 text-center">Investment <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Guide</span></h1>
        <p className="text-gray-400 text-center mb-16">Transparent pricing for premium protection.</p>
        
        {/* PPF */}
        <div className="mb-16">
          <h2 className="text-2xl font-light mb-6 text-cyan-400">Paint Protection Film</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { name: 'Full Front', price: '$1,500+' },
              { name: 'Track Package', price: '$2,800+' },
              { name: 'Full Body', price: '$5,500+' },
            ].map((pkg) => (
              <div key={pkg.name} className="p-4 border border-white/10 rounded-xl flex justify-between items-center">
                <span>{pkg.name}</span>
                <span className="text-cyan-400">{pkg.price}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Wraps */}
        <div className="mb-16">
          <h2 className="text-2xl font-light mb-6 text-purple-400">Color Change Wraps</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { name: 'Partial Wrap', price: '$2,500+' },
              { name: 'Full Color Change', price: '$4,500+' },
              { name: 'Stealth Conversion', price: '$5,000+' },
            ].map((pkg) => (
              <div key={pkg.name} className="p-4 border border-white/10 rounded-xl flex justify-between items-center">
                <span>{pkg.name}</span>
                <span className="text-purple-400">{pkg.price}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tint */}
        <div className="mb-16">
          <h2 className="text-2xl font-light mb-6 text-amber-400">Window Tinting (LLumar Ceramic IRX)</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { name: 'Front Two', price: '$299+' },
              { name: 'Full Vehicle', price: '$599+' },
              { name: 'Full + Windshield', price: '$899+' },
            ].map((pkg) => (
              <div key={pkg.name} className="p-4 border border-white/10 rounded-xl flex justify-between items-center">
                <span>{pkg.name}</span>
                <span className="text-amber-400">{pkg.price}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Coating */}
        <div className="mb-16">
          <h2 className="text-2xl font-light mb-6 text-emerald-400">Ceramic Coating</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { name: 'Paint Coating', price: '$800+' },
              { name: 'Full Detail + Coating', price: '$1,500+' },
              { name: 'PPF + Coating Add-on', price: '$500+' },
            ].map((pkg) => (
              <div key={pkg.name} className="p-4 border border-white/10 rounded-xl flex justify-between items-center">
                <span>{pkg.name}</span>
                <span className="text-emerald-400">{pkg.price}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <Link href="/contact" className="px-10 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full font-medium hover:scale-105 transition-transform inline-block">
            Get Custom Quote
          </Link>
        </div>
      </div>
    </div>
  );
}

