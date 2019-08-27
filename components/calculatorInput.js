import { Flex } from 'rebass'
import { Bill } from './bill'
import { Tip } from './tip'
import { TipPercentage } from './tipPercentage'
import { TipInput } from './tipInput'
import { wrapWith } from './wrappers'
import { useModel } from '../hooks'

const billForm = [<Bill key='bill-amount' />, <Tip key='tip-amount' />]
const tipForm = [
  <TipPercentage key='tip-percentage' />,
  <TipInput key='tip-input' />,
]

const flexProps = {
  variant: `card`,
  width: 1,
  p: 0,
  bg: `muted`,
  flexDirection: [`column`, `row`],
  sx: { borderRadius: `card` },
}

export const CalculatorInput = () => {
  const { showTipForm } = useModel()
  return wrapWith(Flex, flexProps, !showTipForm ? billForm : tipForm)
}
