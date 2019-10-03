import { Button, Flex, Box } from 'rebass'
import { Label, Input } from '@rebass/forms'
import { useForm, useModel } from '../hooks'
import { showTipFormAction, tipInputAction } from '../actions'
import { Theme } from '../constants'
import { Bar } from './bar'

const flexProps = {
  width: 1,
  px: 2,
  py: `3px`,
  alignItems: `center`,
} as const

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
} as const

const labelProps = {
  htmlFor: `tip-percentage`,
  fontSize: 3,
} as const

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
} as const

const gradient = ({ colors: { primary, secondary } }: Theme): string =>
  `linear-gradient(19deg, ${secondary}, ${primary})`

export const TipInput: React.FC = () => {
  const { tipPercentage: value } = useModel()
  const { onSubmit, getInputProps } = useForm(showTipFormAction(false))
  // eslint-disable-next-line unicorn/no-nested-ternary
  const buttonText = value >= 25 ? `Generous` : value >= 20 ? `Nice` : `OK`
  return (
    <Flex as='form' {...{ ...flexProps, onSubmit }}>
      <Box width={1}>
        <Input {...{ ...getInputProps(inputProps), value }} />
        {/*
          // @ts-ignore Could not fix functional value type checking */}
        <Bar sx={{ backgroundImage: gradient }} />
        <Label {...labelProps}>Tip %</Label>
      </Box>
      <Button {...buttonProps}>{buttonText}</Button>
    </Flex>
  )
}
