export const canExit = (maze: string[][]) => {
  if (!maze) throw new Error('maze parameter must be provided')
  if (!Array.isArray(maze)) throw new Error('parameter maze must be an array')
  if (!maze[0]) throw new Error('maze value must be provided')
  if (!Array.isArray(maze[0])) throw new Error('parameter maze value must be an array')
  if (maze[0].length < 1) throw new Error('parameter maze must have values')
  maze[0].forEach((el) => {
    if (typeof el !== 'string') throw new Error('maze values must be a string')
  })

  function replace(str) {
    return str
      .replace(/[S][\sE]/g, 'SS')
      .replace(/[\sE][S]/g, 'SS')
      .split('')
  }

  let x: string[][][] = []
  new Array(maze[0].length * maze.length).fill(0).forEach(() => {
    let check = [...maze]
    maze.map((horizontal, i) => {
      maze[i] = replace(horizontal.join(''))
      let v = maze[0].map((_, i) => replace(maze.map((x) => x[i]).join('')))
      maze[i] = v.map((x) => x[i])
    })
    check.flat().join('') == maze.flat().join('') && x.push(check)
  })

  return !x.flat(2).includes('E')
}
