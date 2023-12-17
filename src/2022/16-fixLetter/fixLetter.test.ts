import { describe, expect, it } from 'vitest'
import { fixLetter } from './fixLetter'
import { letter, res, letter1, res1 } from './mock'

describe('fixLetter', () => {
  it('should throw error if parameter letter is not provided', () => {
    expect(() => fixLetter()).toThrow()
  })
  it('should throw error if parameter letter is not a string', () => {
    expect(() => fixLetter(1)).toThrow()
  })

  it('should return result', () => {
    expect(fixLetter(letter)).toBe(res)
  })
  it('should return result', () => {
    expect(fixLetter(letter1)).toBe(res1)
  })
})
