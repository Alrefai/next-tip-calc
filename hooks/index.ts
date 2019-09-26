import { useContext } from 'react'
import { DispatchContext, ModelContext } from '../context'

export const useModel = () => {
  const context = useContext(ModelContext)
  if (context === undefined) {
    throw new Error(`useModel must be used within a StoreProvider`)
  }
  return context
}

const useDispatch = () => {
  const context = useContext(DispatchContext)
  if (context === undefined) {
    throw new Error(`useDispatch must be used within a StoreProvider`)
  }
  return context
}

export const useClick = action => {
  const dispatch = useDispatch()
  return () => dispatch(action)
}

export const useForm = submitAction => {
  if (!submitAction) {
    throw new Error(`submit action must be passed to useForm as an argument`)
  }

  const dispatch = useDispatch()

  const onSubmit = e => {
    e.preventDefault()
    dispatch(submitAction)
  }

  const getInputProps = ({ id = `input-field`, action, ...props }) => {
    if (!action) {
      throw new Error(
        `action prop (onChange handler) must be pass to getInputProps`,
      )
    }
    return {
      onChange: e => dispatch(action(e.target.value)),
      name: id,
      id,
      ...props,
    }
  }

  return { onSubmit, getInputProps }
}
