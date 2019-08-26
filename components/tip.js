import { Box, Flex, Button } from 'rebass'
import { number } from 'prop-types'
import { useClick } from '../hooks'
import { showTipFormAction } from '../actions'

const tipAmountProps = {
  variant: `card.gradient`,
  width: 1,
  p: 1,
  alignItems: `center`,
}

const tipPercentageProps = {
  as: `p`,
  variant: `card`,
  ml: -3,
  px: 1,
  py: 0,
  color: `background`,
  bg: `primary`,
  fontSize: 1,
  alignSelf: `flex-start`,
}

const tipResultsProps = {
  as: `p`,
  mx: `auto`,
  color: `background`,
  fontSize: 5,
}

const tipButtonPorps = {
  type: `button`,
  variant: `outline.circle`,
  m: 1,
  bg: `background`,
  fontSize: 3,
}

export const Tip = ({ tipPercentage = 15, tip = 18.75 }) => {
  const onClick = useClick(showTipFormAction, true)
  return (
    <Flex {...tipAmountProps}>
      <Button {...{ ...tipButtonPorps, onClick }}>Tip</Button>
      <Box {...tipPercentageProps}>{tipPercentage}%</Box>
      <Box {...tipResultsProps}>${tip}</Box>
    </Flex>
  )
}

Tip.propTypes = { tip: number, tipPercentage: number }
