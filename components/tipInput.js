import { Button, Flex } from 'rebass'
import { number, func } from 'prop-types'
import { Bar } from './bar'
import { Label, Input } from '@rebass/forms'

const flexProps = {
  as: `form`,
  width: 1,
  px: 2,
  py: `3px`,
  flexDirection: `column`,
}

const inputProps = {
  id: `tip-percentage`,
  maxLength: `2`,
  autoFocus: true,
  p: 0,
  fontSize: 3,
  sx: { border: 0 },
}

const labelProps = {
  htmlFor: `tip-percentage`,
  fontSize: 3,
}

const buttonProps = {
  my: `3px`,
  ml: `auto`,
  py: 0,
  fontWeight: `normal`,
}

const buttonText = percentage =>
  percentage >= 25 ? `Generous` : percentage >= 20 ? `Nice` : `OK`

export const TipInput = ({ tipPercentage: value = 15, onChange, onSubmit }) => (
  <Flex {...{ ...flexProps, onSubmit }}>
    <Input {...{ ...inputProps, value, onChange }} />
    <Bar />
    <Label {...labelProps}>
      Tip %<Button {...buttonProps}>{buttonText(value)}</Button>
    </Label>
  </Flex>
)

TipInput.propTypes = { tipPercentage: number, onChange: func, onSubmit: func }
