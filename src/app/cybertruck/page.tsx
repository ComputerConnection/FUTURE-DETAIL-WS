import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Cybertruck Protection Services | FUTURE DETAIL',
  description: 'Specialized protection services for Tesla Cybertruck. PPF, ceramic coating, tint, and accessories for stainless steel bodies. Expert installation in Edmond, OK.',
};

const challenges = [
  {
    title: 'Stainless Steel Body',
    description: 'The Cybertruck\'s unique stainless steel panels require specialized techniques and products designed specifically for this material.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
    ),
  },
  {
    title: 'Angular Panels',
    description: 'Sharp angles and flat surfaces need precision cutting and installation to avoid lifting edges and ensure seamless protection.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: 'Fingerprint Magnet',
    description: 'Bare stainless steel shows every fingerprint and water spot. Proper coating is essential for easy maintenance.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
      </svg>
    ),
  },
];

const services = [
  {
    title: 'Paint Protection Film',
    description: 'Specialized PPF for stainless steel. Protect against scratches, rock chips, and scuffs while maintaining the Cybertruck\'s unique finish.',
    features: ['Custom-cut patterns', 'Self-healing technology', '10-year warranty', 'Gloss or matte options'],
    href: '/ppf',
  },
  {
    title: 'Ceramic Window Tint',
    description: 'LLumar ceramic tint for the massive glass area. Block heat and UV while maintaining visibility.',
    features: ['98% IR rejection', 'Full roof coverage', 'Windshield tint available', 'Lifetime warranty'],
    href: '/tint',
  },
  {
    title: 'Ceramic Coating',
    description: 'Professional ceramic coating specifically formulated for stainless steel. Hydrophobic protection that makes cleaning effortless.',
    features: ['Fingerprint resistant', 'Water spot prevention', '2-5 year protection', 'Enhanced shine'],
    href: '/coatings',
  },
  {
    title: 'Accessories',
    description: 'Unplugged Performance parts and accessories for your Cybertruck. Wheels, suspension, and exterior upgrades.',
    features: ['Authorized dealer', 'Expert installation', 'Premium quality', 'Custom builds'],
    href: '/accessories',
  },
];

const pricing = {
  ppf: [
    { package: 'Full Front', price: '$2,200', description: 'Hood, fenders, bumper, mirrors' },
    { package: 'Track Package', price: '$4,000', description: 'Full front + A-pillars, rockers' },
    { package: 'Full Body', price: '$8,000', description: 'Complete coverage' },
    { package: 'Stealth Add-on', price: '+20%', description: 'Matte finish option' },
  ],
  tint: [
    { package: 'Front Two Windows', price: '$399', description: 'Driver and passenger' },
    { package: 'Full Vehicle', price: '$899', description: 'All side and rear glass' },
    { package: 'Full + Windshield', price: '$1,299', description: 'Complete protection' },
  ],
  coating: [
    { package: 'Paint Coating', price: '$800', description: '2-year protection' },
    { package: 'Full Detail + Coating', price: '$1,500', description: '5-year protection' },
    { package: 'PPF + Coating Combo', price: '$500', description: 'Add-on for PPF installs' },
  ],
};

