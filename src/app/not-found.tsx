import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-6">
      <div className="text-center max-w-xl">
        {/* Glitch effect 404 */}
        <div className="relative mb-8">
          <h1 className="text-[150px] md:text-[200px] font-extralight leading-none bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            404
          </h1>
          <div className="absolute inset-0 text-[150px] md:text-[200px] font-extralight leading-none text-cyan-400/20 blur-xl">
            404
          </div>
        </div>

        <h2 className="text-2xl md:text-3xl font-light mb-4">Page Not Found</h2>
        <p className="text-gray-400 mb-10">
          Looks like this page took a wrong turn. Let&apos;s get you back on track.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full font-medium hover:scale-105 transition-transform"
          >
            Go Home
          </Link>
          <Link
            href="/contact"
            className="px-8 py-4 border border-white/20 rounded-full font-medium hover:bg-white/10 transition-colors"
          >
            Contact Us
          </Link>
        </div>

        {/* Quick Links */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <p className="text-sm text-gray-500 mb-4">Popular Pages</p>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { href: '/ppf', label: 'PPF' },
              { href: '/wraps', label: 'Wraps' },
              { href: '/tint', label: 'Tint' },
              { href: '/coatings', label: 'Coatings' },
              { href: '/pricing', label: 'Pricing' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-gray-400 hover:text-cyan-400 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

