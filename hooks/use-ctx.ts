import {
  ProviderExoticComponent,
  ProviderProps,
  Dispatch,
  useContext,
  createContext,
} from 'react'
import { Model } from '../constants'
import { Action } from '../actions'

const createCtx = <T>(
  hookName: `useModel` | `useDispatch`,
): readonly [
  () => T | Error,
  ProviderExoticComponent<ProviderProps<T | undefined>>,
] => {
  const ctx = createContext<T | undefined>(undefined)

  const useCtx = (): T | Error => {
    const context = useContext(ctx)
    return context === undefined
      ? new Error(`${hookName} must be used inside a Provider with a value`)
      : context
  }

  return [useCtx, ctx.Provider] as const
}

export const [useModel, ModelContext] = createCtx<Model>(`useModel`)

export const [useDispatch, DispatchContext] = createCtx<Dispatch<Action>>(
  `useDispatch`,
)
