import { Box, Flex, Button } from 'rebass'
import { useClick, useModel } from '../hooks'
import { showTipFormAction } from '../actions'

const tipAmountProps = {
  variant: `card.gradient`,
  width: 1,
  p: 1,
  alignItems: `center`,
} as const

const tipPercentageProps = {
  variant: `card`,
  ml: -3,
  px: 1,
  py: 0,
  color: `background`,
  bg: `primary`,
  fontSize: 1,
  alignSelf: `flex-start`,
} as const

const tipResultsProps = {
  mx: `auto`,
  color: `background`,
  fontSize: 5,
} as const

const tipButtonPorps = {
  title: `Change tip percantage`,
  type: `button`,
  variant: `outline.circle`,
  m: 1,
  bg: `background`,
  fontSize: 3,
} as const

export const Tip: React.FC = () => {
  const { tipPercentage, tip } = useModel()
  const onClick = useClick(showTipFormAction(true))
  return (
    <Flex {...tipAmountProps}>
      <Button {...{ ...tipButtonPorps, onClick }}>Tip</Button>
      <Box as='p' {...tipPercentageProps}>
        {tipPercentage}%
      </Box>
      <Box as='p' {...tipResultsProps}>
        ${tip}
      </Box>
    </Flex>
  )
}
