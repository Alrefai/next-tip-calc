import { Action, MSG } from '../actions'
import { MAX_BILL_AMOUNT, Model } from '../constants'
import { assertError } from '../utils'

const toFixed2 = (n: number): number => +n.toFixed(2)
const calculateTip = (a: number, b: number): number => toFixed2((a * b) / 100)

const onAmountInput = (state: Model, amountInput: string): Model => {
  const amount = amountInput ? amountInput.replace(/^0(\d)/, `$1`) : `0`
  const validAmountRegEx = /^(\d+?(\.\d{0,2})?)$/

  if (!validAmountRegEx.test(amount)) return state

  const amountNumber = +amount < MAX_BILL_AMOUNT ? +amount : MAX_BILL_AMOUNT
  const tip = calculateTip(amountNumber, state.tipPercentage)
  const total = toFixed2(amountNumber + tip)

  if (amountNumber === MAX_BILL_AMOUNT) {
    return { ...state, amount: `${MAX_BILL_AMOUNT}`, tip, total }
  }

  return { ...state, amount, tip, total }
}

const onTipInput = (state: Model, percentage: string): Model => {
  const tipPercentage = +percentage
  const tip = calculateTip(+state.amount, tipPercentage)
  const total = toFixed2(+state.amount + tip)

  return { ...state, tipPercentage, tip, total }
}

export const reducer = (state: Model, action: Action): Model => {
  switch (action.type) {
    case MSG.AMOUNT_INPUT:
      return onAmountInput(state, action.amount)

    case MSG.SHOW_TIP_FORM:
      return { ...state, showTipForm: action.showTipForm }

    case MSG.TIP_INPUT:
      return onTipInput(state, action.tipPercentage)

    default: {
      const unHandledAction: never = action // catches unused valid action type
      const { type } = unHandledAction
      return assertError(`Unhandled action type: ${type as string}`)
    }
  }
}
