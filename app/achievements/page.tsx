import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Footer from '@/components/Footer';
import { data } from '@/lib/achievements';

export const metadata: Metadata = {
  title: 'Sparsh Patil | Achievements — AITA #7 & ATF #34',
  description:
    'Tournament achievements of Sparsh Santosh Patil — AITA Under 14 #7 and ATF #34 ranked junior tennis player from Navi Mumbai. Singles and doubles titles across AITA, MSLTA, and Asian tournaments.',
  keywords: 'Sparsh Patil,Tennis,Young talent,Panvel,AITA,ATF,Under 14,ranking,junior tennis India',
  authors: [{ name: 'Sparsh Patil' }],
  openGraph: {
    title: 'Sparsh Patil | Achievements — AITA #7 & ATF #34',
    url: 'https://sparshpatil.com/achievements/',
    description:
      'Tournament achievements of Sparsh Santosh Patil — AITA Under 14 #7 and ATF #34 ranked junior tennis player from Navi Mumbai. Singles and doubles titles across AITA, MSLTA, and Asian tournaments.',
    images: [{ url: 'https://sparshpatil.com/assets/sparsh-profile-meta.jpeg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sparsh Patil | Achievements — AITA #7 & ATF #34',
    description:
      'Tournament achievements of Sparsh Santosh Patil — AITA Under 14 #7 and ATF #34 ranked junior tennis player from Navi Mumbai. Singles and doubles titles across AITA, MSLTA, and Asian tournaments.',
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
            {data.map((achievement, index) => {
              const isLarge = achievement.isLarge;
              return (
                <article
                  key={index}
                  className={`achievement-card relative p-2 flex cursor-pointer ${isLarge ? 'row-span-2' : ''}`}
                >
                  <div className="w-full h-full absolute top-0 left-0">
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
                  <div
                    className={`details border border-white/50 flex flex-col justify-start items-start z-10 backdrop-blur-md p-2 font-body mt-auto w-full gap-2 md:gap-0 ${isLarge ? 'md:pb-12' : ''}`}
                  >
                    <div className="flex justify-between w-full">
                      <div className="flex flex-col">
                        {achievement.results.map((result, i) => (
                          <h4
                            key={i}
                            className={`text-white font-semibold ${isLarge ? 'md:text-2xl' : ''}`}
                          >
                            {result}
                          </h4>
                        ))}
                      </div>
                      <div className="more-details text-xs text-white pt-1">{achievement.date}</div>
                    </div>
                    <p className={`text-white text-sm ${isLarge ? 'md:text-lg' : ''}`}>
                      {achievement.description.split('\n').map((line, i, arr) => (
                        <span key={i}>
                          {line}
                          {i < arr.length - 1 && <br />}
                        </span>
                      ))}
                    </p>
                  </div>
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
