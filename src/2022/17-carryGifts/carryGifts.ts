export const carryGifts = (gifts: string[], maxWeight: number) => {
  if (!gifts) throw new Error('gifts parameter must be provided')
  if (!Array.isArray(gifts)) throw new Error('gifts parameter must be an array')
  if (gifts.length < 1) throw new Error('gifts parameter must have values')
  gifts.forEach((el) => {
    if (typeof el !== 'string') throw new Error('gifts values must be a string')
  })
  if (!maxWeight) throw new Error('maxWeight parameter must be provided')
  if (typeof maxWeight !== 'number') throw new Error('maxWeight parameter must be a nunber')

  const result: string[] = []
  let counter = 0

  gifts.forEach((el) => {
    const resultIndex = result[counter]
    const resultIndexLength = resultIndex?.replace(/ /g, '').length || 0
    const isElLowerThanMaxWeight = el.length <= maxWeight

    if (resultIndexLength + el.length <= maxWeight) {
      resultIndex ? (result[counter] += ` ${el}`) : (result[counter] = el)
    } else if (isElLowerThanMaxWeight) {
      counter++
      result.push(el)
    }
  })

  return result
}
