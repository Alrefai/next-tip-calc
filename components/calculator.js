import { Box } from 'rebass'
import { func, object } from 'prop-types'
import { Total } from './total'
import { CalculatorInput } from './calculatorInput'

const Calculator = ({ dispatch, model: { total, ...props } = {} }) => (
  <Box as='main' maxWidth={512} mx='auto' px={2} pb={3}>
    <Total {...{ total }} />
    <CalculatorInput {...{ dispatch, ...props }} />
  </Box>
)

Calculator.propTypes = { dispatch: func, model: object }

export default Calculator
