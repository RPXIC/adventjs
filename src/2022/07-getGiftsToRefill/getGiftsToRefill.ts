export const getGiftsToRefill = (a1: string[], a2: string[], a3: string[]) => {
  if (!a1) throw new Error('parameter a1 must be provided')
  if (!Array.isArray(a1)) throw new Error('parameter a1 must be an array')
  a1.forEach((el) => {
    if (typeof el !== 'string') throw new Error('a1 values must be a string')
  })
  if (!a2) throw new Error('parameter a2 must be provided')
  if (!Array.isArray(a2)) throw new Error('parameter a2 must be an array')
  a2.forEach((el) => {
    if (typeof el !== 'string') throw new Error('a2 values must be a string')
  })
  if (!a3) throw new Error('parameter a3 must be provided')
  if (!Array.isArray(a3)) throw new Error('parameter a3 must be an array')
  a3.forEach((el) => {
    if (typeof el !== 'string') throw new Error('a3 values must be a string')
  })

  const a = new Set(a1)
  const b = new Set(a2)
  const c = new Set(a3)

  const d: string[] = []

  a.forEach((el) => {
    if (!b.has(el) && !c.has(el) && !d.includes(el)) d.push(el)
  })
  b.forEach((el) => {
    if (!a.has(el) && !c.has(el) && !d.includes(el)) d.push(el)
  })
  c.forEach((el) => {
    if (!a.has(el) && !b.has(el) && !d.includes(el)) d.push(el)
  })

  return d
}
