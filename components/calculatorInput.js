import { Box, Flex } from 'rebass'
import { bool } from 'prop-types'
import { Bill } from './bill'
import { Tip } from './tip'
import { TipPercentage } from './tipPercentage'
import { TipInput } from './tipInput'
import { amountInputAction, showTipFormAction } from '../actions'

const handleChange = (dispatch, action) => e => dispatch(action(e.target.value))
const handleClick = (dispatch, action) => () => dispatch(action)
const handleSubmit = (dispatch, action) => e => {
  e.preventDefault()
  dispatch(action)
}

const handleAmountActions = dispatch => ({
  onChange: handleChange(dispatch, amountInputAction),
  onSubmit: handleSubmit(dispatch, showTipFormAction(true)),
})

const handleTipFormActions = dispatch => ({
  onClick: handleClick(dispatch, showTipFormAction(true)),
})

export const CalculatorInput = ({
  dispatch,
  amount,
  tipPercentage,
  tip,
  showTipForm = false,
}) => !showTipForm
  ? <Flex flexDirection={[`column`, `row`]} alignItems='center'>
      <Box width={1}>
        <Bill {...{ ...handleAmountActions(dispatch), amount }} />
      </Box>
      <Box width={1}>
        <Tip {...{ ...handleTipFormActions(dispatch), tipPercentage, tip }} />
      </Box>
    </Flex>
  : <Flex flexDirection={[`column`, `row`]} alignItems='center'>
      <Box width={1}>
        <TipPercentage {...{ tipPercentage }}/>
      </Box>
      <Box width={1}>
        <TipInput {...{ tipPercentage }} />
      </Box>
    </Flex>

CalculatorInput.propTypes = { showTipForm: bool }
