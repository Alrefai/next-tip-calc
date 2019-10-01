import { Action } from '../actions'
import { useDispatch } from './use-ctx'

// eslint-disable-next-line functional/no-return-void
const useClick = (action: Action): (() => void) => {
  const dispatch = useDispatch()
  return () => dispatch(action)
}

export default useClick
