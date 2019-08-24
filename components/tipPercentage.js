import { curry, map, pipe } from 'ramda'
import { Flex, Button } from 'rebass'
import { func, number } from 'prop-types'
import { PERCENTAGES } from '../constants'
import { wrapWith } from './wrappers'

const tipCircleProps = (currentPercentage, handleClick, percentage) => ({
  key: percentage + `-percent`,
  variant: `outline.circle`,
  type: `button`,
  m: 1,
  p: 1,
  color: currentPercentage === percentage ? `secondary` : `text`,
  bg: `background`,
  fontSize: 4,
  fontWeight: `normal`,
  onClick: handleClick(percentage),
})

const flexProps = {
  justifyContent: `space-evenly`,
  alignItems: `center`,
  variant: `card.gradient`,
  width: 1,
  p: 1,
}

const tipCircle = curry((tipPercentage, onClick, percentage) => (
  <Button {...tipCircleProps(tipPercentage, onClick, percentage)}>
    {percentage}%
  </Button>
))

export const TipPercentage = ({ tipPercentage = 15, onClick }) =>
  pipe(
    map(tipCircle(tipPercentage, onClick)),
    wrapWith(Flex, flexProps),
  )(PERCENTAGES)

TipPercentage.propTypes = { tipPercentage: number, onClick: func }
