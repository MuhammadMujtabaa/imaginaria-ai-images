/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      Poppins_light: ["Poppins-Light", "sans-serif"],
      Poppins_regular: ["Poppins-Regular", "sans-serif"],
      Poppins_semiBold: ["Poppins-SemiBold", "sans-serif"],
      Poppins_medium: ["Poppins-Medium", "sans-serif"],
      Poppins_bold: ["Poppins-Bold", "sans-serif"],
    },
  },
  plugins: [],
};
