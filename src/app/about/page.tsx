import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | Meet the Team | FUTURE DETAIL',
  description: 'Meet Everett Earls and the FUTURE DETAIL team. Oklahoma City\'s trusted Tesla protection specialists since 2020.',
};

const certifications = [
  { name: 'XPEL Certified', logo: 'XPEL', description: 'Factory-trained PPF installer' },
  { name: '3M Certified', logo: '3M', description: 'Authorized wrap installer' },
  { name: 'LLumar Certified', logo: 'LLumar', description: 'Certified tint professional' },
  { name: 'Ceramic Pro', logo: 'CP', description: 'Certified coating applicator' },
];

const values = [
  { title: 'Precision', description: 'Every cut, every edge, every detail matters. We take the time to do it right.', icon: '🎯' },
  { title: 'Transparency', description: 'Clear pricing, honest timelines, no surprises. You know exactly what you are getting.', icon: '💎' },
  { title: 'Education', description: 'We want you to understand your options so you can make the best decision for your Tesla.', icon: '📚' },
  { title: 'Quality', description: 'We use only premium materials from trusted manufacturers with real warranties.', icon: '⭐' },
];

const stats = [
  { value: '500+', label: 'Teslas Protected' },
  { value: '5', label: 'Years Experience' },
  { value: '100%', label: 'Satisfaction Rate' },
  { value: '4.9', label: 'Google Rating' },
];

