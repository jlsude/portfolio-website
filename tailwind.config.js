/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#003140',
        accent: '#FF6A13',
        accentLow: '#FFDBC6',
        accentMid: '#FFA26B' ,
        fontColor: '#295564',
        cardColor: '#FAFEFF'
      }
    },
  },
  plugins: [],
}
