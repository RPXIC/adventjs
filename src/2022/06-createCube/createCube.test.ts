import { describe, expect, it } from 'vitest'
import { createCube } from './createCube'
import { cube1, result1, cube2, result2, cube3, result3 } from './mock'

describe('createCube', () => {
  it('should throw error if param size is not provided', () => {
    expect(() => createCube()).toThrow()
  })
  it('should throw error if param size is not a number', () => {
    expect(() => createCube('a')).toThrow()
  })
  it('should throw error if param size is lower than 1', () => {
    expect(() => createCube(0)).toThrow()
  })

  it('should return correct result', () => {
    expect(createCube(cube1)).toBe(result1)
    expect(createCube(cube2)).toBe(result2)
    expect(createCube(cube3)).toBe(result3)
  })
})
