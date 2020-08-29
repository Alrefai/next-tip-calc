import { Box, Flex, Button, BoxProps, ButtonProps } from 'theme-ui'
import { useClick, useModel } from '../hooks'
import { showTipFormAction } from '../actions'

const flexProps: BoxProps = {
  variant: `cards.gradient`,
  p: 1,
  sx: { width: `full`, alignItems: `center` },
}

const boxProps: BoxProps = {
  variant: `cards.default`,
  ml: -3,
  px: 1,
  py: 0,
  color: `background`,
  bg: `primary`,
  sx: { fontSize: 1, alignSelf: `flex-start` },
}

const buttonProps: ButtonProps = {
  title: `Change tip percentage`,
  type: `button`,
  variant: `outline.circle`,
  m: 1,
  bg: `background`,
  sx: { fontSize: 3 },
}

export const Tip = (): JSX.Element => {
  const { tipPercentage, tip } = useModel()
  const onClick = useClick(showTipFormAction(true))

  return (
    <Flex {...flexProps}>
      <Button {...{ ...buttonProps, onClick }}>Tip</Button>
      <Box as='p' {...boxProps}>
        {tipPercentage}%
      </Box>
      <Box as='p' mx='auto' color='background' sx={{ fontSize: 5 }}>
        ${tip}
      </Box>
    </Flex>
  )
}
