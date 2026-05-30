const InstagramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" className="fill-current">
    <path d="M20.947 8.305a6.53 6.53 0 0 0-.419-2.216 4.61 4.61 0 0 0-2.633-2.633 6.606 6.606 0 0 0-2.186-.42c-.962-.043-1.267-.055-3.709-.055s-2.755 0-3.71.055a6.606 6.606 0 0 0-2.185.42 4.607 4.607 0 0 0-2.633 2.633 6.554 6.554 0 0 0-.419 2.185c-.043.963-.056 1.268-.056 3.71s0 2.754.056 3.71c.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.043 1.268.056 3.71.056s2.755 0 3.71-.056a6.59 6.59 0 0 0 2.186-.419 4.615 4.615 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.187.043-.962.056-1.267.056-3.71-.002-2.442-.002-2.752-.058-3.709zm-8.953 8.297c-2.554 0-4.623-2.069-4.623-4.623s2.069-4.623 4.623-4.623a4.623 4.623 0 0 1 0 9.246zm4.807-8.339a1.077 1.077 0 0 1-1.078-1.078 1.077 1.077 0 1 1 2.155 0c0 .596-.482 1.078-1.077 1.078z" />
    <circle cx="11.994" cy="11.979" r="3.003" />
  </svg>
);

const ArrowUpRightIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width="14"
    height="14"
    className="fill-none stroke-current inline-block ml-1 opacity-60"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M7 17L17 7M17 7H8M17 7V16" />
  </svg>
);

const NAV_LINKS = [
  { label: 'Achievements', href: '#achievements' },
  { label: 'About', href: '#about' },
  { label: 'Track Record', href: '#record' },
  { label: 'Recent News', href: '#news' },
  { label: 'Contact', href: '#contact' },
];

const EXTERNAL_LINKS = [
  { label: 'Full Achievements List', href: '/achievements/' },
  { label: 'Instagram', href: 'https://www.instagram.com/sparsh_onserve/' },
];

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#001e24' }} className="w-full px-4 md:px-12 pt-12 pb-6">
      <div className="w-full md:w-[90%] mx-auto">
        <div className="flex flex-col md:flex-row gap-10 md:gap-0 justify-between pb-10 border-b border-white/[0.08]">
          {/* Brand */}
          <div className="flex flex-col gap-4 md:max-w-[260px]">
            <div>
              <h3 className="font-heading font-bold text-white text-xl tracking-widest">
                SPARSH PATIL
              </h3>
              <div className="w-8 h-[2px] mt-2" style={{ backgroundColor: '#00b1ca' }} />
            </div>
            <p className="font-body text-sm leading-relaxed text-white/45">
              Rising tennis star from Navi Mumbai. AITA U14 #7 · ATF #33.
            </p>
            <a
              href="https://www.instagram.com/sparsh_onserve/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 w-fit font-body text-sm text-white/50 hover:text-white transition-colors"
            >
              <InstagramIcon />
              <span>@sparsh_onserve</span>
            </a>
          </div>

          {/* Navigation */}
          <div className="flex flex-col gap-3">
            <p
              className="font-body text-[10px] tracking-[0.25em] uppercase font-semibold mb-1"
              style={{ color: '#00b1ca' }}
            >
              On This Page
            </p>
            <ul className="flex flex-col gap-2">
              {NAV_LINKS.map(({ label, href }) => (
                <li key={href}>
                  <a
                    href={href}
                    className="font-body text-sm text-white/50 hover:text-white transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* External links */}
          <div className="flex flex-col gap-3">
            <p
              className="font-body text-[10px] tracking-[0.25em] uppercase font-semibold mb-1"
              style={{ color: '#00b1ca' }}
            >
              More
            </p>
            <ul className="flex flex-col gap-2">
              {EXTERNAL_LINKS.map(({ label, href }) => (
                <li key={href}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-body text-sm text-white/50 hover:text-white transition-colors"
                  >
                    {label}
                    <ArrowUpRightIcon />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-3">
            <p
              className="font-body text-[10px] tracking-[0.25em] uppercase font-semibold mb-1"
              style={{ color: '#00b1ca' }}
            >
              Contact
            </p>
            <div className="flex flex-col gap-3">
              <div>
                <p className="font-body text-[11px] uppercase tracking-wider mb-1 text-white/30">
                  Father
                </p>
                <a
                  href="tel:+918652860101"
                  className="font-body text-sm block text-white/50 hover:text-white transition-colors"
                >
                  +91 86528 60101
                </a>
              </div>
              <div>
                <p className="font-body text-[11px] uppercase tracking-wider mb-1 text-white/30">
                  Mother
                </p>
                <a
                  href="tel:+918087760007"
                  className="font-body text-sm block text-white/50 hover:text-white transition-colors"
                >
                  +91 80877 60007
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center pt-5 gap-2">
          <p className="font-body text-[12px] text-white/25">
            © 2026 Sparsh Patil. All rights reserved.
          </p>
          <p className="font-body text-[12px] text-white/20" title="As of 31st May 2026">AITA U14 #7 · ATF #33 · 31 May 2026</p>
        </div>
      </div>
    </footer>
  );
}
