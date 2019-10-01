export const assertError = (message: string): never => {
  // eslint-disable-next-line functional/no-throw-statement
  throw new Error(message)
}
