import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Window Tint | LLumar Ceramic IRX | FUTURE DETAIL',
  description: 'Premium LLumar Ceramic IRX window tinting for Tesla vehicles. 98% IR rejection, 99% UV protection, lifetime warranty.',
};

export default function TintPage() {
  return (
    <div className="bg-black min-h-screen">
      <section className="py-24">
        <div className="container-wide">
          <p className="text-amber-400 text-sm font-medium tracking-widest uppercase mb-4">LLumar Ceramic IRX</p>
          <h1 className="text-5xl font-extralight mb-6">Premium <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">Window Tint</span></h1>
          <p className="text-gray-400 text-lg max-w-2xl mb-12">Superior heat rejection, UV protection, and crystal-clear visibility. Oklahoma&apos;s trusted Tesla window tinting specialists.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              { value: '98%', label: 'IR Rejection' },
              { value: '99%', label: 'UV Block' },
              { value: '60%', label: 'Heat Reduction' },
            ].map((stat) => (
              <div key={stat.label} className="text-center p-6 border border-white/10 rounded-2xl">
                <p className="text-4xl font-extralight text-amber-400 mb-2">{stat.value}</p>
                <p className="text-gray-500 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>

          <h2 className="text-3xl font-extralight mb-8">Packages</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: 'Front Two', price: '299', features: ['2 front windows', 'LLumar Ceramic IRX', 'Lifetime warranty'] },
              { name: 'Full Vehicle', price: '599', features: ['All side windows', 'Rear windshield', 'Lifetime warranty'], popular: true },
              { name: 'Full + Windshield', price: '899', features: ['Full vehicle', 'Windshield', 'LLumar AIR80'] },
            ].map((pkg) => (
              <div key={pkg.name} className={`p-6 rounded-2xl border ${pkg.popular ? 'border-amber-500' : 'border-white/10'}`}>
                {pkg.popular && <span className="text-amber-400 text-xs font-medium">Most Popular</span>}
                <h3 className="text-xl font-light mt-2">{pkg.name}</h3>
                <p className="text-3xl font-extralight text-amber-400 my-4">${pkg.price}</p>
                <ul className="space-y-2 text-gray-400 text-sm mb-6">
                  {pkg.features.map((f) => <li key={f}>✓ {f}</li>)}
                </ul>
                <Link href="/contact" className="block text-center py-3 bg-amber-500 text-black rounded-full font-medium hover:bg-amber-400 transition-colors">
                  Book Now
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

