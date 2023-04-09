/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './**/*.html',
    './**/*.{js,jsx,ts,tsx,vue}',
  ],
  theme: {
    extend: {
      spacing: {
        '6px': '0.375rem',
        '16px': '1rem',
        '22px': '1.375rem',
        '40px': '2.5rem',
        '72px': '4.5rem',
        '80px': '5rem',
        '140px': '8.75rem',
        '160px': '10rem',
        '280px': '17.5rem',
      },
      colors: {
        primary: {
          'color-1': '#00a8a41a',
          'color-2': '#00a8a433',
          'color-3': '#00a8a466',
          'color-4': '#00a8a499',
          'color-5': '#00a8a4',
          'color-6': '#008790',
          'color-7': '#006678',
        },
        white: '#ffffff',
        black: '#09090B',
        pray: {
          'color-1': '#f4f4f6',
          'color-2': '#e9e9ed',
          'color-3': '#dddde3',
          'color-4': '#d2d2da',
          'color-5': '#c7c7d1',
          'color-6': '#bcbcc8',
          'color-8': '#a5a5b6',
          'color-12': '#71738B',
          'color-22': '#0d0f35',
        }
      },
      fontFamily: {
        medium: ['Centra Medium', 'sans-serif'],
        extrabold: ['Centra Extrabold', 'sans-serif'],
        bold: ['Centra Bold', 'sans-serif'],
        lights: ['Centra Lights', 'sans-serif'],
        book: ['Centra Book', 'sans-serif'],
        hairline: ['Centra Hairline', 'sans-serif'],
        thin: ['Centra Thin', 'sans-serif'],
      },
      fontSize: {
        16: '16px'
      }
    },
  },
}

