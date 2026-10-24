'use client';

import { useEffect, useState } from 'react';

const links = [
  { label: 'Achievements', href: '#achievements' },
  { label: 'About', href: '#about' },
  { label: 'Track record', href: '#record', wide: true },
  { label: 'News', href: '#news', wide: true },
  { label: 'Contact', href: '#contact' },
];

const INSTAGRAM = 'https://www.instagram.com/sparsh_onserve/';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  // Lock page scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setIsOpen(false);
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [isOpen]);

  const close = () => setIsOpen(false);

  return (
    <header className="fixed md:absolute top-3 right-3 md:top-8 md:right-8 z-30" id="nav-header">
      {/* Desktop */}
      <nav className="hidden md:block">
        <ul className="flex items-center gap-8 px-6 py-3 bg-[#003d47]/70 backdrop-blur-md border border-white/15 font-body text-sm text-white">
          {links.map((link) => (
            <li key={link.href} className={link.wide ? 'hidden lg:list-item' : ''}>
              <a href={link.href} className="hover:text-[#dfff4f] transition-colors">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile toggle */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
        className="md:hidden relative z-10 flex items-center justify-center w-11 h-11 bg-[#003d47]/80 backdrop-blur-md border border-white/20 text-white"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
          {isOpen ? (
            <path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z" />
          ) : (
            <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z" />
          )}
        </svg>
      </button>

      {/* Mobile menu */}
      {isOpen && (
        <div
          id="mobile-menu"
          className="md:hidden fixed inset-0 bg-[#003d47] flex flex-col justify-between px-6 pt-24 pb-10"
        >
          <ul className="flex flex-col gap-5">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={close}
                  className="font-heading font-bold text-4xl text-white hover:text-[#dfff4f] transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={INSTAGRAM}
            onClick={close}
            className="font-body text-sm text-white/60 hover:text-white transition-colors"
          >
            @sparsh_onserve ↗
          </a>
        </div>
      )}
    </header>
  );
}
