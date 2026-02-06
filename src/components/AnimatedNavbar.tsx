'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { siteConfig } from '@/config/site';

const navLinks = [
  { href: '/ppf', label: 'PPF' },
  { href: '/wraps', label: 'Wraps' },
  { href: '/tint', label: 'Tint' },
  { href: '/coatings', label: 'Coatings' },
  { href: '/accessories', label: 'Accessories' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/gallery', label: 'Gallery' },
];

export default function AnimatedNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const lastScrollY = useRef(0);
  const pathname = usePathname();

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
      setIsHidden(true);
    } else {
      setIsHidden(false);
    }
    setIsScrolled(currentScrollY > 50);
    lastScrollY.current = currentScrollY;
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Close mobile menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [mobileMenuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isHidden ? '-translate-y-full' : 'translate-y-0'
        }`}
      >
        <div
          className={`absolute inset-0 transition-all duration-500 ${
            isScrolled
              ? 'bg-black/80 backdrop-blur-xl border-b border-white/5'
              : 'bg-transparent'
          }`}
        />

        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent opacity-0 transition-opacity duration-500"
          style={{ opacity: isScrolled ? 1 : 0 }}
        />

        <nav className="relative container-wide" aria-label="Main navigation">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="group relative z-10 flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center overflow-hidden group-hover:scale-105 transition-transform duration-300">
                <span className="text-white font-medium text-sm">FD</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              </div>
              <span className="text-xl font-light tracking-tight text-white">
                <span className="font-light">FUTURE</span>
                <span className="font-semibold">DETAIL</span>
              </span>
            </Link>

            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative px-4 py-2 text-sm transition-colors duration-300 ${
                      isActive ? 'text-cyan-400' : 'text-gray-300 hover:text-white'
                    }`}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-cyan-400 rounded-full" />
                    )}
                  </Link>
                );
              })}
            </div>

            <div className="hidden lg:flex items-center gap-4">
              <a
                href={`tel:${siteConfig.contact.phoneRaw}`}
                className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {siteConfig.contact.phone}
              </a>
              <Link
                href="/contact"
                className="px-5 py-2.5 bg-white text-black rounded-full text-sm font-medium hover:bg-gray-200 transition-colors flex items-center gap-2"
              >
                Book Now
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden relative z-10 w-10 h-10 flex items-center justify-center"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
            >
              <div className="w-6 flex flex-col gap-1.5">
                <span className={`block h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                <span className={`block h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`} />
                <span className={`block h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
              </div>
            </button>
          </div>
        </nav>
      </header>

      <div
        id="mobile-menu"
        className={`fixed inset-0 z-40 bg-black/95 backdrop-blur-xl transition-all duration-500 lg:hidden ${
          mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        aria-hidden={!mobileMenuOpen}
      >
        <nav className="flex flex-col items-center justify-center h-full gap-6" aria-label="Mobile navigation">
          {navLinks.map((link, index) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-3xl font-light transition-all duration-500 ${
                mobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              } ${pathname === link.href ? 'text-cyan-400' : 'text-white'}`}
              style={{ transitionDelay: `${index * 50}ms` }}
              tabIndex={mobileMenuOpen ? 0 : -1}
              aria-current={pathname === link.href ? 'page' : undefined}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={`tel:${siteConfig.contact.phoneRaw}`}
            className="mt-8 text-xl text-cyan-400"
            tabIndex={mobileMenuOpen ? 0 : -1}
          >
            {siteConfig.contact.phone}
          </a>
        </nav>
      </div>
    </>
  );
}
