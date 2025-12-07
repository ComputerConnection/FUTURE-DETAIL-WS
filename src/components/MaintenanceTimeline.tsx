export default function MaintenanceTimeline() {
  const timeline = [
    {
      period: 'Week 1',
      title: 'Initial Cure',
      tasks: ['Avoid washing', 'Keep dry if possible', 'No touching the coated surfaces'],
      icon: '⏳',
    },
    {
      period: '2 Weeks',
      title: 'First Wash',
      tasks: ['Gentle hand wash only', 'Use pH-neutral soap', 'Pat dry with microfiber'],
      icon: '🚿',
    },
    {
      period: '6 Months',
      title: 'Maintenance Check',
      tasks: ['Inspect water beading', 'Decontamination wash if needed', 'Consider boost spray'],
      icon: '🔍',
    },
    {
      period: '1 Year',
      title: 'Annual Refresh',
      tasks: ['Professional inspection', 'Clay bar treatment if needed', 'Topper application'],
      icon: '🔄',
    },
    {
      period: '2-5 Years',
      title: 'Reapplication',
      tasks: ['Full coating assessment', 'Paint correction if needed', 'Fresh ceramic coating'],
      icon: '✨',
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-950 to-black">
      <div className="container-wide">
        <div className="text-center mb-16">
          <p className="text-emerald-400 text-sm font-medium uppercase tracking-widest mb-4">Maintenance Schedule</p>
          <h2 className="text-3xl font-extralight mb-4">Keep Your Coating Perfect</h2>
          <p className="text-gray-500">Follow this timeline to maximize your ceramic coating&apos;s lifespan</p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Timeline */}
          <div className="relative">
            {/* Center line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-emerald-500 via-emerald-500/50 to-emerald-500/20" />

            {timeline.map((item, index) => (
              <div
                key={item.period}
                className={`relative flex items-start gap-8 mb-12 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Circle */}
                <div className="absolute left-8 md:left-1/2 w-6 h-6 -translate-x-1/2 rounded-full bg-emerald-500 border-4 border-black z-10" />

                {/* Content */}
                <div className={`ml-20 md:ml-0 md:w-[calc(50%-40px)] ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                  <div className={`p-6 rounded-2xl border border-white/10 hover:border-emerald-500/30 transition-colors ${index % 2 === 0 ? 'md:ml-auto' : ''}`}>
                    <div className={`flex items-center gap-3 mb-3 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                      <span className="text-2xl">{item.icon}</span>
                      <div>
                        <p className="text-emerald-400 text-sm">{item.period}</p>
                        <h3 className="text-lg font-light">{item.title}</h3>
                      </div>
                    </div>
                    <ul className={`space-y-2 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                      {item.tasks.map((task) => (
                        <li key={task} className={`text-sm text-gray-500 flex items-center gap-2 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                          <svg className="w-3 h-3 text-emerald-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {task}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Spacer for opposite side */}
                <div className="hidden md:block md:w-[calc(50%-40px)]" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

