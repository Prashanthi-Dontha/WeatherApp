/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        "2xs": "378px",
        "3xs": "320px",
        mxs: "424px",
        xs: "474px",
        ...defaultTheme.screens,
      },
      fontFamily: {
        poppinsRegular: ["PoppinsRegular", "sans-serif"],
        poppinsItalic: ["PoppinsItalic", "sans-serif"],
        poppinsBold: ["PoppinsBold", "sans-serif"],
      },
    },
  },
  plugins: [],
};
