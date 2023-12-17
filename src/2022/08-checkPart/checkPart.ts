export const checkPart = (part: string) => {
  if (!part) throw new Error('part parameter must be provided')
  if (typeof part !== 'string') throw new Error('part parameter must be a string')

  let arr = part.split('')
  return arr.some((e, i) => {
    let res = [...arr]
    res.splice(i, 1)
    return res.join('') === res.reverse().join('')
  })
}
