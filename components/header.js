import { useState } from 'react'
import { Box, Heading, Button, Flex } from 'rebass'
import { useColorMode } from 'theme-ui'
import { meta } from '../constants'
import { Bar } from './bar'

const { title } = meta

const modes = [`neon`, `dracula`, `eclectus`]

const svgProps = {
  viewBox: `0 0 32 32`,
  width: `24`,
  height: `24`,
  fill: `currentcolor`,
  style: { display: `block` },
}

const circleProps = {
  cx: `16`,
  cy: `16`,
  r: `14`,
  fill: `none`,
  stroke: `currentcolor`,
  strokeWidth: `4`,
}

const pathProps = {
  d: `
    M 16 0
    A 16 16 0 0 0 16 32
    z
  `,
}

// Theme switcher icon was bootstraped from:
// https://github.com/rebassjs/rebass/blob/master/packages/docs/src/components/header.js
const Dot = () => (
  <svg {...svgProps}>
    <circle {...circleProps} />
    <path {...pathProps} />
  </svg>
)

const Header = () => {
  const [visible, setVisible] = useState(false)
  const [mode, setMode] = useColorMode()
  const nextModeIndex = (modes.indexOf(mode) + 1) % modes.length
  const nextMode = modes[nextModeIndex]

  const headingProps = {
    as: `h1`,
    fontSize: 5,
    opacity: visible ? 0 : 1,
    sx: {
      position: visible && `absolute`,
      overflow: visible && `hidden`,
      animationName: visible ? `fadeOut` : `fadeIn`,
      animationDuration: `1s`,
      animationTimingFunction: visible ? `ease-out` : `ease-in`,
    },
  }

  const modeProps = {
    as: `p`,
    ml: `auto`,
    px: 2,
    color: `primary`,
    sx: {
      display: !visible && `none`,
      animationName: `fadeIn`,
      animationDuration: `2s`,
      animationTimingFunction: `ease-in`,
    },
  }

  const buttonProps = {
    title: `Change color mode to ${nextMode}`,
    variant: `transparent`,
    my: 1,
    p: 1,
    size: 32,
    sx: { borderRadius: `circle` },
    onMouseEnter: () => setVisible(true),
    onMouseLeave: () => setVisible(false),
    onClick: () => setMode(nextMode),
  }

  return (
    <Box as='header' maxWidth={512} mx='auto' px={2} mb={1}>
      <Flex mt={2} py={2} justifyContent='space-between' alignItems='center'>
        <Heading {...headingProps}>{title}</Heading>
        <Box {...modeProps}>{mode}</Box>
        <Button {...buttonProps}>
          <Dot />
        </Button>
      </Flex>
      <Bar height='3px' />
    </Box>
  )
}

export default Header
