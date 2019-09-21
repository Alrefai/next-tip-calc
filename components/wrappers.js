/* eslint-disable import/no-unused-modules */
import {
  addIndex,
  converge,
  curry,
  map,
  pipe,
  unapply,
  identity,
  partial,
} from 'ramda'

const mapIndexed = addIndex(map)

const getKeyId = (props, i) => {
  const id = props.id && i !== null ? props.id[i] : props.id
  const key = i !== null && ((props.key && props.key[i]) || id || `id-` + i)
  return id && key ? { id, key } : (id && { id }) || (key && { key }) || {}
}

export const wrapWith = curry((Tag, props, children, index = null) => (
  <Tag {...{ ...props, ...getKeyId(props, index) }}>{children}</Tag>
))

export const wrapAllWith = curry((Tag, tagProps, children, props) =>
  pipe(
    converge(unapply(identity), children),
    wrapWith(Tag, tagProps),
  )(props),
)
export const wrapEachWith = curry((Tag, tagProps, children, props) =>
  pipe(
    converge(unapply(identity), children),
    mapIndexed(partial(wrapWith, [Tag, tagProps])),
  )(props),
)
