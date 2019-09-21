import { Flex } from 'rebass'
import { useColorMode } from 'theme-ui'
import { useModel } from '../hooks'
import { Bill } from './bill'
import { Tip } from './tip'
import { TipPercentage } from './tipPercentage'
import { TipInput } from './tipInput'
import { wrapWith } from './wrappers'

const billForm = [<Bill key='bill-amount' />, <Tip key='tip-amount' />]
const tipForm = [
  <TipPercentage key='tip-percentage' />,
  <TipInput key='tip-input' />,
]

export const CalculatorInput = () => {
  const { showTipForm } = useModel()
  const [mode] = useColorMode()
  const boxShadow = ({ withShadow }) =>
    withShadow({ dracula: { preSet: `0 0 8px`, alpha: 0.35 } }[mode])

  const flexProps = {
    variant: `card`,
    width: 1,
    p: 0,
    bg: `muted`,
    flexDirection: [`column`, `row`],
    sx: { boxShadow, borderRadius: `card` },
  }
  return wrapWith(Flex, flexProps, !showTipForm ? billForm : tipForm)
}
