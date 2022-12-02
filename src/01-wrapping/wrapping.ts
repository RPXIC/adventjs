export const wrapping = (gifts: string[]): string[] => {
  if (!gifts) throw new Error('gifts parameter must be provided')
  if (!Array.isArray(gifts)) throw new Error('gifts parameter must be an array')
  if (gifts.length < 1) throw new Error("gifts parameter can't be an empty array")
  gifts.forEach((el) => {
    if (typeof el !== 'string') throw new Error('gifts must be a strings array')
  })

  return gifts.map((gift) => {
    const wrap = '*'.repeat(gift.length + 2)
    return `${wrap}\n*${gift}*\n${wrap}`
  })
}
