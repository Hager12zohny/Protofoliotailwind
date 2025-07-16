module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens:{
        "sm":"480px"
      },
      spacing:{
        "big":"48rem"
      }
     
    },
    fontFamily:{
      nunito:['Nunito', sans-serif]
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}