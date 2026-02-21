import Image from 'next/image';

export default function NewsSection() {
  return (
    <section
      id="news"
      className="flex flex-col min-h-screen md:h-screen px-4 py-12 md:p-12 w-full justify-center items-center gap-6 bg-[#00B1CA]/10 relative polka-pattern-dark"
    >
      <h2 className="font-heading underline text-3xl font-bold text-center z-10">Recent news</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 grid-rows-1 h-[80%] w-full md:w-[80%] mx-auto z-10">
        <article className="news-card w-full h-[350px] md:h-[450px] border-2 border-black shadow-lg bg-white">
          <div className="img-container w-full h-[62%] md:h-[70%] border-b-2 border-black relative">
            <Image
              src="/assets/national-school-games-news-peice.jpeg"
              alt="MSLTA article which mentioned Sparsh Patil"
              className="w-full h-full object-fit"
              fill
            />
          </div>
          <div className="details font-body p-2">
            <h4 className="font-semibold">
              News article about Sparsh, after winning National School Games held in Madhya Pradesh
            </h4>
            <p className="text-[13px] md:text-[14px] mt-2">
              Sparsh Patil was the winner in both individual and team events
            </p>
          </div>
        </article>
        <article className="news-card w-full h-[350px] md:h-[450px] border-2 border-black shadow-lg bg-white">
          <div className="img-container w-full h-[62%] md:h-[70%] border-b-2 border-black relative">
            <Image
              src="/assets/newspaper_coverage-1.jpeg"
              alt="News article about Sparsh"
              className="w-full h-full object-fit"
              fill
            />
          </div>
          <div className="details font-body p-2">
            <h4 className="font-semibold">Under 10 MSLTA Suhana Smart 10&apos;s Circuit</h4>
            <p className="text-[13px] md:text-[14px] mt-2">
              News paper article on Sparsh about his victory in the Under 10 MSLTA Suhana Smart
              10&apos;s Circuit - Nashik
            </p>
          </div>
        </article>
        <article className="news-card w-full h-[350px] md:h-[450px] border-2 border-black shadow-lg bg-white">
          <div className="img-container w-full h-[62%] md:h-[70%] border-b-2 border-black relative">
            <Image
              src="/assets/sparsh_maharashtra_ranking.png"
              alt="Sparsh Patil in recent NMSA tournament"
              className="w-full h-full object-fit"
              fill
            />
          </div>
          <div className="details font-body p-2">
            <h4 className="font-semibold">MSLTA NMSA National Series 2024</h4>
            <p className="text-[13px] md:text-[14px] mt-2">
              Sparsh recently reached the Semi-finals of MSLTA NMSA National series 2024 in both
              the singles and doubles category.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}
