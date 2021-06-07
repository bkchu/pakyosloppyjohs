const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      laptop: "1024px",
    },
    extend: {
      backgroundImage: {
        "yellow-filter":
          "linear-gradient(0deg, rgba(231, 190, 150, 0.2), rgba(231, 190, 150, 0.2))",
      },
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
      fontFamily: {
        serif: ["Publico", defaultTheme.fontFamily.serif],
        sans: ["Inter", defaultTheme.fontFamily.sans],
      },
      lineHeight: {
        golden: "1.618",
      },
      boxShadow: {
        // card: "",
        button:
          "0px 11px 31px rgba(162, 162, 162, 0.58), 0px 2.2px 5.0375px rgba(162, 162, 162, 0.29)",
        card:
          "0px 63px 112px rgba(0, 0, 0, 0.08), 0px 41px 66px rgba(0, 0, 0, 0.0607407), 0px 24px 35px rgba(0, 0, 0, 0.0485926), 0px 12px 18px rgba(0, 0, 0, 0.04), 0px 5px 9px rgba(0, 0, 0, 0.0314074), 0px 1px 4px rgba(0, 0, 0, 0.0192593)",
        photo:
          "0px 100px 80px rgba(0, 0, 0, 0.07), 0px 64.8148px 46.8519px rgba(0, 0, 0, 0.0531481), 0px 38.5185px 25.4815px rgba(0, 0, 0, 0.0425185), 0px 20px 13px rgba(0, 0, 0, 0.035), 0px 8.14815px 6.51852px rgba(0, 0, 0, 0.0274815), 0px 1.85185px 3.14815px rgba(0, 0, 0, 0.0168519)",
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
