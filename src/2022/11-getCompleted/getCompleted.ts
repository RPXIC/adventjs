export const getCompleted = (part: string, total: string) => {
  if (!part) throw new Error('part parameter must be provided')
  if (!total) throw new Error('parameter total must be provided')
  if (typeof part !== 'string') throw new Error('parameter part must be a string')
  if (typeof total !== 'string') throw new Error('parameter total must be a string')

  const reduce = (numerator, denominator) => {
    let gcd: any = function gcd(a, b) {
      return b ? gcd(b, a % b) : a
    }
    gcd = gcd(numerator, denominator)
    return `${numerator / gcd}/${denominator / gcd}`
  }

  const hmsToSeconds = (s) => {
    let b = s.split(':')
    return b[0] * 3600 + b[1] * 60 + (+b[2] || 0)
  }

  let a = hmsToSeconds(part)
  let b = hmsToSeconds(total)

  return reduce(a, b)
}
