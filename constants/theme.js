// Theme for text, background, buttons and cards' gradient backgroundImage
const textColor = `white`
const backgroundColor = `black`
const primaryButtonTextColor = `black`
const primaryColor = `cyan`
const secondaryColor = `magenta`
const degree = `19`

// Colors were partially obtained from: https://github.com/mrmrs/colors
const COLORS = {
  navy: `#001F3F`,
  blue: `#0074D9`,
  aqua: `#7FDBFF`,
  teal: `#39CCCC`,
  olive: `#3D9970`,
  green: `#2ECC40`,
  lime: `#01FF70`,
  yellow: `#FFDC00`,
  orange: `#FF851B`,
  red: `#FF4136`,
  fuchsia: `#F012BE`,
  purple: `#B10DC9`,
  maroon: `#85144B`,
  silver: `#DDDDDD`,
  gray: `#AAAAAA`,
  // my custome colors
  white: `#F4F4F4`,
  black: `#000000`,
  darkGray: `#333`,
  magenta: `#F0F`,
  cyan: `#0FF`,
  // dracula colors: https://github.com/dracula/dracula-theme#color-palette
  dBackground: `#282a36`,
  dSelection: `#44475a`,
  dForeground: `#f8f8f2`,
  dComment: `#6272a4`,
  dCyan: `#8be9fd`,
  dGreen: `#50fa7b`,
  dOrange: `#ffb86c`,
  dPink: `#ff79c6`,
  dPurple: `#bd93f9`,
  dRed: `#ff5555`,
  dYellow: `#f1fa8c`,
}

// Rebass styled-system reference
//
// Default Breakpoints
// const breakpoints = [ '40em', '52em', '64em' ]
// @media screen and (min-width: 40em)
// @media screen and (min-width: 52em)
// @media screen and (min-width: 64em)
//
// Default fontSizes
// const fontSizes = [ 12, 14, 16, 20, 24, 32, 48, 64, 72 ]
//
// Default space for margin and padding
// const space = [ 0, 4, 8, 16, 32, 64, 128, 256, 512 ]
//
// Variants
const {
  [textColor]: color = `white`,
  [backgroundColor]: background = `black`,
  [primaryButtonTextColor]: buttonText = `black`,
  [primaryColor]: primary = `cyan`,
  [secondaryColor]: secondary = `magenta`,
} = COLORS
const gradient = `linear-gradient(${degree || 90}deg, ${primary}, ${secondary})`
const cards = { primary: { backgroundImage: gradient }}
const buttons = {
  primary: {
    color: buttonText,
    backgroundColor: primary,
  },
  outline: {
    color: primary,
    backgroundColor: `transparent`,
    boxShadow: `inset 0 0 0 2px`,
  },
}
//-*-//

export const theme = {
  colors: { ...COLORS, color, background, primary, secondary },
  gradient,
  buttons,
  cards
}
