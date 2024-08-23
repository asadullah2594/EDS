const token = require("./src/utils/token.json"); // Adjust the path as needed

export const content = ["./src/**/*.{js,jsx,ts,tsx}"];
export const theme = {
  container: {
    center: true,
    padding: "2rem",
    screens: {
      "2xl": "1400px",
    },
  },
  extend: {
    colors: {
      primary: Object.fromEntries(
        Object.entries(token.colors.primary).map(([key, value]) => [key, value])
      ),
      grey: Object.fromEntries(
        Object.entries(token.colors.gray).map(([key, value]) => [key, value])
      ),
      bluee: Object.fromEntries(
        Object.entries(token.colors.blue).map(([key, value]) => [key, value])
      ),
      white: Object.fromEntries(
        Object.entries(token.colors.base.white).map(([key, value]) => [
          key,
          value,
        ])
      ),
      // gray: Object.fromEntries(
      //   Object.entries(token.colors.gray).map(([key, value]) => [key, value])
      // ),
    },
    fontSize: Object.fromEntries(
      Object.entries(token.fontSize).map(([key, value]) => [key, value.value])
    ),

    letterSpacing: Object.fromEntries(
      Object.entries(token.letterSpacing).map(([key, value]) => [
        key,
        value.value,
      ])
    ),
    paragraphSpacing: Object.fromEntries(
      Object.entries(token.paragraphSpacing).map(([key, value]) => [
        key,
        value.value,
      ])
    ),
    font: Object.fromEntries(
      Object.entries(token.font).map(([key, value]) => [key, value.value])
    ),
    width: Object.fromEntries(
      Object.entries(token.width).map(([key, value]) => [key, value.value])
    ),
    "border-width": Object.fromEntries(
      Object.entries(token["border-width"]).map(([key, value]) => [
        key,
        value.value,
      ])
    ),
    breakpoint: Object.fromEntries(
      Object.entries(token.breakpoint).map(([key, value]) => [key, value.value])
    ),
    breakpoint: Object.fromEntries(
      Object.entries(token.breakpoint).map(([key, value]) => [key, value.value])
    ),
    fontFamily: Object.fromEntries(
      Object.entries(token.fontFamilies).map(([key, value]) => [
        key,
        value.value,
      ])
    ),
    fontWeight: Object.fromEntries(
      Object.entries(token.fontWeights).map(([key, value]) => [
        key,
        value.value,
      ])
    ),
    spacing: Object.fromEntries(
      Object.entries(token.letterSpacing).map(([key, value]) => [
        key,
        value.value,
      ])
    ),
    lineHeight: Object.fromEntries(
      Object.entries(token.lineHeights).map(([key, value]) => [
        key,
        value.value,
      ])
    ),

    // opacity: Object.fromEntries(
    //   Object.entries(token.opacity).map(([key, value]) => [key, value.value])
    // ),
    paragraphIndent: Object.fromEntries(
      Object.entries(token.paragraphIndent).map(([key, value]) => [
        key,
        value.value,
      ])
    ),
    paragraphSpacing: Object.fromEntries(
      Object.entries(token.paragraphSpacing).map(([key, value]) => [
        key,
        value.value,
      ])
    ),
    radius: Object.fromEntries(
      Object.entries(token.radius).map(([key, value]) => [key, value.value])
    ),
    shadow: Object.fromEntries(
      Object.entries(token.shadow).map(([key, value]) => [key, value.value])
    ),
  },
  variants: {
    extend: {
      backgroundColor: ["checked", "peer-checked"],
    },
  },
};
export const plugins = [
  require("@tailwindcss/forms"),
  // require("tailwindcss"),
  // require("autoprefixer"),
];
