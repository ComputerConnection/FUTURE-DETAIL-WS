export default function CoatingComparison() {
  const comparisons = [
    {
      aspect: 'Durability',
      ceramic: '2-5 years',
      wax: '2-4 weeks',
      winner: 'ceramic',
    },
    {
      aspect: 'Application Time',
      ceramic: '4-8 hours',
      wax: '30 minutes',
      winner: 'wax',
    },
    {
      aspect: 'Protection Level',
      ceramic: '9H hardness',
      wax: 'Minimal',
      winner: 'ceramic',
    },
    {
      aspect: 'Water Beading',
      ceramic: '120°+ contact angle',
      wax: '~90° contact angle',
      winner: 'ceramic',
    },
    {
      aspect: 'UV Protection',
      ceramic: 'Full UV blocking',
      wax: 'Partial',
      winner: 'ceramic',
    },
    {
      aspect: 'Chemical Resistance',
      ceramic: 'pH 2-12 range',
      wax: 'Limited',
      winner: 'ceramic',
    },
    {
      aspect: 'Maintenance',
      ceramic: 'Easy rinsing',
      wax: 'Frequent reapplication',
      winner: 'ceramic',
    },
    {
      aspect: 'Cost (upfront)',
      ceramic: '$800-$1,500',
      wax: '$20-$50',
      winner: 'wax',
    },
    {
      aspect: 'Cost (5-year)',
      ceramic: '$800-$1,500',
      wax: '$500-$1,000+',
      winner: 'ceramic',
    },
  ];

  const ceramicWins = comparisons.filter((c) => c.winner === 'ceramic').length;

  return (
    <section className="py-24 bg-black">
      <div className="container-wide">
        <div className="text-center mb-16">
          <p className="text-emerald-400 text-sm font-medium uppercase tracking-widest mb-4">Comparison</p>
          <h2 className="text-3xl font-extralight mb-4">Ceramic Coating vs. Traditional Wax</h2>
          <p className="text-gray-500">See why ceramic coating is the smarter long-term investment</p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="grid grid-cols-3 gap-4 mb-2">
            <div />
            <div className="text-center p-4 rounded-t-xl bg-gradient-to-b from-emerald-500/10 to-transparent border-t border-x border-emerald-500/30">
              <span className="text-emerald-400 font-medium">Ceramic Coating</span>
            </div>
            <div className="text-center p-4">
              <span className="text-gray-500">Traditional Wax</span>
            </div>
          </div>

          {/* Rows */}
          <div className="border border-white/10 rounded-2xl overflow-hidden">
            {comparisons.map((row, index) => (
              <div
                key={row.aspect}
                className={`grid grid-cols-3 gap-4 ${
                  index % 2 === 0 ? 'bg-white/[0.02]' : ''
                } ${index !== comparisons.length - 1 ? 'border-b border-white/5' : ''}`}
              >
                <div className="p-4 flex items-center">
                  <span className="text-sm text-gray-400">{row.aspect}</span>
                </div>
                <div className={`p-4 text-center border-x border-white/5 ${row.winner === 'ceramic' ? 'bg-emerald-500/5' : ''}`}>
                  <span className={`text-sm ${row.winner === 'ceramic' ? 'text-emerald-400 font-medium' : 'text-white'}`}>
                    {row.winner === 'ceramic' && <span className="mr-1">✓</span>}
                    {row.ceramic}
                  </span>
                </div>
                <div className={`p-4 text-center ${row.winner === 'wax' ? 'bg-amber-500/5' : ''}`}>
                  <span className={`text-sm ${row.winner === 'wax' ? 'text-amber-400 font-medium' : 'text-gray-500'}`}>
                    {row.winner === 'wax' && <span className="mr-1">✓</span>}
                    {row.wax}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Summary */}
          <div className="mt-8 text-center">
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-500/10 border border-emerald-500/30">
              <span className="text-emerald-400 font-medium">Ceramic Coating wins {ceramicWins} of {comparisons.length} categories</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

