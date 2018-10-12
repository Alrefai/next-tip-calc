import { both, defaultTo, lt, pipe, test, __ } from 'ramda'
import { ACTIONS } from '../actions'
import { MAX_BILL_AMOUNT } from '../constants'

const toFloat = pipe(parseFloat, defaultTo(0))
const formatNumber = pipe(n => n.toFixed(2), toFloat)
const lessThan100K = lt(__, MAX_BILL_AMOUNT)
const isValidNumber = test(/^(0\.\d{0,2}|[1-9]\d*(\.\d{0,2})?)$/)
const isValidAmount = both(isValidNumber, lessThan100K)

const reducer = (model, action) => {
  switch (action.type) {
    case ACTIONS.AMOUNT_INPUT: {
      const { tipPercentage } = model
      const amountNumber = pipe(toFloat, lessThan100K)(action.amount)
        ? pipe(toFloat, formatNumber)(action.amount) : MAX_BILL_AMOUNT
      const amount = isValidAmount(action.amount)
        ? action.amount : `${amountNumber}`
      const tip = formatNumber(amountNumber * tipPercentage/100)
      const total = formatNumber(amountNumber + tip)
      return { ...model, amount, amountNumber, tip, total }
    }
    case ACTIONS.SHOW_TIP_INPUT: {
      const { showTipForm = false } = action
      return { ...model, showTipForm }
    }
    default:
      return model
  }
}

export default reducer
