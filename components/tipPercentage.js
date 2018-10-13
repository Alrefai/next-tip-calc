import { Card, Flex, Text } from 'rebass'
import { func, number } from 'prop-types'
import { Circle } from './circle'
import { PERCENTAGES } from '../constants'

const tipPercentageProps = {
  width: 1,
  p: 1,
  borderRadius: 15,
  backgroundImage: `linear-gradient(19deg, cyan 0%, magenta 100%)`,
}

const tipCircleProps = (currentPercentage, percentage) => ({
  key: percentage + `-percent`,
  value: percentage,
  type: `button`,
  as: `button`,
  m: 1,
  p: 2,
  color: `inherit`,
  bg: currentPercentage === percentage ? `magenta` : `black`,
  border: 0,
})

const TipCircle = ({ tipPercentage, onClick }) => PERCENTAGES.map(percentage =>
  <Circle {...{ ...tipCircleProps(tipPercentage, percentage), onClick }}>
    <Text fontSize={4} fontWeight='bold'>{percentage}%</Text>
  </Circle>
)

export const TipPercentage = ({ tipPercentage = 15, onClick }) =>
  <Card {...tipPercentageProps}>
    <Flex justifyContent='space-evenly' alignItems='center'>
      <TipCircle {...{ tipPercentage, onClick }} />
    </Flex>
  </Card>

TipPercentage.propTypes = {
  tipPercentage: number,
  onClick: func,
}
