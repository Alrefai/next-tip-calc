import { curry, map, pipe } from 'ramda'
import { Card, Flex, Text } from 'rebass'
import { func, number } from 'prop-types'
import { Circle } from './circle'
import { PERCENTAGES } from '../constants'

const handleClick = value => () => console.log(value)
const tipPercentageProps = {
  variant: `primary`,
  width: 1,
  p: 1,
  borderRadius: 15,
}
const tipCircleProps = (currentPercentage, onClick, percentage) => ({
  key: percentage + `-percent`,
  type: `button`,
  as: `button`,
  m: 1,
  p: 2,
  color: `color`,
  bg: currentPercentage === percentage ? `secondary` : `background`,
  border: 0,
  onClick: onClick(percentage),
})
const tipCircle = curry((tipPercentage, onClick, percentage) => (
  <Circle {...tipCircleProps(tipPercentage, onClick, percentage)}>
    <Text fontSize={4}>{percentage}%</Text>
  </Circle>
))

export const TipPercentage = ({
  tipPercentage = 15, onClick = handleClick
}) => pipe(
  map(tipCircle(tipPercentage, onClick)),
  __ => <Flex justifyContent='space-evenly' alignItems='center'>{__}</Flex>,
  __ => <Card {...tipPercentageProps}>{__}</Card>
)(PERCENTAGES)

TipPercentage.propTypes = {
  tipPercentage: number,
  onClick: func,
}
