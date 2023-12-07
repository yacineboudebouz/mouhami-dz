/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#C89D66",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/landing/landing-hero.png')",
      },
    },
  },
  plugins: [],
};
