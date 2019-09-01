import { map, pipe } from 'ramda'
import { Flex, Button } from 'rebass'
import { number } from 'prop-types'
import { PERCENTAGES } from '../constants'
import { wrapWith } from './wrappers'
import { useClick, useModel } from '../hooks'
import { tipInputAction } from '../actions'

const tipCircleProps = (currentPercentage, onClick, percentage) => ({
  title: `Apply ${percentage} percent`,
  variant: `outline.circle`,
  type: `button`,
  m: 1,
  p: 1,
  color: currentPercentage === percentage ? `secondary` : `text`,
  bg: `background`,
  fontSize: 4,
  fontWeight: `normal`,
  onClick,
})

const flexProps = {
  justifyContent: `space-evenly`,
  alignItems: `center`,
  variant: `card.gradient`,
  width: 1,
  p: 1,
}

const TipCircle = ({ percentage }) => {
  const { tipPercentage } = useModel()
  const onClick = useClick(tipInputAction(percentage))
  return (
    <Button {...tipCircleProps(tipPercentage, onClick, percentage)}>
      {percentage}%
    </Button>
  )
}

export const TipPercentage = () =>
  pipe(
    map(percentage => (
      <TipCircle {...{ percentage, key: percentage + `-percent` }} />
    )),
    wrapWith(Flex, flexProps),
  )(PERCENTAGES)

TipCircle.propTypes = { percentage: number }
