import { Box } from 'rebass'
import { object } from 'prop-types'
import { Total } from './total'
import { CalculatorInput } from './calculatorInput'

const Calculator = ({ model: { total, ...props } = {} }) => (
  <Box as='main' maxWidth={512} mx='auto' px={2} pb={3}>
    <Total {...{ total }} />
    <CalculatorInput {...props} />
  </Box>
)

Calculator.propTypes = { model: object }

export default Calculator
