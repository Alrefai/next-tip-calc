import { useMemo } from 'react'
import { Button, Flex, Box } from 'rebass'
import { Label, Input } from '@rebass/forms'
import { Bar } from './bar'
import { useForm, useModel } from '../hooks'
import { showTipFormAction, tipInputAction } from '../actions'

const flexProps = {
  as: `form`,
  width: 1,
  px: 2,
  py: `3px`,
  alignItems: `center`,
}

const inputProps = {
  id: `tip-percentage`,
  name: `tip-percentage`,
  maxLength: `2`,
  autoFocus: true,
  type: `tel`,
  inputMode: `numeric`,
  p: 0,
  width: 1 / 2,
  fontSize: 3,
  sx: { border: 0, ':focus': { outline: `none` } },
}

const labelProps = {
  htmlFor: `tip-percentage`,
  fontSize: 3,
}

const buttonProps = {
  title: `Submit tip percentage`,
  variant: `outline`,
  width: 1,
  height: 52,
  sx: {
    borderWidth: '0.7px',
    borderStyle: 'solid',
    borderRadius: `card`,
  },
}

const buttonText = percentage =>
  percentage >= 25 ? `Generous` : percentage >= 20 ? `Nice` : `OK`

const gradient = ({ colors: { primary, secondary } }) =>
  `linear-gradient(19deg, ${secondary}, ${primary})`

export const TipInput = () => {
  const { tipPercentage: value } = useModel()
  const { onChange, onSubmit } = useForm({
    handleChange: tipInputAction,
    handleSubmit: showTipFormAction(false),
  })
  return useMemo(
    () => (
      <Flex {...{ ...flexProps, onSubmit }}>
        <Box width={1}>
          <Input {...{ ...inputProps, value, onChange }} />
          <Bar sx={{ backgroundImage: gradient }} />
          <Label {...labelProps}>Tip %</Label>
        </Box>
        <Button {...buttonProps}>{buttonText(value)}</Button>
      </Flex>
    ),
    [onChange, onSubmit, value],
  )
}
