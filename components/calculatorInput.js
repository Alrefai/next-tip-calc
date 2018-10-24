import { curry } from 'ramda'
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

const handleAmountInput = dispatch => ({
  onChange: handleChange(dispatch, amountInputAction),
  onSubmit: handleSubmit(dispatch, showTipFormAction(true)),
})

const handleTipForm = dispatch => ({
  onClick: handleClick(dispatch, showTipFormAction, true),
})

const handleTipInput = dispatch => ({
  onChange: handleChange(dispatch, tipInputAction),
  onSubmit: handleSubmit(dispatch, showTipFormAction(false)),
})

const handlePercentages = dispatch => ({
  onClick: handleClick(dispatch, tipInputAction),
})

export const CalculatorInput = ({
  dispatch,
  amount,
  tipPercentage,
  tip,
  showTipForm = false,
}) => (!showTipForm
  ? <Flex flexDirection={[`column`, `row`]} alignItems='center'>
      <Box width={1}>
        <Bill {...{ ...handleAmountInput(dispatch), amount }} />
      </Box>
      <Box width={1}>
        <Tip {...{ ...handleTipForm(dispatch), tipPercentage, tip }} />
      </Box>
    </Flex>
  : <Flex flexDirection={[`column`, `row`]} alignItems='center'>
      <Box width={1}>
        <TipPercentage {...{ ...handlePercentages(dispatch), tipPercentage }}/>
      </Box>
      <Box width={1}>
        <TipInput {...{ ...handleTipInput(dispatch), tipPercentage }} />
      </Box>
    </Flex>
)

CalculatorInput.propTypes = { showTipForm: bool }