export default function CybertruckPage() {
  return (
    <div className="bg-black pt-20 min-h-screen">
      {/* Hero */}
      <section className="py-24 bg-gradient-to-b from-black to-gray-950">
        <div className="container-wide">
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-cyan-400 text-sm font-medium tracking-widest uppercase mb-4">Cybertruck Specialists</p>
            <h1 className="text-5xl md:text-6xl font-extralight mb-6">
              Protection for Your{' '}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Cybertruck
              </span>
            </h1>
            <p className="text-gray-400 text-lg mb-10">
              The Cybertruck isn&apos;t like any other vehicle. Its stainless steel body and unique
              design require specialized knowledge and techniques. We&apos;ve developed expertise
              specifically for Cybertruck protection and customization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact?service=cybertruck"
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
        </div>
      </section>

      {/* Challenges */}
      <section className="py-24 bg-black">
        <div className="container-wide">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extralight mb-4">Why Cybertruck Needs Specialized Care</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              The Cybertruck&apos;s revolutionary design creates unique challenges that most shops aren&apos;t equipped to handle.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {challenges.map((challenge) => (
              <div
                key={challenge.title}
                className="p-8 rounded-2xl border border-white/10 hover:border-cyan-500/30 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-6">
                  {challenge.icon}
                </div>
                <h3 className="text-xl font-light mb-3">{challenge.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{challenge.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-gradient-to-b from-black to-gray-950">
        <div className="container-wide">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extralight mb-4">Cybertruck Services</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Every service we offer has been adapted for the Cybertruck&apos;s unique requirements.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="group p-8 rounded-2xl border border-white/10 hover:border-cyan-500/30 transition-all"
              >
                <h3 className="text-xl font-light mb-3 group-hover:text-cyan-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-500 text-sm mb-6">{service.description}</p>
                <div className="grid grid-cols-2 gap-3">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2 text-sm text-gray-400">
                      <svg className="w-4 h-4 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </div>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24 bg-black">
        <div className="container-wide">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extralight mb-4">Cybertruck Pricing</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Transparent pricing for all Cybertruck services. Final quotes may vary based on condition.
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-6">
            {/* PPF Pricing */}
            <div className="p-8 rounded-2xl border border-white/10">
              <div className="flex items-center gap-3 mb-6">
                <svg className="w-6 h-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <h3 className="text-lg font-light">PPF Packages</h3>
              </div>
              <div className="space-y-4">
                {pricing.ppf.map((item) => (
                  <div key={item.package} className="flex justify-between items-start">
                    <div>
                      <p className="font-medium text-sm">{item.package}</p>
                      <p className="text-xs text-gray-600">{item.description}</p>
                    </div>
                    <span className="text-cyan-400 font-medium">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tint Pricing */}
            <div className="p-8 rounded-2xl border border-white/10">
              <div className="flex items-center gap-3 mb-6">
                <svg className="w-6 h-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
                <h3 className="text-lg font-light">Tint Packages</h3>
              </div>
              <div className="space-y-4">
                {pricing.tint.map((item) => (
                  <div key={item.package} className="flex justify-between items-start">
                    <div>
                      <p className="font-medium text-sm">{item.package}</p>
                      <p className="text-xs text-gray-600">{item.description}</p>
                    </div>
                    <span className="text-cyan-400 font-medium">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Coating Pricing */}
            <div className="p-8 rounded-2xl border border-white/10">
              <div className="flex items-center gap-3 mb-6">
                <svg className="w-6 h-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
                <h3 className="text-lg font-light">Coating Packages</h3>
              </div>
              <div className="space-y-4">
                {pricing.coating.map((item) => (
                  <div key={item.package} className="flex justify-between items-start">
                    <div>
                      <p className="font-medium text-sm">{item.package}</p>
                      <p className="text-xs text-gray-600">{item.description}</p>
                    </div>
                    <span className="text-cyan-400 font-medium">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="py-24 bg-gradient-to-b from-gray-950 to-black">
        <div className="container-wide">
          <div className="p-12 rounded-3xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-extralight mb-4">Cybertruck Experience</h2>
              <p className="text-gray-400">
                We&apos;ve protected numerous Cybertrucks since their release and continue to refine
                our techniques. Our installers understand the nuances of working with stainless steel
                and the unique panel shapes.
              </p>
            </div>
            <div className="grid sm:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-extralight text-cyan-400 mb-2">20+</div>
                <p className="text-sm text-gray-500">Cybertrucks Protected</p>
              </div>
              <div>
                <div className="text-4xl font-extralight text-cyan-400 mb-2">100%</div>
                <p className="text-sm text-gray-500">Satisfaction Rate</p>
              </div>
              <div>
                <div className="text-4xl font-extralight text-cyan-400 mb-2">10yr</div>
                <p className="text-sm text-gray-500">PPF Warranty</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-black">
        <div className="container-wide text-center">
          <h2 className="text-4xl md:text-5xl font-extralight mb-6">
            Ready to Protect Your{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Cybertruck?
            </span>
          </h2>
          <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
            Get a custom quote for your Cybertruck. We&apos;ll help you choose the right
            protection package for your needs and driving style.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact?service=cybertruck"
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