export default function AboutPage() {
  return (
    <div className="bg-black pt-20">
      {/* Hero */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-blue-500/5" />
        <div className="container-wide relative">
          <p className="text-cyan-400 text-sm font-medium tracking-widest uppercase mb-4">About Us</p>
          <h1 className="text-5xl md:text-6xl font-extralight mb-6">
            The Story Behind{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              FUTURE DETAIL
            </span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl">
            Oklahoma City&apos;s premier Tesla protection studio, founded by enthusiasts, for enthusiasts.
          </p>
        </div>
      </section>

      {/* Meet Everett */}
      <section className="py-24 border-t border-white/5">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-white/5 flex items-center justify-center">
              <div className="text-center">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 mx-auto mb-4 flex items-center justify-center text-4xl font-light text-white">
                  EE
                </div>
                <span className="text-gray-600">Everett Earls, Owner</span>
              </div>
            </div>
            <div>
              <p className="text-cyan-400 text-sm font-medium uppercase tracking-widest mb-4">Meet the Founder</p>
              <h2 className="text-3xl font-extralight mb-6">Everett Earls</h2>
              <p className="text-gray-400 leading-relaxed mb-6">
                As a Tesla owner myself, I understand the pride that comes with owning one of these incredible vehicles. 
                I also understand the frustration of watching rock chips accumulate on that beautiful paint.
              </p>
              <p className="text-gray-400 leading-relaxed mb-6">
                That frustration led me to learn everything about paint protection. I trained with the best, 
                earned certifications from XPEL, 3M, and LLumar, and opened FUTURE DETAIL with one mission: 
                to give Tesla owners the protection their vehicles deserve.
              </p>
              <p className="text-gray-400 leading-relaxed mb-8">
                Every Tesla that comes through our doors gets my personal attention. I treat each one like it&apos;s my own 
                because I know how much your car means to you.
              </p>
              <div className="flex items-center gap-4">
                <a href="tel:+14053159202" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                  (405) 315-9202
                </a>
                <span className="text-gray-700">•</span>
                <a href="mailto:everett@futuredetail.com" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                  everett@futuredetail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-gradient-to-b from-black to-gray-950">
        <div className="container-wide">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-4xl md:text-5xl font-extralight text-cyan-400 mb-2">{stat.value}</p>
                <p className="text-sm text-gray-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-24">
        <div className="container-wide">
          <div className="text-center mb-16">
            <p className="text-cyan-400 text-sm font-medium uppercase tracking-widest mb-4">Credentials</p>
            <h2 className="text-3xl font-extralight mb-4">Certified & Trained</h2>
            <p className="text-gray-500">Factory-trained by the industry&apos;s leading manufacturers</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {certifications.map((cert) => (
              <div key={cert.name} className="p-6 rounded-2xl border border-white/10 text-center hover:border-cyan-500/30 transition-colors">
                <div className="w-16 h-16 rounded-xl bg-white/5 mx-auto mb-4 flex items-center justify-center text-xl font-bold text-cyan-400">
                  {cert.logo}
                </div>
                <h3 className="font-light mb-1">{cert.name}</h3>
                <p className="text-xs text-gray-500">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-gradient-to-t from-gray-950 to-black">
        <div className="container-wide">
          <div className="text-center mb-16">
            <p className="text-cyan-400 text-sm font-medium uppercase tracking-widest mb-4">Our Values</p>
            <h2 className="text-3xl font-extralight mb-4">What We Stand For</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div key={value.title} className="p-6 rounded-2xl border border-white/10">
                <div className="text-3xl mb-4">{value.icon}</div>
                <h3 className="text-lg font-light mb-2">{value.title}</h3>
                <p className="text-sm text-gray-500">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facility */}
      <section className="py-24">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-cyan-400 text-sm font-medium uppercase tracking-widest mb-4">Our Facility</p>
              <h2 className="text-3xl font-extralight mb-6">Climate-Controlled Studio</h2>
              <p className="text-gray-400 leading-relaxed mb-6">
                Our Edmond facility is purpose-built for automotive protection. Climate-controlled to maintain 
                optimal temperature and humidity for PPF and wrap installation. Filtered air keeps dust and 
                contaminants away from your vehicle.
              </p>
              <ul className="space-y-4">
                {[
                  'Temperature & humidity controlled',
                  'Filtered air system',
                  'Professional lighting for perfect installs',
                  'Secure, insured facility',
                  'By appointment only for focused attention',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-gray-300">
                    <svg className="w-5 h-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="aspect-video rounded-2xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-white/5 flex items-center justify-center">
              <span className="text-gray-700">FUTURE DETAIL Facility</span>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-24 bg-gradient-to-b from-black to-gray-950">
        <div className="container-wide">
          <div className="text-center mb-16">
            <p className="text-cyan-400 text-sm font-medium uppercase tracking-widest mb-4">Service Area</p>
            <h2 className="text-3xl font-extralight mb-4">Serving the OKC Metro</h2>
            <p className="text-gray-500">Conveniently located in Edmond, serving all of central Oklahoma</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-4xl mx-auto">
            {['Edmond', 'Oklahoma City', 'Norman', 'Moore', 'Yukon', 'Mustang', 'Nichols Hills', 'The Village', 'Midwest City', 'Del City', 'Bethany', 'Warr Acres'].map((city) => (
              <div key={city} className="px-4 py-3 rounded-xl border border-white/10 text-center text-sm text-gray-400">
                {city}
              </div>
            ))}
          </div>
          <div className="mt-12 aspect-[2/1] max-w-4xl mx-auto rounded-2xl bg-gradient-to-br from-cyan-500/5 to-blue-500/5 border border-white/5 flex items-center justify-center">
            <div className="text-center">
              <p className="text-gray-600 mb-2">📍 11734 Maui Lane, Edmond, OK</p>
              <a 
                href="https://maps.google.com/?q=11734+Maui+Lane+Edmond+OK" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-cyan-400 text-sm hover:underline"
              >
                Get Directions →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 border-t border-white/5">
        <div className="container-wide text-center">
          <h2 className="text-4xl font-extralight mb-6">
            Ready to{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Get Started?
            </span>
          </h2>
          <p className="text-gray-400 text-lg mb-10">
            Schedule a consultation and let&apos;s discuss your Tesla&apos;s protection needs.
          </p>
          <Link href="/contact" className="px-10 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full font-medium hover:scale-105 transition-transform inline-block">
            Book Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}

