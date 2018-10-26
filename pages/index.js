import { Box } from 'rebass'
import Header from '../components/header'
import Calculator from '../components/calculator'

const TipCalculator = ({ dispatch, model }) => (
  <Box mx={2} mb={3}>
    <Header />
    <Calculator {...{ dispatch, model }}/>
  </Box>
)

export default TipCalculator
