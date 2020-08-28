import { Box, BoxProps } from 'theme-ui'
import { keyframes } from '@emotion/core'

const grow = keyframes`
  from {
    transform: scaleX(0);
  }
  to {
    transform: scaleX(1);
  }
`

export const Bar = ({ sx, ...props }: BoxProps): JSX.Element => {
  const boxProps: BoxProps = {
    variant: `styles.hr.primary`,
    m: 0,
    sx: {
      border: 0,
      height: `2px`,
      transformOrigin: `0 0`,
      animationName: grow,
      animationDuration: `1s`,
      animationTimingFunction: `ease-out`,
      animationFillMode: `forwards`,
      ...sx,
    },
    ...props,
  }

  return <Box as='hr' {...boxProps} />
}
