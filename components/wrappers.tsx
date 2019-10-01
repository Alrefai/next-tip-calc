import { curry } from 'ramda'

type Wrap = (
  Tag: React.ElementType,
  props: {},
  children: JSX.Element | readonly JSX.Element[],
) => JSX.Element

export const wrapWith = curry<Wrap>((Tag, props, children) => (
  <Tag {...props}>{children}</Tag>
))
