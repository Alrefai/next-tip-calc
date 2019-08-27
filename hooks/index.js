import { useContext, useState } from 'react'
import { DispatchContext, ModelContext } from '../context'

export const useModel = () => useContext(ModelContext)

export const useClick = (action, value) => {
  const dispatch = useContext(DispatchContext)
  return () => dispatch(action(value))
}

export const useForm = ({
  initValue = ``,
  handleChange,
  handleSubmit,
} = {}) => {
  const [value, setValue] = useState(initValue) // useful for initial testing
  const dispatch = useContext(DispatchContext)
  return {
    value,
    onChange: e => {
      setValue(e.target.value)
      handleChange && dispatch(handleChange(e.target.value))
    },
    onSubmit: e => {
      e.preventDefault()
      handleSubmit && dispatch(handleSubmit)
    },
  }
}
