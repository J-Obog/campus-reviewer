/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui"), require('prettier-plugin-tailwindcss')],
  daisyui: {
    themes: ["winter", "night"],
    darkTheme: "winter"
  }
}
