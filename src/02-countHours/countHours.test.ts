import { describe, expect, it } from 'vitest'
import { countHours } from './countHours'
import { year, holidays, result } from './mock'

describe('countHours', () => {
  it('should throw error if params not provided', () => {
    expect(() => countHours()).toThrow()
  })
  it('should throw error if year is not provided', () => {
    expect(() => countHours(undefined)).toThrow()
  })
  it('should throw error if year is not a number', () => {
    expect(() => countHours('a')).toThrow()
  })
  it('should throw error if holidays is not provided', () => {
    expect(() => countHours(1)).toThrow()
  })
  it('should throw error if holidays is not an array', () => {
    expect(() => countHours(1, 1)).toThrow()
  })
  it('should throw error if holidays is not an empty array', () => {
    expect(() => countHours(1, [])).toThrow()
  })
  it('should throw error if holidays is not an array of strings', () => {
    expect(() => countHours(1, [1])).toThrow()
  })

  it('should return result', () => {
    expect(countHours(year, holidays)).toBe(result)
  })
})
