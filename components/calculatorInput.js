import { curry, pipe } from 'ramda'
import { Flex } from 'rebass'
import { bool } from 'prop-types'
import { Bill } from './bill'
import { Tip } from './tip'
import { TipPercentage } from './tipPercentage'
import { TipInput } from './tipInput'
import {
  amountInputAction,
  showTipFormAction,
  tipInputAction,
} from '../actions'
import { wrapAllWith } from './wrappers'

const handleChange = (dispatch, action) => e => dispatch(action(e.target.value))
const handleSubmit = (dispatch, action) => e => {
  e.preventDefault()
  dispatch(action)
}
const handleClick = curry((dispatch, action, value) => () =>
  dispatch(action(value)),
)

// prettier-ignore
const bill = pipe(({ dispatch, amount }) => ({
  key: `bill-amount`,
  amount,
  onChange: handleChange(dispatch, amountInputAction),
  onSubmit: handleSubmit(dispatch, showTipFormAction(true)),
}), props => <Bill {...props} />)
// prettier-ignore
const tipAmount = pipe(({ dispatch, tipPercentage, tip }) => ({
  key: `tip-amount`,
  tip,
  tipPercentage,
  onClick: handleClick(dispatch, showTipFormAction, true),
}), props => <Tip {...props} />)
// prettier-ignore
const percentage = pipe(({ dispatch, tipPercentage }) => ({
  key: `tip-percentage`,
  tipPercentage,
  onClick: handleClick(dispatch, tipInputAction),
}), props => <TipPercentage {...props} />)
// prettier-ignore
const tipInput = pipe(({ dispatch, tipPercentage }) => ({
  key: `tip-input`,
  tipPercentage,
  onChange: handleChange(dispatch, tipInputAction),
  onSubmit: handleSubmit(dispatch, showTipFormAction(false)),
}), props => <TipInput {...props} />)

const billForm = [bill, tipAmount]
const tipForm = [percentage, tipInput]

const flexProps = { flexDirection: [`column`, `row`] }

export const CalculatorInput = ({ showTipForm = false, ...props }) =>
  wrapAllWith(Flex, flexProps, !showTipForm ? billForm : tipForm, props)

CalculatorInput.propTypes = { showTipForm: bool }
