import { Theme } from 'theme-ui'
import { Property } from 'csstype'
import { withThemeGradient } from '../utils'

/**
 * Colors Pallet:
 * All colors must be defined with 6 digits hex color code.
 *
 * Colors were partially obtained from: https://github.com/mrmrs/colors
 */
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

  // my custom colors
  nearWhite: `#F4F4F4`,
  trueBlack: `#000000`,
  darkGray: `#333333`,
  magenta: `#FF00FF`,
  cyan: `#00FFFF`,

  // dracula colors: https://github.com/dracula/dracula-theme#color-palette
  dracula: {
    background: `#282a36`,
    selection: `#44475a`,
    foreground: `#f8f8f2`,
    comment: `#6272a4`,
    cyan: `#8be9fd`,
    green: `#50fa7b`,
    orange: `#ffb86c`,
    pink: `#ff79c6`,
    purple: `#bd93f9`,
    red: `#ff5555`,
    yellow: `#f1fa8c`,
  },
} as const

// Define theme color scales, theme modes and default theme mode
type ColorScales = `primary` | `secondary` | `text` | `background` | `muted`
type Modes = `neon` | `dracula` | `eclectus`
const defaultMode: Modes = `neon`
/* ~*~ */

type PropertyColor = Exclude<Property.Color, Property.All>
type ColorModes = Readonly<Record<ColorScales, PropertyColor>>

// Define theme colors for each mode
const colorModes: Readonly<Record<Modes, ColorModes>> = {
  neon: {
    text: COLORS.nearWhite,
    background: COLORS.trueBlack,
    primary: COLORS.cyan,
    secondary: COLORS.magenta,
    muted: COLORS.dracula.background,
  },

  dracula: {
    text: COLORS.dracula.foreground,
    background: COLORS.dracula.background,
    primary: COLORS.dracula.pink,
    secondary: COLORS.dracula.cyan,
    muted: COLORS.dracula.selection,
  },

  eclectus: {
    text: COLORS.dracula.selection,
    background: COLORS.nearWhite,
    primary: COLORS.blue,
    secondary: COLORS.red,
    muted: `#f6f6f9`,
  },
}
/* ~*~ */

const card = {
  p: 2,
  bg: `muted`,
  borderRadius: `default`,
} as const

const circle = {
  p: 0,
  size: 52,
  borderRadius: `circle`,
  display: `flex`,
  justifyContent: `center`,
  alignItems: `center`,
} as const

const primaryButton = {
  fontSize: 2,
  fontWeight: `bold`,
  color: `background`,
  bg: `primary`,
  borderRadius: `default`,
} as const

const secondaryButton = { ...primaryButton, bg: `secondary` } as const

const outlineButton = {
  ...primaryButton,
  color: `primary`,
  bg: `transparent`,
  boxShadow: `inset 0 0 2px`,
  ':hover,:focus': {
    color: [undefined, `primary`],
    outline: `none`,
    boxShadow: [undefined, `0 0 0 2px`],
  },
} as const

const primaryGradient = withThemeGradient<ColorScales>(`primary`, `secondary`)
const secondaryGradient = withThemeGradient<ColorScales>(`secondary`, `primary`)

const { [defaultMode]: initMode, ...otherModes } = colorModes

export const theme: Theme = {
  colors: { ...initMode, modes: { ...otherModes } },
  breakpoints: [`40em`, `52em`, `64em`],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  sizes: { container: 512, full: `100%` },
  radii: { default: 4, circle: 99999, card: 15 },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
  fontWeights: { body: 400, heading: 700, bold: 700 },
  lineHeights: { body: 1.5, heading: 1.25 },

  fonts: {
    body: `Fira Mono, monospace`,
    heading: `Fira Mono, monospace`,
    monospace: `Fira Mono, monospace`,
  },

  cards: {
    default: { ...card },
    primary: { ...card, borderRadius: `card` },
    gradient: {
      ...card,
      borderRadius: `card`,
      backgroundImage: primaryGradient,
    },
  },

  buttons: {
    primary: { ...primaryButton, circle: { ...primaryButton, ...circle } },

    secondary: {
      ...secondaryButton,
      circle: { ...secondaryButton, ...circle },
    },

    outline: { ...outlineButton, circle: { ...outlineButton, ...circle } },

    transparent: {
      color: `inherit`,
      bg: `transparent`,
      ':hover,:focus': {
        color: `primary`,
        outline: `none`,
        boxShadow: `0 0 0 2px`,
      },
    },
  },

  styles: {
    root: {
      fontFamily: `body`,
      fontWeight: `body`,
      lineHeight: `body`,
      color: `text`,
      bg: `background`,
    },
    hr: {
      primary: { backgroundImage: primaryGradient },
      secondary: { backgroundImage: secondaryGradient },
    },
  },
}

export const modes = Object.keys(colorModes) as ReadonlyArray<Modes>
