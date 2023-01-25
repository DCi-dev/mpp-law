/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: "#2f2e2e",
      white: "#f3f3f3",
      primary: {
        100: "#F2E7D9",
        200: "#E1C9B6",
        300: "#D3B59A",
        400: "#C5A27F",
        500: "#B7A484",
        600: "#A48F6B",
        700: "#907B53",
        800: "#7D6138",
        900: "#5B4A2C",
      },
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
