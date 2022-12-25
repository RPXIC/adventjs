import { describe, expect, it } from 'vitest'
import { canExit } from './canExit'
import { maze, maze1, result, result1 } from './mock'

describe('canExit', () => {
  it('should throw error if parameter commands is not provided', () => {
    expect(() => canExit()).toThrow()
  })
  it('should throw error if parameter commands is not an array', () => {
    expect(() => canExit(1)).toThrow()
  })
  it('should throw error if parameter commands is an empty array', () => {
    expect(() => canExit([])).toThrow()
  })
  it('should throw error if parameter commands is not a array of strings', () => {
    expect(() => canExit([1])).toThrow()
  })

  it('should return result', () => {
    expect(canExit(maze)).toBe(result)
    expect(canExit(maze1)).toBe(result1)
  })
})
