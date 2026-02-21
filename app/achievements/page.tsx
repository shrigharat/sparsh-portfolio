import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Sparsh Patil | Achievements',
  description:
    'Sparsh Santosh Patil, a 11-year-old rising tennis player from Panvel taluka within the Raigad district, is making a splash with his impressive skills and energetic playing style.',
  keywords: 'Sparsh Patil,Tennis,Young talent,Panvel',
  authors: [{ name: 'Sparsh Patil' }],
  openGraph: {
    title: 'Sparsh Patil | Rising tennis talent',
    url: 'https://sparshpatil.com/',
    description:
      'Sparsh Santosh Patil, a 11-year-old rising tennis player from Panvel taluka within the Raigad district, is making a splash with his impressive skills and energetic playing style.',
    images: [{ url: 'https://sparshpatil.com/assets/sparsh-profile-meta.jpeg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sparsh Patil | Rising tennis talent',
    description:
      'Sparsh Santosh Patil, a 11-year-old rising tennis player from Panvel taluka within the Raigad district, is making a splash with his impressive skills and energetic playing style.',
    images: ['https://sparshpatil.com/assets/sparsh-profile-meta.jpeg'],
  },
};

export default function AchievementsPage() {
  return (
    <>
      <header className="max-w-[40%] border border-gray-900 md:border-black bg-white fixed z-20 md:z-0 md:absolute top-4 left-4 md:top-8 md:left-8">
        <nav className="hidden md:block">
          <ul className="flex justify-between px-6 py-4 gap-12">
            <li>
              <Link href="/" className="font-bold text-xl">
                Sparsh Patil
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <header className="max-w-[40%] border border-gray-900 md:border-black bg-white fixed z-20 md:z-0 md:absolute top-4 right-4 md:top-8 md:right-8">
        <nav className="hidden md:block">
          <ul className="flex justify-between px-6 py-4 gap-12">
            <li>
              <Link href="/">Home</Link>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <section
          id="achievements"
          className="flex flex-col h-fit px-4 md:p-12 md:py-32 w-full justify-start items-center gap-6 polka-pattern"
        >
          <h2 className="font-heading underline font-bold text-3xl text-center w-[90%]">
            Achievements
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 [&>*]:min-h-[250px] gap-2 md:gap-1 h-[80%] w-full md:w-[90%]">
            {/* MSLTA Masters, December 2025 */}
            <article className="achievement-card row-span-2 relative p-2 flex cursor-pointer !h-[300px] md:!h-full">
              <div className="w-full h-full absolute top-0 left-0">
                <Image
                  src="/assets/achievements/chatrapati-sambhaji-nagar-mslta-dec-25.webp"
                  alt="Sparsh receiving trophy for winning the MSLTA Masters held in Chatrapati Sambhaji Nagar"
                  className="object-cover w-full h-full"
                  fill
                />
              </div>
              <div className="details border border-white/50 flex flex-col justify-start items-start z-10 backdrop-blur-md p-2 md:pb-12 font-body mt-auto w-full gap-2 md:gap-0">
                <div className="flex justify-between w-full">
                  <div className="flex flex-col">
                    <h4 className="text-white font-semibold text-2xl">Singles, Winner 🥇</h4>
                  </div>
                  <div className="more-details text-xs text-white pt-1">
                    26-28<sup>th</sup> December, 2025
                  </div>
                </div>
                <p className="text-white text-lg">
                  Under 14
                  <br />
                  MSLTA Masters (Chatrapati Sambhaji Nagar)
                </p>
              </div>
            </article>

            {/* Nagpur NS, December 2024 */}
            <article className="achievement-card relative p-2 flex cursor-pointer">
              <div className="w-full h-full absolute top-0 left-0">
                <Image
                  src="/assets/achievements/nagpur-ns-december-26.webp"
                  alt="Sparsh receiving trophy for the NS tournament held in Nagpur"
                  className="object-cover w-full h-full"
                  fill
                />
              </div>
              <div className="details border border-white/50 flex flex-col justify-start items-start z-10 backdrop-blur-md p-2 font-body mt-auto w-full gap-2 md:gap-0">
                <div className="flex justify-between w-full">
                  <div className="flex flex-col">
                    <h4 className="text-white font-semibold">Doubles, Runner-up 🥈</h4>
                  </div>
                  <div className="more-details text-xs text-white pt-1">
                    1-6<sup>th</sup> Dec, 2024
                  </div>
                </div>
                <p className="text-white text-sm">
                  Under 14 <br />
                  NS, Nagpur 2025
                </p>
              </div>
            </article>

            {/* Under 14 AITA National Championship CS7 */}
            <article className="achievement-card row-span-2 relative p-2 flex cursor-pointer">
              <div className="w-full h-full absolute top-0 left-0">
                <Image
                  src="/assets/achievements/under-14-aita-cs7-winner.webp"
                  alt="Sparsh receiving trophy for winning the Under 14 AITA National Championship CS7"
                  className="object-cover w-full h-full"
                  fill
                />
              </div>
              <div className="details border border-white/50 flex flex-col justify-start items-start z-10 backdrop-blur-md p-2 pb-12 font-body mt-auto w-full gap-2 md:gap-0">
                <div className="flex justify-between w-full">
                  <div className="flex flex-col">
                    <h4 className="text-white font-semibold text-2xl">Singles, Winner 🥇</h4>
                  </div>
                  <div className="more-details text-xs text-white pt-1">
                    4<sup>th</sup> April, 2025
                  </div>
                </div>
                <p className="text-white text-lg">
                  Under 14
                  <br />
                  AITA National Championship CS7
                </p>
              </div>
            </article>

            {/* National school games, Madhya Pradesh 2024 */}
            <article className="achievement-card relative p-2 flex cursor-pointer h-[250px] md:h-full">
              <div className="w-full h-full absolute top-0 left-0">
                <Image
                  src="/assets/achievements/national-school-games-mp-winner.jpeg"
                  alt="Sparsh receiving trophy for winning the National School Games held in Madhya Pradesh"
                  className="object-cover w-full h-full"
                  fill
                />
              </div>
              <div className="details border border-white/50 flex flex-col justify-start items-start z-10 backdrop-blur-md p-2 font-body mt-auto w-full gap-2 md:gap-0">
                <div className="flex justify-between w-full">
                  <div className="flex flex-col">
                    <h4 className="text-white font-semibold">Singles, Winner 🥇</h4>
                    <h4 className="text-white font-semibold">Team Event, Winner 🥇</h4>
                  </div>
                  <div className="more-details text-xs text-white pt-1">
                    20<sup>-24th</sup> Dec, 2024
                  </div>
                </div>
                <p className="text-white text-sm">National school games, Madhya Pradesh 2024</p>
              </div>
            </article>

            {/* Bombay Gymkhana, 10th May 2024 */}
            <article className="achievement-card row-span-2 relative p-2 flex cursor-pointer">
              <div className="w-full h-full absolute top-0 left-0">
                <Image
                  src="/assets/achievements/bombay_gymkhana_winner.jpg"
                  alt="Sparsh receiving trophy for winning the singles and doubles at the Under 12 Championship Series (CS7) 2024 - Bombay Gymkhana"
                  className="object-cover w-full h-full"
                  fill
                />
              </div>
              <div className="details border border-white/50 flex flex-col justify-start items-start z-10 backdrop-blur-md p-2 font-body mt-auto w-full gap-2 md:gap-0">
                <div className="flex justify-between w-full">
                  <div className="flex flex-col">
                    <h4 className="text-white font-semibold">Singles, Winner 🥇</h4>
                    <h4 className="text-white font-semibold">Doubles, Winner 🥇</h4>
                  </div>
                  <div className="more-details text-xs text-white pt-1">
                    10<sup>th</sup> May, 2024
                  </div>
                </div>
                <p className="text-white text-sm">
                  Under 12 Championship Series (CS7) 2024 - Bombay Gymkhana
                </p>
              </div>
            </article>

            {/* Khar Gymkhana, 3rd May 2024 */}
            <article className="achievement-card relative p-2 flex cursor-pointer">
              <div className="w-full h-full absolute top-0 left-0">
                <Image
                  src="/assets/achievements/khar_gymkhana_doubles_runnerup.webp"
                  alt="Sparsh collecting trophy for runner up in doubles category at the Under 14 Championship Series (CS7) 2024 - Khar Gymkhana"
                  className="object-cover w-full h-full"
                  fill
                />
              </div>
              <div className="details border border-white/50 flex flex-col justify-start items-start z-10 backdrop-blur-md p-2 font-body mt-auto w-full gap-2 md:gap-0">
                <div className="flex justify-between w-full">
                  <div className="flex flex-col">
                    <h4 className="text-white font-semibold">Doubles, Runner up 🥈</h4>
                  </div>
                  <div className="more-details text-xs text-white pt-1">
                    3<sup>rd</sup> May, 2024
                  </div>
                </div>
                <p className="text-white text-sm">
                  Under 14 Championship Series (CS7) 2024 - Khar Gymkhana
                </p>
              </div>
            </article>

            {/* NCDLTA Under 12 Doubles, Nanded */}
            <article className="achievement-card relative p-2 flex cursor-pointer bg-white">
              <div className="w-full h-full absolute top-0 left-0">
                <Image
                  src="/assets/achievements/ncdlta_under_12_doubles_winner.jpeg"
                  alt="Sparsh collecting trophy for winning in the Doubles category at the Under 12 MSLTA NCDLTA (CS7) - Nanded"
                  className="object-fit w-full h-full hidden md:block"
                  fill
                />
                <Image
                  src="/assets/achievements/ncdlta_under_12_doubles_winner_mobile.jpeg"
                  alt="Sparsh collecting trophy for winning in the Doubles category at the Under 12 MSLTA NCDLTA (CS7) - Nanded"
                  className="object-fit w-full h-full block md:hidden"
                  fill
                />
              </div>
              <div className="details border border-white/50 flex flex-col justify-start items-start z-10 backdrop-blur-md p-2 font-body mt-auto w-full gap-1 md:gap-0">
                <div className="flex justify-between w-full">
                  <div className="flex flex-col">
                    <h4 className="text-white font-semibold">Doubles, Winner 🥇</h4>
                  </div>
                  <div className="more-details text-xs text-white pt-1">
                    19<sup>th</sup> May, 2023
                  </div>
                </div>
                <p className="text-white text-sm">Under 12 MSLTA NCDLTA (CS7) - Nanded</p>
              </div>
            </article>

            {/* Kalina - Mumbai University CS7 */}
            <article className="achievement-card relative p-2 flex cursor-pointer">
              <div className="w-full h-full absolute top-0 left-0">
                <Image
                  src="/assets/achievements/kalina_doubles_winner.jpeg"
                  alt="Sparsh showing his trophy for 1st place in the doubles category and 2nd place in singles in the under 12 group at the Mumbai University Championship Series (CS7) - Kalina"
                  className="object-cover w-full h-full"
                  fill
                />
              </div>
              <div className="details border border-white flex flex-col justify-start items-start z-10 backdrop-blur-md p-2 font-body mt-auto w-full gap-2 md:gap-0">
                <div className="flex justify-between w-full">
                  <div className="flex flex-col">
                    <h4 className="text-white font-semibold">Doubles, Winner 🥇</h4>
                    <h4 className="text-white font-semibold">Singles, Runner up 🥈</h4>
                  </div>
                  <div className="more-details text-xs text-white pt-1">
                    12<sup>th</sup> Apr, 2024
                  </div>
                </div>
                <p className="text-white text-sm">
                  Under 12 Mumbai University Championship Series (CS7) - Kalina
                </p>
              </div>
            </article>

            {/* National selection, Satara */}
            <article className="achievement-card relative p-2 flex cursor-pointer h-[250px] md:h-full">
              <div className="w-full h-full absolute top-0 left-0">
                <Image
                  src="/assets/achievements/mumbai_soft_tennis_national_selections.jpg"
                  alt="Sparsh receiving the trophy for winner in the doubles category, runner up in the singles and team events at the Under 15 Mumbai Soft Tennis National Selection - Satara"
                  className="hidden lg:block object-cover w-full h-full"
                  fill
                />
                <Image
                  src="/assets/achievements/mumbai_soft_tennis_national_selections_mobile.jpeg"
                  alt="Sparsh receiving the trophy for winner in the doubles category, runner up in the singles and team events at the Under 15 Mumbai Soft Tennis National Selection - Satara"
                  className="block lg:hidden object-cover w-full h-full"
                  fill
                />
              </div>
              <div className="details border border-white flex flex-col justify-start items-start z-10 backdrop-blur-md p-2 font-body mt-auto w-full gap-2 md:gap-0">
                <div className="flex justify-between w-full">
                  <div className="flex flex-col">
                    <h4 className="text-white font-semibold">Doubles, Winner 🥇</h4>
                    <h4 className="text-white font-semibold">Singles, Runner up 🥉</h4>
                    <h4 className="text-white font-semibold">Team Events, Runner up 🥈</h4>
                  </div>
                  <div className="more-details text-xs text-white pt-1">
                    18<sup>th</sup> Dec, 2023
                  </div>
                </div>
                <p className="text-white text-sm">
                  Under 15 Mumbai Soft Tennis National Selection - Satara
                </p>
              </div>
            </article>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
