import { Flex, Box } from 'rebass'
import { Label, Input } from '@rebass/forms'
import { string } from 'prop-types'
import { Bar } from './bar'
import { MAX_BILL_AMOUNT } from '../constants'
import { useForm } from '../hooks'
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
  sx: { border: 0 },
}

const labelProps = {
  htmlFor: `bill-amount`,
  fontSize: 3,
}

const labelText = amount =>
  parseFloat(amount) < MAX_BILL_AMOUNT ? `Bill Amount` : `Max Bill Amount`

export const Bill = ({ amount: value = `125` }) => {
  const { onChange, onSubmit } = useForm({
    initValue: value,
    handleChange: amountInputAction,
    handleSubmit: showTipFormAction(true),
  })
  return (
    <Flex {...{ ...flexProps, onSubmit }}>
      <Input {...{ ...inputProps, value, onChange }} />
      <Bar />
      <Label {...labelProps}>
        <Box mr='auto' />
        {labelText(value)}
      </Label>
    </Flex>
  )
}

Bill.propTypes = { amount: string }
