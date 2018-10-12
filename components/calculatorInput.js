import { Box, Flex } from 'rebass'
import { bool } from 'prop-types'
import { Bill } from './bill'
import { Tip } from './tip'
import { TipPercentage } from './tipPercentage'
import { TipInput } from './tipInput'
import { amountInputAction } from '../actions'

const handleChange = (dispatch, action) => e => dispatch(action(e.target.value))

const handleAmountActions = (dispatch) => ({
  onChange: handleChange(dispatch, amountInputAction),
})

export const CalculatorInput = ({
  dispatch,
  amount,
  tipPercentage,
  tip,
  showTipInput = true,
}) => !showTipInput
  ? <Flex flexDirection={[`column`, `row`]} alignItems='center'>
      <Box width={1}>
        <Bill {...{ ...handleAmountActions(dispatch), amount }} />
      </Box>
      <Box width={1}>
        <Tip {...{ tipPercentage, tip }} />
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

CalculatorInput.propTypes = { showTipInput: bool }
