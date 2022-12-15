import { describe, expect, it } from 'vitest'
import { decorateTree } from './decorateTree'
import { base, result } from './mock'

describe('decorateTree', () => {
  it('should throw error if parameter base is not provided', () => {
    expect(() => decorateTree()).toThrow()
  })
  it('should throw error if parameter base is not a string', () => {
    expect(() => decorateTree(1)).toThrow()
  })

  it('should return result', () => {
    expect(decorateTree(base)).toStrictEqual(result)
  })
})
