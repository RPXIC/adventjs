export const firstRepeatGift = (gifts: number[]): number => {
  if (!gifts) throw new Error('gifts parameter must be provided')
  if (!Array.isArray(gifts)) throw new Error('gifts parameter must be an array')
  if (gifts.length < 1) throw new Error("gifts parameter can't be an empty array")
  gifts.forEach((el) => {
    if (typeof el !== 'number') throw new Error('gifts must be a numbers array')
  })

  const checkedGifts: number[] = []

  for (let i = 0; i < gifts.length; i++) {
    if (checkedGifts.includes(gifts[i])) {
      return gifts[i]
    } else {
      checkedGifts.push(gifts[i])
    }
  }

  return -1
}
