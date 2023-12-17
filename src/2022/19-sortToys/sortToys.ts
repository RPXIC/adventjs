export const sortToys = (toys: string[], positions: number[]) => {
  if (!toys) throw new Error('toys parameter must be provided')
  if (!Array.isArray(toys)) throw new Error('toys parameter must be an array')
  if (toys.length < 1) throw new Error('toys parameter must have values')
  toys.forEach((el) => {
    if (typeof el !== 'string') throw new Error('toys values must ba a string')
  })
  if (!positions) throw new Error('positions parameter must be provided')
  if (!Array.isArray(positions)) throw new Error('positions parameter must be an array')
  if (positions.length < 1) throw new Error('positions parameter must have values')
  positions.forEach((el) => {
    if (typeof el !== 'number') throw new Error('positions values must ba a number')
  })
  if (toys.length !== positions.length) throw new Error('parameters must have the same quantity of values')

  interface IToysObject {
    [key: string]: number
  }

  const unsortedToys: IToysObject = {}

  toys.forEach((el, i) => {
    unsortedToys[el] = positions[i]
  })

  const sortedToys = Object.fromEntries(Object.entries(unsortedToys).sort(([, a], [, b]) => a - b))

  return Object.keys(sortedToys)
}
