import Image from 'next/image';
import Link from 'next/link';
import { data } from '@/lib/achievements';

function ResultBadge({ result, large }: { result: string; large: boolean }) {
  const isWinner = result.includes('🥇') || result.toLowerCase().includes('winner');
  const isRunnerUp =
    result.includes('🥈') ||
    result.toLowerCase().includes('runner') ||
    result.toLowerCase().includes('2nd');

  const sizeClass = large ? 'text-xs md:text-sm px-3 py-1.5' : 'text-[10px] px-2 py-1';

  if (isWinner) {
    return (
      <span
        className={`inline-flex items-center gap-1 bg-[#00b1ca] text-white font-heading font-semibold leading-none ${sizeClass}`}
      >
        {result}
      </span>
    );
  }
  if (isRunnerUp) {
    return (
      <span
        className={`inline-flex items-center gap-1 border border-[#00b1ca] text-[#00b1ca] font-heading font-semibold leading-none ${sizeClass}`}
      >
        {result}
      </span>
    );
  }
  return (
    <span
      className={`inline-flex items-center gap-1 border border-gray-400 text-gray-600 font-heading font-semibold leading-none ${sizeClass}`}
    >
      {result}
    </span>
  );
}

export default function AchievementsGrid() {
  const preview = data.slice(0, 5);

  return (
    <section
      id="achievements"
      className="flex flex-col md:h-screen px-4 py-12 md:p-12 min-h-[600px] w-full justify-center items-center gap-6 polka-pattern"
    >
      {/* Editorial section header */}
      <div className="flex flex-col items-center w-[90%] gap-1.5">
        <p className="font-body text-[10px] md:text-xs tracking-[0.35em] uppercase font-semibold text-[#00b1ca]">
          Recent Highlights
        </p>
        <h2 className="font-heading font-bold text-4xl md:text-5xl tracking-tight text-gray-900 leading-none">
          ACHIEVEMENTS
        </h2>
        <div className="w-full max-w-xs h-[2px] bg-[#00b1ca] mt-1" />
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-1 h-[80%] w-full md:w-[90%] [&>article]:h-[300px] [&>article]:md:h-full">
        {preview.map((achievement, index) => {
          const { isLarge } = achievement;
          const cardNum = String(index + 1).padStart(2, '0');

          return (
            <article
              key={index}
              className={`achievement-card relative cursor-pointer group shadow-lg ${isLarge ? 'row-span-2' : ''}`}
            >
              {/* Full-bleed photo */}
              <div className="absolute inset-0 w-full h-full">
                <Image
                  src={achievement.image}
                  alt={achievement.alt}
                  className="object-cover w-full h-full"
                  fill
                />
              </div>

              {/* Editorial index numeral — watermark in the photo zone */}
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

              {/* Info panel — diagonal top edge via clip-path, slides up on hover */}
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
                {/* Teal accent rule */}
                <div
                  className={`bg-[#00b1ca] flex-shrink-0 ${isLarge ? 'w-10 h-[3px]' : 'w-6 h-[2px]'}`}
                />

                {/* Result badges */}
                <div className="flex flex-wrap gap-1">
                  {achievement.results.map((result, i) => (
                    <ResultBadge key={i} result={result} large={!!isLarge} />
                  ))}
                </div>

                {/* Description */}
                <p
                  className={`text-gray-500 leading-snug ${isLarge ? 'text-xs md:text-sm' : 'text-[11px]'}`}
                >
                  {achievement.description.split('\n').map((line, i, arr) => (
                    <span key={i}>
                      {line}
                      {i < arr.length - 1 && (
                        <span className="text-[#00b1ca] mx-1 font-semibold">·</span>
                      )}
                    </span>
                  ))}
                </p>

                {/* Date — teal, tracked, de-emphasised */}
                <div
                  className={`text-[#00b1ca] font-semibold tracking-widest uppercase flex-shrink-0 ${isLarge ? 'text-[10px] md:text-[11px]' : 'text-[9px]'}`}
                >
                  {achievement.date}
                </div>
              </div>
              {/* Bottom accent bar — no layout impact */}
              <div className="absolute bottom-0 left-0 right-0 h-[4px] bg-[#003d47] z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </article>
          );
        })}
      </div>

      {/* CTA — bold teal, arrow */}
      <Link
        href="/achievements"
        className="group flex items-center gap-3 bg-[#00b1ca] text-white font-body font-semibold px-8 py-4 hover:bg-[var(--on-primary)] transition-colors duration-200"
      >
        <span>View All Achievements</span>
        <span className="text-lg leading-none transition-transform duration-200 group-hover:translate-x-1">
          ↗
        </span>
      </Link>
    </section>
  );
}
