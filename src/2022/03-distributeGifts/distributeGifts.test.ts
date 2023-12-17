import { describe, expect, it } from 'vitest'
import { distributeGifts } from './distributeGifts'
import { packOfGifts, reindeers, result } from './mock'

describe('distributeGifts', () => {
  it('should throw error if params not provided', () => {
    expect(() => distributeGifts()).toThrow()
  })
  it('should throw error if packOfGifts is not an array', () => {
    expect(() => distributeGifts(undefined)).toThrow()
  })
  it('should throw error if packOfGifts is not an array', () => {
    expect(() => distributeGifts(1)).toThrow()
  })
  it('should throw error if packOfGifts is not an empty array', () => {
    expect(() => distributeGifts([])).toThrow()
  })
  it('should throw error if packOfGifts is not an array of strings', () => {
    expect(() => distributeGifts([1])).toThrow()
  })

  it('should throw error if reindeers is not an array', () => {
    expect(() => distributeGifts(['a'], undefined)).toThrow()
  })
  it('should throw error if reindeers is not an array', () => {
    expect(() => distributeGifts(['a'], 1)).toThrow()
  })
  it('should throw error if reindeers is not an empty array', () => {
    expect(() => distributeGifts(['a'], [])).toThrow()
  })
  it('should throw error if reindeers is not an array of strings', () => {
    expect(() => distributeGifts(['a'], [1])).toThrow()
  })

  it('should return correct result', () => {
    expect(distributeGifts(packOfGifts, reindeers)).toBe(result)
  })
})
