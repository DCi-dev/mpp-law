/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: "#2f2e2e",
      white: "#f3f3f3",
      gold: "#b7a484",
    },
    fontFamily: {
      display: ["Playfair Display", "serif"],
      body: ["Raleway", "sans-serif"],
    },
    extend: {
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      backgroundImage: {
        "hero-image": "url('/assets/images/palatul-culturii-iasi.jpg')",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/typography"),
  ],
};
