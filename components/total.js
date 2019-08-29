import { useMemo } from 'react'
import { Box, Flex, Text, Heading } from 'rebass'
import { useModel } from '../hooks'

const totalCardProps = {
  variant: `card.gradient`,
  alignItems: `center`,
  width: [2 / 5, 1 / 3],
  ml: [-2, 0],
  p: 0,
  color: `background`,
  sx: { borderRadius: [`0 4px 4px 0`, `default`] },
}

const currencyCardProps = {
  as: `p`,
  variant: `card`,
  m: 1,
  py: 0,
  px: 1,
  color: `text`,
  bg: `background`,
  fontSize: [2, 3],
}

export const Total = () => {
  const { total } = useModel()
  return useMemo(
    () => (
      <>
        <Flex {...totalCardProps}>
          <Heading ml='auto' px={1}>
            Total
          </Heading>
          <Box {...currencyCardProps}>$</Box>
        </Flex>
        <Text as='p' py={4} fontSize={[7, 8]} textAlign='center'>
          {total}
        </Text>
      </>
    ),
    [total],
  )
}
