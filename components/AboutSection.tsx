import Image from 'next/image';

export default function AboutSection() {
  return (
    <section
      id="about"
      className="flex flex-col-reverse md:flex-row pt-12 px-4 md:p-none min-h-screen md:h-screen bg-[#00B1CA]/10 items-end gap-8 md:gap-16 relative"
    >
      <div className="left flex-1 md:h-[100%] w-full flex justify-center md:justify-end z-10">
        <Image
          src="/assets/sparsh-profile-alternate.png"
          className="w-auto h-[400px] md:h-full "
          alt="Sparsh Patil"
          width={600}
          height={800}
        />
      </div>
      <div className="right flex-1 flex flex-col justify-start md:h-[80%] gap-8 z-10">
        <h2 className="font-heading underline font-bold text-3xl">About Sparsh</h2>
        <p className="font-body w-[90%] md:w-max-[500px] flex flex-col justify-start gap-3">
          <span>
            Sparsh Santosh Patil, a 13-year-old rising tennis talent from Navi Mumbai, is making a
            splash with his impressive skills and energetic playing style. Known for his
            never-giving-up spirit and love for the game, Sparsh has quickly become a formidable
            presence on the court. His athleticism and ability to adjust set him apart, letting him
            shine in different matches and against various opponents.
          </span>
          <span>
            Sparsh has been playing and practicing Tennis since the past 5 years, at the{' '}
            <u>ASA Tennis Academy</u>. Guided by respected coaches and his parents, Sparsh has
            perfected his skills, consistently showing amazing technique and smart playing. Sparsh
            currently holds an AITA <strong>#7</strong> ranking in the Under 14 category and an ATF{' '}
            <strong>#34</strong> ranking as of May 2026. Sparsh&apos;s journey is filled with many
            tournament wins and awards, proving his potential as a future tennis star. Off the
            court, sparsh is a cheerful kid who has a hunger to learn, experiment and explore.
          </span>
          <span>
            With each match, he keeps pushing his limits, showing the true spirit of a champion and
            paving the way for a thrilling future in tennis.
          </span>
        </p>
      </div>
      <div className="z-0 absolute flex w-fit h-[60%] top-[20%] left-[40%]">
        <Image
          src="/assets/racket.svg"
          className="w-full"
          alt="tennis racket"
          width={200}
          height={400}
        />
      </div>
    </section>
  );
}
