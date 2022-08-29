/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      transparent: 'transparent',
      white: '#f5f5f5',
      black: '#000',
      lightBlue: '#42A8B5',
      darkBlue: '#32405B',
      lightOrange: '#FEE3CB',
      darkOrange: '#FFA17B',
      red: '#FF5252',
    },
    fontFamily: {
      mono: ['Menlo'],
    },
    extend: {}
  },
  plugins: []
};
