import { useState } from 'react'
import {
  Box,
  Heading,
  Button,
  Flex,
  useColorMode,
  HeadingProps,
  BoxProps,
  ButtonProps,
} from 'theme-ui'
import { keyframes } from '@emotion/core'
import { meta, modes } from '../constants'
import { Bar } from './bar'
import { Dot } from './dot'

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

type Modes = typeof modes[number]

const nextMode = (prevMode: Modes): Modes =>
  modes[(modes.indexOf(prevMode) + 1) % modes.length]

export const Header = (): JSX.Element => {
  const [isVisible, setVisibility] = useState(false)
  const [mode, setMode] = useColorMode<Modes>(`neon`)

  const flexProps: BoxProps = {
    mt: 2,
    py: 2,
    sx: { justifyContent: `space-between`, alignItems: `center` },
  }

  const headingProps: HeadingProps = {
    sx: {
      fontSize: 5,
      opacity: isVisible ? 0 : 1,
      position: isVisible ? `absolute` : undefined,
      overflow: isVisible ? `hidden` : undefined,
      animationName: isVisible ? fadeOut : fadeIn,
      animationDuration: `1s`,
      animationTimingFunction: isVisible ? `ease-out` : `ease-in`,
    },
  }

  const modeProps: BoxProps = {
    ml: `auto`,
    px: 2,
    color: `primary`,
    sx: {
      display: !isVisible ? `none` : undefined,
      animationName: fadeIn,
      animationDuration: `2s`,
      animationTimingFunction: `ease-in`,
    },
  }

  const buttonProps: ButtonProps = {
    title: `Change color mode to ${nextMode(mode)}`,
    type: `button`,
    variant: `transparent`,
    my: 1,
    p: 1,
    sx: { borderRadius: `circle` },
    onMouseEnter: () => setVisibility(true),
    onMouseLeave: () => setVisibility(false),
    onClick: () => setMode(prevMode => nextMode(prevMode)),
  }

  const { title } = meta

  return (
    <Box as='header' mx='auto' mb={1} px={2} sx={{ maxWidth: `container` }}>
      <Flex {...flexProps}>
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
      <Bar sx={{ height: `3px` }} />
    </Box>
  )
}
