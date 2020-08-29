import { Box, BoxProps } from 'theme-ui'
import { Total } from './total'
import { CalculatorInput } from './calculatorInput'

const boxProps: BoxProps = {
  mx: `auto`,
  px: 2,
  py: 3,
  sx: { minHeight: `100vh`, maxWidth: `container` },
}

export const Calculator = (): JSX.Element => (
  <Box as='main' {...boxProps}>
    <Total />
    <CalculatorInput />
  </Box>
)
