import { FormEventHandler, ChangeEventHandler } from 'react'
import { Action } from '../actions'
import { assertError } from '../utils'
import { useDispatch } from './use-ctx'

type ActionCreator = (payload: string) => Action

type FormProps = {
  readonly handleSubmit: Action
  readonly handleChange: ActionCreator
}

type FormReturnProps = {
  readonly onSubmit: FormEventHandler
  readonly onChange: ChangeEventHandler<HTMLInputElement>
}

export const useForm = ({
  handleSubmit,
  handleChange,
}: FormProps): FormReturnProps => {
  const dispatch = useDispatch()

  if (handleSubmit === undefined || handleChange === undefined) {
    return assertError(
      `handleSubmit and handleChange must be passed to useForm as props`,
    )
  }

  return {
    onSubmit: e => {
      e.preventDefault()
      dispatch(handleSubmit)
    },
    onChange: e => {
      dispatch(handleChange(e.target.value))
    },
  }
}
