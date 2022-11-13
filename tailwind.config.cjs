/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      width:{
'9/10':'90%'
      }
    },
    maxWidth:{
      '9/10':'90%',
      '8.5/10':'85%',
      '7.5/10' : " 75%",
      '8/10' : "80%"
    },
    height:{
      '9/10':'90%'
            }

  },
  plugins: [],
}
