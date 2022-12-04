interface Box {
  l: number
  w: number
  h: number
}

export const fitsInOneBox = (boxes: Box[]) => {
  if (!boxes) throw new Error('Boxes parameter must be provided')
  if (!Array.isArray(boxes)) throw new Error('boxes must be an array')
  if (boxes.length === 0) throw new Error('boxes must have values')
  boxes.forEach((el) => {
    if (typeof el.l !== 'number' || typeof el.w !== 'number' || typeof el.h !== 'number') throw new Error('boxes values must be a number object values')
  })

  boxes.sort((a, b) => a.l - b.l)

  let result = true

  boxes.forEach((el, i) => {
    if (i > 0) {
      if (boxes[i].l <= boxes[i - 1].l) return (result = false)
      if (boxes[i].w <= boxes[i - 1].w) return (result = false)
      if (boxes[i].h <= boxes[i - 1].h) return (result = false)
    }
  })
  return result
}
