/* eslint-disable functional/no-return-void */
import { Dispatch } from 'react'
import { Action } from '../actions'
import { useDispatch } from './use-ctx'

const useClick = (action: Action): (() => void) => {
  const dispatch = useDispatch() as Dispatch<Action>
  return () => dispatch(action)
}

export default useClick
