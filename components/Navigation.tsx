'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen((prev) => !prev);
    document.body.classList.toggle('no-scroll');
  };

  return (
    <header
      className="max-w-[40%] border border-gray-900 md:border-white/50 bg-white md:bg-transparent md:backdrop-blur fixed z-20 md:z-0 md:absolute top-4 right-4 md:top-8 md:right-8"
      id="nav-header"
    >
      <nav className="hidden md:block">
        <ul className="flex justify-between px-6 py-4 gap-12 text-white">
          <li>
            <a href="#achievements">Achievements</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li className="md:hidden">
            <a href="#record">Track record</a>
          </li>
          <li className="md:hidden">
            <a href="#news">News</a>
          </li>
          <li className="md:hidden">
            <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/">
              Facebook
            </a>
          </li>
          <li className="md:hidden">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.instagram.com/sparsh_onserve/"
            >
              Instagram
            </a>
          </li>
        </ul>
      </nav>
      <span className="block md:hidden p-1 cursor-pointer" onClick={toggle}>
        <svg width="32" height="32" viewBox="0 0 24 24" className="fill-black">
          <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"></path>
        </svg>
      </span>
    </header>
  );
}
