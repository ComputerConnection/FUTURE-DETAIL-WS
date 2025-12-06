import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gallery | FUTURE DETAIL',
  description: 'View our Tesla PPF, wrap, and ceramic coating work in Edmond & Oklahoma City.',
};

export default function GalleryPage() {
  return (
    <div className="bg-black min-h-screen py-24">
      <div className="container-wide">
        <h1 className="text-5xl font-extralight mb-6 text-center">Our <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Work</span></h1>
        <p className="text-gray-400 text-center mb-12">Browse our recent Tesla protection projects.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            'Model Y Full Body PPF',
            'Model 3 Stealth Wrap',
            'Cybertruck Color Change',
            'Model S Ceramic Coating',
            'Model X Chrome Delete',
            'Model Y Nardo Gray Wrap',
          ].map((project, i) => (
            <div key={i} className="aspect-[4/3] bg-gray-900 rounded-2xl flex items-center justify-center text-gray-600 text-sm border border-white/5">
              {project}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

