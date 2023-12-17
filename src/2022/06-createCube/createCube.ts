export const createCube = (size: number) => {
  if (!size) throw new Error('size parameter must be provided')
  if (typeof size !== 'number') throw new Error('size must be a number')
  if (size < 1) throw new Error('size must be a number greater than 0')

  const upLeft = '/\\'
  const upRight = '_\\'
  const downLeft = '\\/'
  const downRight = '_/'

  let cube = ''

  for (let i = 1; i <= size; i++) {
    if (i < size) cube += ' '.repeat(size - i)
    cube += `${upLeft.repeat(i)}${upRight.repeat(size)}\n`
  }
  for (let i = size; i > 0; i--) {
    if (i < size) cube += ' '.repeat(size - i)
    cube += `${downLeft.repeat(i)}${downRight.repeat(size)}`
    if (i !== 1) cube += '\n'
  }

  return cube
}
