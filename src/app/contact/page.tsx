'use client';

import { useState, useRef, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { siteConfig } from '@/config/site';
import { trackEvent } from '@/lib/analytics';

const services = [
  { id: 'ppf', label: 'Paint Protection Film', icon: '🛡️' },
  { id: 'tint', label: 'Window Tinting', icon: '🕶️' },
  { id: 'coating', label: 'Ceramic Coating', icon: '✨' },
  { id: 'accessories', label: 'Unplugged Accessories', icon: '⚡' },
  { id: 'cybertruck', label: 'Cybertruck Services', icon: '🚀' },
];

function getInitialServices(service: string | null): string[] {
  if (!service) return [];
  return services.filter((s) => service.includes(s.id)).map((s) => s.id);
}

function toTitleCase(slug: string): string {
  return slug
    .split(/[-\s]+/)
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

// Turns what the visitor picked on other pages (a color, package, or product) into lines for the lead email
function getRequestDetails(params: URLSearchParams): string[] {
  const details: string[] = [];
  const service = params.get('service') ?? '';
  const color = params.get('color');
  const pkg = params.get('package');
  const product = params.get('product');

  // Service pages link with slugs like "ppf-full-front"
  const match = services.find((s) => service.startsWith(`${s.id}-`));
  if (match) details.push(`${match.label} option: ${toTitleCase(service.slice(match.id.length + 1))}`);
  if (pkg) details.push(`Package: ${pkg}`);
  if (product) details.push(`Product: ${product}`);
  if (color) details.push(`Color: ${color}`);
  if (params.get('request') === 'sample') details.push('Requesting physical color samples');

  return details.map((detail) => detail.slice(0, 200));
}

function ContactForm() {
  const searchParams = useSearchParams();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');
  const [selectedServices, setSelectedServices] = useState<string[]>(() =>
    getInitialServices(searchParams.get('service'))
  );
  const [requestDetails] = useState<string[]>(() => getRequestDetails(new URLSearchParams(searchParams.toString())));
  const errorRef = useRef<HTMLDivElement>(null);

  const showError = (message: string) => {
    setError(message);
    // The message sits above the form, out of view on a phone after tapping submit
    requestAnimationFrame(() => errorRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' }));
  };

  const toggleService = (id: string) => {
    setSelectedServices((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    );
  };

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      model: formData.get('model'),
      year: formData.get('year'),
      services: selectedServices.map((id) => services.find((s) => s.id === id)?.label),
      details: requestDetails,
      message: formData.get('message'),
      company: formData.get('company'),
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        trackEvent('generate_lead', { services: selectedServices.join(',') || 'none' });
        setIsSuccess(true);
        window.scrollTo({ top: 0 });
        return;
      }

      // Validation problems the customer can fix get the real message from the API
      if (response.status === 400 || response.status === 429) {
        const result = await response.json().catch(() => null);
        if (result?.message) {
          showError(result.message);
          return;
        }
      }

      showError(`Something went wrong sending your message. Please call us directly at ${siteConfig.contact.phone}.`);
    } catch {
      showError(`Something went wrong sending your message. Please call us directly at ${siteConfig.contact.phone}.`);
    } finally {
      setIsSubmitting(false);
    }
  }

  if (isSuccess) {
    return (
      <div className="bg-black pt-20 min-h-screen">
        <section className="py-24">
          <div className="container-wide max-w-2xl text-center">
            <div className="w-20 h-20 mx-auto mb-8 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center animate-pulse">
              <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h1 className="text-4xl md:text-5xl font-extralight mb-6">
              Message{' '}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Sent!</span>
            </h1>
            <p className="text-gray-400 text-lg mb-4">
              Thanks for reaching out! Everett will get back to you within 24 hours.
            </p>
            <div className="p-4 rounded-xl bg-cyan-500/10 border border-cyan-500/30 mb-8">
              <p className="text-cyan-400 text-sm">
                ⏱️ We typically respond within 2 hours during business hours (Mon-Fri, 9am-6pm)
              </p>
            </div>
            <Link
              href="/"
              className="inline-block px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full font-medium hover:scale-[1.02] transition-transform"
            >
              Back to Home
            </Link>
          </div>
        </section>
      </div>
    );
  }

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
              <p className="text-gray-400 mb-4">
                Ready to protect your Tesla? Fill out the form below and we&apos;ll get back to you within 24 hours.
              </p>
              
              {/* Response Time */}
              <div className="flex items-center gap-2 mb-10">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-sm text-emerald-400">Typically responds within 2 hours</span>
              </div>

              {error && (
                <div ref={errorRef} role="alert" className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400">
                  {error}
                </div>
              )}

              {requestDetails.length > 0 && (
                <div className="mb-8 p-4 rounded-xl bg-cyan-500/10 border border-cyan-500/30">
                  <p className="text-sm text-gray-400 mb-2">We&apos;ll include this with your request:</p>
                  <ul className="space-y-1 text-sm text-cyan-400">
                    {requestDetails.map((detail) => (
                      <li key={detail}>{detail}</li>
                    ))}
                  </ul>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Honeypot: hidden from people, filled in by bots */}
                <div className="absolute -left-[9999px] h-px w-px overflow-hidden" aria-hidden="true">
                  <label htmlFor="company">Company</label>
                  <input type="text" id="company" name="company" tabIndex={-1} autoComplete="off" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm text-gray-400 mb-2">Name *</label>
                    <input 
                      type="text" 
                      id="name"
                      name="name" 
                      autoComplete="name"
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500 transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm text-gray-400 mb-2">Email *</label>
                    <input 
                      type="email" 
                      id="email"
                      name="email" 
                      autoComplete="email"
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500 transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm text-gray-400 mb-2">Phone</label>
                  <input 
                    type="tel" 
                    id="phone"
                    name="phone"
                    autoComplete="tel"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500 transition-colors"
                    placeholder="(405) 555-0123"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="model" className="block text-sm text-gray-400 mb-2">Tesla Model</label>
                    <select 
                      id="model"
                      name="model"
                      defaultValue={searchParams.get('model') || ''}
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
                    <label htmlFor="year" className="block text-sm text-gray-400 mb-2">Year</label>
                    <select 
                      id="year"
                      name="year"
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-cyan-500 focus:outline-none appearance-none"
                    >
                      <option value="">Select year</option>
                      {[2026, 2025, 2024, 2023, 2022, 2021, 2020, 2019, 2018].map((year) => (
                        <option key={year} value={year}>{year}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <fieldset>
                  <legend className="block text-sm text-gray-400 mb-3">Services Interested In</legend>
                  <div className="grid grid-cols-2 gap-3">
                    {services.map((service) => (
                      <label 
                        key={service.id}
                        className={`flex items-center gap-3 p-3 rounded-xl border cursor-pointer transition-all has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-cyan-400 ${
                          selectedServices.includes(service.id)
                            ? 'border-cyan-500 bg-cyan-500/10'
                            : 'border-white/10 hover:border-cyan-500/50'
                        }`}
                      >
                        <input 
                          type="checkbox" 
                          name="services" 
                          value={service.label} 
                          checked={selectedServices.includes(service.id)}
                          onChange={() => toggleService(service.id)}
                          className="sr-only"
                        />
                        <div className={`w-5 h-5 rounded border flex items-center justify-center transition-colors ${
                          selectedServices.includes(service.id)
                            ? 'bg-cyan-500 border-cyan-500'
                            : 'border-white/30'
                        }`}>
                          {selectedServices.includes(service.id) && (
                            <svg className="w-3 h-3 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          )}
                        </div>
                        <span className="text-sm">{service.icon} {service.label}</span>
                      </label>
                    ))}
                  </div>
                </fieldset>

                <div>
                  <label htmlFor="message" className="block text-sm text-gray-400 mb-2">Message</label>
                  <textarea 
                    id="message"
                    name="message"
                    maxLength={2000}
                    rows={4}
                    defaultValue=""
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500 transition-colors resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full font-medium hover:scale-[1.02] transition-transform disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </form>
            </div>

            {/* Info */}
            <div className="lg:pl-8">
              <div className="sticky top-32">
                <div className="p-8 rounded-2xl border border-white/10 mb-8">
                  <h2 className="text-xl font-light mb-6">Contact Information</h2>
                  <div className="space-y-6">
                    <a href={`tel:${siteConfig.contact.phoneRaw}`} className="flex items-center gap-4 text-gray-300 hover:text-cyan-400 transition-colors">
                      <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center">
                        <svg className="w-5 h-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Phone</p>
                        <p className="font-light">{siteConfig.contact.phone}</p>
                      </div>
                    </a>
                    <a href={`mailto:${siteConfig.contact.email}`} className="flex items-center gap-4 text-gray-300 hover:text-cyan-400 transition-colors">
                      <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center">
                        <svg className="w-5 h-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Email</p>
                        <p className="font-light">{siteConfig.contact.email}</p>
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

                <div className="p-8 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 mb-8">
                  <h3 className="font-light mb-2">By Appointment Only</h3>
                  <p className="text-sm text-gray-400">
                    We operate by appointment to ensure each Tesla receives our full attention. 
                    Book your consultation today.
                  </p>
                </div>

                {/* Call CTA */}
                <div className="rounded-2xl border border-white/10 overflow-hidden">
                  <div className="p-6 text-center">
                    <h3 className="font-light mb-2">Prefer to Talk?</h3>
                    <p className="text-sm text-gray-500 mb-4">Call us directly for immediate assistance</p>
                    <a
                      href={`tel:${siteConfig.contact.phoneRaw}`}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full font-medium hover:scale-105 transition-transform"
                    >
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      {siteConfig.contact.phone}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// Loading fallback for Suspense
function ContactLoading() {
  return (
    <div className="bg-black pt-20 min-h-screen">
      <section className="py-24">
        <div className="container-wide">
          <div className="flex items-center justify-center">
            <div className="animate-spin w-8 h-8 border-2 border-cyan-500 border-t-transparent rounded-full" />
          </div>
        </div>
      </section>
    </div>
  );
}

// Main page component with Suspense wrapper
export default function ContactPage() {
  return (
    <Suspense fallback={<ContactLoading />}>
      <ContactForm />
    </Suspense>
  );
}
