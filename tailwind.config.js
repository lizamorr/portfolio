/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "permanent-marker": ["Permanent Marker", "sans-serif"],
      },
      backgroundImage: {
        dolomites: "url('/public/images/dolomites.webp')",
      },
    },
  },
  plugins: [],
};
