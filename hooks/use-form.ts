import { Dispatch, SyntheticEvent } from 'react'
import { Action } from '../actions'
import { useDispatch } from './use-ctx'

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

type GetProps = (props: InputProps) => ReturnProps | Error

type FormReturnProps = {
  readonly onSubmit: Event
  readonly getInputProps: GetProps
}

const useForm = (submitAction: Action): FormReturnProps | Error => {
  if (submitAction === undefined) {
    return new Error(`submit action must be passed to useForm as an argument`)
  }

  const dispatch = useDispatch() as Dispatch<Action>

  const onSubmit: Event = e => {
    e.preventDefault()
    dispatch(submitAction)
  }

  const getInputProps: GetProps = ({ id = `input-id`, action, ...props }) => {
    return action === undefined
      ? new Error(
          `action prop (onChange handler) must be pass to getInputProps`,
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
