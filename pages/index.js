import { Box } from 'rebass'
import Header from '../components/header'

const TipCalculator = ({ dispatch, model }) =>
  <Box mx={2}>
    <Header />
    <pre>
      {JSON.stringify(model, null, 2)}
    </pre>
  </Box>

TipCalculator.displayName = 'TipCalculator'

export default TipCalculator
