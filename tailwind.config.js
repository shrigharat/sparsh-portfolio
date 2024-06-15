/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    'dist/**/*.html'
  ],
  theme: {
    extend: {
      gridTemplateRows: {
        'custom-6': 'repeat(5, 200px) 250px'
      },
      fontFamily: {
        heading: ['Epilogue', 'sans-serif'], // H1, H2, H3
        body: ['DM Sans', 'sans-serif'], // Paragraph, Span, Div
      },
    }
  },
  variants: {
    extend: {}
  },
  plugins: [],
}

