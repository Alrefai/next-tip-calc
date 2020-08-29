import { useReducer } from 'react'
import { model } from '../constants'
import { ModelProvider, DispatchProvider } from '../hooks'
import { reducer } from '../reducers'

type Props = { readonly children: readonly JSX.Element[] | JSX.Element }

export const StoreProvider = ({ children }: Props): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, model)

  return (
    <ModelProvider value={state}>
      <DispatchProvider value={dispatch}>{children}</DispatchProvider>
    </ModelProvider>
  )
}
