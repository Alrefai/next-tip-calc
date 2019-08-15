import { Box, Card, Flex, Text } from 'rebass'
import { number } from 'prop-types'

const totalCardProps = {
  variant: `primary`,
  width: [2/5, 1/3],
  ml: [-2, 0],
  color: `background`,
  borderRadius:`0 4px 4px 0`,
}

const currencyCardPorps = {
  m: 1,
  py: 1,
  px: 2,
  color: `color`,
  bg: `background`,
  borderRadius: 4,
}

export const Total = ({ total = 143.75 }) => (
  <Box width={1} mt={2}>
    <Card {...totalCardProps}>
      <Flex alignItems='center'>
        <Text ml='auto' fontSize={4}>Total</Text>
        <Card {...currencyCardPorps}>$</Card>
      </Flex>
    </Card>
    <Text py={4} fontSize={[7, 8]} textAlign='center'>{total}</Text>
  </Box>
)

Total.propTypes = { total: number }
