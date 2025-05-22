/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FFD600",
        lightGray: "#F3F3F3",
      },
    },
  },
  plugins: [],
  presets: [require("nativewind/preset")],
}