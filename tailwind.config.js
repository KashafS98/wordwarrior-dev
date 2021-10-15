
const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      darkPurple: '#240046',
      purple: '#9E7EDF',
      cyan: '#00FFE8',
      rust: '#9A201B',
      earth: '#1D5740',
      tomato: '#C74361',
      burgundy: '#5C2C4B',
      boldPurple: '#24203F',
      violet: '#5000B9',
      lilac: '#905DD4',
      fuscia: '#D60F6D',
      blue:'#130FD6',
      white: colors.white,
    },
    fontFamily: {
      display: ['Playfair Display', 'display'],
      sans: ['Monsterrat', 'sans-serif'],
    },
    screens: {
      'xs': '320px',
      // => @media (min-width: 320px) { ... }

      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        }
       },
      animation: {
        fadeIn: 'fadeIn 2s ease-in-out',
      } 
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
