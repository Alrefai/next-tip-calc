import { Heading } from 'rebass'
import { string } from 'prop-types'
import { Input } from './input'
import { Bar } from './bar'
import { MAX_BILL_AMOUNT } from '../constants'

const inputProps = {
  labelAttrs: { htmlFor: `bill-amount` },
  inputAttrs: { id: `bill-amount` },
  rebassFlexProps: {
    mb: [1, 0],
    p: 2,
    flexDirection: `column-reverse`,
  },
  rebassLabelProps: { width: 1 },
  rebassFieldProps: {
    p: 0,
    fontSize: 4,
    color: `inherit`,
    bg: `inherit`,
  }
}

const labelText = amount => parseFloat(amount) < MAX_BILL_AMOUNT
  ? `Bill Amount`
  : `Max Bill Amount`

export const Bill = ({ amount = `125`, onChange, onSubmit }) =>
  <Input value={amount} {...{ ...inputProps, onChange, onSubmit }}>
    <Bar as='hr'/>
    <Heading as='h3' pt={1} fontSize={3} textAlign='right'>
      {labelText(amount)}
    </Heading>
  </Input>

Bill.propTypes = { amount: string }
