import { formatOptions, locales } from "./types.ts";

const defaultFormatOptions: formatOptions = {
  weekday: "long",
  month: "long",
  day: "2-digit",
  year: "numeric",
};

export function generateCalendar(
  year: number,
  month: number,
  locale: locales  = locales.ENUS,
  format: formatOptions = defaultFormatOptions,
) {
  // we dont need to work with local time since we are not interested in the time
  // we only want the days, dates and months, we will never return time
  // the +1 is to make sure we get the last day of the month because js rolls back to the previous month
  const daysInMonth = new Date(Date.UTC(year, month + 1, 0)).getUTCDate();
  const _firstDay = new Date(Date.UTC(year, month, 1)).getDay();
  // using that logic we can get the last day of the previous month aka number of days in the previous month
  const lastDayPreviousMonth = new Date(Date.UTC(year, month, 0)).getDate();
  const lastDayIndex = new Date(Date.UTC(year, month - 1, lastDayPreviousMonth))
    .getDay();
  const _firstDayNextMonth = new Date(Date.UTC(year, month + 1, 1)).getDate();
  const firstDayIndex = new Date(Date.UTC(year, month + 1, 1)).getDay();

  const calendarDates = new Array<string>();
  const calendarWeeks = new Array<Array<string>>();

  for (let j = lastDayIndex; j >= 0; j--) {
    const date = new Date(Date.UTC(year, month - 1, lastDayPreviousMonth - j))
      .toLocaleString(locale, format);
    calendarDates.push(date);
  }

  for (let i = 1; i <= daysInMonth; i++) {
    const date = new Date(Date.UTC(year, month, i)).toLocaleString(
      locale,
      format,
    );
    calendarDates.push(date);
  }

  for (let k = 0; k <= 6 - firstDayIndex; k++) {
    const date = new Date(Date.UTC(year, month + 1, k + 1)).toLocaleString(
      locale,
      format,
    );
    calendarDates.push(date);
  }

  const numberOfWeeks = Math.ceil(calendarDates.length / 7);
  for (let i = 0; i < numberOfWeeks; i++) {
    calendarWeeks.push(calendarDates.slice(i * 7, i * 7 + 7));
  }
  
  const monthName = returnMonthName(month, locale);

  console.log(calendarWeeks, calendarDates);
  console.log(monthName);

  return {
    month: monthName,
    calendarDates,
    calendarWeeks,
  };
}

function returnMonthName(month: number, locale: locales) {
  return new Date(Date.UTC(2025, month, 1)).toLocaleString(locale, {
    month: "long",
  });
}

generateCalendar(2025, 3, locales.FRFR);
