import { Metadata } from 'next';
import Link from 'next/link';
import CybertruckStats from '@/components/CybertruckStats';
import CybertruckProcess from '@/components/CybertruckProcess';
import CybertruckFAQ from '@/components/CybertruckFAQ';

export const metadata: Metadata = {
  title: 'Cybertruck Protection Specialists | FUTURE DETAIL',
  description: 'Oklahoma\'s Cybertruck protection experts. Specialized PPF, ceramic coating, and window tint for stainless steel bodies. 20+ Cybertrucks protected in Edmond, OK.',
  keywords: 'Cybertruck PPF, Cybertruck ceramic coating, Cybertruck tint, Cybertruck protection, stainless steel PPF, Cybertruck accessories, Edmond OK',
};

const challenges = [
  {
    title: 'Stainless Steel Body',
    description: 'The Cybertruck\'s raw stainless steel demands specialized products and techniques. Standard PPF adhesives and coatings designed for painted surfaces won\'t perform the same on bare metal.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: 'Angular Geometry',
    description: 'Sharp angles, large flat panels, and hard creases require precision cutting and careful installation. Lifting edges and trapped air are common problems at inexperienced shops.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: 'Fingerprints & Staining',
    description: 'Bare stainless steel shows every fingerprint, water spot, and oil mark. Without proper protection, maintaining a clean look becomes a constant battle.',
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
    features: ['Custom-cut patterns for CT panels', 'Self-healing technology', '10-year manufacturer warranty', 'Gloss or stealth matte options'],
    href: '/ppf',
    color: 'cyan',
  },
  {
    title: 'Ceramic Window Tint',
    description: 'LLumar ceramic tint for the Cybertruck\'s massive glass area. Block heat and UV while maintaining visibility and reducing glare.',
    features: ['98% infrared heat rejection', 'Full roof glass coverage', 'Windshield tint available', 'Lifetime manufacturer warranty'],
    href: '/tint',
    color: 'amber',
  },
  {
    title: 'Ceramic Coating',
    description: 'Professional ceramic coating formulated for stainless steel. Hydrophobic protection that eliminates fingerprints and makes cleaning effortless.',
    features: ['Fingerprint resistant surface', 'Water spot prevention', '2-5 year nano protection', 'Enhanced stainless steel shine'],
    href: '/coatings',
    color: 'emerald',
  },
  {
    title: 'Unplugged Performance',
    description: 'Authorized dealer for Unplugged Performance parts. Wheels, suspension, aero, and exterior upgrades installed by certified technicians.',
    features: ['Authorized dealer', 'Expert installation included', 'Forged wheels & suspension', 'Carbon fiber accessories'],
    href: '/accessories',
    color: 'purple',
  },
];

const pricing = {
  ppf: [
    { package: 'Full Front', price: '$2,200', description: 'Hood, fenders, bumper, mirrors', popular: false },
    { package: 'Track Package', price: '$4,000', description: 'Full front + A-pillars, rockers', popular: true },
    { package: 'Full Body', price: '$8,000', description: 'Complete coverage, all panels', popular: false },
    { package: 'Stealth Upgrade', price: '+20%', description: 'Matte finish on any package', popular: false },
  ],
  tint: [
    { package: 'Front Two', price: '$399', description: 'Driver & passenger windows', popular: false },
    { package: 'Full Vehicle', price: '$899', description: 'All side + rear glass', popular: true },
    { package: 'Full + Windshield', price: '$1,299', description: 'Complete glass protection', popular: false },
  ],
  coating: [
    { package: 'Ceramic Coating', price: '$800', description: '2-year nano protection', popular: false },
    { package: 'Full Detail + Coating', price: '$1,500', description: '5-year protection', popular: true },
    { package: 'PPF + Coating Combo', price: '+$500', description: 'Add-on for any PPF package', popular: false },
  ],
};

const protectionCompare = [
  { aspect: 'Rock Chips & Scratches', ppf: true, coating: false, both: true },
  { aspect: 'Fingerprint Resistance', ppf: false, coating: true, both: true },
  { aspect: 'Hydrophobic / Easy Clean', ppf: false, coating: true, both: true },
  { aspect: 'Self-Healing Surface', ppf: true, coating: false, both: true },
  { aspect: 'UV & Stain Prevention', ppf: true, coating: true, both: true },
  { aspect: 'Enhanced Shine', ppf: false, coating: true, both: true },
];

