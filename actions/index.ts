export const amountInputAction = (amount: string) =>
  ({
    type: `AMOUNT_INPUT`,
    amount,
  } as const)

export const showTipFormAction = (showTipForm: boolean) =>
  ({
    type: `SHOW_TIP_FORM`,
    showTipForm,
  } as const)

export const tipInputAction = (tipPercentage: string) =>
  ({
    type: `TIP_INPUT`,
    tipPercentage,
  } as const)

export type Action =
  | ReturnType<typeof amountInputAction>
  | ReturnType<typeof showTipFormAction>
  | ReturnType<typeof tipInputAction>
