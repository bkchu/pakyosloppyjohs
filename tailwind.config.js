const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      ivory: "var(--ivory)",
      pink: "var(--pink)",
      red: "var(--red)",
      blue: "var(--blue)",
      green: "var(--green)",
      yellow: "var(--yellow)",
      text: "var(--text)",
      "disabled-text": "var(--disabled-text)",
    },
    screens: {
      laptop: "1024px",
    },
    extend: {
      fontFamily: {
        serif: ["Publico", defaultTheme.fontFamily.serif],
        sans: ["Inter", defaultTheme.fontFamily.sans],
      },
      lineHeight: {
        golden: "1.618",
      },
      boxShadow: {
        // card: "",
        button: "0px 11px 31px rgba(162, 162, 162, 0.58), 0px 2.2px 5.0375px rgba(162, 162, 162, 0.29)",
        card:
          "0px 63px 112px rgba(0, 0, 0, 0.08), 0px 41px 66px rgba(0, 0, 0, 0.0607407), 0px 24px 35px rgba(0, 0, 0, 0.0485926), 0px 12px 18px rgba(0, 0, 0, 0.04), 0px 5px 9px rgba(0, 0, 0, 0.0314074), 0px 1px 4px rgba(0, 0, 0, 0.0192593)",
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
