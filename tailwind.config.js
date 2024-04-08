/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
        "roboto-light": ["Roboto", "sans-serif"],
        "roboto-regular": ["Roboto", "sans-serif"],
        "roboto-medium-italic": ["Roboto", "sans-serif"],
      },
      colors: {
        "transparent-black": "rgb(0 0 0 / 50%)",
        "transparent-bg": "rgba(34, 34, 34, 0.5)",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
