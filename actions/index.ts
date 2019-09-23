export const ACTIONS = {
  AMOUNT_INPUT: `AMOUNT_INPUT`,
  SHOW_TIP_INPUT: `SHOW_TIP_INPUT`,
  TIP_INPUT: `TIP_INPUT`,
} as const

type Message = keyof typeof ACTIONS

interface Action {
  <T>(x: T): {
    type: Message
    readonly [key: string]: T | Message
  }
}

export const amountInputAction: Action = amount => ({
  type: ACTIONS.AMOUNT_INPUT,
  amount,
})

export const showTipFormAction: Action = showTipForm => ({
  type: ACTIONS.SHOW_TIP_INPUT,
  showTipForm,
})

export const tipInputAction: Action = tipPercentage => ({
  type: ACTIONS.TIP_INPUT,
  tipPercentage,
})
