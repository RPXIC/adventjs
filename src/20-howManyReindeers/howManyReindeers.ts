interface IReindeerType {
  type: string
  weightCapacity: number
}
interface IGifts {
  country: string
  weight: number
}

export const howManyReindeers = (reindeerTypes: IReindeerType[], gifts: IGifts[]) => {
  if (!reindeerTypes) throw new Error('reindeerTypes parameter must be provided')
  if (!Array.isArray(reindeerTypes)) throw new Error('parameter reindeerTypes must be an array')
  if (reindeerTypes.length < 1) throw new Error('parameter reindeerTypes must have values')
  if (!gifts) throw new Error('gifts parameter must be provided')
  if (!Array.isArray(gifts)) throw new Error('parameter gifts must be an array')
  if (gifts.length < 1) throw new Error('parameter gifts must have values')

  const capacities = reindeerTypes.map((el) => el.weightCapacity).sort((a, b) => b - a)

  const getReinders = (weight: number) => {
    const reindeers = []
    const weights = capacities.filter((capacity) => capacity < weight)
    let currentCapacity = weights.reduce((acc, curr) => (acc += curr), 0)
    let currentMax = weight

    weights.forEach((capacity) => {
      const num = (currentMax / currentCapacity) >> 0
      currentCapacity -= capacity
      currentMax -= num * capacity
      reindeers.push({ type: reindeerTypes.find((el) => el.weightCapacity === capacity)?.type, num: num })
    })
    return reindeers
  }

  return gifts.map((el) => {
    return { country: el.country, reindeers: getReinders(el.weight) }
  })
}
