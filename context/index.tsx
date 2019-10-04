import { FunctionComponent, ReactNode, useReducer } from 'react'
import { initModel } from '../constants'
import { ModelContext, DispatchContext } from '../hooks'
import { reducer } from '../reducers'

export const StoreProvider: FunctionComponent<ReactNode> = ({ children }) => {
  const [model, dispatch] = useReducer(reducer, initModel)
  return (
    <ModelContext value={model}>
      <DispatchContext value={dispatch}>{children}</DispatchContext>
    </ModelContext>
  )
}
