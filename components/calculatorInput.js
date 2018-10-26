import { addIndex, curry, map, partial, pipe } from 'ramda'
import { Box, Flex } from 'rebass'
import { bool } from 'prop-types'
import { Bill } from './bill'
import { Tip } from './tip'
import { TipPercentage } from './tipPercentage'
import { TipInput } from './tipInput'
import { handleChange, handleSubmit, handleClick } from '../util'
import {
  amountInputAction, showTipFormAction, tipInputAction
} from '../actions'

const bill = pipe((dispatch, amount) => ({
  amount,
  onChange: handleChange(dispatch, amountInputAction),
  onSubmit: handleSubmit(dispatch, showTipFormAction(true)),
}), props => <Bill {...props} />)

const tipAmount = pipe((dispatch, tipPercentage, tip) => ({
  tip,
  tipPercentage,
  onClick: handleClick(dispatch, showTipFormAction, true),
}), props => <Tip {...props} />)

const percentage = pipe((dispatch, tipPercentage) => ({
  tipPercentage,
  onClick: handleClick(dispatch, tipInputAction),
}), props => <TipPercentage {...props} />)

const tipInput = pipe((dispatch, tipPercentage) => ({
  tipPercentage,
  onChange: handleChange(dispatch, tipInputAction),
  onSubmit: handleSubmit(dispatch, showTipFormAction(false)),
}), props => <TipInput {...props} />)

const flex = children => (
  <Flex flexDirection={[`column`, `row`]} alignItems='center'>{children}</Flex>
)

const box = (item, key) => <Box key={`box-${key}`} width={1}>{item}</Box>

const billForm = pipe((dispatch, amount, ...args) => [
  bill(dispatch, amount), tipAmount(dispatch, ...args)
], partial(addIndex(map), [box]))

const tipForm = pipe((...args) => [
  percentage(...args), tipInput(...args)
], partial(addIndex(map), [box]))

export const CalculatorInput = ({
  dispatch,
  amount,
  tipPercentage,
  tip,
  showTipForm = false,
}) => (
  !showTipForm
  ? flex(billForm(dispatch, amount, tipPercentage, tip))
  : flex(tipForm(dispatch, tipPercentage))
)

CalculatorInput.propTypes = { showTipForm: bool }
