/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      smg: "1023px",
      lg: "1025px",
      xl: "1300px",
      xxl: "1440px",
      sm: "700px",
      md: "810px",
      mdh: "910px",
    },
    extend: {
      transformOrigin: {
        0: "0%",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { width: "200px" },
          "50%": { width: "280px" },
        },
        wiggle2: {
          "0%, 100%": { width: "300px" },
          "50%": { width: "200px" },
        },
      },
      animation: {
        wiggle: "wiggle 5s ease-in-out infinite",
        wiggle2: "wiggle2 5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
