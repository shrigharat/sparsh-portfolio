import { data } from '@/lib/news-coverage';
import Image from 'next/image';

export default function NewsSection() {
  return (
    <section
      id="news"
      className="relative flex flex-col items-center py-16 gap-10 min-h-screen bg-[#00B1CA]/10 polka-pattern-dark overflow-hidden"
    >
      {/* Section watermark */}
      <span
        className="absolute top-0 right-2 font-heading font-bold text-[#00b1ca] leading-none select-none pointer-events-none"
        style={{ fontSize: '200px', opacity: 0.035 }}
      >
        04
      </span>

      {/* Header */}
      <div className="w-[90%] z-10">
        <p className="font-body text-[11px] tracking-[0.3em] uppercase text-[#00b1ca] font-semibold mb-2">
          Media Coverage
        </p>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#003d47]">
          In The News
        </h2>
        <div className="w-12 h-[3px] bg-[#00b1ca] mt-3" />
      </div>

      {/* News ticker */}
      <div className="w-full bg-[#003d47] overflow-hidden z-10 flex items-center" style={{ height: '38px' }}>
        {/* LIVE badge */}
        <div className="flex-shrink-0 flex items-center gap-2 bg-[#00b1ca] px-4 h-full">
          <span className="w-[6px] h-[6px] rounded-full bg-white animate-pulse" />
          <span className="font-body text-[10px] tracking-[0.25em] uppercase font-bold text-white">Live</span>
        </div>
        {/* Scrolling text — duplicated for seamless loop */}
        <div className="flex overflow-hidden flex-1">
          <div className="ticker-track flex whitespace-nowrap">
            {[...Array(2)].map((_, di) => (
              <span key={di} className="flex items-center">
                <span className="font-body text-[11px] tracking-[0.15em] uppercase text-white/70 px-10">Winner · MSLTA Masters U14</span>
                <span className="text-[#00b1ca] select-none">◆</span>
                <span className="font-body text-[11px] tracking-[0.15em] uppercase text-white/70 px-10">National School Games — Individual &amp; Team Gold</span>
                <span className="text-[#00b1ca] select-none">◆</span>
                <span className="font-body text-[11px] tracking-[0.15em] uppercase text-white/70 px-10">MSLTA Suhana Smart 10s Circuit — Nashik</span>
                <span className="text-[#00b1ca] select-none">◆</span>
                <span className="font-body text-[11px] tracking-[0.15em] uppercase text-white/70 px-10">AITA U14 Ranking · #7 India</span>
                <span className="text-[#00b1ca] select-none">◆</span>
                <span className="font-body text-[11px] tracking-[0.15em] uppercase text-white/70 px-10">ATF Asia · #34</span>
                <span className="text-[#00b1ca] select-none">◆</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-[90%] mx-auto z-10">
        {data.map((item, index) => (
          <article
            key={index}
            className="group bg-white border border-gray-100 hover:border-[#00b1ca]/50 transition-colors overflow-hidden flex flex-col"
            style={{ borderTop: '3px solid #00b1ca' }}
          >
            <div className="relative w-full border-b border-gray-100 overflow-hidden" style={{ height: '320px' }}>
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-contain object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />
              <span className="absolute top-3 right-3 font-heading font-bold text-[#003d47]/10 text-4xl leading-none select-none">
                0{index + 1}
              </span>
            </div>
            <div className="font-body p-5 flex flex-col gap-2 flex-1">
              <h4 className="font-heading font-bold text-[#003d47] text-[15px] leading-snug">
                {item.title}
              </h4>
              <p className="text-[12px] text-gray-500 leading-relaxed mt-1">
                {item.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
