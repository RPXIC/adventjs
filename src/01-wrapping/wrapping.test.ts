import { describe, expect, it } from 'vitest'
import { wrapping } from './wrapping'
import { gifts, result } from './mock'

describe('wrapping', () => {
  it('should throw error if param gifts is not provided', () => {
    expect(() => wrapping()).toThrow()
  })

  it('should throw error if param gifts is not an array', () => {
    expect(() => wrapping(1)).toThrow()
  })

  it('should throw error if param gifts is not a strings array', () => {
    expect(() => wrapping([])).toThrow()
  })

  it('should throw error if param gifts is not a strings array', () => {
    expect(() => wrapping([1])).toThrow()
  })

  it('should gifts be wrapped correctly', () => {
    expect(wrapping(gifts)).toStrictEqual(result)
  })
})
