import { Box, Heading } from 'rebass'
import { Bar } from './bar'
import { meta } from '../constants'

const { title } = meta
const headingProps = {
  as: `h1`,
  py: 2,
  fontSize: [5, 6],
  fontWeight: `normal`,
}

const Header = () => (
  <Box my={3}>
    <Heading {...headingProps}>{title}</Heading>
    <Bar as='hr' />
  </Box>
)

export default Header
