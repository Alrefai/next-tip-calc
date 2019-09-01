import { useMemo } from 'react'
import { Flex, Box } from 'rebass'
import { Label, Input } from '@rebass/forms'
import { Bar } from './bar'
import { MAX_BILL_AMOUNT } from '../constants'
import { useForm, useModel } from '../hooks'
import { amountInputAction, showTipFormAction } from '../actions'

const flexProps = {
  as: `form`,
  width: 1,
  px: 2,
  py: `3px`,
  flexDirection: `column`,
}

const inputProps = {
  id: `bill-amount`,
  name: `bill-amount`,
  p: 0,
  fontSize: 3,
  sx: { border: 0, ':focus': { outline: `none` } },
}

const labelProps = {
  htmlFor: `bill-amount`,
  fontSize: 3,
}

const labelText = amount =>
  parseFloat(amount) < MAX_BILL_AMOUNT ? `Bill Amount` : `Max Bill Amount`

export const Bill = () => {
  const { amount: value } = useModel()
  const { onChange, onSubmit } = useForm({
    handleChange: amountInputAction,
    handleSubmit: showTipFormAction(true),
  })
  return useMemo(
    () => (
      <Flex {...{ ...flexProps, onSubmit }}>
        <Input {...{ ...inputProps, value, onChange }} />
        <Bar />
        <Label {...labelProps}>
          <Box mr='auto' />
          {labelText(value)}
        </Label>
      </Flex>
    ),
    [onChange, onSubmit, value],
  )
}
