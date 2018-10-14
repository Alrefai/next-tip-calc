import { Flex, Box, Heading, Card } from 'rebass'
import { Bar } from './bar'
import { meta } from '../constants'

const Badge = props =>
  <Card {...props} as='h4' color='black' bg='cyan' p={1} borderRadius={4} />

const Header = () =>
  <Box my={3}>
    <Heading as='h1' py={2} fontSize={[5, 6]}>{meta.title}</Heading>
    <Bar as='hr' />
  </Box>

export default Header
