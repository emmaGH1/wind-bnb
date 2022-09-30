/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        mulish: ['Mulish', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif']
      },
      boxShadow: {
        custom: ['0px 1px 6px rgba(0, 0, 0, 0.1)']
      },
      colors: {
        custom1 : '#4F4F4F',
        custom2: 'rgba(79, 79, 79, 0.4)'
      }
    },
  },
  plugins: [],
}
