import { Button, Flex, Box } from 'rebass'
import { Label, Input } from '@rebass/forms'
import { useForm, useModel } from '../hooks'
import { showTipFormAction, tipInputAction } from '../actions'
import Bar from './bar'

const flexProps = {
  as: `form`,
  width: 1,
  px: 2,
  py: `3px`,
  alignItems: `center`,
}

const inputProps = {
  id: `tip-percentage`,
  action: tipInputAction,
  maxLength: `2`,
  autoFocus: true,
  type: `tel`,
  inputMode: `numeric`,
  p: 0,
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
    borderWidth: `0.7px`,
    borderStyle: `solid`,
    borderRadius: `card`,
  },
}

const gradient = ({ colors: { primary, secondary } }) =>
  `linear-gradient(19deg, ${secondary}, ${primary})`

const TipInput = () => {
  const { tipPercentage: value } = useModel()
  const { onSubmit, getInputProps } = useForm(showTipFormAction(false))
  // eslint-disable-next-line unicorn/no-nested-ternary
  const buttonText = value >= 25 ? `Generous` : value >= 20 ? `Nice` : `OK`
  return (
    <Flex {...{ ...flexProps, onSubmit }}>
      <Box width={1}>
        <Input {...{ ...getInputProps(inputProps), value }} />
        <Bar sx={{ backgroundImage: gradient }} />
        <Label {...labelProps}>Tip %</Label>
      </Box>
      <Button {...buttonProps}>{buttonText}</Button>
    </Flex>
  )
}

export default TipInput
