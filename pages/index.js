import { useReducer } from 'react'
import { DispatchContext } from '../context'
import { initModel } from '../constants'
import reducer from '../reducers'
import Calculator from '../components/calculator'

const TipCalculator = props => {
  const [model, dispatch] = useReducer(reducer, initModel)
  return (
    <DispatchContext.Provider value={dispatch}>
      <Calculator {...{ model, ...props }} />
    </DispatchContext.Provider>
  )
}

export default TipCalculator
