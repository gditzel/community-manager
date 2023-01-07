/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    './src/**/*.{html,js}', './node_modules/tw-elements/dist/js/**/*.js'
  ],
  theme: {
    extend: {
        fontFamily: {
          'baskerville': ['Baskerville', 'sans'],
          'montserrat': ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [require('tw-elements/dist/plugin')],
}
