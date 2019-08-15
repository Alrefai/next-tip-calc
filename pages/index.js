import { Box } from 'rebass'
import Header from '../components/header'
import Calculator from '../components/calculator'

const TipCalculator = props => (
  <Box mx={2} mb={3}>
    <Header />
    <Calculator {...props}/>
  </Box>
)

export default TipCalculator
