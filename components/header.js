import styled from 'styled-components'
import { Flex, Box, Heading, Card } from 'rebass'
import { meta } from '../constants'

const Badge = props =>
  <Card {...props} as='h4' color='black' bg='cyan' p={1} borderRadius={4} />

const Divider = styled(Box)`
  & { /* '&' to override modern-normalize 'hr' element class */
    border: 0;
    height: 1px;
  }
`

Divider.defaultProps = {
  as: `hr`,
  bg: `magenta`,
}

const Header = () =>
  <Box my={3}>
    <Flex alignItems='flex-end' justifyContent='space-between'>
      <Heading as='h1' fontSize={[5, 6]}>{meta.title}</Heading>
      <Badge my={0}>Demo</Badge>
    </Flex>
    <Divider />
  </Box>

Header.displayName = 'Header'

export default Header
