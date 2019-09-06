import { StoreProvider } from '../context'
import Calculator from '../components/calculator'

const TipCalculator = () => (
  <StoreProvider>
    <Calculator />
  </StoreProvider>
)

export default TipCalculator
