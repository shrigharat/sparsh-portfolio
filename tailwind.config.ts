import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      gridTemplateRows: {
        'custom-6': 'repeat(5, 250px)',
      },
      fontFamily: {
        heading: ['var(--font-epilogue)', 'sans-serif'],
        body: ['var(--font-dm-sans)', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: 'var(--primary)',
        },
      },
    },
  },
  plugins: [],
};

export default config;
