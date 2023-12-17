export const executeCommands = (commands: string[]) => {
  if (!commands) throw new Error('commands parameter must be provided')
  if (!Array.isArray(commands)) throw new Error('parameter commands must be an array')
  if (commands.length < 1) throw new Error('parameter commands must have values')
  commands.forEach((el) => {
    if (typeof el !== 'string') throw new Error('commands values must be a string')
  })

  const result = [0, 0, 0, 0, 0, 0, 0, 0]

  function execute(command: string, param1: string, param2?: string) {
    if (command === 'INC') {
      const pos = param1[2]
      if (result[pos] >= 255) return (result[pos] = 0)
      return result[pos]++
    }
    if (command === 'DEC') {
      const pos = param1[2]
      if (result[pos] <= 0) return (result[pos] = 255)
      return result[pos]--
    }
    if (command === 'MOV') {
      const [a, param2] = param1.split(',')

      if (a.includes('V')) {
        const pos = param2[2]
        return (result[pos] = result[a[2]])
      } else {
        const pos = param2[2]
        return (result[pos] = Number(a))
      }
    }
    if (command === 'ADD') {
      const [a, param2] = param1.split(',')

      const sum = result[a[2]] + result[param2[2]]
      if (sum > 255) {
        return (result[a[2]] = sum - 255)
      } else {
        return (result[a[2]] = sum)
      }
    }
    if (command === 'JMP') {
      if (result[0] !== 0) {
        const newCommands = commands.slice(Number(param1), commands.length - 1)
        return iterate(newCommands)
      }
    }
  }

  function iterate(commands) {
    commands.forEach((el) => {
      const [command, ...rest] = el.split(' ')
      execute(command, rest[0])
    })
  }

  iterate(commands)

  return result
}
