const plugin = require("tailwindcss/plugin");

function half(value) {
  return value.replace(/\d+(.\d+)?/, (number) => number / 2);
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        raleway: ["'Raleway'", "sans-serif"],
      },
    },
  },
  plugins: [
    // plugin(({ addUtilities, e, theme, variants }) => {
    //   Object.entries(theme("gap")).forEach(([key, value]) =>
    //     addUtilities(
    //       {
    //         [`.flex-gap-${e(key)}`]: {
    //           marginTop: `-${half(value)}`,
    //           marginLeft: `-${half(value)}`,
    //           "& > *": {
    //             marginTop: half(value),
    //             marginLeft: half(value),
    //           },
    //         },
    //       },
    //       variants("gap")
    //     )
    //   );
    // }),
  ],
};
