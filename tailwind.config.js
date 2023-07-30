const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}", 
    "./src/theme/**/*.{js,ts,jsx,tsx}", 
    "./src/components/**/*.{js,ts,jsx,tsx}"
  ],
  darkMode: "class",
  theme: {
    colors: {
      gray: colors.gray,
      black: colors.black,
      white: colors.white,
      transparent: "transparent",
      current: "currentColor",
    },
    extend: {
      fontFamily: {
        sans: ["IBM Plex Sans", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
