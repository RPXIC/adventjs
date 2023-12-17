import { describe, expect, it } from 'vitest'
import { countTime } from './countTime'
import { leds, leds1, leds2, res, res1, res2 } from './mock'

describe('countTime', () => {
  it('should throw error if param leds is not provided', () => {
    expect(() => countTime()).toThrow()
  })
  it('should throw error if param leds is not an array', () => {
    expect(() => countTime(1)).toThrow()
  })
  it('should throw error if param leds is not an array of number', () => {
    expect(() => countTime(['a'])).toThrow()
  })

  it('should return correct result', () => {
    expect(countTime(leds)).toBe(res)
    expect(countTime(leds1)).toBe(res1)
    expect(countTime(leds2)).toBe(res2)
  })
})
