import { FC, useState } from 'react'
import { Box, Heading, Button, Flex } from 'rebass'
import { useColorMode } from 'theme-ui'
import { meta, modes } from '../constants'
import { Bar } from './bar'

const { title } = meta

const svgProps = {
  viewBox: `0 0 32 32`,
  width: `24`,
  height: `24`,
  fill: `currentcolor`,
  style: { display: `block` },
} as const

const circleProps = {
  cx: `16`,
  cy: `16`,
  r: `14`,
  fill: `none`,
  stroke: `currentcolor`,
  strokeWidth: `4`,
} as const

const pathProps = {
  d: `
    M 16 0
    A 16 16 0 0 0 16 32
    z
  `,
} as const

// Theme switcher icon was bootstraped from:
// https://github.com/rebassjs/rebass/blob/master/packages/docs/src/components/header.js
const Dot: FC = () => (
  <svg {...svgProps}>
    <circle {...circleProps} />
    <path {...pathProps} />
  </svg>
)

type Modes = typeof modes[number]

export const Header: FC = () => {
  const [visible, setVisible] = useState(false)
  const [mode, setMode] = useColorMode<Modes>(`neon`)
  const nextModeIndex = (modes.indexOf(mode) + 1) % modes.length
  const nextMode = modes[nextModeIndex]

  const headingProps = {
    fontSize: 5,
    opacity: visible ? 0 : 1,
    sx: {
      position: visible ? `absolute` : ``,
      overflow: visible ? `hidden` : ``,
      animationName: visible ? `fadeOut` : `fadeIn`,
      animationDuration: `1s`,
      animationTimingFunction: visible ? `ease-out` : `ease-in`,
    },
  } as const

  const modeProps = {
    ml: `auto`,
    px: 2,
    color: `primary`,
    sx: {
      display: !visible ? `none` : ``,
      animationName: `fadeIn`,
      animationDuration: `2s`,
      animationTimingFunction: `ease-in`,
    },
  } as const

  const buttonProps = {
    title: `Change color mode to ${nextMode}`,
    type: `button`,
    variant: `transparent`,
    my: 1,
    p: 1,
    size: 32,
    sx: { borderRadius: `circle` },
    onMouseEnter: () => setVisible(true),
    onMouseLeave: () => setVisible(false),
    onClick: () => setMode(nextMode),
  } as const

  return (
    <Box as='header' maxWidth={512} mx='auto' px={2} mb={1}>
      <Flex mt={2} py={2} justifyContent='space-between' alignItems='center'>
        <Heading as='h1' {...headingProps}>
          {title}
        </Heading>
        <Box as='p' {...modeProps}>
          {mode}
        </Box>
        <Button {...buttonProps}>
          <Dot />
        </Button>
      </Flex>
      <Bar height='3px' />
    </Box>
  )
}
