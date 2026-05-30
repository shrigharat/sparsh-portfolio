import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Footer from '@/components/Footer';
import { data } from '@/lib/achievements';

const STATS = [
  { value: '40', label: 'Tournaments' },
  { value: '16', label: 'Winner Trophies' },
  { value: '#7', label: 'AITA U14' },
  { value: '#33', label: 'ATF Ranking' },
];

function ResultBadge({ result }: { result: string }) {
  const isWinner = result.includes('🥇') || result.toLowerCase().includes('winner');
  const isRunnerUp =
    result.includes('🥈') ||
    result.toLowerCase().includes('runner') ||
    result.toLowerCase().includes('2nd');

  if (isWinner) {
    return (
      <span className="inline-flex items-center gap-1 bg-[#00b1ca] text-white font-heading font-semibold leading-none text-[10px] px-2 py-1">
        {result}
      </span>
    );
  }
  if (isRunnerUp) {
    return (
      <span className="inline-flex items-center gap-1 border border-[#00b1ca] text-[#00b1ca] font-heading font-semibold leading-none text-[10px] px-2 py-1">
        {result}
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-1 border border-gray-400 text-gray-600 font-heading font-semibold leading-none text-[10px] px-2 py-1">
      {result}
    </span>
  );
}

export const metadata: Metadata = {
  title: 'Sparsh Patil | Achievements — AITA #7 & ATF #33',
  description:
    'Tournament achievements of Sparsh Santosh Patil — AITA Under 14 #7 and ATF #33 ranked junior tennis player from Navi Mumbai. Singles and doubles titles across AITA, MSLTA, and Asian tournaments.',
  keywords: 'Sparsh Patil,Tennis,Young talent,Panvel,AITA,ATF,Under 14,ranking,junior tennis India',
  authors: [{ name: 'Sparsh Patil' }],
  openGraph: {
    title: 'Sparsh Patil | Achievements — AITA #7 & ATF #33',
    url: 'https://sparshpatil.com/achievements/',
    description:
      'Tournament achievements of Sparsh Santosh Patil — AITA Under 14 #7 and ATF #33 ranked junior tennis player from Navi Mumbai. Singles and doubles titles across AITA, MSLTA, and Asian tournaments.',
    images: [{ url: 'https://sparshpatil.com/assets/sparsh-profile-meta.jpeg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sparsh Patil | Achievements — AITA #7 & ATF #33',
    description:
      'Tournament achievements of Sparsh Santosh Patil — AITA Under 14 #7 and ATF #33 ranked junior tennis player from Navi Mumbai. Singles and doubles titles across AITA, MSLTA, and Asian tournaments.',
    images: ['https://sparshpatil.com/assets/sparsh-profile-meta.jpeg'],
  },
};

export default function AchievementsPage() {
  return (
    <>
      {/* Top nav bar */}
      <header style={{ backgroundColor: '#003d47' }} className="w-full px-6 md:px-12 py-4 flex items-center justify-between">
        <Link href="/" className="font-heading font-bold text-white tracking-widest text-sm md:text-base">
          SPARSH PATIL
        </Link>
        <Link
          href="/"
          className="font-body text-sm text-white/60 hover:text-white transition-colors flex items-center gap-1.5"
        >
          <svg viewBox="0 0 24 24" width="14" height="14" className="fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M5 12l7-7M5 12l7 7" />
          </svg>
          Home
        </Link>
      </header>

      {/* Hero section */}
      <section style={{ backgroundColor: '#003d47' }} className="w-full px-6 md:px-12 pt-10 pb-14">
        <div className="w-full md:w-[90%] mx-auto flex flex-col gap-8">
          <div>
            <p className="font-body text-[10px] md:text-xs tracking-[0.35em] uppercase font-semibold text-[#00b1ca] mb-3">
              Full Record
            </p>
            <h1 className="font-heading font-bold text-5xl md:text-7xl tracking-tight text-white leading-none">
              ACHIEVEMENTS
            </h1>
            <div className="w-16 h-[3px] bg-[#00b1ca] mt-4" />
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
            {STATS.map(({ value, label }) => (
              <div key={label} className="border border-white/10 px-5 py-4" title="As of 31st May 2026">
                <p className="font-heading font-bold text-3xl md:text-4xl text-white leading-none">{value}</p>
                <p className="font-body text-[11px] tracking-widest uppercase text-white/40 mt-1.5">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements grid */}
      <main>
        <section className="flex flex-col items-center px-4 py-12 md:p-12 w-full polka-pattern">
          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-1 w-full md:w-[90%]"
            style={{ gridAutoRows: '300px' }}
          >
            {data.map((achievement, index) => {
              const { isLarge } = achievement;
              const cardNum = String(index + 1).padStart(2, '0');
              return (
                <article
                  key={index}
                  className={`achievement-card relative group shadow-lg ${isLarge ? 'row-span-2' : ''}`}
                >
                  {/* Photo */}
                  <div className="absolute inset-0 w-full h-full">
                    {achievement.imageMobile ? (
                      <>
                        <Image
                          src={achievement.image}
                          alt={achievement.alt}
                          className="object-cover w-full h-full hidden md:block"
                          fill
                        />
                        <Image
                          src={achievement.imageMobile}
                          alt={achievement.alt}
                          className="object-cover w-full h-full block md:hidden"
                          fill
                        />
                      </>
                    ) : (
                      <Image
                        src={achievement.image}
                        alt={achievement.alt}
                        className="object-cover w-full h-full"
                        fill
                      />
                    )}
                  </div>

                  {/* Editorial numeral watermark */}
                  <div
                    className="absolute top-2 right-3 z-10 select-none pointer-events-none font-heading font-bold text-white leading-none"
                    style={{
                      fontSize: isLarge ? '80px' : '64px',
                      opacity: 0.42,
                      textShadow: '0 2px 12px rgba(0,0,0,0.5)',
                    }}
                  >
                    {cardNum}
                  </div>

                  {/* Info panel */}
                  <div
                    className={`absolute bottom-0 left-0 right-0 bg-white z-20 flex flex-col font-body ${
                      isLarge ? 'gap-2 px-4 pb-5 pt-9' : 'gap-1.5 px-3 pb-3 pt-7'
                    }`}
                    style={{
                      clipPath: isLarge
                        ? 'polygon(0 32px, 100% 0%, 100% 100%, 0% 100%)'
                        : 'polygon(0 24px, 100% 0%, 100% 100%, 0% 100%)',
                    }}
                  >
                    <div className={`bg-[#00b1ca] flex-shrink-0 ${isLarge ? 'w-10 h-[3px]' : 'w-6 h-[2px]'}`} />

                    <div className="flex flex-wrap gap-1">
                      {achievement.results.map((result, i) => (
                        <ResultBadge key={i} result={result} />
                      ))}
                    </div>

                    <p className={`text-gray-500 leading-snug ${isLarge ? 'text-xs md:text-sm' : 'text-[11px]'}`}>
                      {achievement.description.split('\n').map((line, i, arr) => (
                        <span key={i}>
                          {line}
                          {i < arr.length - 1 && (
                            <span className="text-[#00b1ca] mx-1 font-semibold">·</span>
                          )}
                        </span>
                      ))}
                    </p>

                    <div className={`text-[#00b1ca] font-semibold tracking-widest uppercase flex-shrink-0 ${isLarge ? 'text-[10px] md:text-[11px]' : 'text-[9px]'}`}>
                      {achievement.date}
                    </div>
                  </div>

                  {/* Hover accent bar */}
                  <div className="absolute bottom-0 left-0 right-0 h-[4px] bg-[#003d47] z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </article>
              );
            })}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
