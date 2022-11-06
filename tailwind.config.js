/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        automatorsPurple: "rgba(72, 43, 124, 1)",
        automatorsPurpleHover: "rgba(51, 23, 104, 1)",
        automatorsPurpleFocus: "rgba(31, 13, 84, 1)",
        automatorsTourquoise: "rgba(69, 156, 167,1)",
        automatorsTourquoiseHover: "rgba(49, 136, 147,1)",
        automatorsTourquoiseFocus: "rgba(29, 116, 127,1)",
        automatorsPurpleLightHover: "rgba(71, 43, 124, 0.1)",
        automatorsLightHover: "rgba(246,243,250)",
        borderColor: "rgb(129, 130, 165)",
        automatorsRed: "rgba(244, 98, 86, 1)",
        automatorsBlue: "rgba(29, 30, 57, 1)",
        automatorsBtnHover: 'rgba(237, 237, 237, 1)',
        whiteText: '#ffffff',
        grayHover: 'rgba(0, 0, 0, 0.1)'
      },
    },
  },
  plugins: [],
};
