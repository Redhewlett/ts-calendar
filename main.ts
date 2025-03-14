
export function generateCalendar(year:number, month:number, locale:string = 'en-US') {
  // we dont need to work with local time since we are not interested in the time
  // we only want the days, dates and months, we will never return time
  // the +1 is to make sure we get the last day of the month because js rolls back to the previous month
  const daysInMonth = new Date(Date.UTC(year, month + 1, 0)).getUTCDate()
  const firstDay = new Date(Date.UTC(year, month, 1)).getDay()
  // using that logic we can get the last day of the previous month aka number of days in the previous month
  const lastDayPreviousMonth = new Date(Date.UTC(year, month, 0)).getDate()
  const lastDayIndex = new Date(Date.UTC(year, month - 1, lastDayPreviousMonth)).getDay()
  const firstDayNextMonth = new Date(Date.UTC(year, month + 1, 1)).getDate()
  const firstDayIndex = new Date(Date.UTC(year, month + 1, 1)).getDay()

  console.log(lastDayPreviousMonth, lastDayIndex, firstDayNextMonth, firstDayIndex)

  const calendarDates = new Array<Date>()
  const calendarWeeks = new Array<Array<Date>>()
  
  for (let j = lastDayIndex; j >= 0; j--) {
    calendarDates.push(new Date(Date.UTC(year, month - 1, lastDayPreviousMonth - j)))
  }

  for (let i = 1; i <= daysInMonth; i++) {
    calendarDates.push(new Date(Date.UTC(year, month, i)))
  }
  
  for (let k = 0; k <= 6 - firstDayIndex; k++) {
    calendarDates.push(new Date(Date.UTC(year, month + 1, k + 1)))
  }

  console.log(calendarDates)
  const numberOfWeeks = Math.ceil(calendarDates.length / 7)
  for (let i = 0; i < numberOfWeeks; i++) {
    calendarWeeks.push(calendarDates.slice(i * 7, i * 7 + 7))
  }

  return {
    calendarDates,
    calendarWeeks
  }
}

generateCalendar(2025, 2, 'fr-FR')
