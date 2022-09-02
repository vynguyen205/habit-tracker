const { brown } = require('@material-ui/core/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      transparent: 'transparent',
      white: '#f5f5f5',
      black: '#000',
      gray: '#B7B7B7',
      lightBlue: '#42A8B5',
      darkBlue: '#32405B',
      lightOrange: '#FEE3CB',
      darkOrange: '#FFA17B',
      red: '#FF5252',
      offBrown: '#473939',
    },
    fontFamily: {
      mono: ['Menlo'],
    },
    extend: {}
  },
  plugins: []
};
