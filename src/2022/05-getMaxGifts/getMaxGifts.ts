export const getMaxGifts = (giftsCities: number[], maxGifts: number, maxCities: number) => {
  if (!giftsCities) throw new Error('giftCities parameter must be provided')
  if (!Array.isArray(giftsCities)) throw new Error('giftCities parameter must be an array')
  if (giftsCities.length < 1) throw new Error('giftCities parameter must be an array with values')
  giftsCities.forEach((el) => {
    if (typeof el !== 'number') throw new Error('giftsCities parameter must be an array of numbers')
  })

  if (!maxGifts) throw new Error('maxGifts parameter must be provided')
  if (typeof maxGifts !== 'number') throw new Error('maxGifts parameter must be a number')
  if (maxGifts < 1) throw new Error('maxGifts parameter must be greater than 0')

  if (!maxCities) throw new Error('maxCities parameter must be provided')
  if (typeof maxCities !== 'number') throw new Error('maxCities parameter must be a number')

  const subsets = function (nums) {
    const combinations = []

    const backtrack = function (nums, path) {
      combinations.push([...path])
      for (let i = 0; i < nums.length; i++) {
        path.push(nums[i])
        backtrack(nums.slice(i + 1), path)
        path.pop(nums[i])
      }
    }
    backtrack(nums, [])
    return combinations
  }

  const result: any[] = subsets(giftsCities)

  const filteredResult = result.filter((el) => el.length <= maxCities && el.length > 0)

  const reducedResult = filteredResult.map((el) => el.reduce((acc, val) => acc + val))

  const lowerOrGreaterThanMaxGifts = reducedResult.filter((el) => el <= maxGifts)

  if (lowerOrGreaterThanMaxGifts.length === 0) return 0

  return Math.max(...lowerOrGreaterThanMaxGifts)
}
