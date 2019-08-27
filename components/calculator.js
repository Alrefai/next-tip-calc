import { Box } from 'rebass'
import { Total } from './total'
import { CalculatorInput } from './calculatorInput'

const Calculator = () => (
  <Box as='main' maxWidth={512} mx='auto' px={2} pb={3}>
    <Total />
    <CalculatorInput />
  </Box>
)

export default Calculator
