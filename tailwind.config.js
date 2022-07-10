/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        raleway: ["'Raleway'", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwindcss-hyphens")],
};
