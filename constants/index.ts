export * from './theme'

export const meta = {
  title: `Tip Calculator`,
  description: `
    Tip Calculator – a single page React app built with TypeScript, Next.js,
    Rebass, Theme-UI, and Ramda
  `,
} as const

export type Model = {
  readonly amount: string
  readonly amountNumber: number
  readonly tipPercentage: number
  readonly tip: number
  readonly total: number
  readonly showTipForm: boolean
}

export const initModel: Model = {
  amount: `0`,
  amountNumber: 0,
  tipPercentage: 15,
  tip: 0,
  total: 0,
  showTipForm: false,
}

export const PERCENTAGES = [10, 15, 20, 25] as const

export const MAX_BILL_AMOUNT = 10000
