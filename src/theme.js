const space = [0, 4, 8, 16, 32, 64, 128, 256, 512];
const fontSizes = [12, 14, 16, 18, 24, 30, 36, 48, 64];
const lineHeights = {
  normal: 1.25,
  title: 1.5,
  paragraph: 1.75
};
const breakpoints = ['40em', '64em', '80em'];
const media = {
  tablet: `@media screen and (min-width: ${breakpoints[0]})`,
  desktop: `@media screen and (min-width: ${breakpoints[1]})`,
  widescreen: `@media screen and (min-width: ${breakpoints[2]})`
};

const sizeScale = [18, 24, 36, 48, 64, 72, 96, 128];

const opacities = [0.1, 0.35, 0.5, 0.65, 0.8];

const transparent = 'transparent';

const trueBlack = '#000';
const black = '#101B2F';
const darkGray = '#344B66';
const mediumGray = '#778F9B';
const lightGray = '#B8C1CB';
const snow = '#DDE2E8';
const white = '#FAFAFA';
const trueWhite = '#FFF';

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

const primary100 = '#C4D7F9';
const primary300 = '#8AB0F3';
const primary500 = '#518AEE';
const primary700 = '#365C9F';
const primary900 = '#1B2F51';

const success100 = '#D6EFDD';
const success300 = '#A3DCB1';
const success500 = '#7CCD90';
const success700 = '#3E7938';
const success900 = '#243E2B';

const warning100 = '#FBEAC6';
const warning300 = '#F6CE7A';
const warning500 = '#F3B942';
const warning700 = '#A3792D';
const warning900 = '#60432D';

const error100 = '#FAD9CF';
const error300 = '#F4A68F';
const error500 = '#EF815F';
const error700 = '#A2442B';
const error900 = '#722E1F';

const SYSTEM_FONTS =
  '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"';

const fonts = {
  main: `"Muli", ${SYSTEM_FONTS}`,
  special: `"Quicksand", ${SYSTEM_FONTS}`
};

const fontWeights = {
  regular: 400,
  bold: 700,
  extraBold: 800
};

const letterSpacings = {
  normal: 'normal',
  spaced: '1px'
};

const radii = {
  normal: space[1],
  special: space[3],
  round: '1000em'
};

const shadows = {
  normal: `${space[0]}px ${space[1]}px ${space[2]}px ${space[0]}px ${
    blacks[0]
  }`,
  heavy: `${space[0]}px ${space[2]}px ${space[3]}px ${space[0]}px ${blacks[0]}`
};

export default {
  // ----- MAIN THEME -----

  // Base space sizes, font sizes (with respective line-heights), and @media breakpoints
  space,
  fontSizes,
  lineHeights,
  breakpoints,
  media,

  // Common sizes, often used in images and icons
  widths: sizeScale,
  maxWidths: sizeScale,
  heights: sizeScale,
  maxHeights: sizeScale,

  colors: {
    // Primary color (and tints/shades)
    primary: primary500,
    primary100,
    primary300,
    primary500,
    primary700,
    primary900,

    // Success color (and tints/shades)
    success: success500,
    success100,
    success300,
    success500,
    success700,
    success900,

    // Warning color (and tints/shades)
    warning: warning500,
    warning100,
    warning300,
    warning500,
    warning700,
    warning900,

    // Error color (and tints/shades)
    error: error500,
    error100,
    error300,
    error500,
    error700,
    error900,

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
    transparent,

    // Social media
    facebook: '#3B5998',
    facebookHover: '#22407F',
    twitter: '#38A1F3',
    twitterHover: '#1F88DA'
  },

  // Opacities (0 - 1)
  opacities,

  // Typography
  fonts,
  fontWeights,
  letterSpacings,

  // Borders
  borders: {},

  // Radii
  radii,

  // Drop shadows
  shadows,

  // Animations
  animations: {
    fast: '200ms',
    brisk: '500ms',
    lazy: '1000ms'
  },

  // Various z-indexes
  zIndicies: {
    baseline: 0,
    messages: 100,
    header: 200,
    tooltip: 800,
    notifications: 900,
    dialog: 1000
  },

  // ----- VARIANTS -----
  // All of our color variants (links and their hovers)
  colorStyles: {
    primary: { color: primary500, '&:hover': { color: primary700 } },
    success: { color: success500, '&:hover': { color: success700 } },
    warning: { color: warning500, '&:hover': { color: warning700 } },
    error: { color: error500, '&:hover': { color: error700 } },
    white: { color: white, '&:hover': { color: lightGray } },
    snow: { color: snow, '&:hover': { color: lightGray } },
    lightGray: { color: lightGray, '&:hover': { color: mediumGray } },
    mediumGray: { color: mediumGray, '&:hover': { color: darkGray } },
    darkGray: { color: darkGray, '&:hover': { color: black } },
    black: { color: black, '&:hover': { color: trueBlack } }
  },

  // All of our text variants
  textStyles: {
    h1: {
      fontSize: fontSizes[6],
      [media.desktop]: { fontSize: fontSizes[7] }
    },
    h2: {
      fontSize: fontSizes[5],
      [media.desktop]: { fontSize: fontSizes[6] }
    },
    h3: {
      fontSize: fontSizes[4],
      [media.desktop]: { fontSize: fontSizes[5] }
    },
    h4: {
      fontSize: fontSizes[3],
      [media.desktop]: { fontSize: fontSizes[4] }
    },
    h5: {
      fontSize: fontSizes[2],
      [media.desktop]: { fontSize: fontSizes[3] }
    },
    h6: {
      fontSize: fontSizes[1],
      [media.desktop]: { fontSize: fontSizes[2] }
    }
  },

  // All of our button variants
  buttons: {
    primary: {
      color: white,
      backgroundColor: primary500,
      '&:hover': {
        backgroundColor: primary700
      }
    },
    secondary: {
      color: black,
      backgroundColor: snow,
      '&:hover': {
        backgroundColor: lightGray
      }
    },
    success: {
      color: white,
      backgroundColor: success500,
      '&:hover': {
        backgroundColor: success700
      }
    },
    warning: {
      color: white,
      backgroundColor: warning500,
      '&:hover': {
        backgroundColor: warning700
      }
    },
    error: {
      color: white,
      backgroundColor: error500,
      '&:hover': {
        backgroundColor: error700
      }
    }
  },

  // All of our card variants
  cards: {
    paper: {
      color: black,
      backgroundColor: white,
      boxShadow: shadows.normal,
      borderRadius: radii.normal
    },
    wizard: {
      [media.desktop]: {
        color: black,
        backgroundColor: white,
        boxShadow: shadows.heavy,
        borderRadius: radii.normal
      }
    },
    note: {
      color: mediumGray,
      backgroundColor: white,
      borderRadius: radii.normal
    }
  }
};
