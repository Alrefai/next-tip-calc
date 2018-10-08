import { Box, Card, Flex, Text } from 'rebass'
import { func, object } from 'prop-types'
import { Total } from './total'
import { Bill } from './bill'
import { Tip } from './tip'

const Calculator = ({
  dispatch,
  model: { amount, tipPercentage, tip, total } = {}
}) =>
  <Box width={1}>
    <Total {...{ total }} />
    <Card width={1} bg='#333' borderRadius={15}>
      <Flex flexDirection={[`column`, `row`]} alignItems='center'>
        <Box width={1}>
          <Bill {...{ amount }} />
        </Box>
        <Box width={1}>
          <Tip {...{ tip }} />
        </Box>
      </Flex>
    </Card>
  </Box>

Calculator.propTypes = {
  dispatch: func,
  model: object,
}

export default Calculator
