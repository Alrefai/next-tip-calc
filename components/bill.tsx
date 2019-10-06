import { Flex, Box } from 'rebass'
import { Label, Input } from '@rebass/forms'
import { MAX_BILL_AMOUNT } from '../constants'
import { useForm, useModel } from '../hooks'
import { amountInputAction, showTipFormAction } from '../actions'
import { Bar } from './bar'

const flexProps = {
  width: 1,
  px: 2,
  py: `3px`,
  sx: { flexDirection: `column` },
} as const

const inputProps = {
  id: `bill-amount`,
  action: amountInputAction,
  p: 0,
  fontSize: 3,
  sx: { border: 0, ':focus': { outline: `none` } },
} as const

const labelProps = {
  htmlFor: `bill-amount`,
  fontSize: 3,
} as const

export const Bill: React.FC = () => {
  const { amount: value } = useModel()
  const { onSubmit, getInputProps } = useForm(showTipFormAction(true))
  const labelText =
    parseFloat(value) < MAX_BILL_AMOUNT ? `Bill Amount` : `Max Bill Amount`
  return (
    <Flex as='form' {...{ ...flexProps, onSubmit }}>
      <Input {...{ ...getInputProps(inputProps), value }} />
      <Bar />
      <Label {...labelProps}>
        <Box mr='auto' />
        {labelText}
      </Label>
    </Flex>
  )
}
