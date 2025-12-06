import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Gallery | Our Work | FUTURE DETAIL',
  description: 'View our Tesla PPF, wrap, tint, and ceramic coating portfolio. Before and after transformations in Oklahoma City.',
};

const projects = [
  { title: 'Model Y Stealth PPF', category: 'PPF', description: 'Full body stealth conversion on Pearl White' },
  { title: 'Model 3 Nardo Gray Wrap', category: 'Wrap', description: 'Complete color change from black to Nardo Gray' },
  { title: 'Cybertruck Full PPF', category: 'PPF', description: 'Full body protection on stainless steel' },
  { title: 'Model S Ceramic Coating', category: 'Coating', description: '5-year ceramic with paint correction' },
  { title: 'Model X Chrome Delete', category: 'Wrap', description: 'Satin black chrome delete package' },
  { title: 'Model Y Ceramic Tint', category: 'Tint', description: 'LLumar Ceramic IRX 20% all around' },
  { title: 'Model 3 Miami Blue Wrap', category: 'Wrap', description: 'Gloss Miami Blue full color change' },
  { title: 'Model Y Track Package', category: 'PPF', description: 'Extended coverage for daily driver' },
  { title: 'Model S Satin Black Wrap', category: 'Wrap', description: 'Full body satin black transformation' },
  { title: 'Cybertruck Ceramic Coating', category: 'Coating', description: 'Custom coating for stainless steel' },
  { title: 'Model 3 Full Front PPF', category: 'PPF', description: 'Essential protection package' },
  { title: 'Model X Full Tint', category: 'Tint', description: 'Ceramic tint with windshield strip' },
];

const categories = ['All', 'PPF', 'Wrap', 'Tint', 'Coating'];

const beforeAfter = [
  { title: 'Stealth PPF Transformation', before: 'Gloss White', after: 'Matte White' },
  { title: 'Color Change Wrap', before: 'Factory Black', after: 'Nardo Gray' },
  { title: 'Ceramic Coating Results', before: 'Swirl Marks', after: 'Mirror Finish' },
];

export default function GalleryPage() {
  return (
    <div className="bg-black pt-20 min-h-screen">
      {/* Hero */}
      <section className="py-24">
        <div className="container-wide">
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-cyan-400 text-sm font-medium tracking-widest uppercase mb-4">Portfolio</p>
            <h1 className="text-5xl md:text-6xl font-extralight mb-6">
              Our{' '}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Work
              </span>
            </h1>
            <p className="text-gray-400 text-lg">
              Browse our recent Tesla protection projects. Every vehicle receives our meticulous attention to detail.
            </p>
          </div>
        </div>
      </section>

      {/* Before/After Section */}
      <section className="py-16 border-t border-white/5">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-extralight mb-4">Before & After</h2>
            <p className="text-gray-500">Drag to compare the transformation</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {beforeAfter.map((item, index) => (
              <div key={index} className="rounded-2xl overflow-hidden border border-white/10">
                <div className="aspect-[4/3] relative bg-gradient-to-br from-gray-800 to-gray-900">
                  {/* Simulated before/after slider */}
                  <div className="absolute inset-0 flex">
                    <div className="w-1/2 bg-gray-800 flex items-center justify-center border-r border-cyan-500">
                      <span className="text-gray-600 text-sm">{item.before}</span>
                    </div>
                    <div className="w-1/2 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 flex items-center justify-center">
                      <span className="text-gray-500 text-sm">{item.after}</span>
                    </div>
                  </div>
                  {/* Slider handle */}
                  <div className="absolute top-0 bottom-0 left-1/2 w-1 bg-cyan-500 transform -translate-x-1/2">
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-cyan-500 flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-light">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 border-t border-white/5 sticky top-20 bg-black/90 backdrop-blur-xl z-10">
        <div className="container-wide">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                  category === 'All'
                    ? 'bg-cyan-500 text-black'
                    : 'bg-white/5 text-gray-400 hover:bg-white/10'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-colors"
              >
                {/* Placeholder image */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800 group-hover:scale-105 transition-transform duration-500">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-gray-700 text-sm">{project.title}</span>
                  </div>
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                      project.category === 'PPF' ? 'bg-cyan-500/20 text-cyan-400' :
                      project.category === 'Wrap' ? 'bg-purple-500/20 text-purple-400' :
                      project.category === 'Tint' ? 'bg-amber-500/20 text-amber-400' :
                      'bg-emerald-500/20 text-emerald-400'
                    }`}>
                      {project.category}
                    </span>
                    <h3 className="text-lg font-light mt-2">{project.title}</h3>
                    <p className="text-sm text-gray-400">{project.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram CTA */}
      <section className="py-24 bg-gradient-to-t from-gray-950 to-black border-t border-white/5">
        <div className="container-wide text-center">
          <div className="max-w-2xl mx-auto">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 mx-auto mb-6 flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </div>
            <h2 className="text-3xl font-extralight mb-4">See More on Instagram</h2>
            <p className="text-gray-400 mb-8">
              Follow @futuredetail.okc for daily updates, behind-the-scenes content, and the latest projects.
            </p>
            <a
              href="https://instagram.com/futuredetail.okc"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-medium hover:scale-105 transition-transform"
            >
              Follow @futuredetail.okc
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 border-t border-white/5">
        <div className="container-wide text-center">
          <h2 className="text-4xl font-extralight mb-6">
            Ready to Join the{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Gallery?
            </span>
          </h2>
          <p className="text-gray-400 mb-10">
            Your Tesla could be our next featured project.
          </p>
          <Link href="/contact" className="px-10 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full font-medium hover:scale-105 transition-transform inline-block">
            Book Your Transformation
          </Link>
        </div>
      </section>
    </div>
  );
}
