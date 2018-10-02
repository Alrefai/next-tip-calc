import { Box } from 'rebass'
import { func, object } from 'prop-types'

const Calculator = ({
  dispatch,
  model: { amount, tipPercentage, tip, total } = {}
}) =>
  <Box>
  </Box>

Calculator.propTypes = {
  dispatch: func,
  model: object,
}

export default Calculator
