import styled, { keyframes } from 'styled-components'
import { Flex, Box, Heading, Card } from 'rebass'
import { meta } from '../constants'

const Badge = props =>
  <Card {...props} as='h4' color='black' bg='cyan' p={1} borderRadius={4} />

// Bar animation bootstraped from:
// https://github.com/rebassjs/grid/blob/master/docs/components.js
const gradient = (n, from, to) => `linear-gradient(${n}deg, ${from}, ${to})`

const grow = keyframes`
  from {
    transform: scaleX(0);
  }
  to {
    transform: scaleX(1);
  }
`

const Divider = styled(Box)`
  & { /* '&' to override modern-normalize 'hr' element class */
    margin: 0;
    border: 0;
    height: 3px;
    background-image: ${gradient(90, `cyan`, `magenta`)};
    transform-origin: 0 0;
    animation-name: ${grow};
    animation-duration: 1s;
    animation-timing-function: ease-out;
    animation-fill-mode: forwards;
  }
`

const Header = () =>
  <Box my={3}>
    <Flex py={2} alignItems='flex-end' justifyContent='space-between'>
      <Heading as='h1' fontSize={[5, 6]}>{meta.title}</Heading>
      <Badge my={0}>Demo</Badge>
    </Flex>
    <Divider as='hr' />
  </Box>

export default Header
