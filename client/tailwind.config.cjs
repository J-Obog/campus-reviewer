/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      spacing: {
        118: "472px",
        139: "556px",
      },
      colors: {
        "card-dark": "rgb(18, 18, 18)",
      },
    },
  },
  plugins: [require("daisyui"), require("prettier-plugin-tailwindcss")],
  daisyui: {
    themes: ["winter", "night"],
    darkTheme: "night",
  },
};
