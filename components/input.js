import debounce from 'lodash.debounce'
import styled from 'styled-components'
import { Box, Flex, Card, Text } from 'rebass'
import {
  exact, func, node, number, object, oneOfType, string
} from 'prop-types'

const handleChage = debounce(input => console.log(input), 1000)

const Label = styled(Text)`
  display: block;
`

const Field = styled(Card)`
  appearance: none;

  &:disabled {
    opacity: 0.25;
  }
`

export const Input = ({
  children,
  value,
  labelAttrs,
  inputAttrs,
  rebassFlexProps,
  rebassLabelProps,
  rebassFieldProps,
  onChange = e => handleChage(e.target.value),
  onSubmit = e => e.preventDefault(),
}) => {
  const fieldProps = {
    as: `input`,
    type: `text`,
    value,
    onChange,
    placeholder: `Input`,
    width: 1,
    color: `inherit`,
    bg: `transparent`,
    border: 0,
    borderRadius: 4,
    ...inputAttrs,
    ...rebassFieldProps,
  }

  const flexProps = {
    as: `form`,
    onSubmit,
    width: 1,
    flexWrap: `wrap`,
    alignItems: `center`,
    ...rebassFlexProps,
  }

  const labelProps = {
    as: `label`,
    fontSize: [2, 3, 4],
    ...labelAttrs,
    ...rebassLabelProps,
  }

  return !children
    ? <Field {...fieldProps} />
    : <Flex {...flexProps}>
        <Label {...labelProps}>{children}</Label>
        <Field {...fieldProps} />
      </Flex>
}

Input.propTypes = {
  children: node,
  onChange: func,
  onSubmit: func,
  labelAttrs: object,
  inputAttrs: object,
  value: oneOfType([string, number]),
  rebassFlexProps: exact({ ...Box.propTypes, ...Flex.propTypes }),
  rebassLabelProps: exact({ ...Box.propTypes, ...Text.propTypes }),
  rebassFieldProps: exact({ ...Box.propTypes, ...Card.propTypes }),
}
