/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/pages/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'darkblue': '#181f28',
        'lightgold' : '#f8ecd8',
        'darkgold': '#a7865e'
      }
    },
  },
  plugins: [],
}