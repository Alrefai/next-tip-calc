import { curry } from 'ramda'

type Wrap = (
  Tag: React.ElementType,
  props: {},
  children: React.ReactNode,
) => React.ReactElement

export const wrapWith = curry<Wrap>((Tag, props, children) => (
  <Tag {...props}>{children}</Tag>
))
