import { Box, Card } from 'rebass'
import { func, object } from 'prop-types'
import { Total } from './total'
import { CalculatorInput } from './calculatorInput'

const Calculator = ({ dispatch, model: { total, ...props } = {} }) => (
  <Box width={1}>
    <Total {...{ total }} />
    <Card width={1} bg='dBackground' borderRadius={15}>
      <CalculatorInput {...{ dispatch, ...props }} />
    </Card>
  </Box>
)

Calculator.propTypes = {
  dispatch: func,
  model: object,
}

export default Calculator
