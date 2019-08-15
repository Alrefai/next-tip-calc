import { Box, Card, Flex, Text } from 'rebass'
import { number } from 'prop-types'
import { Circle } from './circle'
import { Bar } from './bar'

const tipAmountProps = {
  variant: `primary`,
  width: 1,
  p: 1,
  borderRadius: 15,
}

const tipPercentageProps = {
  ml: -3,
  mt: 1,
  mr: -2,
  px: 1,
  bg: `color`,
  color: `background`,
  borderRadius: 4,
  alignSelf: `flex-start`,
}

const tipResultsProps = {
  mx: `auto`,
  pr: 2,
  color: `background`,
  alignItems: `baseline`,
}

const tipCirclePorps = {
  type: `button`,
  as: `button`,
  m: 1,
  p: 2,
  color: `color`,
  bg: `background`,
  border: 0,
}

export const Tip = ({ tipPercentage = 15, tip = 18.75, ...props }) => (
  <Card {...tipAmountProps}>
    <Flex alignItems='center'>
      <Box>
        <Circle {...{ ...tipCirclePorps, ...props }}>
          <Text fontSize={4}>Tip</Text>
        </Circle>
      </Box>
      <Card {...tipPercentageProps}>{tipPercentage}%</Card>
      <Flex {...tipResultsProps}>
        <Text fontSize={3}>$</Text>
        <Text fontSize={5}>{tip}</Text>
      </Flex>
    </Flex>
  </Card>
)

Tip.propTypes = {
  tip: number,
  tipPercentage: number,
}
