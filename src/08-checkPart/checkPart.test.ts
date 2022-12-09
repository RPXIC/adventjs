import { describe, expect, it } from 'vitest'
import { checkPart } from './checkPart'
import { part, part1, part2, part3, res, res1, res2, res3 } from './mock'

describe('checkPart', () => {
  it('should throw error if param part is not provided', () => {
    expect(() => checkPart()).toThrow()
  })
  it('should throw error if param part is not a string', () => {
    expect(() => checkPart(1)).toThrow()
  })

  it('should return boolean if parameter is a palindrome', () => {
    expect(checkPart(part)).toBe(res)
  })
  it('should return boolean if parameter is a palindrome', () => {
    expect(checkPart(part1)).toBe(res1)
  })
  it('should return boolean if parameter is a palindrome', () => {
    expect(checkPart(part2)).toBe(res2)
  })
  it('should return boolean if parameter is a palindrome', () => {
    expect(checkPart(part3)).toBe(res3)
  })
})
