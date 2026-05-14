import { data } from '@/lib/news-coverage';
import Image from 'next/image';

export default function NewsSection() {
  return (
    <section
      id="news"
      className="flex flex-col min-h-screen md:h-screen px-4 py-12 md:p-12 w-full justify-center items-center gap-6 bg-[#00B1CA]/10 relative polka-pattern-dark"
    >
      <h2 className="font-heading underline text-3xl font-bold text-center z-10">Recent news</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 grid-rows-1 h-[80%] w-full md:w-[80%] mx-auto z-10">
        {data.map((item, index) => (
          <article
            className="news-card w-full h-[350px] md:h-[450px] border-2 border-black shadow-lg bg-white"
            key={index}
          >
            <div className="img-container w-full h-[62%] md:h-[70%] border-b-2 border-black relative">
              <Image src={item.image} alt={item.title} className="w-full h-full object-fit" fill />
            </div>
            <div className="details font-body p-2">
              <h4 className="font-semibold">{item.title}</h4>
              <p className="text-[13px] md:text-[14px] mt-2">{item.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
