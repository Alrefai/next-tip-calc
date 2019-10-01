import { both, defaultTo, divide, multiply, lt, pipe, test, __ } from 'ramda'
import { Action } from '../actions'
import { MAX_BILL_AMOUNT, Model } from '../constants'
import { assertError } from '../utils'

const toInt: typeof parseInt = pipe(
  parseInt,
  defaultTo(0),
)

const toFloat: typeof parseFloat = pipe(
  parseFloat,
  defaultTo(0),
)

const formatNumber = pipe(
  (n: number) => n.toFixed(2),
  toFloat,
)

const lessThanMax = lt(__, MAX_BILL_AMOUNT)
const isValidNumber = test(/^(0\.\d{0,2}|[1-9]\d*(\.\d{0,2})?)$/)
const isValidAmount: (str: string) => boolean = both(isValidNumber, lessThanMax)

const calculateTip: (a: number, b: number) => number = pipe(
  multiply,
  divide(__, 100),
  formatNumber,
)

const reducer = (model: Model, action: Action): Model => {
  switch (action.type) {
    case `AMOUNT_INPUT`: {
      const { tipPercentage } = model

      const amountNumber = pipe(
        toFloat,
        lessThanMax,
      )(action.amount)
        ? pipe(
            toFloat,
            formatNumber,
          )(action.amount)
        : MAX_BILL_AMOUNT

      const amount = isValidAmount(action.amount)
        ? action.amount
        : `${amountNumber}`

      const tip = calculateTip(amountNumber, tipPercentage)
      const total = formatNumber(amountNumber + tip)

      return { ...model, amount, amountNumber, tip, total }
    }

    case `SHOW_TIP_FORM`: {
      const { showTipForm = false } = action
      return { ...model, showTipForm }
    }

    case `TIP_INPUT`: {
      const { amountNumber } = model
      const tipPercentage = toInt(action.tipPercentage)
      const tip = calculateTip(amountNumber, tipPercentage)
      const total = formatNumber(amountNumber + tip)
      return { ...model, tipPercentage, tip, total }
    }

    default: {
      const { type } = action
      return assertError(`Unhandled action type: ${type}`)
    }
  }
}

export default reducer
