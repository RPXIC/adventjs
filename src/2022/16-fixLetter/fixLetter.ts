export const fixLetter = (letter: string) => {
  if (!letter) throw new Error('letter parameter must be provided')
  if (typeof letter !== 'string') throw new Error('letter parameter must be a string')

  return letter
    .trim()
    .replace(/,\s{0,1}/g, ', ')
    .replace(/\s+/g, ' ')
    .replace(/\s{1}([,.\?\!])/g, '$1')
    .replace(/([a-z])$/gi, '$1.')
    .replace(/\?+/g, '?')
    .replace(/santa claus/gi, 'Santa Claus')
    .replace(/[\?\!.]+\s[a-z]|^[a-z]/gi, (c) => c.toUpperCase())
}
