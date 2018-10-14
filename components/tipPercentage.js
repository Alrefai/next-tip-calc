import { Card, Flex, Text } from 'rebass'
import { func, number } from 'prop-types'
import { Circle } from './circle'
import { PERCENTAGES } from '../constants'
import { tipInputAction } from '../actions'

const tipPercentageProps = {
  width: 1,
  p: 1,
  borderRadius: 15,
  backgroundImage: `linear-gradient(19deg, cyan 0%, magenta 100%)`,
}

const tipCircleProps = (currentPercentage, percentage, dispatch) => ({
  key: percentage + `-percent`,
  type: `button`,
  as: `button`,
  m: 1,
  p: 2,
  color: `inherit`,
  bg: currentPercentage === percentage ? `magenta` : `black`,
  border: 0,
  onClick: () => dispatch(tipInputAction(percentage))
})

const TipCircle = ({ tipPercentage, dispatch }) => PERCENTAGES.map(percentage =>
  <Circle {...{ ...tipCircleProps(tipPercentage, percentage, dispatch) }}>
    <Text fontSize={4} fontWeight='bold'>{percentage}%</Text>
  </Circle>
)

export const TipPercentage = ({ tipPercentage = 15, dispatch }) =>
  <Card {...tipPercentageProps}>
    <Flex justifyContent='space-evenly' alignItems='center'>
      <TipCircle {...{ tipPercentage, dispatch }} />
    </Flex>
  </Card>

TipPercentage.propTypes = {
  tipPercentage: number,
  dispatch: func,
}
