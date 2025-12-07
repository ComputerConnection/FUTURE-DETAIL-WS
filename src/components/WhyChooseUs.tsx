export default function WhyChooseUs() {
  const comparisons = [
    { feature: 'Tesla Specialization', us: 'Tesla-only focus', them: 'All vehicle types' },
    { feature: 'Installation Environment', us: 'Climate-controlled studio', them: 'Standard garage' },
    { feature: 'Installer Certification', us: 'XPEL, 3M, LLumar certified', them: 'Self-trained' },
    { feature: 'Film Quality', us: 'Premium brands only', them: 'Budget films available' },
    { feature: 'Warranty', us: 'Full manufacturer warranty', them: 'Limited shop warranty' },
    { feature: 'Pattern Cutting', us: 'Pre-cut for each Tesla', them: 'Hand-cut on vehicle' },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-950 to-black">
      <div className="container-wide">
        <div className="text-center mb-16">
          <p className="text-cyan-400 text-sm font-medium tracking-widest uppercase mb-4">The Difference</p>
          <h2 className="text-3xl md:text-4xl font-extralight mb-4">Why Choose FUTURE DETAIL?</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Not all protection shops are created equal. Here&apos;s what sets us apart.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="grid grid-cols-3 gap-4 mb-4 text-center">
            <div />
            <div className="p-4 rounded-t-2xl bg-gradient-to-b from-cyan-500/10 to-transparent border-t border-x border-cyan-500/30">
              <span className="text-cyan-400 font-medium">FUTURE DETAIL</span>
            </div>
            <div className="p-4">
              <span className="text-gray-500">Others</span>
            </div>
          </div>

          {/* Rows */}
          {comparisons.map((row, index) => (
            <div 
              key={row.feature}
              className={`grid grid-cols-3 gap-4 ${index % 2 === 0 ? 'bg-white/[0.02]' : ''}`}
            >
              <div className="p-4 flex items-center">
                <span className="text-sm text-gray-400">{row.feature}</span>
              </div>
              <div className="p-4 text-center border-x border-cyan-500/10">
                <span className="text-sm text-white flex items-center justify-center gap-2">
                  <svg className="w-4 h-4 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {row.us}
                </span>
              </div>
              <div className="p-4 text-center">
                <span className="text-sm text-gray-500">{row.them}</span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-500 text-sm mb-4">
            Experience the difference of a dedicated Tesla protection studio.
          </p>
        </div>
      </div>
    </section>
  );
}

