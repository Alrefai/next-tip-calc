import { map, pipe } from 'ramda'
import { Flex, Button, BoxProps, ButtonProps } from 'theme-ui'
import { PERCENTAGES } from '../constants'
import { useClick, useModel } from '../hooks'
import { tipInputAction } from '../actions'

type Props = { readonly percentage: number }

const TipCircle = ({ percentage }: Props): JSX.Element => {
  const { tipPercentage } = useModel()
  const onClick = useClick(tipInputAction(`${percentage}`))

  const buttonProps: ButtonProps = {
    title: `Apply ${percentage} percent`,
    type: `button`,
    variant: `outline.circle`,
    m: 1,
    p: 1,
    color: tipPercentage === percentage ? `secondary` : `text`,
    bg: `background`,
    sx: { fontSize: 4, fontWeight: `body` },
    onClick,
  }

  return <Button {...buttonProps}>{percentage}%</Button>
}

const flexProps: BoxProps = {
  variant: `cards.gradient`,
  p: 1,
  sx: { width: `full`, justifyContent: `space-evenly`, alignItems: `center` },
}

export const TipPercentage = (): JSX.Element =>
  pipe(
    map((percentage: number) => (
      <TipCircle {...{ percentage, key: `${percentage}-percent` }} />
    )),
    children => <Flex {...flexProps}>{children}</Flex>,
  )(PERCENTAGES)
