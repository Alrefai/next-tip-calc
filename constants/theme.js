import { mergeDeepRight, map, pathOr } from 'ramda'
import preset from '@rebass/preset'
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
}

const getColorCode = color => pathOr(color, color.split(`.`), COLORS)
const withColors = map(getColorCode)

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
  muted: preset.colors.muted,
})

// gradient color degree
const degree = `19`

const gradient = ({ colors: { primary, secondary } }) =>
  `linear-gradient(${degree || 90}deg, ${primary}, ${secondary})`

const circle = {
  p: 0,
  size: 52,
  borderRadius: `circle`,
  display: `flex`,
  justifyContent: `center`,
  alignItems: `center`,
}

const hover = {
  ':hover,:focus': {
    color: [``, `primary`],
    outline: `none`,
    boxShadow: [``, `0 0 0 2px`],
  },
}

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

const withShadow = ({
  preSet = `0 0 4px`,
  color = `#000000`,
  alpha = `0.125`,
} = {}) => ({ colors: { [color]: themeColor } }) => {
  // get hex color code from selected variable theme color
  // e.g. `var(--theme-ui-colors-background,#000000)`
  const hexColor = (themeColor
    ? themeColor.match(/(#\w+?)(?=\))/g)[0]
    : getColorCode(color)
  ).replace(`#`, `0x`)

  // Convert hex color code to RGB
  // https://stackoverflow.com/a/55858933/9185553
  const { red, green, blue } = {
    red: (hexColor >> 16) & 0xff,
    green: (hexColor >> 8) & 0xff,
    blue: hexColor & 0xff,
  }

  return `${preSet} rgba(${red}, ${green}, ${blue}, ${alpha})`
}

export const theme = mergeDeepRight(preset, {
  initialColorMode: `neon`,
  useCustomProperties: true,
  radii: { card: 15 },
  animationName: { grow, fadeIn, fadeOut },
  withShadow,

  fonts: {
    body: `Fira Mono, monospace`,
    heading: `Fira Mono, monospace`,
    monospace: `Fira Mono, monospace`,
  },

  colors: {
    ...neon,
    modes: {
      dracula,
      eclectus,
    },
  },

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
      ...hover,
      circle: {
        ...preset.buttons.outline,
        ...circle,
        ...hover,
      },
    },

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
