const { withMaterialColors } = require("tailwind-material-colors");

/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
  darkMode: 'selector',
};

module.exports = withMaterialColors(
  config,
  { primary: "#3BCEAC" },
  { scheme: "content" },
);
