import { describe, expect, it } from 'vitest'
import { getGiftsToRefill } from './getGiftsToRefill'
import { a1, a2, a3, result } from './mock'

describe('getGiftsToRefill', () => {
  it('should throw error if param a1 is not provided', () => {
    expect(() => getGiftsToRefill()).toThrow()
  })
  it('should throw error if param a2 is not provided', () => {
    expect(() => getGiftsToRefill(a1)).toThrow()
  })
  it('should throw error if param a3 is not provided', () => {
    expect(() => getGiftsToRefill(a1, a2)).toThrow()
  })
  it('should throw error if param a1 is not an array', () => {
    expect(() => getGiftsToRefill(1, [], [])).toThrow()
  })
  it('should throw error if param a2 is not an array', () => {
    expect(() => getGiftsToRefill([], 1, [])).toThrow()
  })
  it('should throw error if param a3 is not an array', () => {
    expect(() => getGiftsToRefill([], [], 1)).toThrow()
  })
  it('should throw error if param a1 is not an array of strings', () => {
    expect(() => getGiftsToRefill([1], ['a'], ['a'])).toThrow()
  })
  it('should throw error if param a2 is not an array of strings', () => {
    expect(() => getGiftsToRefill(['a'], [1], ['a'])).toThrow()
  })
  it('should throw error if param a3 is not an array of strings', () => {
    expect(() => getGiftsToRefill(['a'], ['a'], [3])).toThrow()
  })

  it('should throw error if param size is not provided', () => {
    expect(getGiftsToRefill(a1, a2, a3)).toStrictEqual(result)
  })
})
