import { useReducer } from 'react'
import { node } from 'prop-types'
import { initModel } from '../constants'
import { ModelContext, DispatchContext } from '../hooks'
import reducer from '../reducers'

type Children = { readonly children: ChildNode }

const StoreProvider = ({ children }: Children): JSX.Element => {
  const [model, dispatch] = useReducer(reducer, initModel)
  return (
    <ModelContext value={model}>
      <DispatchContext value={dispatch}>{children}</DispatchContext>
    </ModelContext>
  )
}

StoreProvider.propTypes = { children: node }

export default StoreProvider
