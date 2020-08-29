import { SVGProps } from 'react'

const svgProps: SVGProps<SVGSVGElement> = {
  viewBox: `0 0 32 32`,
  width: `24`,
  height: `24`,
  fill: `currentcolor`,
  style: { display: `block` },
}

const circleProps: SVGProps<SVGCircleElement> = {
  cx: `16`,
  cy: `16`,
  r: `14`,
  fill: `none`,
  stroke: `currentcolor`,
  strokeWidth: `4`,
}

const pathProps: SVGProps<SVGPathElement> = {
  d: `
    M 16 0
    A 16 16 0 0 0 16 32
    z
  `,
}

// Theme switcher icon was bootstraped from:
// https://github.com/rebassjs/rebass/blob/master/packages/docs/src/components/header.js
export const Dot = (): JSX.Element => (
  <svg {...svgProps}>
    <circle {...circleProps} />
    <path {...pathProps} />
  </svg>
)
