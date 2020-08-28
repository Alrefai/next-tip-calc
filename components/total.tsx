import { Box, Flex, Text, Heading, BoxProps } from 'theme-ui'
import { useModel } from '../hooks'

const flexProps: BoxProps = {
  variant: `cards.gradient`,
  ml: [-2, 0],
  p: 0,
  color: `background`,
  sx: {
    width: [`40%`, `33%`],
    alignItems: `center`,
    borderRadius: [`0 4px 4px 0`, `default`],
  },
}

const boxProps: BoxProps = {
  variant: `cards.default`,
  m: 1,
  py: 0,
  px: 1,
  color: `text`,
  bg: `background`,
  sx: { fontSize: [2, 3] },
}

export const Total = (): JSX.Element => {
  const { total } = useModel()

  return (
    <>
      <Flex {...flexProps}>
        <Heading ml='auto' px={1}>
          Total
        </Heading>
        <Box as='p' {...boxProps}>
          $
        </Box>
      </Flex>
      <Text as='p' py={4} sx={{ fontSize: [7, 8], textAlign: `center` }}>
        {total}
      </Text>
    </>
  )
}
