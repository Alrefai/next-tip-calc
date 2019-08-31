import { useState } from 'react'
import { Box, Heading, Button, Flex } from 'rebass'
import { useColorMode } from 'theme-ui'
import { Bar } from './bar'
import { meta } from '../constants'

const { title } = meta

const modes = [`neon`, `dracula`, `eclectus`]

const buttonProps = (mode, setVisible) => ({
  title: `Change color mode to ${mode}`,
  variant: `transparent`,
  my: 1,
  p: 1,
  size: 32,
  sx: { borderRadius: `circle` },
  onMouseEnter: () => setVisible(true),
  onMouseLeave: () => setVisible(false),
})

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

const Dot = () => (
  <svg {...svgProps}>
    <circle {...circleProps} />
    <path {...pathProps} />
  </svg>
)

const modeProps = visible => ({
  as: `p`,
  ml: `auto`,
  px: 2,
  color: `primary`,
  sx: {
    display: !visible && `none`,
    animationName: `fadeIn`,
    animationDuration: `1.5s`,
    animationTimingFunction: `ease-in`,
  },
})

const headingProps = visible => ({
  as: `h1`,
  fontSize: 5,
  opacity: visible ? 0 : 1,
  sx: {
    position: visible && `absolute`,
    overflow: visible && `hidden`,
    animationName: visible ? `fadeOut` : `fadeIn`,
    animationDuration: `0.5s`,
    animationTimingFunction: `ease-in`,
  },
})

// Theme switcher icon bootstraped from:
// https://github.com/rebassjs/rebass/blob/master/packages/docs/src/components/header.js
const Header = () => {
  const [visible, setVisible] = useState(false)
  const [mode, setMode] = useColorMode()
  const nextModeIndex = (modes.indexOf(mode) + 1) % modes.length
  const nextMode = modes[nextModeIndex]
  const onClick = () => setMode(nextMode)
  return (
    <Box as='header' maxWidth={512} mx='auto' px={2} mb={1}>
      <Flex mt={2} py={2} justifyContent='space-between' alignItems='center'>
        <Heading {...headingProps(visible)}>{title}</Heading>
        <Box {...modeProps(visible)}>{mode}</Box>
        <Button {...{ ...buttonProps(nextMode, setVisible), onClick }}>
          <Dot />
        </Button>
      </Flex>
      <Bar height='3px' />
    </Box>
  )
}

export default Header
