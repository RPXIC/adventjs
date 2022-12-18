import { describe, expect, it } from 'vitest'
import { carryGifts } from './carryGifts'
import { gifts, gifts1, gifts2, gifts3, maxWeight, maxWeight1, maxWeight2, maxWeight3, result, result1, result2, result3 } from './mock'

describe('carryGifts', () => {
  it('should throw error if parameter gifts is not provided', () => {
    expect(() => carryGifts()).toThrow()
  })
  it('should throw error if parameter gifts is not provided', () => {
    expect(() => carryGifts(1)).toThrow()
  })
  it('should throw error if parameter gifts is not provided', () => {
    expect(() => carryGifts([])).toThrow()
  })
  it('should throw error if parameter gifts is not provided', () => {
    expect(() => carryGifts([1])).toThrow()
  })
  it('should throw error if parameter maxWeight is not provided', () => {
    expect(() => carryGifts(['a'])).toThrow()
  })
  it('should throw error if parameter maxWeight is not a number', () => {
    expect(() => carryGifts(['a'], 'a')).toThrow()
  })

  it('should return result', () => {
    expect(carryGifts(gifts, maxWeight)).toStrictEqual(result)
  })
  it('should return result', () => {
    expect(carryGifts(gifts1, maxWeight1)).toStrictEqual(result1)
  })
  it('should return result', () => {
    expect(carryGifts(gifts2, maxWeight2)).toStrictEqual(result2)
  })
  it('should return result', () => {
    expect(carryGifts(gifts3, maxWeight3)).toStrictEqual(result3)
  })
})
