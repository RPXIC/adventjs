import { describe, expect, it } from 'vitest'
import { getCompleted } from './getCompleted'
import { part, part2, res, res2, total, total2, part3, part4, part5, part6, res3, res4, res5, res6, total3, total4, total5, total6 } from './mock'

describe('getCompleted', () => {
  it('should throw error if parameters are not provided', () => {
    expect(() => getCompleted()).toThrow()
  })
  it('should throw error if parameter part is not provided', () => {
    expect(() => getCompleted(undefined, 'a')).toThrow()
  })
  it('should throw error if parameter total is not provided', () => {
    expect(() => getCompleted('1')).toThrow()
  })
  it('should throw error if parameter part is not a string', () => {
    expect(() => getCompleted(1, 'a')).toThrow()
  })
  it('should throw error if parameter total is not a string', () => {
    expect(() => getCompleted('1', 1)).toThrow()
  })

  it('should return the correct result', () => {
    expect(getCompleted(part, total)).toBe(res)
  })

  it('should return the correct result', () => {
    expect(getCompleted(part2, total2)).toBe(res2)
  })

  it('should return the correct result', () => {
    expect(getCompleted(part3, total3)).toBe(res3)
  })

  it('should return the correct result', () => {
    expect(getCompleted(part4, total4)).toBe(res4)
  })

  it('should return the correct result', () => {
    expect(getCompleted(part5, total5)).toBe(res5)
  })

  it('should return the correct result', () => {
    expect(getCompleted(part6, total6)).toBe(res6)
  })
})
