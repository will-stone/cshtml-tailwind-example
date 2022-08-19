// @ts-check
/* eslint-disable sort-keys */
/* eslint-disable unicorn/prefer-module */

const defaultTheme = require("tailwindcss/defaultTheme")

/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    colors: {
      // These are meta utility colors from Tailwind
      "current": "currentColor",
      "inherit": "inherit",
      "transparent": "transparent",

      // https://rs-components.atlassian.net/wiki/spaces/ION/pages/3690266907/Colors
      "brand-highlight": "#69141E",
      "brand-human": "#FF8282",
      "brand-midtone": "#A00F28",
      "brand-rs": "#EF0000",
      "brand-shadow": "#32000F",

      "blue-50": "#C7DAFD",
      "blue-100": "#9DBCF7",
      "blue-200": "#78A0ED",
      "blue-300": "#5886DF",
      "blue-400": "#3E70CD",
      "blue-500": "#2558BB",
      "blue-600": "#1545A3",
      "blue-700": "#0A3486",
      "blue-800": "#042565",
      "blue-900": "#01153E",
      "green-50": "#D5F5CE",
      "green-100": "#ABEB9E",
      "green-200": "#82E16E",
      "green-300": "#61D448",
      "green-400": "#41C823",
      "green-500": "#20B614",
      "green-600": "#00A505",
      "green-700": "#008711",
      "green-800": "#00691E",
      "green-900": "#00340F",
      "mono-50": "#F5F5F5",
      "mono-100": "#E9E9E9",
      "mono-200": "#BEBEBE",
      "mono-300": "#949494",
      "mono-400": "#6E6E6E",
      "mono-500": "#4F4F4F",
      "mono-600": "#393939",
      "mono-700": "#272727",
      "mono-800": "#1F1F1F",
      "mono-900": "#111111",
      "plum-800": "#631F73",
      "purple-50": "#ECDFFF",
      "purple-100": "#DABFFF",
      "purple-200": "#C8A0FF",
      "purple-300": "#B987FF",
      "purple-400": "#AA6EFF",
      "purple-500": "#9D55FF",
      "purple-600": "#913CFF",
      "purple-700": "#8232ED",
      "purple-800": "#7328DC",
      "purple-900": "#39146E",
      "teal-50": "#C6F3EC",
      "teal-100": "#8DE7DA",
      "teal-200": "#55DCC8",
      "teal-300": "#2AD4C3",
      "teal-400": "#00CDBE",
      "teal-500": "#00B1AA",
      "teal-600": "#009696",
      "teal-700": "#007A7F",
      "teal-800": "#005F69",
      "teal-900": "#002F34",
      "yellow-50": "#FFF5C8",
      "yellow-100": "#FFEB91",
      "yellow-200": "#FFE15A",
      "yellow-300": "#FFD72D",
      "yellow-400": "#FFCD00",
      "yellow-500": "#FFB900",
      "yellow-600": "#FFA500",
      "yellow-700": "#EB8402",
      "yellow-800": "#D76405",
      "yellow-900": "#6B3102",

      "black": "#000000",
      "white": "#FFFFFF",
    },

    // https://rs-components.atlassian.net/wiki/spaces/ION/pages/3724673567/Spacing
    spacing: {
      0: "0px",
      0.5: "0.125rem",
      1: "0.25rem",
      1.5: "0.375rem",
      2: "0.5rem",
      2.5: "0.625rem",
      3: "0.75rem",
      3.5: "0.875rem",
      4: "1rem",
      5: "1.25rem",
      6: "1.5rem",
      7: "1.75rem",
      8: "2rem",
      9: "2.25rem",
      10: "2.5rem",
      11: "2.75rem",
      12: "3rem",
      14: "3.5rem",
      16: "4rem",
      20: "5rem",
      24: "6rem",
      28: "7rem",
      32: "8rem",
      36: "9rem",
      40: "10rem",
      44: "11rem",
      48: "12rem",
      52: "13rem",
      56: "14rem",
      60: "15rem",
      64: "16rem",
      72: "18rem",
      80: "20rem",
      96: "24rem",
    },

    // https://rs-components.atlassian.net/wiki/spaces/ION/pages/3729915923/Screens
    screens: {
      "md": "768px",
      "lg": "1024px",
      "xl": "1366px",
      "2xl": "1920px",
    },

    // TODO add brand fonts once implementation has been decided: https://rs-components.atlassian.net/wiki/spaces/ION/pages/3724247424/Typography#Brand-Fonts
    fontFamily: {
      ...defaultTheme?.fontFamily,
      sans: ["Roboto", "Arial", "Helvetica", "sans-serif"],
    },

    // https://rs-components.atlassian.net/wiki/spaces/ION/pages/3724247424/Typography#Font-Sizes
    fontSize: {
      "xs": ["0.75rem", { lineHeight: "1rem" }],
      "sm": ["0.875rem", { lineHeight: "1.25rem" }],
      "base": ["1rem", { lineHeight: "1.5rem" }],
      "lg": ["1.125rem", { lineHeight: "1.75rem" }],
      "xl": ["1.25rem", { lineHeight: "1.75rem" }],
      "2xl": ["1.5rem", { lineHeight: "2rem" }],
      "3xl": ["1.875rem", { lineHeight: "2.25rem" }],
      "4xl": ["2.25rem", { lineHeight: "2.5rem" }],
      "5xl": ["3rem", { lineHeight: "1" }],
      "6xl": ["3.75rem", { lineHeight: "1" }],
      "7xl": ["4.5rem", { lineHeight: "1" }],
      "8xl": ["6rem", { lineHeight: "1" }],
      "9xl": ["8rem", { lineHeight: "1" }],
    },

    // https://rs-components.atlassian.net/wiki/spaces/ION/pages/3724247424/Typography#Leading-(Line-Height)
    lineHeight: {
      none: "1",
      tight: "1.25",
      snug: "1.375",
      normal: "1.5",
      relaxed: "1.625",
      loose: "2",
    },

    // https://rs-components.atlassian.net/wiki/spaces/ION/pages/3724247424/Typography#Tracking-(Letter-Spacing)
    letterSpacing: {
      tighter: "-0.05em",
      tight: "-0.025em",
      normal: "0em",
      wide: "0.025em",
      wider: "0.05em",
      widest: "0.1em",
    },

    // https://tailwindcss.com/docs/container
    container: {
      // https://tailwindcss.com/docs/container#centering-by-default
      center: true,
    },
  },
}
