import { Flex, useColorMode, BoxProps } from 'theme-ui'
import { useModel } from '../hooks'
import { withThemeShadow } from '../utils'
import { Bill } from './bill'
import { Tip } from './tip'
import { TipPercentage } from './tipPercentage'
import { TipInput } from './tipInput'

const billForm = [<Bill key='bill-amount' />, <Tip key='tip-amount' />] as const

const tipForm = [
  <TipPercentage key='tip-percentage' />,
  <TipInput key='tip-input' />,
] as const

type Modes = `dracula`

export const CalculatorInput = (): JSX.Element => {
  const { showTipForm } = useModel()
  const [mode] = useColorMode<Modes>()

  const boxShadow = withThemeShadow(
    { dracula: { preSet: `0 0 8px`, alpha: 0.35 } }[mode],
  )

  const flexProps: BoxProps = {
    variant: `cards.primary`,
    p: 0,
    sx: {
      flexDirection: [`column`, `row`],
      width: `full`,
      boxShadow,
    },
  }

  return <Flex {...flexProps}>{!showTipForm ? billForm : tipForm}</Flex>
}
