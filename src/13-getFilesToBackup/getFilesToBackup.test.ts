import { describe, expect, it } from 'vitest'
import { getFilesToBackup } from './getFilesToBackup'
import { lastBackup, changes, result } from './mock'

describe('getFilesToBackup', () => {
  it('should throw error if parameter lastBackup is not provided', () => {
    expect(() => getFilesToBackup(undefined, [1, 2])).toThrow()
  })
  it('should throw error if parameter lastBackup is not a number', () => {
    expect(() => getFilesToBackup('a', [1, 2])).toThrow()
  })
  it('should throw error if parameter changes is not provided', () => {
    expect(() => getFilesToBackup(1, undefined)).toThrow()
  })

  it('should return result', () => {
    expect(getFilesToBackup(lastBackup, changes)).toStrictEqual(result)
  })
})
