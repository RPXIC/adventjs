import { describe, expect, it } from 'vitest'
import { dryNumber } from './dryNumber'
import { dry, dry1, numbers, numbers1, result, result1 } from './mock'

describe('dryNumber', () => {
  it('should throw error if parameter dry is not provided', () => {
    expect(() => dryNumber()).toThrow()
  })
  it('should throw error if parameter dry is not a number', () => {
    expect(() => dryNumber('a')).toThrow()
  })
  it('should throw error if parameter numbers is not provided', () => {
    expect(() => dryNumber(1)).toThrow()
  })
  it('should throw error if parameter numbers is not a number', () => {
    expect(() => dryNumber(1, 'a')).toThrow()
  })

  it('should return result', () => {
    expect(dryNumber(dry, numbers)).toStrictEqual(result)
  })
  it('should return result1', () => {
    expect(dryNumber(dry1, numbers1)).toStrictEqual(result1)
  })
})
