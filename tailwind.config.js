/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{jsx,tsx}',
    './components/**/*.{jsx,tsx}'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        orbitron: ['var(--font-orbitron)', 'sans-serif']
      },
      colors: {
        customRed: "#ff4b00"
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}

