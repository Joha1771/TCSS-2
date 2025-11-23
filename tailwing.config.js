// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "100%",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      "2xl": "1600px",
    },
    extend: {
      container: {
        center: true,
        padding: "1rem",
      },
      fontFamily: {
            montserrat: ['Montserrat', 'sans-serif'], // Fallback to sans-serif
          },
    },
  },
  plugins: [],
};
