import { useContext } from 'react'
import { DispatchContext, ModelContext } from '../context'

export const useModel = () => {
  const context = useContext(ModelContext)
  if (context === undefined) {
    throw new Error('useModel must be used within a StoreProvider')
  }
  return context
}

export const useDispatch = () => {
  const context = useContext(DispatchContext)
  if (context === undefined) {
    throw new Error('useDispatch must be used within a StoreProvider')
  }
  return context
}

export const useClick = action => {
  const dispatch = useDispatch()
  return () => dispatch(action)
}

export const useForm = ({ handleChange, handleSubmit } = {}) => {
  if (!handleChange || !handleSubmit) {
    throw new Error(
      'handleChange and handleSubmit must be passed to useForm as an object',
    )
  }
  const dispatch = useDispatch()
  const onChange = e => dispatch(handleChange(e.target.value))
  const onSubmit = e => {
    e.preventDefault()
    dispatch(handleSubmit)
  }
  return { onChange, onSubmit }
}
