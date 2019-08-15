import { Button, Flex, Heading } from 'rebass'
import { number } from 'prop-types'
import { Input } from './input'
import { Bar } from './bar'

const inputProps = {
  labelAttrs: { htmlFor: `tip-percentage` },
  inputAttrs: {
    id: `tip-percentage`,
    maxLength: `2`,
    autoFocus: true,
  },
  rebassFlexProps: {
    mb: [1, 0],
    py: 1,
    px: 2,
    flexDirection: `column-reverse`,
  },
  rebassLabelProps: { width: 1 },
  rebassFieldProps: {
    p: 0,
    fontSize: 4,
  }
}

const buttonProps = {
  variant: `primary`,
  mt: 1,
  py: 1,
  fontSize: [3, 2],
  fontWeight: `normal`,
}

const buttonText = percentage => percentage >= 25 ? `Generous`
  : percentage >= 20 ? `Nice` : `OK`

export const TipInput = ({ tipPercentage = 15, ...props }) => (
  <Input value={tipPercentage} {...{ ...inputProps, ...props }}>
    <Bar as='hr' />
    <Flex justifyContent='space-between'>
      <Heading as='h3' pt={1} fontSize={3} fontWeight='normal'>Tip %</Heading>
      <Button {...buttonProps}>{buttonText(tipPercentage)}</Button>
    </Flex>
  </Input>
)

TipInput.propTypes = { tipPercentage: number }
