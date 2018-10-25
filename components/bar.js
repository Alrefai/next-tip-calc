import styled, { keyframes } from 'styled-components'
import { Box } from 'rebass'

// Bar animation bootstraped from:
// https://github.com/rebassjs/grid/blob/master/docs/components.js
const defaultGradient = `linear-gradient(90deg, cyan, magenta)`
const grow = keyframes`
  from {
    transform: scaleX(0);
  }
  to {
    transform: scaleX(1);
  }
`

export const Bar = styled(Box)`
  margin: 0;
  border: 0;
  height: 3px;
  background-image: ${({ theme: { gradient = defaultGradient } }) => gradient};
  transform-origin: 0 0;
  animation-name: ${grow};
  animation-duration: 1s;
  animation-timing-function: ease-out;
  animation-fill-mode: forwards;
`

Bar.propTypes = { ...Box.propTypes }
