import { useReducer } from 'react'
import { DispatchContext, ModelContext } from '../context'
import { initModel } from '../constants'
import reducer from '../reducers'
import Calculator from '../components/calculator'

const TipCalculator = () => {
  const [model, dispatch] = useReducer(reducer, initModel)
  return (
    <DispatchContext.Provider value={dispatch}>
      <ModelContext.Provider value={model}>
        <Calculator />
      </ModelContext.Provider>
    </DispatchContext.Provider>
  )
}

export default TipCalculator
