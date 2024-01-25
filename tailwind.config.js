/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#C89D66",
        secondary: "#333642",
        navbar: "#162542",
<<<<<<< HEAD
        grey: "#9D9D9D",
=======
        secondaryBlur: "#16254299",
>>>>>>> 919214501f61094e55eb30ca5e95310d37831d1a
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/landing/landing-hero.png')",
        "avocats-pattern": "url('/src/assets/landing/avocat-bg.png')",
        "logo-pattern": "url('/src/assets/landing/semilogo.png')",
      },
    },
  },
  plugins: [],
};
