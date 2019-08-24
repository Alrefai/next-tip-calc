import { mergeDeepRight } from 'ramda'
import preset from '@rebass/preset'

/* Rebass styled-system reference

Preset repo:
https://github.com/rebassjs/rebass/blob/master/packages/preset/src/index.js

Default Breakpoints
const breakpoints = [ '40em', '52em', '64em' ]
@media screen and (min-width: 40em)
@media screen and (min-width: 52em)
@media screen and (min-width: 64em)

Default fontSizes
const fontSizes = [ 12, 14, 16, 20, 24, 32, 48, 64, 96 ]

Default space for margin and padding
const space = [ 0, 4, 8, 16, 32, 64, 128, 256, 512 ]
*/

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
  black: `#111111`,
  silver: `#DDDDDD`,
  gray: `#AAAAAA`,
  white: `#FFFFFF`,
  // my custome colors
  nearWhite: `#F4F4F4`,
  trueBlack: `#000000`,
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

// Theme colors selection
const { nearWhite, trueBlack, cyan, magenta, dBackground } = COLORS

const colors = {
  text: nearWhite,
  background: trueBlack,
  primary: cyan,
  secondary: magenta,
  muted: dBackground,
  modes: {},
}

// gradient color degree
const degree = `19`

const gradient = ({ colors: { primary, secondary } }) =>
  `linear-gradient(${degree || 90}deg, ${primary}, ${secondary})`

const circle = {
  p: 0,
  size: 52,
  borderRadius: `circle`,
}

export const theme = mergeDeepRight(preset, {
  useCustomProperties: true,
  fonts: {
    body: `Fira Mono, monospace`,
    heading: `Fira Mono, monospace`,
    monospace: `Fira Mono, monospace`,
  },
  colors,
  buttons: {
    primary: {
      circle: {
        ...preset.buttons.primary,
        ...circle,
      },
    },
    secondary: {
      circle: {
        ...preset.buttons.secondary,
        ...circle,
      },
    },
    outline: {
      circle: {
        ...preset.buttons.outline,
        ...circle,
      },
    },
  },
  radii: { card: 15 },
  variants: {
    card: {
      borderRadius: `default`,
      gradient: {
        ...preset.variants.card,
        borderRadius: `card`,
        backgroundImage: gradient,
      },
    },
    bar: {
      margin: 0,
      border: 0,
      height: 2,
      backgroundImage: gradient,
    },
  },
  styles: {
    root: {
      fontFamily: `monospace`,
      color: `text`,
      bg: `background`,
    },
  },
})
