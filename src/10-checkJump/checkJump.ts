export const checkJump = (heights: number[]) => {
  if (!heights) throw new Error('heights parameter must be provided')
  if (!Array.isArray(heights)) throw new Error('parameter heights must be an array')
  heights.forEach((el) => {
    if (typeof el !== 'number') throw new Error('heights values must be a number')
  })

  const peak = Math.max(...heights)
  const peakIndex = heights.indexOf(peak)

  const sortStringAsc = (arr: number[]) => arr.sort((a, b) => a - b).join('')
  const sortStringDes = (arr: number[]) => arr.sort((a, b) => b - a).join('')

  const expectedL = sortStringAsc(heights.slice(0, peakIndex))
  const expectedR = sortStringDes(heights.slice(peakIndex + 1, heights.length))

  const checkL = heights.slice(0, peakIndex).join('') === expectedL
  const checkR = heights.slice(peakIndex + 1, heights.length).join('') === expectedR

  return checkL && checkR && expectedL.length > 0 && expectedR.length > 0
}
