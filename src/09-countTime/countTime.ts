export const countTime = (leds: number[]) => {
  if (!leds) throw new Error('leds parameter must be provided')
  if (!Array.isArray(leds)) throw new Error('parameter leds must be an array')
  leds.forEach((el) => {
    if (typeof el !== 'number') throw new Error('leds values must be a number')
  })
  if (!leds.includes(0)) return 0

  let counter = 0

  function check(leds: number[]) {
    let tempArray2 = [...leds]
    leds.forEach((el, i) => {
      if (el === 0 && leds.at(i - 1) === 1) {
        tempArray2[i] = 1
      }
    })
    counter += 7
    if (tempArray2.includes(0)) check(tempArray2)
    return counter
  }

  const res = check(leds)
  return res
}
