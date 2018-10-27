import { Card, Flex, Text } from 'rebass'
import { func, number } from 'prop-types'
import { Circle } from './circle'
import { PERCENTAGES } from '../constants'

const tipPercentageProps = {
  variant: `primary`,
  width: 1,
  p: 1,
  borderRadius: 15,
}

const tipCircleProps = (currentPercentage, percentage, onClick) => ({
  key: percentage + `-percent`,
  type: `button`,
  as: `button`,
  m: 1,
  p: 2,
  color: `color`,
  bg: currentPercentage === percentage ? `secondary` : `black`,
  border: 0,
  onClick: onClick(percentage),
})

const TipCircle = ({
  tipPercentage,
  onClick,
}) => PERCENTAGES.map(percentage => (
  <Circle {...tipCircleProps(tipPercentage, percentage, onClick)}>
    <Text fontSize={4}>{percentage}%</Text>
  </Circle>
))

export const TipPercentage = ({ tipPercentage = 15, onClick }) => (
  <Card {...tipPercentageProps}>
    <Flex justifyContent='space-evenly' alignItems='center'>
      <TipCircle {...{ tipPercentage, onClick }} />
    </Flex>
  </Card>
)

TipPercentage.propTypes = {
  tipPercentage: number,
  onClick: func,
}
