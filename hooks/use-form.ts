import { Dispatch, SyntheticEvent } from 'react'
import { Action } from '../actions'
import { useDispatch } from './use-ctx'
import { assertError } from '../utils'

type Event = Dispatch<SyntheticEvent>
type ActionCreator = (payload: string) => Action

type InputProps = {
  readonly action: ActionCreator
  readonly id: string
}

type ReturnProps = {
  readonly onChange: Event
  readonly name: string
  readonly id: string
}

type GetProps = (props: InputProps) => ReturnProps

type FormReturnProps = {
  readonly onSubmit: Event
  readonly getInputProps: GetProps
}

const useForm = (submitAction: Action): FormReturnProps => {
  if (submitAction === undefined) {
    return assertError(`submit action must be passed to useForm as an argument`)
  }

  const dispatch = useDispatch()

  const onSubmit: Event = e => {
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
          onChange: e => dispatch(action((e.target as HTMLInputElement).value)),
        }
  }

  return { onSubmit, getInputProps } as const
}

export default useForm
