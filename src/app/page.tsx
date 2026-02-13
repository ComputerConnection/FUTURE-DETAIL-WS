import Link from 'next/link';
import Image from 'next/image';
import AnimatedHero from '@/components/AnimatedHero';
import AnimatedStats from '@/components/AnimatedStats';
import AnimatedServiceCard from '@/components/AnimatedServiceCard';
import TrustBadges from '@/components/TrustBadges';
import Testimonials from '@/components/Testimonials';
import ProcessTimeline from '@/components/ProcessTimeline';
import WhyChooseUs from '@/components/WhyChooseUs';
import ProjectCarousel from '@/components/ProjectCarousel';
import GoogleReviews from '@/components/GoogleReviews';

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
  {
    title: 'Unplugged Performance',
    description: 'Authorized dealer for premium Tesla accessories, aero kits, wheels, and performance upgrades.',
    href: '/accessories',
    features: ['Aero body kits', 'Forged wheels', 'Performance upgrades'],
    gradient: 'rgba(239, 68, 68, 0.15)',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
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
            <div className="relative rounded-2xl overflow-hidden border border-white/5 group">
              <Image
                src="/images/gallery/models/model-s-rear-gray.jpg"
                alt="Tesla Model S with Satin Gray PPF"
                width={800}
                height={600}
                className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 px-4 py-2 bg-black/60 backdrop-blur-sm rounded-full">
                <span className="text-sm text-white">Model S &middot; Satin Ashen Gray PPF</span>
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

      {/* Google Reviews */}
      <GoogleReviews />

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
              Get a Quote
            </Link>
            <a
              href="tel:+14053159202"
              className="px-10 py-4 border border-white/20 text-white rounded-full font-medium hover:bg-white/10 transition-colors flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              (405) 315-9202
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
