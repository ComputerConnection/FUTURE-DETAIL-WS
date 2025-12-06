import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact | FUTURE DETAIL',
  description: 'Book a consultation for Tesla PPF, wraps, tinting, or ceramic coating in Edmond & Oklahoma City.',
};

export default function ContactPage() {
  return (
    <div className="bg-black min-h-screen py-24">
      <div className="container-wide max-w-2xl">
        <h1 className="text-5xl font-extralight mb-6 text-center">Get in <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Touch</span></h1>
        <p className="text-gray-400 text-center mb-12">Ready to protect your Tesla? Fill out the form below or give us a call.</p>
        
        <form action="https://formspree.io/f/xwkgpqbr" method="POST" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input type="text" name="name" placeholder="Name" required className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-cyan-500 focus:outline-none" />
            <input type="email" name="email" placeholder="Email" required className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-cyan-500 focus:outline-none" />
          </div>
          <input type="tel" name="phone" placeholder="Phone" className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-cyan-500 focus:outline-none" />
          <select name="model" className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-cyan-500 focus:outline-none">
            <option value="">Select Tesla Model</option>
            <option value="Model 3">Model 3</option>
            <option value="Model Y">Model Y</option>
            <option value="Model S">Model S</option>
            <option value="Model X">Model X</option>
            <option value="Cybertruck">Cybertruck</option>
          </select>
          <div className="space-y-2">
            <p className="text-sm text-gray-400">Services Interested In:</p>
            <div className="grid grid-cols-2 gap-2">
              {['PPF', 'Color Wrap', 'Window Tint', 'Ceramic Coating'].map((service) => (
                <label key={service} className="flex items-center gap-2 text-sm">
                  <input type="checkbox" name="services" value={service} className="rounded border-white/20" />
                  {service}
                </label>
              ))}
            </div>
          </div>
          <textarea name="message" placeholder="Tell us about your project..." rows={4} className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-cyan-500 focus:outline-none" />
          <button type="submit" className="w-full py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full font-medium hover:scale-105 transition-transform">
            Send Message
          </button>
        </form>

        <div className="mt-12 text-center text-gray-400">
          <p className="text-lg mb-2">Or call us directly:</p>
          <a href="tel:+14053159202" className="text-2xl text-white hover:text-cyan-400 transition-colors">(405) 315-9202</a>
          <p className="mt-4 text-sm">11734 Maui Lane, Edmond, OK</p>
          <p className="text-sm">everett@futuredetail.com</p>
        </div>
      </div>
    </div>
  );
}

