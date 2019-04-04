const space = [0, 4, 8, 16, 32, 64, 128, 256, 512];
const fontSizes = [12, 14, 16, 18, 24, 36, 48, 64];
const lineHeights = [18, 22, 24, 30, 36, 54, 72, 90];
const breakpoints = ["40em", "52em", "64em"];

const sizeScale = [18, 24, 36, 48, 64, 72, 96];

const opacities = [0.1, 0.35, 0.5, 0.65, 0.9];

const transparent = "transparent";

const trueBlack = "#000";
const black = "#101B2F";
const darkGray = "#344B66";
const mediumGray = "#778F9B";
const lightGray = "#B8C1CB";
const snow = "#DDE2E8";
const white = "#FAFAFA";
const trueWhite = "#FFF";

const blacks = [
  `rgba(0, 0, 0, ${opacities[0]})`,
  `rgba(0, 0, 0, ${opacities[1]})`,
  `rgba(0, 0, 0, ${opacities[2]})`,
  `rgba(0, 0, 0, ${opacities[3]})`,
  `rgba(0, 0, 0, ${opacities[4]})`
];

const whites = [
  `rgba(255, 255, 255, ${opacities[0]})`,
  `rgba(255, 255, 255, ${opacities[1]})`,
  `rgba(255, 255, 255, ${opacities[2]})`,
  `rgba(255, 255, 255, ${opacities[3]})`,
  `rgba(255, 255, 255, ${opacities[4]})`
];

const primary100 = "#C4D7F9";
const primary300 = "#8AB0F3";
const primary500 = "#518AEE";
const primary700 = "#365C9F";
const primary900 = "#1B2F51";

const success100 = "#D6EFDD";
const success300 = "#A3DCB1";
const success500 = "#7CCD90";
const success700 = "#3E7938";
const success900 = "#243E2B";

const warning100 = "#FBEAC6";
const warning300 = "#F6CE7A";
const warning500 = "#F3B942";
const warning700 = "#A3792D";
const warning900 = "#60432D";

const error100 = "#FAD9CF";
const error300 = "#F4A68F";
const error500 = "#EF815F";
const error700 = "#A2442B";
const error900 = "#722E1F";

const SYSTEM_FONTS =
  '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"';

const fonts = {
  copy: `"Muli", ${SYSTEM_FONTS}`,
  headings: `"Muli", ${SYSTEM_FONTS}`,
  special: `"Quicksand", ${SYSTEM_FONTS}`
};

const fontWeights = {
  regular: 400,
  bold: 700,
  extraBold: 800
};

const letterSpacings = {
  normal: "normal",
  spaced: "1px"
};

const radii = {
  normal: space[1],
  special: space[3],
  round: "1000em"
};

export default {
  // Base space sizes, font sizes (with respective line-heights), and @media breakpoints
  space,
  fontSizes,
  lineHeights,
  breakpoints,

  // Common sizes, often used in images and icons
  widths: sizeScale,
  maxWidths: sizeScale,
  heights: sizeScale,
  maxHeights: sizeScale,

  colors: {
    // Primary color (and tints/shades)
    primary: primary500,
    primaries: [primary100, primary300, primary500, primary700, primary900],

    // Success color (and tints/shades)
    success: success500,
    successes: [success100, success300, success500, success700, success900],

    // Warning color (and tints/shades)
    warning: warning500,
    warnings: [warning100, warning300, warning500, warning700, warning900],

    // Error color (and tints/shades)
    error: error500,
    errors: [error100, error300, error500, error700, error900],

    // Various gradients
    gradients: {
      primary: `linear-gradient(to bottom right, ${primary500}, #8A96FD)`
    },

    // Grays
    trueBlack,
    black,
    darkGray,
    mediumGray,
    lightGray,
    snow,
    white,
    trueWhite,

    // Grays with various opacities
    blacks,
    whites,

    // Transparent helper color
    transparent
  },
  colorStyles: {
    // TODO: Need to set color styles
    warning: {
      color: "black",
      backgroundColor: "orange"
    },
    error: {
      color: "white",
      backgroundColor: "red"
    }
  },

  // Opacities (0 - 1)
  opacities,

  // Typography
  fonts,
  fontWeights,
  letterSpacings,
  textStyles: {
    // TODO: Need to set text styles
    smallCaps: {
      textTransform: "uppercase",
      letterSpacing: letterSpacings.small,
      fontSize: fontSizes[1]
    },
    caps: {
      textTransform: "uppercase",
      letterSpacing: letterSpacings.large,
      fontSize: fontSizes[2]
    }
  },

  // Borders
  borders: {},

  // Radii
  radii,

  // Drop shadows
  shadows: {
    normal: `${space[0]} ${space[1]} ${space[3]} ${space[0]} ${blacks[0]}`
  },

  // Various z-indexes
  zIndicies: {},

  // TODO: Need to set button styles
  buttons: {
    primary: {
      color: white,
      backgroundColor: primary500,
      "&:hover": {
        backgroundColor: primary700
      }
    },
    secondary: {
      color: black,
      backgroundColor: snow,
      "&:hover": {
        backgroundColor: lightGray
      }
    },
    success: {
      color: white,
      backgroundColor: success500,
      "&:hover": {
        backgroundColor: success700
      }
    },
    warning: {
      color: white,
      backgroundColor: warning500,
      "&:hover": {
        backgroundColor: warning700
      }
    },
    error: {
      color: white,
      backgroundColor: error500,
      "&:hover": {
        backgroundColor: error700
      }
    }
  }
};
