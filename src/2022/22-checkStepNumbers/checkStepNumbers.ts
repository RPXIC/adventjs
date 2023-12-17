export const checkStepNumbers = (systemNames: string[], stepNumbers: number[]) => {
  if (!systemNames) throw new Error('systemNames parameter must be provided')
  if (!Array.isArray(systemNames)) throw new Error('parameter systemNames must be an array')
  if (systemNames.length < 1) throw new Error('parameter systemNames must have values')
  systemNames.forEach((el) => {
    if (typeof el !== 'string') throw new Error('systemNames values must be a string')
  })
  if (!stepNumbers) throw new Error('stepNumbers parameter must be provided')
  if (!Array.isArray(stepNumbers)) throw new Error('parameter stepNumbers must be an array')
  if (stepNumbers.length < 1) throw new Error('parameter stepNumbers must have values')
  stepNumbers.forEach((el) => {
    if (typeof el !== 'number') throw new Error('stepNumbers values must be a number')
  })

  const obj = {}

  systemNames.forEach((el, i) => {
    if (obj[el]) {
      obj[el] = obj[el].concat(stepNumbers[i])
    } else {
      obj[el] = [stepNumbers[i]]
    }
  })

  let result = true

  for (const el in obj) {
    obj[el].reduce((prev, curr) => {
      if (prev > curr) return (result = false)
      return curr
    }, 0)
  }

  return result
}
