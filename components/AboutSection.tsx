import Image from 'next/image';

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative flex flex-col md:flex-row min-h-screen bg-white overflow-hidden"
    >
      {/* Left — image column */}
      <div className="relative md:w-[45%] bg-[#00b1ca]/10 flex items-end justify-center pt-16 md:pt-0">
        {/* Polka pattern overlay */}
        <div className="absolute inset-0 polka-pattern-dark opacity-10" />

        {/* Watermark numeral */}
        <span
          className="absolute top-4 left-4 font-heading font-bold text-[#00b1ca] leading-none select-none pointer-events-none"
          style={{ fontSize: '140px', opacity: 0.07 }}
        >
          02
        </span>

        {/* Profile image */}
        <div className="relative z-10 w-full h-[420px] md:h-full">
          <Image
            src="/assets/sparsh-profile-alternate.png"
            className="object-contain object-bottom"
            alt="Sparsh Patil"
            fill
          />
        </div>

        {/* Floating rankings card */}
        <div className="absolute bottom-6 left-6 bg-white shadow-xl z-20 p-4 md:p-5">
          <div className="w-8 h-[3px] bg-[#00b1ca] mb-3" />
          <p className="font-body text-[10px] tracking-[0.3em] uppercase text-[#00b1ca] font-semibold mb-4">
            Current Rankings
          </p>
          <div className="flex gap-6">
            <div>
              <p className="font-heading font-bold text-4xl text-[#003d47] leading-none">#7</p>
              <p className="font-body text-[11px] text-gray-500 leading-tight mt-1">
                AITA · Under 14
                <br />
                India
              </p>
            </div>
            <div className="w-px bg-gray-200" />
            <div>
              <p className="font-heading font-bold text-4xl text-[#003d47] leading-none">#34</p>
              <p className="font-body text-[11px] text-gray-500 leading-tight mt-1">
                ATF · Asia
                <br />
                May 2026
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Right — content column */}
      <div className="flex-1 relative flex flex-col justify-center px-6 py-16 md:px-14 md:py-20 gap-7">
        {/* Decorative — faint racket top-right, tennis ball bottom-right */}
        <div className="absolute -top-6 -right-6 w-52 h-52 opacity-[0.06] pointer-events-none select-none rotate-[25deg]">
          <Image src="/assets/racket.svg" alt="" fill className="object-contain" />
        </div>
        {/* Bouncing tennis ball — floor at bottom-10 right-14 */}
        <div className="absolute bottom-10 right-14 pointer-events-none select-none">
          {/* Translate layer — moves ball up/down */}
          <div className="ball-translate">
            {/* Squish layer — flattens at impact, origin at bottom */}
            <div className="ball-squish">
              <svg className="tennis-ball-svg" width="52" height="52" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50" cy="50" r="48" fill="#c8e63c" />
                <path d="M 14 18 Q 50 50 14 82" stroke="white" strokeWidth="5.5" fill="none" />
                <path d="M 86 18 Q 50 50 86 82" stroke="white" strokeWidth="5.5" fill="none" />
              </svg>
            </div>
          </div>
          {/* Shadow — on the floor, independent of ball position */}
          <div
            className="ball-shadow-anim absolute -bottom-2 left-1/2 w-10 h-2 rounded-full bg-[#003d47]"
            style={{ filter: 'blur(4px)' }}
          />
        </div>
        {/* Section header */}
        <div className="flex flex-col gap-1.5">
          <p className="font-body text-[10px] tracking-[0.35em] uppercase font-semibold text-[#00b1ca]">
            The Player
          </p>
          <h2 className="font-heading font-bold text-4xl md:text-5xl tracking-tight text-gray-900 leading-none">
            ABOUT SPARSH
          </h2>
          <div className="w-14 h-[3px] bg-[#00b1ca] mt-1.5" />
        </div>

        {/* Body copy */}
        <div className="flex flex-col gap-4 font-body text-gray-600 leading-relaxed max-w-[520px] text-[15px]">
          <p>
            Sparsh Santosh Patil, a{' '}
            <strong className="text-gray-900">13-year-old rising tennis talent</strong> from Navi
            Mumbai, is making a splash with his impressive skills and energetic playing style. Known
            for his never-giving-up spirit and love for the game, he has quickly become a formidable
            presence on the court.
          </p>
          <p>
            Training for over <strong className="text-gray-900">5 years</strong> at the{' '}
            <span className="border-b-2 border-[#00b1ca] font-semibold text-gray-900">
              ASA Tennis Academy
            </span>
            , guided by respected coaches and his parents, Sparsh has perfected his technique and
            smart match play — his athleticism and adaptability setting him apart across all
            opponents.
          </p>
        </div>

        {/* Pull quote */}
        <blockquote className="border-l-4 border-[#00b1ca] pl-5 py-0.5 max-w-[480px]">
          <p className="font-heading text-lg md:text-xl font-semibold text-[#003d47] leading-snug">
            &ldquo;Off the court, a cheerful kid with a hunger to learn, experiment, and
            explore.&rdquo;
          </p>
        </blockquote>

        {/* Quick-stat chips */}
        <div className="flex flex-wrap gap-3 pt-1">
          <div className="flex items-center gap-3 bg-[#f1fafc] px-4 py-3">
            <span className="font-heading font-bold text-2xl text-[#00b1ca]">5+</span>
            <span className="font-body text-xs text-gray-600 leading-tight">
              Years of
              <br />
              Training
            </span>
          </div>
          <div className="flex items-center gap-3 bg-[#f1fafc] px-4 py-3">
            <span className="font-heading font-bold text-2xl text-[#00b1ca]">13</span>
            <span className="font-body text-xs text-gray-600 leading-tight">
              Years
              <br />
              Old
            </span>
          </div>
        </div>
      </div>

      {/* Right-edge teal stripe */}
      <div className="absolute top-0 right-0 w-1.5 h-full bg-[#00b1ca]" />
    </section>
  );
}
