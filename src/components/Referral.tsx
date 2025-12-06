import Link from 'next/link';

export default function Referral() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-transparent to-cyan-500/10" />
      <div className="container-wide relative">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6">
            <span className="text-2xl">🎁</span>
            <span className="text-sm font-medium text-purple-400">Referral Program</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-extralight mb-6">
            Give $100,{' '}
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Get $100
            </span>
          </h2>

          <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
            Love your results? Refer a friend to FUTURE DETAIL. When they book a service of $500 or more, 
            you both get $100 off your next service.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {[
              { step: '1', title: 'Refer a Friend', description: 'Share your experience with a fellow Tesla owner' },
              { step: '2', title: 'They Book', description: 'Your friend schedules a service ($500+ value)' },
              { step: '3', title: 'You Both Save', description: 'You each receive $100 off your next service' },
            ].map((item) => (
              <div key={item.step} className="p-6 rounded-2xl border border-white/10 bg-white/[0.02]">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center text-white font-medium mb-4 mx-auto">
                  {item.step}
                </div>
                <h3 className="font-light mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500">{item.description}</p>
              </div>
            ))}
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-500 to-cyan-500 text-white rounded-full font-medium hover:scale-105 transition-transform"
          >
            Refer a Friend
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>

          <p className="text-xs text-gray-600 mt-6">
            Referral credit valid for 12 months. Cannot be combined with other offers. 
            New customers only for referred friend.
          </p>
        </div>
      </div>
    </section>
  );
}

