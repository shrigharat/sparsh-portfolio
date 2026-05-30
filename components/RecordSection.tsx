import dynamic from 'next/dynamic';
import Counter from './Counter';

const RankingChart = dynamic(() => import('./RankingChart'), { ssr: true });

const iconClass = "absolute bottom-2 right-2 w-16 h-16 opacity-[0.08] pointer-events-none transition-all duration-700 ease-out group-hover:opacity-[0.18] group-hover:scale-125 group-hover:-translate-x-1 group-hover:-translate-y-1";

const TournamentIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={iconClass}>
    <circle cx="32" cy="32" r="28" fill="#00b1ca"/>
    <path d="M10 20 Q32 32 10 44" stroke="white" strokeWidth="4" fill="none"/>
    <path d="M54 20 Q32 32 54 44" stroke="white" strokeWidth="4" fill="none"/>
  </svg>
);

const TrophyIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={iconClass}>
    <path d="M20 8 H44 V34 C44 44 20 44 20 34 Z" fill="#00b1ca"/>
    <path d="M20 14 H10 C10 14 8 28 20 30" stroke="#00b1ca" strokeWidth="3" fill="none"/>
    <path d="M44 14 H54 C54 14 56 28 44 30" stroke="#00b1ca" strokeWidth="3" fill="none"/>
    <rect x="26" y="44" width="12" height="8" fill="#00b1ca"/>
    <rect x="18" y="52" width="28" height="4" rx="1" fill="#00b1ca"/>
  </svg>
);

const MedalIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={iconClass}>
    <path d="M24 8 L32 6 L40 8 L32 28 Z" fill="#00b1ca"/>
    <circle cx="32" cy="42" r="16" fill="#00b1ca"/>
    <circle cx="32" cy="42" r="11" stroke="white" strokeWidth="2" fill="none"/>
    <path d="M32 35 L33.8 40.4 H39.5 L34.9 43.7 L36.6 49.1 L32 45.8 L27.4 49.1 L29.1 43.7 L24.5 40.4 H30.2 Z" fill="white"/>
  </svg>
);

const StarIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={iconClass}>
    <path d="M32 6 L38 22 H56 L42 33 L47 50 L32 40 L17 50 L22 33 L8 22 H26 Z" fill="#00b1ca"/>
  </svg>
);

const RacketIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={iconClass}>
    <ellipse cx="28" cy="24" rx="18" ry="20" stroke="#00b1ca" strokeWidth="4" fill="none"/>
    <line x1="18" y1="10" x2="38" y2="38" stroke="#00b1ca" strokeWidth="2"/>
    <line x1="28" y1="5" x2="28" y2="43" stroke="#00b1ca" strokeWidth="2"/>
    <line x1="10" y1="24" x2="46" y2="24" stroke="#00b1ca" strokeWidth="2"/>
    <line x1="38" y1="10" x2="18" y2="38" stroke="#00b1ca" strokeWidth="2"/>
    <path d="M38 40 L52 56" stroke="#00b1ca" strokeWidth="4" strokeLinecap="round"/>
  </svg>
);

const CourtIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={iconClass}>
    <rect x="6" y="12" width="52" height="40" rx="1" stroke="#00b1ca" strokeWidth="3" fill="none"/>
    <line x1="32" y1="12" x2="32" y2="52" stroke="#00b1ca" strokeWidth="2"/>
    <line x1="6" y1="32" x2="58" y2="32" stroke="#00b1ca" strokeWidth="2"/>
    <line x1="18" y1="12" x2="18" y2="52" stroke="#00b1ca" strokeWidth="1.5"/>
    <line x1="46" y1="12" x2="46" y2="52" stroke="#00b1ca" strokeWidth="1.5"/>
    <circle cx="32" cy="32" r="6" stroke="#00b1ca" strokeWidth="2" fill="none"/>
  </svg>
);

const stats = [
  { count: 40, label: 'Tournaments', sub: 'participated', Icon: TournamentIcon },
  { count: 16, label: 'Winner', sub: 'trophies', Icon: TrophyIcon },
  { count: 11, label: 'Runner-up', sub: 'trophies', Icon: MedalIcon },
  { count: 5, label: 'Bronze', sub: 'medals', Icon: MedalIcon },
  { count: 11, label: 'Semi-', sub: 'finalist', Icon: StarIcon },
  { count: null, display: '4/7', label: 'Doubles', sub: 'wins', Icon: CourtIcon },
];

