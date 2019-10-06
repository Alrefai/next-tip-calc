import { FC, ReactNode, useReducer } from 'react'
import { initModel } from '../constants'
import { ModelProvider, DispatchProvider } from '../hooks'
import { reducer } from '../reducers'

export const StoreProvider: FC<ReactNode> = ({ children }) => {
  const [model, dispatch] = useReducer(reducer, initModel)
  return (
    <ModelProvider value={model}>
      <DispatchProvider value={dispatch}>{children}</DispatchProvider>
    </ModelProvider>
  )
}
