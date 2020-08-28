/* eslint-disable import/no-unused-modules */
import {
  ProviderExoticComponent,
  ProviderProps,
  Dispatch,
  useContext,
  createContext,
} from 'react'
import { Model } from '../constants'
import { Action } from '../actions'
import { assertError } from '../utils'

const createCtx = <T>(
  hookName: `useModel` | `useDispatch`,
): readonly [
  () => T,
  ProviderExoticComponent<ProviderProps<T | undefined>>,
] => {
  // eslint-disable-next-line unicorn/no-useless-undefined
  const ctx = createContext<T | undefined>(undefined)

  const useCtx = (): T => {
    const context = useContext(ctx)

    return context === undefined
      ? assertError(`${hookName} must be used inside a Provider with a value`)
      : context
  }

  return [useCtx, ctx.Provider]
}

export const [useModel, ModelProvider] = createCtx<Model>(`useModel`)

export const [useDispatch, DispatchProvider] = createCtx<Dispatch<Action>>(
  `useDispatch`,
)
