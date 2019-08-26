import { Button, Flex } from 'rebass'
import { Label, Input } from '@rebass/forms'
import { number } from 'prop-types'
import { Bar } from './bar'
import { useForm } from '../hooks'
import { showTipFormAction, tipInputAction } from '../actions'

const flexProps = {
  as: `form`,
  width: 1,
  px: 2,
  py: `3px`,
  flexDirection: `column`,
}

const inputProps = {
  id: `tip-percentage`,
  name: `tip-percentage`,
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

export const TipInput = ({ tipPercentage: value = 15 }) => {
  const { onChange, onSubmit } = useForm({
    initValue: value,
    handleChange: tipInputAction,
    handleSubmit: showTipFormAction(false),
  })
  return (
    <Flex {...{ ...flexProps, onSubmit }}>
      <Input {...{ ...inputProps, value, onChange }} />
      <Bar />
      <Label {...labelProps}>
        Tip %<Button {...buttonProps}>{buttonText(value)}</Button>
      </Label>
    </Flex>
  )
}

TipInput.propTypes = { tipPercentage: number }
