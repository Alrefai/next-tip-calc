import styled from 'styled-components'
import { Box, Card } from 'rebass'

// CSS Bootstraped from: https://jsfiddle.net/36m7796q/2/
export const Circle = styled(Card)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 1em;
  border-radius: 50%;
  vertical-align: middle;

  &:before {
    content:'';
    float: left;
    width: auto;
    padding-bottom: 100%;
  }
`

Circle.propTypes = {
  ...Box.propTypes,
  ...Card.propTypes,
}
