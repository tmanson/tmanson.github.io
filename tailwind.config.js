/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray:  {
          '50': '#fbfbfb',
          '100': '#d0d0d0',
          '200': '#a6a6a6',
          '300': '#7b7b7b',
          '400': '#515151',
          '500': '#262626',
          '600': '#1d1d1d',
          '700': '#131313',
          '800': '#0a0a0a',
          '900': '#000000',
        }
      }
    },
  },
  plugins: [],
}

