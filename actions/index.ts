export const MSG = {
  AMOUNT_INPUT: `AMOUNT_INPUT`,
  SHOW_TIP_FORM: `SHOW_TIP_FORM`,
  TIP_INPUT: `TIP_INPUT`,
} as const

export const amountInputAction = (amount: string) =>
  ({
    type: MSG.AMOUNT_INPUT,
    amount,
  } as const)

export const showTipFormAction = (showTipForm: boolean) =>
  ({
    type: MSG.SHOW_TIP_FORM,
    showTipForm,
  } as const)

export const tipInputAction = (tipPercentage: string) =>
  ({
    type: MSG.TIP_INPUT,
    tipPercentage,
  } as const)

export type Action =
  | ReturnType<typeof amountInputAction>
  | ReturnType<typeof showTipFormAction>
  | ReturnType<typeof tipInputAction>
