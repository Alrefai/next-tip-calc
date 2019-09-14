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
  action: amountInputAction,
  p: 0,
  fontSize: 3,
  sx: { border: 0, ':focus': { outline: `none` } },
}

const labelProps = {
  htmlFor: `bill-amount`,
  fontSize: 3,
}

export const Bill = () => {
  const { amount: value } = useModel()
  const { onSubmit, getInputProps } = useForm(showTipFormAction(true))
  const labelText =
    parseFloat(value) < MAX_BILL_AMOUNT ? `Bill Amount` : `Max Bill Amount`
  return (
    <Flex {...{ ...flexProps, onSubmit }}>
      <Input {...{ ...getInputProps(inputProps), value }} />
      <Bar />
      <Label {...labelProps}>
        <Box mr='auto' />
        {labelText}
      </Label>
    </Flex>
  )
}
