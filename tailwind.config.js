/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  plugins: [],
  theme: {
    screens: {
      'sm': { max: "620px" },
      'md': { max: "767px" },
      'lg': { max: "1023px" },
      'xl': { max: "1279px" },
      '2xl': { max: "1535px" },
    },
  },
};
