import type { Metadata } from 'next';
import Image from 'next/image';
import { latestResult } from '@/lib/achievements';
import { rankings, stats } from '@/lib/record';

// 1200×630 og:image source — screenshot #og-frame after updating achievements/record data.
// Deliberately unlinked, absent from sitemap/llms.txt/robots.txt, and noindex.
export const metadata: Metadata = {
  title: 'Preview',
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
};

const figures = [
  ...rankings.map((r) => ({ value: `#${r.value}`, label: r.label, sub: r.sub })),
  { value: String(stats.winner), label: 'Titles', sub: `${stats.tournaments} tournaments` },
];

export default function OgImage() {
  return (
    <main className="min-h-screen grid place-items-center bg-neutral-900 p-8">
      <div
        id="og-frame"
        className="relative w-[1200px] h-[630px] shrink-0 bg-[#003d47] text-white overflow-hidden"
      >
        {/* Slanted photo panel */}
        <div className="absolute inset-y-0 right-0 w-[46%] [clip-path:polygon(20%_0,100%_0,100%_100%,0_100%)]">
          <Image
            src="/assets/banner-2.webp"
            className="object-cover object-[50%_80%]"
            alt=""
            fill
            sizes="560px"
            priority
          />
          <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/50 to-transparent" />
          <p className="absolute bottom-10 right-12 font-body text-sm text-white/85">
            sparshpatil.com
          </p>
        </div>

        <div className="relative z-10 flex flex-col h-full w-[62%] px-16 pt-14 pb-12">
          <p className="font-body text-[13px] tracking-[0.3em] uppercase text-white/60">
            ASA Tennis Academy · Navi Mumbai
          </p>
          <p className="flex items-center gap-3 mt-3 font-body text-[15px] max-w-[600px]">
            <span className="w-2.5 h-2.5 shrink-0 rounded-full bg-[#dfff4f]" />
            <span className="text-white/60 shrink-0">Latest</span>
            <span className="truncate">
              {latestResult.result} — {latestResult.event}
            </span>
          </p>

          <h1 className="mt-auto font-heading font-extrabold uppercase leading-[0.82] tracking-[-0.04em] text-[160px]">
            <span className="block pb-[0.04em]">Sparsh</span>
            <span className="block pb-[0.04em] text-[#00b1ca]">Patil</span>
          </h1>

          <div className="mt-auto w-[540px] flex items-end gap-12 border-t border-white/15 pt-5">
            {figures.map((f) => (
              <div key={f.label}>
                <p className="font-heading font-bold text-5xl leading-none text-[#dfff4f]">
                  {f.value}
                </p>
                <p className="font-body text-[12px] uppercase tracking-[0.15em] text-white/70 mt-2 whitespace-nowrap">
                  {f.label}
                </p>
                <p className="font-body text-[12px] text-white/40 whitespace-nowrap">{f.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
