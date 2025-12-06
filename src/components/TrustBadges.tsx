export default function TrustBadges() {
  const badges = [
    { icon: '10yr', title: 'PPF Warranty', subtitle: 'Manufacturer backed' },
    { icon: '✓', title: 'Certified', subtitle: 'Professional installer' },
    { icon: '★', title: 'Fully Insured', subtitle: 'Your vehicle protected' },
    { icon: '◆', title: 'Climate Controlled', subtitle: 'Professional facility' },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-6 md:gap-12 mt-12">
      {badges.map((badge, index) => (
        <div
          key={badge.title}
          className="flex items-center gap-3 px-4 py-2"
        >
          <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-cyan-400 text-sm font-medium">
            {badge.icon}
          </div>
          <div>
            <p className="text-sm font-medium text-white">{badge.title}</p>
            <p className="text-xs text-gray-500">{badge.subtitle}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

