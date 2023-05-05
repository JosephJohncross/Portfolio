/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {},
      colors: {
        pri: "#000",
        sec: "#232B2B",
        pgreen: "#41B362",
        alt1: "#1b1c20",
      },
      boxShadow: {},
      screens: {
        small: "500px",
        ipad: "700px",
        mini: "900px",
        desktop: "1024px",
        large: "1280px",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        nunito: ['"Nunito Sans"', "sans-serif"],
        mont: ["Montserrat", "sans-serif"],
        outfit: ["Outfit", "sans-serif"],
      },
    },
  },
  plugins: [],
};
