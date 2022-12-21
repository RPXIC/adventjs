import { describe, expect, it } from 'vitest'
import { printTable } from './printTable'
import { gifts, gifts1, gifts2, result, result1, result2 } from './mock'

describe('printTable', () => {
  it('should throw error if parameter gifts is not provided', () => {
    expect(() => printTable()).toThrow()
  })
  it('should throw error if parameter gifts is not an array', () => {
    expect(() => printTable(1)).toThrow()
  })
  it('should throw error if parameter gifts is an empty array', () => {
    expect(() => printTable([])).toThrow()
  })

  it('should resturn result', () => {
    expect(printTable(gifts)).toBe(result)
    expect(printTable(gifts1)).toBe(result1)
    expect(printTable(gifts2)).toBe(result2)
  })
})
