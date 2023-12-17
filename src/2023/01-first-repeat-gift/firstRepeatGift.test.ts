import { describe, expect, it } from 'vitest'
import { firstRepeatGift } from './firstRepeatGift'
import { firstRepeatedId, firstRepeatedId2, firstRepeatedId3, giftIds, giftIds2, giftIds3 } from './mock'

describe('firstRepeatGift should return the first repeated element on given array', () => {
  it('should throw error if param gifts is not provided', () => {
    expect(() => firstRepeatGift()).toThrow()
  })

  it('should throw error if param gifts is not an array', () => {
    expect(() => firstRepeatGift(1)).toThrow()
  })

  it('should throw error if param gifts is an empty array', () => {
    expect(() => firstRepeatGift([])).toThrow()
  })

  it('should throw error if param gifts is not a strings array', () => {
    expect(() => firstRepeatGift(['1'])).toThrow()
  })

  it('should return 3', () => {
    expect(firstRepeatGift(giftIds)).toEqual(firstRepeatedId)
  })

  it('should return -1', () => {
    expect(firstRepeatGift(giftIds2)).toEqual(firstRepeatedId2)
  })

  it('should return -5', () => {
    expect(firstRepeatGift(giftIds3)).toEqual(firstRepeatedId3)
  })
})
