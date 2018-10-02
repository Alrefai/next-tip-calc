import { Box } from 'rebass'
import Header from '../components/header'
import Calculator from '../components/calculator'

const TipCalculator = ({ dispatch, model }) =>
  <Box mx={2}>
    <Header />
    <Calculator />
    <pre>
      {JSON.stringify(model, null, 2)}
    </pre>
  </Box>

export default TipCalculator
