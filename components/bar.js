import { Box } from 'rebass'

const barProps = sx => ({
  as: `hr`,
  variant: `bar`,
  sx: {
    transformOrigin: `0 0`,
    animationName: `grow`,
    animationDuration: `1s`,
    animationTimingFunction: `ease-out`,
    animationFillMode: `forwards`,
    ...sx,
  },
})

export const Bar = ({ sx, ...props }) => (
  <Box {...{ ...barProps(sx), ...props }} />
)

Bar.propTypes = {
  ...Box.propTypes,
}