function CheckIcon({ active }: { active: boolean }) {
  return active ? (
    <svg className="w-5 h-5 text-cyan-400 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  ) : (
    <svg className="w-5 h-5 text-gray-700 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}

function getServiceColors(color: string) {
  switch (color) {
    case 'cyan': return { check: 'text-cyan-400', hover: 'hover:border-cyan-500/30', badge: 'bg-cyan-500/10 border-cyan-500/20 text-cyan-400' };
    case 'amber': return { check: 'text-amber-400', hover: 'hover:border-amber-500/30', badge: 'bg-amber-500/10 border-amber-500/20 text-amber-400' };
    case 'emerald': return { check: 'text-emerald-400', hover: 'hover:border-emerald-500/30', badge: 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400' };
    case 'purple': return { check: 'text-purple-400', hover: 'hover:border-purple-500/30', badge: 'bg-purple-500/10 border-purple-500/20 text-purple-400' };
    default: return { check: 'text-cyan-400', hover: 'hover:border-cyan-500/30', badge: 'bg-cyan-500/10 border-cyan-500/20 text-cyan-400' };
  }
}

export default function CybertruckPage() {
  return (
    <div className="bg-black pt-20 min-h-screen">

      {/* ── Hero ── */}
      <section className="py-28 bg-gradient-to-b from-black via-gray-950 to-black relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="container-wide relative">
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-cyan-400 text-sm font-medium tracking-widest uppercase mb-6">
              Cybertruck Specialists &middot; Edmond, OK
            </p>
            <h1 className="text-5xl md:text-7xl font-extralight mb-8 leading-tight">
              Built Different.{' '}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Protected Different.
              </span>
            </h1>
            <p className="text-gray-400 text-lg md:text-xl font-light mb-12 max-w-2xl mx-auto leading-relaxed">
              Your Cybertruck isn&apos;t like anything else on the road. Its stainless steel body and
              angular design require specialized knowledge most shops don&apos;t have.
              We&apos;ve built ours protecting 20+ Cybertrucks since day one.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact?service=cybertruck"
                className="px-10 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full font-medium hover:scale-105 transition-transform"
              >
                Get Your Quote
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
            <p className="text-gray-600 text-xs mt-6">By appointment only &middot; Limited availability</p>
          </div>
        </div>
      </section>

      {/* ── Why Specialized Care ── */}
      <section className="py-24 bg-black">
        <div className="container-wide">
          <div className="text-center mb-16">
            <p className="text-cyan-400 text-sm font-medium tracking-widest uppercase mb-4">The Challenge</p>
            <h2 className="text-3xl md:text-4xl font-extralight mb-4">Why Cybertruck Needs Specialized Care</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              The Cybertruck&apos;s revolutionary design creates unique challenges that most shops aren&apos;t equipped to handle.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {challenges.map((challenge) => (
              <div
                key={challenge.title}
                className="p-8 rounded-2xl border border-white/10 hover:border-cyan-500/20 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-6 group-hover:scale-110 transition-transform">
                  {challenge.icon}
                </div>
                <h3 className="text-xl font-light mb-3">{challenge.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{challenge.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ── Services ── */}
      <section className="py-24 bg-gray-950">
        <div className="container-wide">
          <div className="text-center mb-16">
            <p className="text-cyan-400 text-sm font-medium tracking-widest uppercase mb-4">Services</p>
            <h2 className="text-3xl md:text-4xl font-extralight mb-4">Cybertruck Protection Services</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Every service adapted for the Cybertruck&apos;s unique stainless steel body and angular geometry.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {services.map((service) => {
              const colors = getServiceColors(service.color);
              return (
                <Link
                  key={service.title}
                  href={service.href}
                  className={`group p-8 rounded-2xl border border-white/10 ${colors.hover} transition-all duration-300`}
                >
                  <div className="mb-4">
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium border ${colors.badge}`}>
                      {service.color === 'cyan' ? 'PPF' : service.color === 'amber' ? 'Tint' : service.color === 'emerald' ? 'Coating' : 'Parts'}
                    </span>
                  </div>
                  <h3 className="text-xl font-light mb-3 group-hover:text-cyan-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-500 text-sm mb-6 leading-relaxed">{service.description}</p>
                  <div className="grid grid-cols-2 gap-3">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2 text-sm text-gray-400">
                        <svg className={`w-4 h-4 flex-shrink-0 ${colors.check}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── PPF vs Coating vs Both ── */}
      <section className="py-24 bg-black">
        <div className="container-wide">
          <div className="text-center mb-16">
            <p className="text-cyan-400 text-sm font-medium tracking-widest uppercase mb-4">Comparison</p>
            <h2 className="text-3xl md:text-4xl font-extralight mb-4">Which Protection Do You Need?</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Most Cybertruck owners ask: PPF, ceramic coating, or both? Here&apos;s how they compare.
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            {/* Header */}
            <div className="grid grid-cols-4 gap-4 mb-2">
              <div />
              <div className="text-center p-3">
                <span className="text-sm text-gray-400 font-medium">PPF Only</span>
              </div>
              <div className="text-center p-3">
                <span className="text-sm text-gray-400 font-medium">Coating Only</span>
              </div>
              <div className="text-center p-3 rounded-t-xl bg-cyan-500/5 border-t border-x border-cyan-500/20">
                <span className="text-sm text-cyan-400 font-medium">PPF + Coating</span>
              </div>
            </div>
            {/* Rows */}
            <div className="border border-white/10 rounded-2xl overflow-hidden">
              {protectionCompare.map((row, index) => (
                <div
                  key={row.aspect}
                  className={`grid grid-cols-4 gap-4 ${
                    index % 2 === 0 ? 'bg-white/[0.02]' : ''
                  } ${index !== protectionCompare.length - 1 ? 'border-b border-white/5' : ''}`}
                >
                  <div className="p-4 flex items-center">
                    <span className="text-sm text-gray-400">{row.aspect}</span>
                  </div>
                  <div className="p-4"><CheckIcon active={row.ppf} /></div>
                  <div className="p-4"><CheckIcon active={row.coating} /></div>
                  <div className="p-4 bg-cyan-500/5"><CheckIcon active={row.both} /></div>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-cyan-500/10 border border-cyan-500/20">
                <svg className="w-4 h-4 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-cyan-400 text-sm font-medium">
                  We recommend PPF + Coating for complete Cybertruck protection
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Pricing ── */}
      <section className="py-24 bg-gradient-to-b from-black to-gray-950">
        <div className="container-wide">
          <div className="text-center mb-16">
            <p className="text-cyan-400 text-sm font-medium tracking-widest uppercase mb-4">Transparent Pricing</p>
            <h2 className="text-3xl md:text-4xl font-extralight mb-4">Cybertruck Pricing</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Honest, upfront pricing for all Cybertruck services. No hidden fees. Final quotes may vary based on vehicle condition.
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-6 max-w-5xl mx-auto">

            {/* PPF Pricing */}
            <div className="p-8 rounded-2xl border border-white/10 hover:border-cyan-500/20 transition-colors">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center">
                  <svg className="w-5 h-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-lg font-light">Paint Protection Film</h3>
              </div>
              <div className="space-y-3">
                {pricing.ppf.map((item) => (
                  <div key={item.package} className={`flex justify-between items-start p-3 rounded-xl ${
                    item.popular ? 'bg-cyan-500/5 border border-cyan-500/10' : ''
                  }`}>
                    <div>
                      <div className="flex items-center gap-2">
                        <p className="font-medium text-sm">{item.package}</p>
                        {item.popular && (
                          <span className="text-[10px] uppercase tracking-wider text-cyan-400 font-medium">Popular</span>
                        )}
                      </div>
                      <p className="text-xs text-gray-600 mt-0.5">{item.description}</p>
                    </div>
                    <span className="text-cyan-400 font-medium text-sm">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tint Pricing */}
            <div className="p-8 rounded-2xl border border-white/10 hover:border-amber-500/20 transition-colors">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center">
                  <svg className="w-5 h-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-light">Ceramic Window Tint</h3>
              </div>
              <div className="space-y-3">
                {pricing.tint.map((item) => (
                  <div key={item.package} className={`flex justify-between items-start p-3 rounded-xl ${
                    item.popular ? 'bg-amber-500/5 border border-amber-500/10' : ''
                  }`}>
                    <div>
                      <div className="flex items-center gap-2">
                        <p className="font-medium text-sm">{item.package}</p>
                        {item.popular && (
                          <span className="text-[10px] uppercase tracking-wider text-amber-400 font-medium">Popular</span>
                        )}
                      </div>
                      <p className="text-xs text-gray-600 mt-0.5">{item.description}</p>
                    </div>
                    <span className="text-amber-400 font-medium text-sm">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Coating Pricing */}
            <div className="p-8 rounded-2xl border border-white/10 hover:border-emerald-500/20 transition-colors">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                  <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <h3 className="text-lg font-light">Ceramic Coating</h3>
              </div>
              <div className="space-y-3">
                {pricing.coating.map((item) => (
                  <div key={item.package} className={`flex justify-between items-start p-3 rounded-xl ${
                    item.popular ? 'bg-emerald-500/5 border border-emerald-500/10' : ''
                  }`}>
                    <div>
                      <div className="flex items-center gap-2">
                        <p className="font-medium text-sm">{item.package}</p>
                        {item.popular && (
                          <span className="text-[10px] uppercase tracking-wider text-emerald-400 font-medium">Popular</span>
                        )}
                      </div>
                      <p className="text-xs text-gray-600 mt-0.5">{item.description}</p>
                    </div>
                    <span className="text-emerald-400 font-medium text-sm">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bundle callout */}
          <div className="mt-12 max-w-5xl mx-auto">
            <div className="p-8 rounded-2xl bg-gradient-to-r from-cyan-500/5 via-blue-500/5 to-cyan-500/5 border border-cyan-500/20 text-center">
              <h3 className="text-xl font-light mb-2">Bundle &amp; Save</h3>
              <p className="text-gray-400 text-sm mb-6 max-w-xl mx-auto">
                Combine PPF + ceramic coating + tint for the ultimate Cybertruck protection package. Custom bundle pricing available.
              </p>
              <Link
                href="/contact?service=cybertruck"
                className="inline-flex px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full text-sm font-medium hover:scale-105 transition-transform"
              >
                Get Bundle Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Our Process ── */}
      <section className="py-24 bg-gray-950">
        <div className="container-wide">
          <div className="text-center mb-16">
            <p className="text-cyan-400 text-sm font-medium tracking-widest uppercase mb-4">Our Process</p>
            <h2 className="text-3xl md:text-4xl font-extralight mb-4">How We Protect Your Cybertruck</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              A methodical, no-rush approach developed from hands-on Cybertruck experience.
            </p>
          </div>
          <CybertruckProcess />
        </div>
      </section>

      {/* ── Stats + Social Proof ── */}
      <section className="py-24 bg-black">
        <div className="container-wide">
          <div className="p-12 md:p-16 rounded-3xl bg-gradient-to-br from-cyan-500/5 to-blue-500/5 border border-white/10">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-extralight mb-4">Cybertruck Experience</h2>
              <p className="text-gray-500 max-w-xl mx-auto">
                We&apos;ve been protecting Cybertrucks since their Oklahoma debut and continue refining
                our techniques with every install.
              </p>
            </div>
            <CybertruckStats />

            {/* Testimonial */}
            <div className="mt-16 pt-12 border-t border-white/10 text-center max-w-2xl mx-auto">
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <blockquote className="text-lg md:text-xl font-light text-gray-300 leading-relaxed mb-6">
                &ldquo;FUTURE DETAIL is the only shop I trust with my Cybertruck. They took their time
                to do it right and the results speak for themselves.&rdquo;
              </blockquote>
              <p className="text-sm font-medium text-white">Chris L.</p>
              <p className="text-xs text-gray-600">Cybertruck &middot; Full Body PPF</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-24 bg-gradient-to-b from-black to-gray-950">
        <div className="container-wide">
          <div className="text-center mb-16">
            <p className="text-cyan-400 text-sm font-medium tracking-widest uppercase mb-4">Common Questions</p>
            <h2 className="text-3xl md:text-4xl font-extralight mb-4">Cybertruck Protection FAQ</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Real questions from Cybertruck owners &mdash; answered by our install team.
            </p>
          </div>
          <CybertruckFAQ />
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-28 bg-black relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="container-wide text-center relative">
          <h2 className="text-4xl md:text-6xl font-extralight mb-8 leading-tight">
            Ready to Protect Your{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Cybertruck?
            </span>
          </h2>
          <p className="text-gray-400 text-lg mb-4 max-w-2xl mx-auto">
            Get a custom quote tailored to your Cybertruck. We&apos;ll help you choose the right
            protection package for your needs and driving style.
          </p>
          <p className="text-gray-600 text-sm mb-10">
            By appointment only &middot; Typically 1-2 week lead time
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact?service=cybertruck"
              className="px-10 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full font-medium hover:scale-105 transition-transform"
            >
              Get Your Quote
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
