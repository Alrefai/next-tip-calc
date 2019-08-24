import { Box } from 'rebass'
import { func, object } from 'prop-types'
import { Total } from './total'
import { CalculatorInput } from './calculatorInput'

const cardProps = {
  variant: `card`,
  width: 1,
  p: 0,
  bg: `muted`,
  sx: { borderRadius: `card` },
}

const Calculator = ({ dispatch, model: { total, ...props } = {} }) => (
  <Box maxWidth={512} mx='auto' px={2} pb={3}>
    <Total {...{ total }} />
    <Box {...cardProps}>
      <CalculatorInput {...{ dispatch, ...props }} />
    </Box>
  </Box>
)

Calculator.propTypes = { dispatch: func, model: object }

export default Calculator
