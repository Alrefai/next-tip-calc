import { Flex, Box } from 'rebass'
import { string, func } from 'prop-types'
import { Bar } from './bar'
import { MAX_BILL_AMOUNT } from '../constants'
import { Label, Input } from '@rebass/forms'

const flexProps = {
  as: `form`,
  width: 1,
  px: 2,
  py: `3px`,
  flexDirection: `column`,
}

const inputProps = {
  id: `bill-amount`,
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

export const Bill = ({ amount: value = `125`, onChange, onSubmit }) => (
  <Flex {...{ ...flexProps, onSubmit }}>
    <Input {...{ ...inputProps, value, onChange }} />
    <Bar />
    <Label {...labelProps}>
      <Box mr='auto' />
      {labelText(value)}
    </Label>
  </Flex>
)

Bill.propTypes = { amount: string, onChange: func, onSubmit: func }
