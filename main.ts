import { calendar, formatOptions, locales } from "./types.ts";

const defaultFormatOptions: formatOptions = {
  weekday: "long",
  month: "long",
  day: "2-digit",
  year: "numeric",
  firstDay: "Monday",
};

/**
 * @param year number the year
 * @param month number the month from 0 to 11
 * @param locale the locale to use
 * @param format the format to use
 * @returns calendar feature the monthname,
 * an array with all the month dates,
 * and an array with all the weeks of the month
 */
export function generateCalendar(
  year: number,
  month: number,
  locale: locales = locales.ENUS,
  format: formatOptions = defaultFormatOptions,
): calendar {
  const daysInMonth = new Date(Date.UTC(year, month + 1, 0)).getUTCDate();
  const _firstDay = new Date(Date.UTC(year, month, 1)).getDay();

  const lastDayPreviousMonth = new Date(Date.UTC(year, month, 0)).getDate();
  let lastDayPreviousMonthIndex = new Date(
    Date.UTC(year, month - 1, lastDayPreviousMonth),
  )
    .getDay();

  const _firstDayNextMonth = new Date(Date.UTC(year, month + 1, 1)).getDate();
  let firstDayNextMonthIndex = new Date(Date.UTC(year, month + 1, 1)).getDay();

  const calendarDates = new Array<string>();
  const calendarWeeks = new Array<Array<string>>();

  if (format.firstDay === "Monday") {
    lastDayPreviousMonthIndex = lastDayPreviousMonthIndex - 1;
    firstDayNextMonthIndex = firstDayNextMonthIndex - 1;
  }

  for (let j = lastDayPreviousMonthIndex; j >= 0; j--) {
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

  for (let k = 0; k <= 6 - firstDayNextMonthIndex; k++) {
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
