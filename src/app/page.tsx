import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="bg-black">
      {/* Hero */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-purple-500/10" />
        <div className="container-wide text-center relative z-10">
          <p className="text-cyan-400 text-sm font-medium tracking-widest uppercase mb-6">Tesla Protection Specialists</p>
          <h1 className="text-5xl md:text-7xl font-extralight tracking-tight mb-6">
            Protect. Transform. <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Elevate.</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-10">
            Premium Paint Protection Film, color-change wraps, window tinting, and ceramic coatings. 
            Precision-installed for Tesla owners who expect more.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full font-medium hover:scale-105 transition-transform">
              Book a Consultation
            </Link>
            <Link href="/pricing" className="px-8 py-4 border border-white/20 text-white rounded-full font-medium hover:bg-white/10 transition-colors">
              View Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-black">
        <div className="container-wide">
          <h2 className="text-4xl font-extralight text-center mb-16">Premium Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Paint Protection Film', desc: 'Self-healing, optically clear protection', href: '/ppf', color: 'cyan' },
              { title: 'Color Change Wraps', desc: '80+ colors, fully reversible', href: '/wraps', color: 'purple' },
              { title: 'Window Tinting', desc: 'LLumar Ceramic IRX, lifetime warranty', href: '/tint', color: 'amber' },
              { title: 'Ceramic Coating', desc: 'Hydrophobic nano-protection', href: '/coatings', color: 'emerald' },
            ].map((service) => (
              <Link key={service.title} href={service.href} className="group p-6 rounded-2xl border border-white/10 hover:border-white/30 transition-colors">
                <h3 className="text-xl font-light mb-2 group-hover:text-cyan-400 transition-colors">{service.title}</h3>
                <p className="text-gray-500 text-sm">{service.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-b from-black to-gray-900">
        <div className="container-wide text-center">
          <h2 className="text-4xl font-extralight mb-6">Ready to Protect Your Tesla?</h2>
          <p className="text-gray-400 mb-10">Schedule a consultation and discover the perfect protection package.</p>
          <Link href="/contact" className="px-10 py-4 bg-white text-black rounded-full font-medium hover:bg-gray-200 transition-colors">
            Book Now
          </Link>
        </div>
      </section>
    </div>
  );
}

