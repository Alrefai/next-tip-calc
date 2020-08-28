export const assertError = (message: string): never => {
  // eslint-disable-next-line functional/no-throw-statement
  throw new Error(message)
}

type HexExpander = (...args: readonly string[]) => string
const hexShorthandExpander: HexExpander = (_, r, g, b) => r + r + g + g + b + b
const hexShorthandRegEx = /^#?([\da-f])([\da-f])([\da-f])$/i
/**
 * Returns an array `[red, green, blue]` of RGB colors from supplied hex color.
 * > Works with shorthand hex triplets such as `#03F` (with or without `#`), too
 *
 * ---
 * https://stackoverflow.com/a/39077686/9185553
 */
const hexToRGB = (color: string): readonly number[] =>
  color
    .replace(hexShorthandRegEx, hexShorthandExpander)
    .replace(`#`, ``)
    .match(/.{2}/g)
    ?.map(item => Number.parseInt(item, 16)) ||
  assertError(`Could not convert provided hex color code to RGB: ${color}`)

type Colors = { readonly colors: Record<string, string> }
/**
 * Returns a box-shadow (css-property) string. if a valid theme color scale or
 * hex color (e.g. `#AAAAAA`) was provided as a prop, it will be converted from
 * `HEX` color to `RGB` color.
 *
 * @example
 * // --theme-ui-colors-primary: var(--theme-ui-colors-primary,#00FFFF);
 * withThemeShadow({ preSet: `0 0 8px`, color: `primary`, alpha: 0.15 })
 * // returns `0 0 8px rgba(0,255,255,0.15)`
 *
 * @example
 * withThemeShadow({ color: `#AAA` })
 * // returns `0 0 4px rgba(170,170,170,0.125)`
 *
 * @example
 * withThemeShadow()
 * // returns `0 0 4px rgba(0,0,0,0.125)`
 */
export const withThemeShadow = ({
  preSet = `0 0 4px`,
  color = `#000000`,
  alpha = 0.125,
} = {}) => ({ colors: { [color]: themeColor } }: Colors): string => {
  if (themeColor) {
    const hexColorRegEx = /#([\da-f]{6})/i
    const matchHexColor = hexColorRegEx.exec(themeColor)

    if (matchHexColor) {
      const hexColor = matchHexColor[0]
      const [red, green, blue] = hexToRGB(hexColor)
      return `${preSet} rgba(${red}, ${green}, ${blue}, ${alpha})`
    }

    return assertError(
      `Could not parse hex code from desired theme color: ${themeColor}`,
    )
  }

  if (!color.startsWith(`#`)) {
    return assertError(`Invalid theme color: ${color}`)
  }

  const [red = 0, green = 0, blue = 0] = hexToRGB(color)
  return `${preSet} rgba(${red}, ${green}, ${blue}, ${alpha})`
}

/**
 * Returns a linear gradient (two colors) string of provided theme color scales.
 *
 * @example
 * // --theme-ui-colors-secondary: var(--theme-ui-colors-secondary,#8be9fd);
 * // --theme-ui-colors-primary: var(--theme-ui-colors-primary,#ff79c6);
 * withThemeGradient(`secondary`, `primary`, 40)
 * // returns `linear-gradient(40deg,var(--theme-ui-colors-secondary,#8be9fd),var(--theme-ui-colors-primary,#ff79c6));`
 */
export const withThemeGradient = <T extends string>(
  colorA: T,
  colorB: T,
  deg = 19,
) => ({ colors: { [colorA]: a, [colorB]: b } }: Colors): string =>
  !a || !b
    ? assertError(`Invalid theme colors: ${a}, ${b}`)
    : `linear-gradient(${deg}deg, ${a}, ${b})`
