import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10">
      <div className="container-wide py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <span className="text-2xl font-light tracking-tight">
                FUTURE<span className="font-semibold">DETAIL</span>
              </span>
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed max-w-md mb-6">
              Premium Paint Protection Film, color-change wraps, window tinting, and ceramic coatings
              for Tesla vehicles. Precision-installed protection in Edmond, Oklahoma.
            </p>
            <div className="space-y-2">
              <a
                href="tel:+14053159202"
                className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                (405) 315-9202
              </a>
              <a
                href="mailto:everett@futuredetail.com"
                className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                everett@futuredetail.com
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs font-medium uppercase tracking-wider mb-6 text-gray-500">Services</h4>
            <ul className="space-y-3">
              <li><Link href="/ppf" className="text-sm text-gray-400 hover:text-white transition-colors">Paint Protection Film</Link></li>
              <li><Link href="/wraps" className="text-sm text-gray-400 hover:text-white transition-colors">Color Change Wraps</Link></li>
              <li><Link href="/tint" className="text-sm text-gray-400 hover:text-white transition-colors">Window Tinting</Link></li>
              <li><Link href="/coatings" className="text-sm text-gray-400 hover:text-white transition-colors">Ceramic Coatings</Link></li>
              <li><Link href="/pricing" className="text-sm text-gray-400 hover:text-white transition-colors">Pricing</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-medium uppercase tracking-wider mb-6 text-gray-500">Company</h4>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-sm text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/gallery" className="text-sm text-gray-400 hover:text-white transition-colors">Gallery</Link></li>
              <li><Link href="/faq" className="text-sm text-gray-400 hover:text-white transition-colors">FAQ</Link></li>
              <li><Link href="/contact" className="text-sm text-gray-400 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Location */}
          <div>
            <h4 className="text-xs font-medium uppercase tracking-wider mb-6 text-gray-500">Location</h4>
            <a
              href="https://maps.google.com/?q=11734+Maui+Lane+Edmond+OK"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-sm text-gray-400 hover:text-white transition-colors mb-4"
            >
              11734 Maui Lane<br />
              Edmond, OK
            </a>
            <p className="text-sm text-gray-600 mb-6">By appointment only</p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-sm font-medium text-white hover:text-cyan-400 transition-colors"
            >
              Book a Consultation
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-600">© {new Date().getFullYear()} FUTURE DETAIL. All rights reserved.</p>
          <p className="text-xs text-gray-600">Tesla PPF, Wraps & Tinting in Oklahoma City</p>
        </div>
      </div>
    </footer>
  );
}

