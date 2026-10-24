import Image from 'next/image';
import { latestResult } from '@/lib/achievements';
import { rankings } from '@/lib/record';

export default function HeroBanner() {
  return (
    <section
      id="hero-banner"
      className="hero relative min-h-[100svh] bg-[#003d47] text-white overflow-hidden flex flex-col md:flex-row"
    >
      {/* Photo — fills the space above the content on mobile, slanted right panel on desktop */}
      <div className="hero-photo relative flex-1 min-h-[34svh] md:absolute md:inset-y-0 md:right-0 md:w-[48%]">
        <Image
          src="/assets/banner-2.webp"
          className="object-cover object-[50%_60%] md:object-[50%_85%]"
          alt="Sparsh on court preparing a forehand"
          fill
          sizes="(min-width: 768px) 48vw, 100vw"
          priority
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_top,#003d47,rgba(0,61,71,0)_35%),linear-gradient(to_bottom,rgba(0,0,0,0.45),rgba(0,0,0,0)_25%)] md:hidden" />
        <div className="hidden md:block absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/40 to-transparent" />
      </div>

      <div className="z-10 flex flex-col md:flex-1 w-full min-w-0 px-5 pb-8 md:relative md:px-16 md:pt-10 md:pb-12">
        {/* Top label — overlays the photo on mobile */}
        <p className="hero-rise absolute top-6 left-5 md:static font-body text-[11px] tracking-[0.2em] md:tracking-[0.3em] uppercase text-white/60 pr-14 md:pr-0 [--d:0ms]">
          ASA Tennis Academy · Navi Mumbai
        </p>

        <div className="mt-auto flex flex-col gap-6 md:gap-8">
          {/* Latest result */}
          <a
            href="#achievements"
            className="hero-rise group flex items-center gap-3 max-w-full font-body text-xs md:text-sm [--d:150ms]"
          >
            <span className="relative flex w-2.5 h-2.5 shrink-0">
              <span className="absolute inset-0 rounded-full bg-[#dfff4f] animate-ping opacity-60" />
              <span className="relative w-2.5 h-2.5 rounded-full bg-[#dfff4f]" />
            </span>
            <span className="text-white/60 shrink-0">Latest</span>
            <span className="text-white truncate group-hover:text-[#dfff4f] transition-colors">
              {latestResult.result} — {latestResult.event}
            </span>
          </a>

          {/* Name */}
          <h1 className="font-heading font-extrabold uppercase leading-[0.82] tracking-[-0.04em] text-[22vw] md:text-[14vw] xl:text-[13rem]">
            <span className="block overflow-hidden pb-[0.04em]">
              <span className="hero-line block [--d:250ms]">Sparsh</span>
            </span>
            <span className="block overflow-hidden pb-[0.04em]">
              <span className="hero-line block text-[#00b1ca] [--d:380ms]">Patil</span>
            </span>
          </h1>

          <p className="hero-rise font-body text-base md:text-lg text-white/75 max-w-md md:max-w-[min(28rem,40vw)] [--d:550ms]">
            13 years old. Explosive, relentless and never willing to give up a point — chasing
            his ambition of being the best.
          </p>

          <div className="hero-rise flex flex-wrap gap-3 [--d:650ms]">
            <a
              href="#achievements"
              className="group inline-flex items-center gap-2 bg-[#dfff4f] text-[#003d47] font-body font-semibold text-sm md:text-base px-4 md:px-5 py-3 hover:bg-white transition-colors"
            >
              View achievements
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#record"
              className="inline-flex items-center border border-white/30 font-body text-sm md:text-base px-4 md:px-5 py-3 hover:border-white transition-colors"
            >
              Track record
            </a>
          </div>

          {/* Rankings strip */}
          <div className="hero-rise flex items-end gap-8 md:gap-12 border-t border-white/15 pt-5 md:w-[48%] [--d:750ms]">
            {rankings.map((r) => (
              <div key={r.label}>
                <p className="font-heading font-bold text-4xl md:text-5xl leading-none text-[#dfff4f]">
                  #{r.value}
                </p>
                <p className="font-body text-[11px] uppercase tracking-[0.15em] text-white/70 mt-2 whitespace-nowrap">
                  {r.label}
                </p>
                <p className="font-body text-[11px] text-white/40">{r.sub}</p>
              </div>
            ))}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.instagram.com/sparsh_onserve/"
              className="hidden lg:block ml-auto font-body text-xs text-white/60 hover:text-white transition-colors"
            >
              @sparsh_onserve ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
