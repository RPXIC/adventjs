import { describe, expect, it } from 'vitest'
import { sortToys } from './sortToys'
import { toys, toys1, positions, positions1, result, result1 } from './mock'

describe('sortToys', () => {
  it('should throw error if parameter toy is not provided', () => {
    expect(() => sortToys()).toThrow()
  })
  it('should throw error if parameter toy is not an array', () => {
    expect(() => sortToys(1)).toThrow()
  })
  it('should throw error if parameter toy is not an empty array', () => {
    expect(() => sortToys([])).toThrow()
  })
  it('should throw error if parameter toy is not an string array', () => {
    expect(() => sortToys([1])).toThrow()
  })
  it('should throw error if parameter positions is not provided', () => {
    expect(() => sortToys(['a'])).toThrow()
  })
  it('should throw error if parameter positions is not an array', () => {
    expect(() => sortToys(['a'], 1)).toThrow()
  })
  it('should throw error if parameter positions is not an empty array', () => {
    expect(() => sortToys(['a'], [])).toThrow()
  })
  it('should throw error if parameter positions is not an number array', () => {
    expect(() => sortToys(['a'], ['a'])).toThrow()
  })
  it('should throw error if parameters do not have the same length', () => {
    expect(() => sortToys(['a'], [1, 2])).toThrow()
  })

  it('should return result', () => {
    expect(sortToys(toys, positions)).toStrictEqual(result)
  })
  it('should return result', () => {
    expect(sortToys(toys1, positions1)).toStrictEqual(result1)
  })
})
