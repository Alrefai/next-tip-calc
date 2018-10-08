import { Flex, Box, Heading, Card } from 'rebass'
import { Bar } from './bar'
import { meta } from '../constants'

const Badge = props =>
  <Card {...props} as='h4' color='black' bg='cyan' p={1} borderRadius={4} />

const Header = () =>
  <Box my={3}>
    <Flex py={2} alignItems='flex-end' justifyContent='space-between'>
      <Heading as='h1' fontSize={[5, 6]}>{meta.title}</Heading>
      <Badge my={0}>Beta</Badge>
    </Flex>
    <Bar as='hr' />
  </Box>

export default Header
