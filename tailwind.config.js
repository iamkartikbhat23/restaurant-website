/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'primary':'#BEAA2F',
        'secondary':'#FB4F29',
        'tertiary':'#AF4462',
        'quaternary':'#C53773',
        'quinary':'#452F70'
      },
      fontFamily: {
        domine: ['Domine', 'serif'],
        jost: ['Jost', 'sans-serif'],
        warnes: ['Warnes', 'cursive'],
      },
      animation: {
        'waving': 'wave 2s linear 1',
        'rotating':'rotating 5s linear infinite',
        'marquee':'marquee 15s linear infinite',
      },
      keyframes: {
        wave: {
          '0%': { transform: 'rotate(0.0deg)' },
          '10%': { transform: 'rotate(14deg)' },
          '20%': { transform: 'rotate(-8deg)' },
          '30%': { transform: 'rotate(14deg)' },
          '40%': { transform: 'rotate(-4deg)' },
          '50%': { transform: 'rotate(10.0deg)' },
          '60%': { transform: 'rotate(0.0deg)' },
          '100%': { transform: 'rotate(0.0deg)' },
        },
        rotating : {
          '0%': { transform: 'rotate(0.0deg)' },
          '25%': { transform: 'rotate(90deg)' },
          '50%': { transform: 'rotate(180deg)' },
          '75%': { transform: 'rotate(270deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        marquee : {
          '0%': { transform: 'translateX(1%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp','@tailwindcss/forms')
  ],
}