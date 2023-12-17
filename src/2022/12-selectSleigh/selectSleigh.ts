interface Sleigh {
  name: string
  consumption: number
}

export const selectSleigh = (distance: number, sleighs: Sleigh) => {
  if (!distance) throw new Error('distance parameter must be provided')
  if (!sleighs) throw new Error('sleighs parameter must be provided')
  if (!Array.isArray(sleighs)) throw new Error('parameter sleight must be an array')
  if (sleighs.length < 0) throw new Error('parameter sleighs must be have values')

  const resSleighs: Sleigh[] = sleighs.filter((el: Sleigh) => distance * el.consumption < 20)
  return resSleighs[resSleighs.length - 1].name || null
}
