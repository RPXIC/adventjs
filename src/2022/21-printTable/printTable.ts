interface IGift {
  name: string
  quantity: number
}

export const printTable = (gifts: IGift[]) => {
  if (!gifts) throw new Error('gifts parameter must be provided')
  if (!Array.isArray(gifts)) throw new Error('parameter gifts must be an array')
  if (gifts.length < 1) throw new Error('parameter gifts must have values')

  const giftKey = 'Gift'
  const quantityKey = 'Quantity'
  const maxNameLength = Math.max(...gifts.map((el) => el.name.length)) > giftKey.length ? Math.max(...gifts.map((el) => el.name.length)) : giftKey.length
  const maxQuantityLength =
    Math.max(...gifts.map((el) => String(el.quantity).length)) > quantityKey.length
      ? Math.max(...gifts.map((el) => String(el.quantity).length))
      : quantityKey.length
  const tableLength = maxNameLength + maxQuantityLength + 7 > 19 ? maxNameLength + maxQuantityLength + 7 : 19
  const firstRow = '+'.repeat(tableLength)
  const lastRow = '*'.repeat(tableLength)
  const firstCol = '| '
  const centerCol = ' | '
  const lastCol = ' |'
  const separator = '-'
  const giftSpace = maxNameLength - giftKey.length > 0 ? ' '.repeat(maxNameLength - giftKey.length) : ''
  const quantitySpace = maxQuantityLength - quantityKey.length > 0 ? ' '.repeat(maxQuantityLength - quantityKey.length) : ''
  const secondRow = `${firstCol}${giftKey}${giftSpace}${centerCol}${quantityKey}${quantitySpace}${lastCol}`
  const separatorGift = separator.repeat(maxNameLength)
  const separatorQuantity = separator.repeat(maxQuantityLength)
  const thirdRow = `${firstCol}${separatorGift}${centerCol}${separatorQuantity}${lastCol}`

  let result = `${firstRow}\n${secondRow}\n${thirdRow}\n`

  gifts.forEach((el) => {
    const spacesGift = ' '.repeat(maxNameLength - el.name.length)
    const spacesQuantity = ' '.repeat(maxQuantityLength - String(el.quantity).length)
    result += `${firstCol}${el.name}${spacesGift}${centerCol}${el.quantity}${spacesQuantity}${lastCol}\n`
  })

  result += lastRow

  return result
}
