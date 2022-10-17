/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        automatorsPurple: "rgba(71, 43, 124, 1)",
        automatorsPurpleHover: "rgba(51, 23, 104, 1)",
        automatorsPurpleFocus: "rgba(31, 13, 84, 1)",
        automatorsTourquoise: "rgba(69, 156, 167,1)",
        automatorsTourquoiseHover: "rgba(49, 136, 147,1)",
        automatorsTourquoiseFocus: "rgba(29, 116, 127,1)",
        automatorsPurpleLightHover: "rgba(71, 43, 124, 0.1)",
        automatorsBlue: "rgba(29, 30, 57, 1)",
      },
    },
  },
  plugins: [],
};
