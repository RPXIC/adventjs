import { describe, expect, it } from 'vitest'
import { checkJump } from './checkJump'
import { heights, heights1, heights2, res, res1, res2 } from './mock'

describe('checkJump', () => {
  it('should throw error if param leds is not provided', () => {
    expect(() => checkJump()).toThrow()
  })

  it('should return correct result', () => {
    expect(checkJump(heights)).toBe(res)
  })
  // it('should return correct result', () => {
  //   expect(checkJump(heights1)).toBe(res1)
  // })
  // it('should return correct result', () => {
  //   expect(checkJump(heights2)).toBe(res2)
  // })
})
