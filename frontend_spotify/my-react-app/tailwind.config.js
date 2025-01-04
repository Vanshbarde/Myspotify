/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}',
     './public/index.html'],

  theme: {
    extend: {
        fontFamily:{
          poppins:["Poppins", "sans-serif"],
        },
        height :{
       "1/10": "10%",
       "9/10": "90%",
        },
        backgroundColor:{
          "app-black" : "#121212",
          "app-green":  "#33c356",
          "gray" : "#565656",
          "hover-gray1" : "#141414",
          "hover-gray2" : "#625f5f",
        },
        borderWidth:{
          "1" : "1px",
          "4" : "4px",
          "3" : "3px",
          "5" : "5px",
          "6" : "6px",
          "100" : "100px",
        },
    },

  },
  plugins: [],
}