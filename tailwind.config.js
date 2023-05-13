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
      boxShadow: {
        'shadow1': "0px 0px 45px 18px rgba(245, 158, 11, 0.3)",
        'shadow2': "0px 0px 48px 18px rgba(245, 158, 11, 0.5)",
        'shadow3': "0px 0px 48px 18px rgba(65, 179, 98, 0.3)",
      },
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
