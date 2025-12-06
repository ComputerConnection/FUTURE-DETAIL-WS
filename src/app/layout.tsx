import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'FUTURE DETAIL | Tesla PPF, Wraps & Ceramic Coatings | Edmond & OKC',
  description: 'Premium Paint Protection Film, color-change wraps, window tinting, and ceramic coatings for Tesla vehicles in Edmond and Oklahoma City. (405) 315-9202',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-white/10">
          <div className="container-wide flex items-center justify-between h-16">
            <a href="/" className="text-xl font-light">
              FUTURE<span className="font-semibold">DETAIL</span>
            </a>
            <div className="hidden md:flex items-center gap-6 text-sm">
              <a href="/ppf" className="hover:text-cyan-400 transition-colors">PPF</a>
              <a href="/wraps" className="hover:text-cyan-400 transition-colors">Wraps</a>
              <a href="/tint" className="hover:text-cyan-400 transition-colors">Tint</a>
              <a href="/coatings" className="hover:text-cyan-400 transition-colors">Coatings</a>
              <a href="/pricing" className="hover:text-cyan-400 transition-colors">Pricing</a>
              <a href="/gallery" className="hover:text-cyan-400 transition-colors">Gallery</a>
              <a href="/contact" className="px-4 py-2 bg-white text-black rounded-full text-sm font-medium hover:bg-gray-200 transition-colors">Book Now</a>
            </div>
          </div>
        </nav>
        <main className="pt-16">{children}</main>
        <footer className="bg-black border-t border-white/10 py-12">
          <div className="container-wide text-center text-gray-500 text-sm">
            <p>© {new Date().getFullYear()} FUTURE DETAIL. All rights reserved.</p>
            <p className="mt-2">11734 Maui Lane, Edmond, OK · (405) 315-9202</p>
          </div>
        </footer>
      </body>
    </html>
  );
}

