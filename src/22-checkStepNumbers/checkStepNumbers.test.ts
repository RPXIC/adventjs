import { describe, expect, it } from 'vitest'
import { checkStepNumbers } from './checkStepNumbers'
import { systemNames, systemNames1, stepNumbers, stepNumbers1, result, result1 } from './mock'

describe('checkStepNumbers', () => {
  it('should throw error if parameter systemNames is not provided', () => {
    expect(() => checkStepNumbers()).toThrow()
  })
  it('should throw error if parameter systemNames is not an array', () => {
    expect(() => checkStepNumbers(1)).toThrow()
  })
  it('should throw error if parameter systemNames is an empty array', () => {
    expect(() => checkStepNumbers([])).toThrow()
  })
  it('should throw error if parameter systemNames is not a array of strings', () => {
    expect(() => checkStepNumbers([1])).toThrow()
  })

  it('should throw error if parameter stepNumbers is not provided', () => {
    expect(() => checkStepNumbers(['1'])).toThrow()
  })
  it('should throw error if parameter stepNumbers is not an array', () => {
    expect(() => checkStepNumbers(['1'], 1)).toThrow()
  })
  it('should throw error if parameter stepNumbers is an empty array', () => {
    expect(() => checkStepNumbers(['1'], [])).toThrow()
  })
  it('should throw error if parameter stepNumbers is not a array of numbers', () => {
    expect(() => checkStepNumbers(['1'], ['1'])).toThrow()
  })

  it('should return result', () => {
    expect(checkStepNumbers(systemNames, stepNumbers)).toBe(result)
    expect(checkStepNumbers(systemNames1, stepNumbers1)).toBe(result1)
  })
})
