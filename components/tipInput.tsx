import {
  Button,
  Flex,
  Box,
  Label,
  Input,
  ButtonProps,
  InputProps,
  BoxProps,
} from 'theme-ui'
import { useRef } from 'react'
import { useForm, useModel } from '../hooks'
import { showTipFormAction, tipInputAction } from '../actions'
import { Bar } from './bar'

const flexProps: BoxProps = {
  px: 2,
  py: `3px`,
  sx: { width: `full`, alignItems: `center` },
}

const id = `tip-percentage`

const inputProps: InputProps = {
  id,
  name: id,
  maxLength: 2,
  autoFocus: true,
  type: `tel`,
  inputMode: `numeric`,
  p: 0,
  sx: { fontSize: 3, border: 0, ':focus': { outline: `none` } },
}

const buttonProps: ButtonProps = {
  title: `Submit tip percentage`,
  variant: `outline`,
  sx: {
    width: `full`,
    height: `52px`,
    borderWidth: `0.7px`,
    borderStyle: `solid`,
    borderRadius: `card`,
  },
}

export const TipInput = (): JSX.Element => {
  // eslint-disable-next-line unicorn/no-null
  const ref = useRef(null)
  const { tipPercentage: value } = useModel()

  const { onSubmit, onChange } = useForm({
    handleSubmit: showTipFormAction(false),
    handleChange: tipInputAction,
  })

  const buttonText = value >= 20 ? (value >= 25 ? `Generous` : `Nice`) : `OK`

  return (
    <Flex as='form' {...{ ...flexProps, onSubmit }}>
      <Box sx={{ width: `full` }}>
        <Input {...{ ...inputProps, onChange, value, ref }} />
        <Bar variant='styles.hr.secondary' />
        <Label htmlFor={id} sx={{ fontSize: 3 }}>
          Tip %
        </Label>
      </Box>
      <Button {...buttonProps}>{buttonText}</Button>
    </Flex>
  )
}
