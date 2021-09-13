var colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        sky: colors.sky,
        lime: colors.lime,
        blueGray: colors.blueGray,
        emerald: colors.emerald,
      },
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'],
        kanit: ['Kanit', 'sans-serif'],
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
