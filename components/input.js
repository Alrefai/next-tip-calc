import debounce from 'lodash.debounce'
import styled from 'styled-components'
import { Box, Flex, Card, Text } from 'rebass'
import { exact, oneOfType, string, number, node, object } from 'prop-types'

const handleChage = debounce(input => console.log(input), 1000)

const Label = styled(Text)`
  display: block;
`

const Field = styled(Card)`
  appearance: none;
`

export const Input = ({
  children,
  value,
  labelAttrs,
  inputAttrs,
  onChange = e => handleChage(e.target.value),
  rebassFlexProps: {
    width: FlexWidth = 1,
    flexWrap = `wrap`,
    alignItems = `center`,
    ...restRebassFlexProps } = {},
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
}) => {
  const fieldProps = {
    ...inputAttrs,
    ...restRebassFieldProps,
    as: `input`,
    width: fieldWidth,
    value,
    onChange,
    placeholder,
    border,
    borderRadius,
  }

  const flexProps = {
    ...restRebassFlexProps,
    width: FlexWidth,
    flexWrap,
    alignItems,
  }

  const labelProps = {
    ...labelAttrs,
    ...restRebassLabelProps,
    as: `label`,
    fontSize: labelFontSize,
  }

  return !children
    ? <Field {...fieldProps} />
    : <Flex {...flexProps}>
        <Label {...labelProps}>{children}</Label>
        <Field {...fieldProps}/>
      </Flex>
}

Input.propTypes = {
  children: node,
  value: oneOfType([string, number]),
  labelAttrs: object,
  inputAttrs: object,
  rebassFlexProps: exact({ ...Box.propTypes, ...Flex.propTypes }),
  rebassLabelProps: exact({ ...Box.propTypes, ...Text.propTypes }),
  rebassFieldProps: exact({ ...Box.propTypes, ...Card.propTypes }),
}
