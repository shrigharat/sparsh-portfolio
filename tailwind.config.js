/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['**/*.html'],
  theme: {
    extend: {
      gridTemplateRows: {
        'custom-6': 'repeat(5, 250px)',
      },
      fontFamily: {
        heading: ['Epilogue', 'sans-serif'], // H1, H2, H3
        body: ['DM Sans', 'sans-serif'], // Paragraph, Span, Div
      },
      colors: {
        primary: {
          DEFAULT: 'var(--primary)',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

