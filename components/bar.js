import { keyframes } from '@emotion/core'
import { Box } from 'rebass'

const grow = keyframes`
  from {
    transform: scaleX(0);
  }
  to {
    transform: scaleX(1);
  }
`

const sx = {
  transformOrigin: `0 0`,
  animationName: grow,
  animationDuration: `1s`,
  animationTimingFunction: `ease-out`,
  animationFillMode: `forwards`,
}

export const Bar = props => <Box as='hr' variant='bar' sx={sx} {...props} />

Bar.propTypes = {
  ...Box.propTypes,
}
