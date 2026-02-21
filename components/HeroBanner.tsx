'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';

export default function HeroBanner() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const initAnimations = async () => {
      const gsap = (await import('gsap')).default;
      const SplitType = (await import('split-type')).default;

      if (!titleRef.current || !descriptionRef.current || !ctaRef.current) return;

      const text = new SplitType(titleRef.current, { types: 'chars' });
      const characters = text.chars;

      if (characters) {
        gsap.fromTo(
          characters,
          { y: 60, opacity: 0 },
          { y: 0, opacity: 1, stagger: 0.03, duration: 0.8, ease: 'power4.out' },
        );
      }

      gsap.fromTo(
        descriptionRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, ease: 'power4.out', delay: 0.3 },
      );

      gsap.fromTo(
        ctaRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, ease: 'power4.out', delay: 0.5 },
      );
    };

    initAnimations();
  }, []);

  return (
    <section id="hero-banner" className="flex-col-reverse flex md:flex-row h-screen">
      <div className="p-4 py-8 left flex-1 md:px-16 md:pt-12 flex flex-col justify-start">
        <div className="hidden md:flex social gap-2 mb-48">
          <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/">
            <svg width="24" height="24" viewBox="0 0 24 24" style={{ fill: 'rgba(0, 0, 0, 1)' }}>
              <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"></path>
            </svg>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/sparsh_onserve/"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" style={{ fill: 'rgba(0, 0, 0, 1)' }}>
              <path d="M20.947 8.305a6.53 6.53 0 0 0-.419-2.216 4.61 4.61 0 0 0-2.633-2.633 6.606 6.606 0 0 0-2.186-.42c-.962-.043-1.267-.055-3.709-.055s-2.755 0-3.71.055a6.606 6.606 0 0 0-2.185.42 4.607 4.607 0 0 0-2.633 2.633 6.554 6.554 0 0 0-.419 2.185c-.043.963-.056 1.268-.056 3.71s0 2.754.056 3.71c.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.043 1.268.056 3.71.056s2.755 0 3.71-.056a6.59 6.59 0 0 0 2.186-.419 4.615 4.615 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.187.043-.962.056-1.267.056-3.71-.002-2.442-.002-2.752-.058-3.709zm-8.953 8.297c-2.554 0-4.623-2.069-4.623-4.623s2.069-4.623 4.623-4.623a4.623 4.623 0 0 1 0 9.246zm4.807-8.339a1.077 1.077 0 0 1-1.078-1.078 1.077 1.077 0 1 1 2.155 0c0 .596-.482 1.078-1.077 1.078z"></path>
              <circle cx="11.994" cy="11.979" r="3.003"></circle>
            </svg>
          </a>
        </div>
        <div className="pitch-text flex flex-col gap-4 md:gap-8">
          <h1 ref={titleRef} className="text-3xl md:text-6xl font-semibold font-heading">
            Sparsh Patil
          </h1>
          <p
            ref={descriptionRef}
            className="font-body text-md md:text-xl w-full md:w-[60%] max-w-[400px]"
          >
            Witness the rise of a future <u>tennis star</u>. At just 13 years of age, he brings
            unparalleled energy, skill, and focus to every match, ready to dominate the court and
            achieve his ambition of being the best.
          </p>
          <a
            ref={ctaRef}
            href="#achievements"
            className="flex border-2 border-black w-fit py-2 px-4 gap-2 font-body"
          >
            <span>View his achievements</span>
            <svg width="24" height="24" viewBox="0 0 24 24" style={{ fill: 'rgba(0, 0, 0, 1)' }}>
              <path d="M5 8.999c0 1.902.765 3.627 2 4.89V21a.998.998 0 0 0 1.447.895L12 20.118l3.553 1.776a.992.992 0 0 0 .972-.043c.295-.183.475-.504.475-.851v-7.11a6.976 6.976 0 0 0 2-4.891C19 5.14 15.86 2 12 2S5 5.14 5 8.999zm7.447 9.106a1 1 0 0 0-.895 0L9 19.382v-4.067c.911.434 1.926.685 3 .685s2.089-.25 3-.685v4.066l-2.553-1.276zM12 4c2.756 0 5 2.242 5 4.999A5.006 5.006 0 0 1 12 14c-2.757 0-5-2.243-5-5.001A5.005 5.005 0 0 1 12 4z"></path>
            </svg>
          </a>
        </div>
      </div>
      <div className="right flex-1">
        <Image
          src="/assets/banner.webp"
          className="h-full w-full object-cover center"
          alt="Sparsh at the Bombay Gymkhana tournament hitting a high serve"
          width={800}
          height={900}
          priority
        />
      </div>
    </section>
  );
}
