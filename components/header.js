import { Box, Heading } from 'rebass'
import { Bar } from './bar'
import { meta } from '../constants'

const { title } = meta
const headingProps = {
  as: `h1`,
  pt: 3,
  pb: 2,
  fontSize: [5, 6],
  fontWeight: `normal`,
}

const Header = () => (
  <Box as='header' maxWidth={512} mx='auto' px={2} mb={3}>
    <Heading {...headingProps}>{title}</Heading>
    <Bar height='3px' />
  </Box>
)

export default Header
