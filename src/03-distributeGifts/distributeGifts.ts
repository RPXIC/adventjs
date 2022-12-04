export const distributeGifts = (packOfGifts: string[], reindeers: string[]) => {
  if (!packOfGifts) throw new Error('packOfGifts parameter must be provided')
  if (!Array.isArray(packOfGifts)) throw new Error('packOfGifts must be an array')
  if (packOfGifts.length === 0) throw new Error('packOfGifts must have values')
  packOfGifts.forEach((el) => {
    if (typeof el !== 'string') throw new Error('packOfGifts values must be a string')
  })
  if (!reindeers) throw new Error('reinders parameter must be provided')
  if (!Array.isArray(reindeers)) throw new Error('reindeers must be an array')
  if (reindeers.length === 0) throw new Error('reindeers must have values')
  reindeers.forEach((el) => {
    if (typeof el !== 'string') throw new Error('reindeers values must be a string')
  })

  const giftsWeight = packOfGifts.reduce((acc, val) => acc + val.length, 0)
  const reindeersCanCarry = reindeers.reduce((acc, val) => acc + val.length * 2, 0)

  return Math.floor(reindeersCanCarry / giftsWeight)
}
