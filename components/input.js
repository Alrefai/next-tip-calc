import debounce from 'lodash.debounce'
import styled from 'styled-components'
import { Box, Card, Text } from 'rebass'
import { exact, oneOfType, string, number, object } from 'prop-types'

const handleChage = debounce(input => console.log(input), 500)

const Label = styled(Text)`
  display: block;
`

const Field = styled(Card)`
  appearance: none;
`

export const Input = ({
  label,
  value,
  labelAttrs,
  inputAttrs,
  onChange = e => handleChage(e.target.value),
  rebassBoxProps: { width: boxWidth = 1, ...restRebassBoxProps } = {},
  rebassLabelProps: {
    fontSize: labelFontSize = [2, 3, 4],
    ...restRebassLabelProps,
  } = {},
  rebassFieldProps: {
    width: fieldWidth = 1,
    placeholder = `Input`,
    border = 0,
    borderRadius = 4,
    ...restRebassFieldProps,
  } = {},
}) =>
  <Box width={boxWidth} {...restRebassBoxProps}>
    {!label ? []
    : <Label
        as='label'
        fontSize={labelFontSize}
        {...{...labelAttrs, ...restRebassLabelProps }}
      >
        {label}
      </Label>
    }
    <Field
      as='input'
      width={fieldWidth}
      {...{
        value,
        onChange,
        placeholder,
        border,
        borderRadius,
        ...inputAttrs,
        ...restRebassFieldProps,
      }}
    />
  </Box>

Input.propTypes = {
  label: string,
  value: oneOfType([string, number]),
  labelAttrs: object,
  inputAttrs: object,
  rebassBoxProps: exact({ ...Box.propTypes }),
  rebassLabelProps: exact({ ...Box.propTypes, ...Text.propTypes }),
  rebassFieldProps: exact({ ...Box.propTypes, ...Card.propTypes }),
}
