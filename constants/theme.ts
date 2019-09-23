import { map, pathOr } from 'ramda'
import { keyframes } from '@emotion/core'

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

// All colors must be defined with 6 digits hex color code
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

export const modes = [`neon`, `dracula`, `eclectus`] as const

const [initMode, ...otherModes] = modes
const fontSizes = [12, 14, 16, 20, 24, 32, 48, 64, 96] as const
const space = [0, 4, 8, 16, 32, 64, 128, 256, 512] as const

type InitMode = { readonly initialColorMode: typeof initMode }
type Modes = typeof otherModes[number]
type FontSizes = typeof fontSizes
type Space = typeof space

type Mode = {
  readonly text: string // Body foreground color
  readonly background: string // Body background color
  readonly primary: string // Primary brand color for links, buttons, etc.
  readonly secondary: string // A secondary brand color for alternative styling
  readonly muted: string // A faint color for backgrounds, borders, and accents
}

type Colors = Mode & {
  readonly [key: string]: string | object
  readonly modes: Record<Modes, Mode> // modes: { [key in Modes]: Mode }
}

type Theme = InitMode & {
  readonly [key: string]: string | boolean | object
  readonly useCustomProperties: true // ! must be true
  readonly colors: Colors
  readonly fontSizes: FontSizes
  readonly space: Space
}

const getColorCode = (color: string): string =>
  pathOr(color, color.split(`.`), COLORS)

const withColors: (mode: Mode) => Mode = map<Mode, Mode>(getColorCode)

const neon = withColors({
  text: `nearWhite`,
  background: `trueBlack`,
  primary: `cyan`,
  secondary: `magenta`,
  muted: `dracula.background`,
})

const dracula = withColors({
  text: `dracula.foreground`,
  background: `dracula.background`,
  primary: `dracula.pink`,
  secondary: `dracula.cyan`,
  muted: `dracula.selection`,
})

const eclectus = withColors({
  text: `dracula.selection`,
  background: `nearWhite`,
  primary: `blue`,
  secondary: `red`,
  muted: `#f6f6f9`,
})

const gradient = ({ colors: { primary, secondary } }: Theme): string =>
  `linear-gradient(19deg, ${primary}, ${secondary})`

const card = {
  p: 2,
  bg: `background`,
  boxShadow: `card`,
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
    color: [``, `primary`],
    outline: `none`,
    boxShadow: [``, `0 0 0 2px`],
  },
} as const

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`

const grow = keyframes`
  from {
    transform: scaleX(0);
  }
  to {
    transform: scaleX(1);
  }
`

type RGB = {
  readonly red: number
  readonly green: number
  readonly blue: number
}

const hexToRGB = (color: string): RGB => {
  // get hex color code from selected variable theme color
  // e.g. `var(--theme-ui-colors-background,#000000)`
  const themeColor = color.match(/(#\w+?)(?=\))/g)

  const hexColor = parseInt(
    (themeColor ? themeColor[0] : getColorCode(color)).replace(`#`, `0x`),
  )

  // Convert hex color code to RGB
  // https://stackoverflow.com/a/55858933/9185553
  return {
    red: (hexColor >> 16) & 0xff,
    green: (hexColor >> 8) & 0xff,
    blue: hexColor & 0xff,
  }
}

const withShadow = ({
  preSet = `0 0 4px`,
  color = `#000000`,
  alpha = `0.125`,
} = {}) => ({ colors: { [color]: themeColor } }: Theme): string => {
  const hexColor = themeColor ? (themeColor as string) : color
  const { red, green, blue } = hexToRGB(hexColor)

  return `${preSet} rgba(${red}, ${green}, ${blue}, ${alpha})`
}

export const theme: Theme = {
  initialColorMode: initMode,
  useCustomProperties: true,
  fontSizes,
  space,
  withShadow,
  animationName: { grow, fadeIn, fadeOut },

  colors: { ...neon, modes: { dracula, eclectus } },

  fonts: {
    body: `Fira Mono, monospace`,
    heading: `Fira Mono, monospace`,
    monospace: `Fira Mono, monospace`,
  },

  fontWeights: { body: 400, heading: 700, bold: 700 },

  lineHeights: { body: 1.5, heading: 1.25 },

  sizes: { avatar: 48 },

  radii: { default: 4, circle: 99999, card: 15 },

  text: {
    heading: {
      fontFamily: `heading`,
      lineHeight: `heading`,
      fontWeight: `heading`,
    },
    display: {
      fontFamily: `heading`,
      fontWeight: `heading`,
      lineHeight: `heading`,
      fontSize: [5, 6, 7],
    },
    caps: { textTransform: `uppercase`, letterSpacing: `0.1em` },
  },

  variants: {
    avatar: { width: `avatar`, height: `avatar`, borderRadius: `circle` },

    card: {
      ...card,
      gradient: { ...card, borderRadius: `card`, backgroundImage: gradient },
    },

    link: { color: `primary` },

    nav: {
      fontSize: 1,
      fontWeight: `bold`,
      display: `inline-block`,
      p: 2,
      color: `inherit`,
      textDecoration: `none`,
      ':hover,:focus,.active': { color: `primary` },
    },

    bar: { margin: 0, border: 0, height: 2, backgroundImage: gradient },
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
  },
}
