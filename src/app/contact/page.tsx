import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact | Book a Consultation | FUTURE DETAIL',
  description: 'Book a consultation for Tesla PPF, wraps, window tinting, or ceramic coating in Edmond & Oklahoma City. Call (405) 315-9202.',
};

export default function ContactPage() {
  return (
    <div className="bg-black pt-20 min-h-screen">
      <section className="py-24">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Form */}
            <div>
              <p className="text-cyan-400 text-sm font-medium tracking-widest uppercase mb-4">Get Started</p>
              <h1 className="text-4xl md:text-5xl font-extralight mb-6">
                Book a{' '}
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Consultation
                </span>
              </h1>
              <p className="text-gray-400 mb-10">
                Ready to protect your Tesla? Fill out the form below and we&apos;ll get back to you within 24 hours.
              </p>

              <form action="https://formspree.io/f/xwkgpqbr" method="POST" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">Name *</label>
                    <input 
                      type="text" 
                      name="name" 
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500 transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">Email *</label>
                    <input 
                      type="email" 
                      name="email" 
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500 transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-gray-400 mb-2">Phone</label>
                  <input 
                    type="tel" 
                    name="phone"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500 transition-colors"
                    placeholder="(405) 555-0123"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">Tesla Model</label>
                    <select 
                      name="model"
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-cyan-500 focus:outline-none appearance-none"
                    >
                      <option value="">Select model</option>
                      <option value="Model 3">Model 3</option>
                      <option value="Model Y">Model Y</option>
                      <option value="Model S">Model S</option>
                      <option value="Model X">Model X</option>
                      <option value="Cybertruck">Cybertruck</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">Year</label>
                    <select 
                      name="year"
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-cyan-500 focus:outline-none appearance-none"
                    >
                      <option value="">Select year</option>
                      {[2025, 2024, 2023, 2022, 2021, 2020, 2019, 2018].map((year) => (
                        <option key={year} value={year}>{year}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-gray-400 mb-3">Services Interested In</label>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { id: 'ppf', label: 'Paint Protection Film', icon: '🛡️' },
                      { id: 'wrap', label: 'Color Change Wrap', icon: '🎨' },
                      { id: 'tint', label: 'Window Tinting', icon: '🕶️' },
                      { id: 'coating', label: 'Ceramic Coating', icon: '✨' },
                    ].map((service) => (
                      <label 
                        key={service.id}
                        className="flex items-center gap-3 p-3 rounded-xl border border-white/10 hover:border-cyan-500/50 cursor-pointer transition-colors"
                      >
                        <input type="checkbox" name="services" value={service.label} className="hidden peer" />
                        <div className="w-5 h-5 rounded border border-white/30 peer-checked:bg-cyan-500 peer-checked:border-cyan-500 flex items-center justify-center transition-colors">
                          <svg className="w-3 h-3 text-white opacity-0 peer-checked:opacity-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-sm">{service.icon} {service.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-gray-400 mb-2">Message</label>
                  <textarea 
                    name="message"
                    rows={4}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500 transition-colors resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full font-medium hover:scale-[1.02] transition-transform"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Info */}
            <div className="lg:pl-8">
              <div className="sticky top-32">
                <div className="p-8 rounded-2xl border border-white/10 mb-8">
                  <h2 className="text-xl font-light mb-6">Contact Information</h2>
                  <div className="space-y-6">
                    <a href="tel:+14053159202" className="flex items-center gap-4 text-gray-300 hover:text-cyan-400 transition-colors">
                      <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center">
                        <svg className="w-5 h-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Phone</p>
                        <p className="font-light">(405) 315-9202</p>
                      </div>
                    </a>
                    <a href="mailto:everett@futuredetail.com" className="flex items-center gap-4 text-gray-300 hover:text-cyan-400 transition-colors">
                      <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center">
                        <svg className="w-5 h-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Email</p>
                        <p className="font-light">everett@futuredetail.com</p>
                      </div>
                    </a>
                    <a href="https://maps.google.com/?q=11734+Maui+Lane+Edmond+OK" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-gray-300 hover:text-cyan-400 transition-colors">
                      <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center">
                        <svg className="w-5 h-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Location</p>
                        <p className="font-light">11734 Maui Lane, Edmond, OK</p>
                      </div>
                    </a>
                  </div>
                </div>

                <div className="p-8 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20">
                  <h3 className="font-light mb-2">By Appointment Only</h3>
                  <p className="text-sm text-gray-400">
                    We operate by appointment to ensure each Tesla receives our full attention. 
                    Book your consultation today.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
