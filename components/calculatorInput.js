import { pipe } from 'ramda'
import { Flex } from 'rebass'
import { bool } from 'prop-types'
import { Bill } from './bill'
import { Tip } from './tip'
import { TipPercentage } from './tipPercentage'
import { TipInput } from './tipInput'
import { wrapAllWith } from './wrappers'

// prettier-ignore
const bill = pipe(({ amount }) => ({
  key: `bill-amount`,
  amount,
}), props => <Bill {...props} />)
// prettier-ignore
const tipAmount = pipe(({ tipPercentage, tip }) => ({
  key: `tip-amount`,
  tip,
  tipPercentage,
}), props => <Tip {...props} />)
// prettier-ignore
const percentage = pipe(({ tipPercentage }) => ({
  key: `tip-percentage`,
  tipPercentage,
}), props => <TipPercentage {...props} />)
// prettier-ignore
const tipInput = pipe(({ tipPercentage }) => ({
  key: `tip-input`,
  tipPercentage,
}), props => <TipInput {...props} />)

const billForm = [bill, tipAmount]
const tipForm = [percentage, tipInput]

const flexProps = {
  variant: `card`,
  width: 1,
  p: 0,
  bg: `muted`,
  flexDirection: [`column`, `row`],
  sx: { borderRadius: `card` },
}

export const CalculatorInput = ({ showTipForm = false, ...props }) =>
  wrapAllWith(Flex, flexProps, !showTipForm ? billForm : tipForm, props)

CalculatorInput.propTypes = { showTipForm: bool }
