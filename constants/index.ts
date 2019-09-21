export { theme, modes } from './theme'

export const meta = {
  title: `Tip Calculator`,
  description: `
    Tip Calculator – a single page React app built with TypeScript, Next.js,
    Rebass, Theme-UI, and Ramda
  `,
} as const

export const initModel = {
  amount: `0`,
  amountNumber: 0,
  tipPercentage: 15,
  tip: 0,
  total: 0,
  showTipForm: false,
} as const

export const PERCENTAGES = [10, 15, 20, 25] as const

export const MAX_BILL_AMOUNT = 10000
