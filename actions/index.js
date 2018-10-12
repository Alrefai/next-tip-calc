export const ACTIONS = {
  AMOUNT_INPUT: `AMOUNT_INPUT`,
}

export const amountInputAction = amount => ({
  type: ACTIONS.AMOUNT_INPUT,
  amount,
})
