import Link from 'next/link';
import AnimatedHero from '@/components/AnimatedHero';
import AnimatedStats from '@/components/AnimatedStats';
import AnimatedServiceCard from '@/components/AnimatedServiceCard';
import TrustBadges from '@/components/TrustBadges';
import Testimonials from '@/components/Testimonials';
import ProcessTimeline from '@/components/ProcessTimeline';
import WhyChooseUs from '@/components/WhyChooseUs';
import ProjectCarousel from '@/components/ProjectCarousel';

const services = [
  {
    title: 'Paint Protection Film',
    description: 'Self-healing, optically clear film that shields your Tesla from rock chips, scratches, and environmental damage.',
    href: '/ppf',
    features: ['Self-healing technology', 'UV stability', 'Stealth or gloss finish'],
    gradient: 'rgba(0, 162, 255, 0.15)',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: 'Color Change Wraps',
    description: 'Transform your Tesla with premium vinyl in any color or finish. Fully reversible, fully remarkable.',
    href: '/wraps',
    features: ['80+ color options', 'Protects OEM paint', 'Reversible transformation'],
    gradient: 'rgba(124, 58, 237, 0.15)',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
  },
  {
    title: 'Window Tinting',
    description: 'LLumar Ceramic IRX — premium ceramic tint with 98% infrared rejection and lifetime warranty.',
    href: '/tint',
    features: ['98% infrared rejection', '99% UV protection', 'Lifetime warranty'],
    gradient: 'rgba(245, 158, 11, 0.15)',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
  {
    title: 'Ceramic Coating',
    description: 'Hydrophobic nano-coating that delivers unmatched gloss, protection, and effortless maintenance.',
    href: '/coatings',
    features: ['Hydrophobic protection', 'Enhanced gloss', 'Multi-year durability'],
    gradient: 'rgba(6, 182, 212, 0.15)',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
  },
];

export default function HomePage() {
  return (
    <div className="bg-black">
      {/* Hero */}
      <AnimatedHero />

      {/* Stats & Trust */}
      <section className="py-24 bg-black border-t border-white/5">
        <div className="container-wide">
          <AnimatedStats />
          <TrustBadges />
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-black">
        <div className="container-wide">
          <div className="text-center mb-16">
            <p className="text-xs font-medium uppercase tracking-widest text-gray-500 mb-4">What We Offer</p>
            <h2 className="text-4xl md:text-5xl font-extralight mb-6">Premium Services</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Engineered protection for every Tesla. From invisible defense to bold transformations.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <AnimatedServiceCard key={service.title} {...service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* PPF Feature */}
      <section className="py-24 bg-gradient-to-b from-black to-gray-950">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="aspect-[4/3] bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-2xl flex items-center justify-center border border-white/5 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="text-gray-700">Tesla Model Y Stealth PPF</span>
              {/* Video placeholder indicator */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm border border-white/20 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
              </div>
            </div>
            <div>
              <p className="text-cyan-400 text-sm font-medium uppercase tracking-widest mb-4">Paint Protection Film</p>
              <h2 className="text-4xl font-extralight mb-6">Stealth Protection</h2>
              <p className="text-gray-400 leading-relaxed mb-8">
                Our premium PPF transforms your Tesla with a factory-like matte finish while providing invisible 
                protection against road debris, scratches, and UV damage. Self-healing technology ensures lasting clarity.
              </p>
              <ul className="space-y-4 mb-8">
                {['Gloss or stealth finish options', '10-year manufacturer warranty', 'Pattern-cut for every Tesla model'].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-gray-300">
                    <svg className="w-5 h-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/ppf"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full font-medium hover:scale-105 transition-transform"
              >
                Explore PPF
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Projects */}
      <ProjectCarousel />

      {/* Process */}
      <ProcessTimeline />

      {/* Testimonials */}
      <Testimonials />

      {/* CTA */}
      <section className="py-24 bg-gradient-to-t from-gray-950 to-black">
        <div className="container-wide text-center">
          <h2 className="text-4xl md:text-5xl font-extralight mb-6">
            Ready to Protect{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Your Tesla?
            </span>
          </h2>
          <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
            Schedule a consultation and discover the perfect protection package for your vehicle.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-10 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full font-medium hover:scale-105 transition-transform"
            >
              Book a Consultation
            </Link>
            <Link
              href="/pricing"
              className="px-10 py-4 border border-white/20 text-white rounded-full font-medium hover:bg-white/10 transition-colors"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
