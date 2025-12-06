import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Thank You | FUTURE DETAIL',
  description: 'Thank you for contacting FUTURE DETAIL. We will get back to you within 24 hours.',
};

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-6 pt-20">
      <div className="text-center max-w-xl">
        {/* Success animation */}
        <div className="relative mb-8">
          <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 flex items-center justify-center animate-pulse">
            <svg className="w-12 h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <div className="absolute inset-0 w-24 h-24 mx-auto rounded-full bg-emerald-500/20 blur-xl" />
        </div>

        <h1 className="text-4xl md:text-5xl font-extralight mb-4">
          Thank{' '}
          <span className="bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent">
            You!
          </span>
        </h1>
        
        <p className="text-gray-400 text-lg mb-4">
          Your message has been received.
        </p>
        <p className="text-gray-500 mb-10">
          We typically respond within 24 hours. In the meantime, feel free to give us a call 
          at <a href="tel:+14053159202" className="text-cyan-400 hover:underline">(405) 315-9202</a> if 
          you have any urgent questions.
        </p>

        {/* What to expect */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-10 text-left">
          <h2 className="font-light mb-4">What Happens Next?</h2>
          <ol className="space-y-3 text-sm text-gray-400">
            <li className="flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center flex-shrink-0 text-xs">1</span>
              <span>We review your request and vehicle details</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center flex-shrink-0 text-xs">2</span>
              <span>We prepare a personalized quote based on your needs</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center flex-shrink-0 text-xs">3</span>
              <span>We reach out via email or phone to discuss your project</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center flex-shrink-0 text-xs">4</span>
              <span>We schedule your appointment at a time that works for you</span>
            </li>
          </ol>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full font-medium hover:scale-105 transition-transform"
          >
            Back to Home
          </Link>
          <Link
            href="/gallery"
            className="px-8 py-4 border border-white/20 rounded-full font-medium hover:bg-white/10 transition-colors"
          >
            View Our Work
          </Link>
        </div>

        {/* Social follow */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <p className="text-sm text-gray-500 mb-4">Follow us for the latest projects</p>
          <a
            href="https://instagram.com/futuredetail.okc"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            @futuredetail.okc
          </a>
        </div>
      </div>
    </div>
  );
}

