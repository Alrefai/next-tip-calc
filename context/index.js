import { createContext, useReducer } from 'react'
import { node } from 'prop-types'
import { initModel } from '../constants'
import reducer from '../reducers'

export const DispatchContext = createContext()
export const ModelContext = createContext()

export const StoreProvider = ({ children }) => {
  const [model, dispatch] = useReducer(reducer, initModel)
  return (
    <ModelContext.Provider value={model}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </ModelContext.Provider>
  )
}

StoreProvider.propTypes = { children: node }
