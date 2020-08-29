import { Flex, Box, Label, Input, InputProps, BoxProps } from 'theme-ui'
import { useRef } from 'react'
import { MAX_BILL_AMOUNT } from '../constants'
import { useForm, useModel } from '../hooks'
import { amountInputAction, showTipFormAction } from '../actions'
import { Bar } from './bar'

const flexProps: BoxProps = {
  px: 2,
  py: `3px`,
  sx: { width: `full`, flexDirection: `column` },
}

const id = `bill-amount`

const inputProps: InputProps = {
  id,
  name: id,
  p: 0,
  sx: { fontSize: 3, border: 0, ':focus': { outline: `none` } },
}

export const Bill = (): JSX.Element => {
  // eslint-disable-next-line unicorn/no-null
  const ref = useRef(null)
  const { amount: value } = useModel()

  const { onSubmit, onChange } = useForm({
    handleSubmit: showTipFormAction(true),
    handleChange: amountInputAction,
  })

  const labelText = +value < MAX_BILL_AMOUNT ? `Bill Amount` : `Max Bill Amount`

  return (
    <Flex as='form' {...{ ...flexProps, onSubmit }}>
      <Input {...{ ...inputProps, onChange, value, ref }} />
      <Bar />
      <Label htmlFor={id} sx={{ fontSize: 3 }}>
        <Box mr='auto' />
        {labelText}
      </Label>
    </Flex>
  )
}
