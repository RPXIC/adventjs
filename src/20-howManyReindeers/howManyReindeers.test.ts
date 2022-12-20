import { describe, expect, it } from 'vitest'
import { howManyReindeers } from './howManyReindeers'
import { reindeerTypes, gifts, result } from './mock'

describe('howManyReindeers', () => {
  it('should throw error if parameter reindeerTypes is not provided', () => {
    expect(() => howManyReindeers()).toThrow()
  })
  it('should throw error if parameter reindeerTypes is not an array', () => {
    expect(() => howManyReindeers(1)).toThrow()
  })
  it('should throw error if parameter reindeerTypes is an empty array', () => {
    expect(() => howManyReindeers([])).toThrow()
  })
  it('should throw error if parameter reindeerTypes is not provided', () => {
    expect(() => howManyReindeers()).toThrow()
  })
  it('should throw error if parameter reindeerTypes is not an array', () => {
    expect(() => howManyReindeers([{ type: 'a', weightCapacity: 1 }], 1)).toThrow()
  })
  it('should throw error if parameter reindeerTypes is an empty array', () => {
    expect(() => howManyReindeers([{ type: 'a', weightCapacity: 1 }], [])).toThrow()
  })

  it('should return result', () => {
    expect(howManyReindeers(reindeerTypes, gifts)).toStrictEqual(result)
  })
})
