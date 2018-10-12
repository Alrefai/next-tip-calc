export const ACTIONS = {
  AMOUNT_INPUT: `AMOUNT_INPUT`,
  SHOW_TIP_INPUT: `SHOW_TIP_INPUT`,
}

export const amountInputAction = amount => ({
  type: ACTIONS.AMOUNT_INPUT,
  amount,
})

export const showTipFormAction = showTipForm => ({
  type: ACTIONS.SHOW_TIP_INPUT,
  showTipForm,
})
