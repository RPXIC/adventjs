import { describe, expect, it } from 'vitest'
import { selectSleigh } from './selectSleigh'
import { distance, sleighs, res } from './mock'

describe('selectSleigh', () => {
  it('should throw error if parameters are not provided', () => {
    expect(() => selectSleigh()).toThrow()
  })
  it('should throw error if parameter distance is not provided', () => {
    expect(() => selectSleigh(undefined, [])).toThrow()
  })
  it('should throw error if parameter sleighs is not provided', () => {
    expect(() => selectSleigh(1, undefined)).toThrow()
  })
  it('should throw error if parameters sleighs is not an array', () => {
    expect(() => selectSleigh(1, 1)).toThrow()
  })
  it('should throw error if parameters sleighs is an empty array', () => {
    expect(() => selectSleigh(1, [])).toThrow()
  })

  it('should return the correct result', () => {
    expect(selectSleigh(distance, sleighs)).toBe(res)
  })
})
