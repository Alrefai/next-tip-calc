import { curry, map, pipe } from 'ramda'
import { Flex, Button } from 'rebass'
import { number } from 'prop-types'
import { PERCENTAGES } from '../constants'
import { wrapWith } from './wrappers'
import { useClick } from '../hooks'
import { tipInputAction } from '../actions'

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
  onClick: handleClick(tipInputAction, percentage),
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

export const TipPercentage = ({ tipPercentage = 15 }) => {
  return pipe(
    map(tipCircle(tipPercentage, useClick)),
    wrapWith(Flex, flexProps),
  )(PERCENTAGES)
}

TipPercentage.propTypes = { tipPercentage: number }
