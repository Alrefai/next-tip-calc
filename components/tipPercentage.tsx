import { map, pipe } from 'ramda'
import { Flex, Button } from 'rebass'
import { PERCENTAGES } from '../constants'
import { useClick, useModel } from '../hooks'
import { tipInputAction } from '../actions'
import { wrapWith } from './wrappers'

const flexProps = {
  justifyContent: `space-evenly`,
  alignItems: `center`,
  variant: `card.gradient`,
  width: 1,
  p: 1,
} as const

type Props = { readonly percentage: number }

const TipCircle: React.FC<Props> = ({ percentage }) => {
  const { tipPercentage } = useModel()
  const onClick = useClick(tipInputAction(`${percentage}`))
  const tipCircleProps = {
    title: `Apply ${percentage} percent`,
    variant: `outline.circle`,
    type: `button`,
    m: 1,
    p: 1,
    color: tipPercentage === percentage ? `secondary` : `text`,
    bg: `background`,
    sx: { fontSize: 4, fontWeight: `normal` },
    onClick,
  } as const

  return <Button {...tipCircleProps}>{percentage}%</Button>
}

export const TipPercentage: React.FC = () =>
  pipe(
    map<number, React.ReactElement>(percentage => (
      <TipCircle {...{ percentage, key: `${percentage}-percent` }} />
    )),
    wrapWith(Flex, flexProps),
  )(PERCENTAGES)
