import { Action } from '../actions'
import { useDispatch } from './use-ctx'

// eslint-disable-next-line functional/no-return-void
export const useClick = (action: Action): (() => void) => {
  const dispatch = useDispatch()
  return () => dispatch(action)
}
