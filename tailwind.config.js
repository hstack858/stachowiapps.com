const defaultTheme = require('tailwindcss/defaultTheme')
const {rgbToHex} = require("@material-ui/core");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['Roboto', ...defaultTheme.fontFamily.sans],
      'serif': [...defaultTheme.fontFamily.serif],
      'mono': [...defaultTheme.fontFamily.mono]
    },
    extend: {
      colors: {
        bgBlack: '#0b0b0b',
        arrowBlack: '#161616'
      }
    }
  },
  plugins: [],
}