import { getFocusStyles } from "../utils/stylingUtils";

const colors = {
  white: "#ffffff",
  whiteGreen: "#EAFDEE",
  darkGreen: {
    700: "#014520",
    500: "#017939",
    400: "#0F8747",
    300: "#26965A",
    50: "#8DD9B0",
  },
  lightGreen: {
    500: "#68B92E",
    100: "#CDF9AE",
    50: "#E1FFCC",
  },
  darkYellow: {
    600: "#E6C10A",
    500: "#F9CF00",
  },
  orange: {
    500: "#F3AD31",
  },
  darkGray: {
    600: "#2B4034",
    300: "#739985",
  },
};

const utils = {
  keyboardFocusCss: getFocusStyles,
};

const theme = {
  colors,
  utils,
};

export default theme;
