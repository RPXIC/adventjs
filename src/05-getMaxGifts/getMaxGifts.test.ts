import { describe, expect, it } from 'vitest'
import { getMaxGifts } from './getMaxGifts'
import {
  giftsCities,
  maxGifts,
  maxCities,
  result,
  giftsCities1,
  maxGifts1,
  maxCities1,
  result1,
  giftsCities2,
  maxGifts2,
  maxCities2,
  result2,
  giftsCities3,
  maxGifts3,
  maxCities3,
  result3,
  giftsCities4,
  maxGifts4,
  maxCities4,
  result4,
  giftsCities5,
  maxGifts5,
  maxCities5,
  result5,
  giftsCities6,
  maxGifts6,
  maxCities6,
  result6
} from './mock'

describe('getMaxGifts', () => {
  it('should throw error if parameter giftCities is not provided', () => {
    expect(() => getMaxGifts()).toThrow()
  })
  it('should throw error if parameter giftCities is not an array', () => {
    expect(() => getMaxGifts(1)).toThrow()
  })
  it('should throw error if parameter giftCities is an empty array', () => {
    expect(() => getMaxGifts([])).toThrow()
  })
  it('should throw error if parameter giftCities is not an array of numbers', () => {
    expect(() => getMaxGifts(['a', 'b'])).toThrow()
  })

  it('should throw error if parameter maxGifts is not provided', () => {
    expect(() => getMaxGifts([0, 1])).toThrow()
  })
  it('should throw error if parameter maxGifts is not a number', () => {
    expect(() => getMaxGifts([0, 1], 'a')).toThrow()
  })
  it('should throw error if parameter maxGifts is lower than 1', () => {
    expect(() => getMaxGifts([0, 1], 0)).toThrow()
  })

  it('should throw error if parameter maxCities is not provided', () => {
    expect(() => getMaxGifts([0, 1], 1)).toThrow()
  })
  it('should throw error if parameter maxCities is not a number', () => {
    expect(() => getMaxGifts([0, 1], 1, 'a')).toThrow()
  })

  it('should return correct result', () => {
    expect(getMaxGifts(giftsCities, maxGifts, maxCities)).toBe(result)
    expect(getMaxGifts(giftsCities1, maxGifts1, maxCities1)).toBe(result1)
    expect(getMaxGifts(giftsCities2, maxGifts2, maxCities2)).toBe(result2)
    expect(getMaxGifts(giftsCities3, maxGifts3, maxCities3)).toBe(result3)
    expect(getMaxGifts(giftsCities4, maxGifts4, maxCities4)).toBe(result4)
    expect(getMaxGifts(giftsCities5, maxGifts5, maxCities5)).toBe(result5)
    expect(getMaxGifts(giftsCities6, maxGifts6, maxCities6)).toBe(result6)
  })
})
