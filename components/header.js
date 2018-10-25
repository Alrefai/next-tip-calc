import { Flex, Box, Heading, Card } from 'rebass'
import { Bar } from './bar'
import { meta } from '../constants'

const headingProps = {
  as: `h1`,
  py: 2,
  fontSize: [5, 6],
  fontWeight: `normal`,
}

const Header = () => (
  <Box my={3}>
    <Heading {...headingProps}>{meta.title}</Heading>
    <Bar as='hr' />
  </Box>
)

export default Header
