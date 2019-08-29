import { Box, Heading, Button, Flex } from 'rebass'
import { useColorMode } from 'theme-ui'
import { Bar } from './bar'
import { meta } from '../constants'

const { title } = meta

const modes = [`neon`, `dracula`, `eclectus`]

const buttonProps = {
  title: `Change color mode`,
  variant: `transparent`,
  p: 1,
  size: 32,
  sx: { borderRadius: `circle` },
}

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

// Theme switcher icon bootstraped from:
// https://github.com/rebassjs/rebass/blob/master/packages/docs/src/components/header.js
const Header = () => {
  const [mode, setMode] = useColorMode()
  const onClick = () => {
    const i = (modes.indexOf(mode) + 1) % modes.length
    setMode(modes[i])
  }
  return (
    <Box as='header' maxWidth={512} mx='auto' px={2} mb={1}>
      <Flex mt={2} py={2} justifyContent='space-between' alignItems='center'>
        <Heading as='h1' fontSize={5}>
          {title}
        </Heading>
        <Button {...{ ...buttonProps, onClick }}>
          <Dot />
        </Button>
      </Flex>
      <Bar height='3px' />
    </Box>
  )
}

export default Header