export default function RecordSection() {
  return (
    <section
      id="record"
      className="relative flex flex-col items-center py-16 gap-10 min-h-screen bg-white overflow-hidden"
    >
      {/* Watermark */}
      <span
        className="absolute top-0 right-2 font-heading font-bold text-[#00b1ca] leading-none select-none pointer-events-none"
        style={{ fontSize: '200px', opacity: 0.035 }}
      >
        03
      </span>

      {/* Header */}
      <div className="w-[90%] z-10">
        <p className="font-body text-[11px] tracking-[0.3em] uppercase text-[#00b1ca] font-semibold mb-2">
          Performance Record
        </p>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#003d47]">
          3 Years on the Court
        </h2>
        <div className="w-12 h-[3px] bg-[#00b1ca] mt-3" />
      </div>

      {/* Main layout */}
      <div className="flex flex-col md:flex-row items-stretch w-[90%] gap-6 z-10">

        {/* Stats column */}
        <div className="flex-1 flex flex-col gap-3">

          {/* Featured ranking cards */}
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-[#003d47] p-6 flex flex-col justify-between relative overflow-hidden" style={{ minHeight: '148px' }}>
              <div
                className="absolute -top-8 -right-8 w-28 h-28 rounded-full"
                style={{ background: 'radial-gradient(circle, rgba(0,177,202,0.18) 0%, transparent 70%)' }}
              />
              {/* Racket watermark */}
              <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute -bottom-4 -right-4 w-28 h-28 opacity-[0.06] pointer-events-none rotate-[25deg]">
                <ellipse cx="28" cy="24" rx="18" ry="20" stroke="#00b1ca" strokeWidth="4" fill="none"/>
                <line x1="18" y1="10" x2="38" y2="38" stroke="#00b1ca" strokeWidth="2"/>
                <line x1="28" y1="5" x2="28" y2="43" stroke="#00b1ca" strokeWidth="2"/>
                <line x1="10" y1="24" x2="46" y2="24" stroke="#00b1ca" strokeWidth="2"/>
                <line x1="38" y1="10" x2="18" y2="38" stroke="#00b1ca" strokeWidth="2"/>
                <path d="M38 40 L52 56" stroke="#00b1ca" strokeWidth="4" strokeLinecap="round"/>
              </svg>
              <span className="font-body text-[9px] tracking-[0.28em] uppercase text-[#00b1ca]/60 font-semibold">
                AITA Under 14
              </span>
              <div>
                <div className="font-heading font-bold text-[#00b1ca] leading-none" style={{ fontSize: '64px' }}>
                  #<Counter to={7} duration={600} />
                </div>
                <div className="font-body text-[11px] text-white/30 mt-0.5">India · May 2026</div>
              </div>
            </div>

            <div className="bg-[#003d47] p-6 flex flex-col justify-between relative overflow-hidden" style={{ minHeight: '148px' }}>
              <div
                className="absolute -top-8 -right-8 w-28 h-28 rounded-full"
                style={{ background: 'radial-gradient(circle, rgba(0,177,202,0.18) 0%, transparent 70%)' }}
              />
              {/* Globe/ATF watermark */}
              <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute -bottom-4 -right-4 w-28 h-28 opacity-[0.06] pointer-events-none">
                <circle cx="32" cy="32" r="24" stroke="#00b1ca" strokeWidth="3" fill="none"/>
                <ellipse cx="32" cy="32" rx="12" ry="24" stroke="#00b1ca" strokeWidth="2" fill="none"/>
                <line x1="8" y1="32" x2="56" y2="32" stroke="#00b1ca" strokeWidth="2"/>
                <line x1="14" y1="18" x2="50" y2="18" stroke="#00b1ca" strokeWidth="1.5"/>
                <line x1="14" y1="46" x2="50" y2="46" stroke="#00b1ca" strokeWidth="1.5"/>
              </svg>
              <span className="font-body text-[9px] tracking-[0.28em] uppercase text-[#00b1ca]/60 font-semibold">
                ATF Asia
              </span>
              <div>
                <div className="font-heading font-bold text-[#00b1ca] leading-none" style={{ fontSize: '64px' }} title="As of 31st May 2026">
                  #<Counter to={33} duration={600} />
                </div>
                <div className="font-body text-[11px] text-white/30 mt-0.5">Asia · 31 May 2026</div>
              </div>
            </div>
          </div>

          {/* Secondary stat cards */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {stats.map((stat) => (
              <div
                key={stat.label + stat.sub}
                className="bg-white border border-gray-100 p-4 flex flex-col gap-2 relative overflow-hidden group hover:border-[#00b1ca]/40 transition-colors"
                style={{ borderLeft: '3px solid #00b1ca', minHeight: '100px' }}
              >
                <stat.Icon />
                <div className="font-heading font-bold text-[#003d47] leading-none" style={{ fontSize: '40px' }}>
                  {stat.count !== null ? <Counter to={stat.count!} duration={600} /> : stat.display}
                </div>
                <div className="font-body text-[11px] uppercase tracking-[0.15em] text-gray-400 leading-tight">
                  {stat.label}
                  <br />
                  <span className="normal-case tracking-normal text-gray-500">{stat.sub}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Chart column */}
        <div className="flex-1" style={{ minHeight: '440px' }}>
          <RankingChart />
        </div>

      </div>
    </section>
  );
}
