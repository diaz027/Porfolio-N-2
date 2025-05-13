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
        "roboto-flex": ["Roboto Flex", "sans-serif"],
        "roboto-light": ["Roboto", "sans-serif"],
        "roboto-regular": ["Roboto", "sans-serif"],
        "roboto-medium-italic": ["Roboto", "sans-serif"],
      },
      colors: {
        "transparent-black": "rgb(0 0 0 / 50%)",
        "transparent-bg": "rgba(34, 34, 34, 0.5)",
      },
      animation: {
        'wave': 'wave 1.5s infinite',
        'float': 'float 3s ease-in-out infinite',
        'fadeIn': 'fadeIn 1s ease forwards',
        'slideInLeft': 'slideInLeft 1s ease forwards',
        'slideInRight': 'slideInRight 1s ease forwards',
      },
      keyframes: {
        wave: {
          '0%': { transform: 'rotate(0deg)' },
          '10%': { transform: 'rotate(14deg)' },
          '20%': { transform: 'rotate(-8deg)' },
          '30%': { transform: 'rotate(14deg)' },
          '40%': { transform: 'rotate(-4deg)' },
          '50%': { transform: 'rotate(10deg)' },
          '60%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
        float: {
          '0%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
          '100%': { transform: 'translateY(0px)' },
        },
        fadeIn: {
          'from': { opacity: '0', transform: 'translateY(20px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          'from': { opacity: '0', transform: 'translateX(-50px)' },
          'to': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          'from': { opacity: '0', transform: 'translateX(50px)' },
          'to': { opacity: '1', transform: 'translateX(0)' },
        },
      },
    },
    darkMode: "class",
    plugins: [nextui()],
  }} ;    