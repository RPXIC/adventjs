import { describe, expect, it } from 'vitest'
import { getOptimalPath } from './getOptimalPath'
import { path, path1, path2, path3, result, result1, result2, result3 } from './mock'

describe('getOptimalPath', () => {
  it('should throw error if parameter path is not provided', () => {
    expect(() => getOptimalPath()).toThrow()
  })

  it('should return result', () => {
    expect(getOptimalPath(path)).toBe(result)
    expect(getOptimalPath(path1)).toBe(result1)
    expect(getOptimalPath(path2)).toBe(result2)
    expect(getOptimalPath(path3)).toBe(result3)
  })
})
