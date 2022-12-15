import { EQUIVALENCES } from './mock'

export const decorateTree = (base: string) => {
  if (!base) throw new Error('base parameter must be provided')
  if (typeof base !== 'string') throw new Error('base parameter must be a string')

  const result = [base]
  let row = ''

  const generateRow = (from) => {
    let prev = ''
    for (let i = 0; i < from.length; i++) {
      if (prev && from[i] !== ' ') {
        row += EQUIVALENCES[prev + from[i]] + ' '
      }
      if (from[i] !== ' ') prev = from[i]
    }
    result.unshift(row.trim())
    if (result[0].length > 1) {
      row = ''
      generateRow(result[0])
    }
  }

  generateRow(base)

  return result
}
