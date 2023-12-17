export const countHours = (year: number, holidays: string[]) => {
  if (!year) throw new Error('year must be provided')
  if (typeof year !== 'number') throw new Error('year must be a number')
  if (!holidays) throw new Error('holidays must be provided')
  if (!Array.isArray(holidays)) throw new Error('holidays must be an array')
  if (holidays.length === 0) throw new Error('holidays must have values')
  holidays.forEach((el) => {
    if (typeof el !== 'string') throw new Error('holidays values must be a string')
  })

  let hours = 0

  holidays.forEach((el) => {
    const [month, day] = el.split('/')
    let parsedMonth = Number(month) - 1
    const check = new Date(year, parsedMonth, Number(day)).getDay()
    if (check > 0 && check < 6) hours += 2
  })
  return hours
}
