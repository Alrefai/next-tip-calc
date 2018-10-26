import { addIndex, converge, curry, map, pair, partial, pipe } from 'ramda'
import { Box, Flex } from 'rebass'
import { bool } from 'prop-types'
import { Bill } from './bill'
import { Tip } from './tip'
import { TipPercentage } from './tipPercentage'
import { TipInput } from './tipInput'
import {
  amountInputAction, showTipFormAction, tipInputAction
} from '../actions'

const handleChange = (dispatch, action) => e => dispatch(action(e.target.value))
const handleSubmit = (dispatch, action) => e => {
  e.preventDefault()
  dispatch(action)
}
const handleClick = curry((dispatch, action, value) => (
  () => dispatch(action(value))
))

const bill = pipe(({ dispatch, amount }) => ({
  amount,
  onChange: handleChange(dispatch, amountInputAction),
  onSubmit: handleSubmit(dispatch, showTipFormAction(true)),
}), props => <Bill {...props} />)

const tipAmount = pipe(({ dispatch, tipPercentage, tip }) => ({
  tip,
  tipPercentage,
  onClick: handleClick(dispatch, showTipFormAction, true),
}), props => <Tip {...props} />)

const percentage = pipe(({ dispatch, tipPercentage }) => ({
  tipPercentage,
  onClick: handleClick(dispatch, tipInputAction),
}), props => <TipPercentage {...props} />)

const tipInput = pipe(({ dispatch, tipPercentage }) => ({
  tipPercentage,
  onChange: handleChange(dispatch, tipInputAction),
  onSubmit: handleSubmit(dispatch, showTipFormAction(false)),
}), props => <TipInput {...props} />)

const flex = children => (
  <Flex flexDirection={[`column`, `row`]} alignItems='center'>{children}</Flex>
)

const box = (item, key) => <Box key={`box-${key}`} width={1}>{item}</Box>

const billForm = pipe(
  converge(pair, [bill, tipAmount]),
  partial(addIndex(map), [box])
)

const tipForm = pipe(
  converge(pair, [percentage, tipInput]),
  partial(addIndex(map), [box])
)

export const CalculatorInput = ({ showTipForm = false, ...props }) => (
  !showTipForm ? flex(billForm(props)) : flex(tipForm(props))
)

CalculatorInput.propTypes = { showTipForm: bool }
