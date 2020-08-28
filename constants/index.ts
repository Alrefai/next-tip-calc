export * from './theme'

export const meta = {
  title: `Tip Calculator`,
  description: `
    Tip Calculator – a single page React app built with Next.js, TypeScript,
    Theme-UI, and Ramda
  `,
} as const

export const model = {
  amount: `0`,
  tipPercentage: 15,
  tip: 0,
  total: 0,
  showTipForm: false,
}

export type Model = Readonly<typeof model>

export const PERCENTAGES = [10, 15, 20, 25] as const

export const MAX_BILL_AMOUNT = 10000
