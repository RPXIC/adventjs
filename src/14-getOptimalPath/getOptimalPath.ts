export const getOptimalPath = (path: number[][]) => {
  if (!path) throw new Error('path parameter must be provided')
  if (!Array.isArray(path)) throw new Error('path parameter must be an array')
  if (path.length < 1) throw new Error('path parameter must have values')
  path.forEach((el) => {
    if (!Array.isArray(el)) throw new Error('path value parameter must be an array')
    el.forEach((subEl) => {
      if (typeof subEl !== 'number') throw new Error('path value parameter must be an array of numbers')
    })
  })

  const res = path.reduceRight((previous, current) => {
    return current.map((val, index) => {
      return val + Math.min(previous[index], previous[index + 1])
    })
  })
  return res[0]
}
