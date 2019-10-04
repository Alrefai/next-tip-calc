import { NextPage } from 'next'
import StoreProvider from '../context'
import { Calculator } from '../components/calculator'

const TipCalculator: NextPage = () => (
  <StoreProvider>
    <Calculator />
  </StoreProvider>
)

export default TipCalculator
