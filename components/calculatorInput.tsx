import { Flex } from 'rebass'
import { useColorMode } from 'theme-ui'
import { useModel } from '../hooks'
import { Theme } from '../constants'
import { Bill } from './bill'
import { Tip } from './tip'
import { TipPercentage } from './tipPercentage'
import { TipInput } from './tipInput'
import { wrapWith } from './wrappers'

const billForm = [<Bill key='bill-amount' />, <Tip key='tip-amount' />] as const
const tipForm = [
  <TipPercentage key='tip-percentage' />,
  <TipInput key='tip-input' />,
] as const

type Modes = `dracula`

export const CalculatorInput: React.FC = () => {
  const { showTipForm } = useModel()
  const [mode] = useColorMode<Modes>()
  const boxShadow = ({ withShadow }: Theme): ((theme: Theme) => string) =>
    withShadow({ dracula: { preSet: `0 0 8px`, alpha: 0.35 } }[mode])

  const flexProps = {
    variant: `card`,
    width: 1,
    p: 0,
    bg: `muted`,
    flexDirection: [`column`, `row`],
    sx: { boxShadow, borderRadius: `card` },
  } as const

  return wrapWith(Flex, flexProps, !showTipForm ? billForm : tipForm)
}
