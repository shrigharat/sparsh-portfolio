import Image from 'next/image';
import Link from 'next/link';
import { data } from '@/lib/achievements';

export default function AchievementsGrid() {
  const preview = data.slice(0, 5);

  return (
    <section
      id="achievements"
      className="flex flex-col md:h-screen px-4 py-12 md:p-12 min-h-[600px] w-full justify-center items-center gap-6 polka-pattern"
    >
      <h2 className="font-heading underline font-bold text-3xl text-center w-[90%]">
        Achievements
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-1 h-[80%] w-full md:w-[90%] [&>article]:h-[250px] [&>article]:md:h-full">
        {preview.map((achievement, index) => {
          const { isLarge } = achievement;
          return (
            <article
              key={index}
              className={`achievement-card relative p-2 flex cursor-pointer ${isLarge ? 'row-span-2 !h-[300px] md:!h-full' : ''}`}
            >
              <div className="w-full h-full absolute top-0 left-0">
                <Image
                  src={achievement.image}
                  alt={achievement.alt}
                  className="object-cover w-full h-full"
                  fill
                />
              </div>
              <div
                className={`details border border-white/50 flex flex-col justify-start items-start z-10 backdrop-blur-md p-2 font-body mt-auto w-full gap-2 md:gap-0 ${isLarge ? 'md:pb-12' : ''}`}
              >
                <div className="flex justify-between w-full">
                  <div className="flex flex-col">
                    {achievement.results.map((result, i) => (
                      <h4
                        key={i}
                        className={`text-white font-semibold ${isLarge ? 'text-2xl' : ''}`}
                      >
                        {result}
                      </h4>
                    ))}
                  </div>
                  <div className="more-details text-xs text-white pt-1">{achievement.date}</div>
                </div>
                <p className={`text-white ${isLarge ? 'text-lg' : 'text-sm'}`}>
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
      <Link
        href="/achievements"
        className="border border-primary px-5 py-3 bg-white hover:bg-primary hover:text-white transition-colors"
      >
        View All Achievements
      </Link>
    </section>
  );
}
