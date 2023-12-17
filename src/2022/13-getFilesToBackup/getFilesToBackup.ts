export const getFilesToBackup = (lastBackup: number, changes: number[][]) => {
  if (!lastBackup) throw new Error('lastBackup parameter must be provided')
  if (typeof lastBackup !== 'number') throw new Error('lastBackup parameter must be a number')
  if (!changes) throw new Error('changes parameter must be provided')
  if (!Array.isArray(changes)) throw new Error('changes parameter must be an array')
  if (changes.length < 1) throw new Error('changes parameter must have values')
  changes.forEach((el) => {
    if (!Array.isArray(el)) throw new Error('changes value parameter must be an array')
    el.forEach((subEl) => {
      if (typeof subEl !== 'number') throw new Error('changes value parameter must be an array of numbers')
    })
  })

  const files = []

  changes.forEach(([id, timestamp]) => {
    if (lastBackup < timestamp && !files.includes(id)) files.push(id)
  })

  return files.sort((a, b) => a - b)
}
