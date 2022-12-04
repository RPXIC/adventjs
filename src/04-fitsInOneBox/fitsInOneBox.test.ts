import { describe, expect, it } from 'vitest'
import { fitsInOneBox } from './fitsInOneBox'
import { boxes, boxes1, boxes2, result, result1, result2 } from './mock'

describe('fitsInOneBox', () => {
  it('should throw error if param is not provided', () => {
    expect(() => fitsInOneBox()).toThrow()
  })
  it('should throw error if param is not an array', () => {
    expect(() => fitsInOneBox(1)).toThrow()
  })
  it('should throw error if param is an empty array', () => {
    expect(() => fitsInOneBox([])).toThrow()
  })
  it('should throw error if param has any object value not a number', () => {
    expect(() => fitsInOneBox([{ w: 1, h: 1, l: '1' }])).toThrow()
  })

  it('should return correct result', () => {
    expect(fitsInOneBox(boxes)).toBe(result)
  })
  it('should return correct result', () => {
    expect(fitsInOneBox(boxes1)).toBe(result1)
  })
  it('should return correct result', () => {
    expect(fitsInOneBox(boxes2)).toBe(result2)
  })
})
