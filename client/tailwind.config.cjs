/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        "118": "472px",
        "139": "556px"
      },
    },
  },
  plugins: [require("daisyui"), require('prettier-plugin-tailwindcss')],
  daisyui: {
    themes: ["winter", "night"],
    darkTheme: "winter"
  }
}
