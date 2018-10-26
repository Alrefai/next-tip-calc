import { curry } from 'ramda'

const handleChange = (dispatch, action) => e => dispatch(action(e.target.value))

const handleSubmit = (dispatch, action) => e => {
  e.preventDefault()
  dispatch(action)
}

const handleClick = curry((dispatch, action, value) => (
  () => dispatch(action(value))
))

export {
  handleChange,
  handleSubmit,
  handleClick,
}
