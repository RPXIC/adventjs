export const dryNumber = (dry: number, numbers: number) => {
  if (!dry) throw new Error('dry parameter must be provided')
  if (typeof dry !== 'number') throw new Error('dry parameter must be a number')
  if (!numbers) throw new Error('numbers parameter must be provided')
  if (typeof numbers !== 'number') throw new Error('numbers parameter must be a number')

  const result = []

  for (let i = 1; i <= numbers; i++) {
    if (String(i).includes(dry)) result.push(i)
  }

  return result
}
