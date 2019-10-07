import { FormEventHandler, ChangeEventHandler } from 'react'
import { Action } from '../actions'
import { assertError } from '../utils'
import { useDispatch } from './use-ctx'

type ActionCreator = (payload: string) => Action

type InputProps = {
  readonly action: ActionCreator
  readonly id: string
}

type ReturnProps = {
  readonly onChange: ChangeEventHandler<HTMLInputElement>
  readonly name: string
  readonly id: string
}

type GetProps = (props: InputProps) => ReturnProps

type FormReturnProps = {
  readonly onSubmit: FormEventHandler
  readonly getInputProps: GetProps
}

export const useForm = (submitAction: Action): FormReturnProps => {
  const dispatch = useDispatch()

  if (submitAction === undefined) {
    return assertError(`submit action must be passed to useForm as an argument`)
  }

  const onSubmit: FormEventHandler = e => {
    e.preventDefault()
    dispatch(submitAction)
  }

  const getInputProps: GetProps = ({ id = `input-id`, action, ...props }) => {
    return action === undefined
      ? assertError(
          `action prop (onChange handler) must be passed to getInputProps`,
        )
      : {
          id,
          name: id,
          ...props,
          onChange: e => dispatch(action(e.target.value)),
        }
  }

  return { onSubmit, getInputProps } as const
}
