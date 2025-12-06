import Link from 'next/link';

export default function Financing() {
  return (
    <section className="py-24 bg-gradient-to-b from-black to-gray-950">
      <div className="container-wide">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-cyan-400 text-sm font-medium uppercase tracking-widest mb-4">Flexible Payments</p>
              <h2 className="text-3xl md:text-4xl font-extralight mb-6">
                Financing{' '}
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Available
                </span>
              </h2>
              <p className="text-gray-400 leading-relaxed mb-6">
                Protect your Tesla today and pay over time. We partner with Affirm to offer 
                flexible payment plans that fit your budget.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  'Monthly payments as low as $99/mo',
                  'Rates as low as 0% APR for qualified buyers',
                  'No hidden fees',
                  'Quick and easy application',
                  'Know your rate in seconds',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-gray-300">
                    <svg className="w-5 h-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full font-medium hover:scale-105 transition-transform"
              >
                Get Started
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            {/* Calculator Preview */}
            <div className="p-8 rounded-2xl border border-white/10 bg-white/[0.02]">
              <h3 className="text-lg font-light mb-6 text-center">Payment Estimator</h3>
              
              <div className="space-y-6">
                <div className="text-center p-6 rounded-xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20">
                  <p className="text-sm text-gray-400 mb-2">Full Body PPF</p>
                  <p className="text-4xl font-extralight text-white mb-1">$5,500</p>
                  <p className="text-sm text-gray-500">or</p>
                  <p className="text-2xl font-light text-cyan-400">$229/mo</p>
                  <p className="text-xs text-gray-500">for 24 months*</p>
                </div>

                <div className="grid grid-cols-3 gap-4 text-center">
                  {[
                    { months: '6 mo', payment: '$917' },
                    { months: '12 mo', payment: '$458' },
                    { months: '24 mo', payment: '$229' },
                  ].map((option) => (
                    <div key={option.months} className="p-3 rounded-lg border border-white/10">
                      <p className="text-xs text-gray-500">{option.months}</p>
                      <p className="text-lg font-light text-white">{option.payment}</p>
                    </div>
                  ))}
                </div>

                <p className="text-[10px] text-gray-600 text-center">
                  *Example based on 0% APR. Actual rates and terms vary based on creditworthiness.
                  Subject to approval. Payment amounts shown are estimates only.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

