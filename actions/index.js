export const ACTIONS = {
  AMOUNT_INPUT: `AMOUNT_INPUT`,
  SHOW_TIP_INPUT: `SHOW_TIP_INPUT`,
  TIP_INPUT: `TIP_INPUT`,
}

export const amountInputAction = amount => ({
  type: ACTIONS.AMOUNT_INPUT,
  amount,
})

export const showTipFormAction = showTipForm => ({
  type: ACTIONS.SHOW_TIP_INPUT,
  showTipForm,
})

export const tipInputAction = tipPercentage => ({
  type: ACTIONS.TIP_INPUT,
  tipPercentage,
})
