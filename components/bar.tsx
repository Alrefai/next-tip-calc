import { Box, BoxProps } from 'rebass'

export const Bar: React.FC<BoxProps> = ({ sx, ...props }) => {
  const barProps = {
    variant: `bar`,
    sx: {
      transformOrigin: `0 0`,
      animationName: `grow`,
      animationDuration: `1s`,
      animationTimingFunction: `ease-out`,
      animationFillMode: `forwards`,
      ...sx,
    },
  }

  // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
  // @ts-ignore Could not fix Box type checking error
  return <Box as='hr' {...{ ...barProps, ...props }} />
}
