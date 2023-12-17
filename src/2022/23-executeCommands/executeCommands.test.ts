import { describe, expect, it } from 'vitest'
import { executeCommands } from './executeCommands'
import { commands, commands1, commands2, commands3, result, result1, result2, result3 } from './mock'

describe('executeCommands', () => {
  it('should throw error if parameter commands is not provided', () => {
    expect(() => executeCommands()).toThrow()
  })
  it('should throw error if parameter commands is not an array', () => {
    expect(() => executeCommands(1)).toThrow()
  })
  it('should throw error if parameter commands is an empty array', () => {
    expect(() => executeCommands([])).toThrow()
  })
  it('should throw error if parameter commands is not a array of strings', () => {
    expect(() => executeCommands([1])).toThrow()
  })

  it('should return result', () => {
    expect(executeCommands(commands)).toStrictEqual(result)
    expect(executeCommands(commands1)).toStrictEqual(result1)
    expect(executeCommands(commands2)).toStrictEqual(result2)
    expect(executeCommands(commands3)).toStrictEqual(result3)
  })
})
