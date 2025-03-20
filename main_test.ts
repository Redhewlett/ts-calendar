import { assertEquals } from "jsr:@std/assert";
import { generateCalendar } from "./main.ts";
import { locales } from "./types.ts";
import type { calendar, formatOptions } from "./types.ts";

const enFebruary2024Flat: string[] = [
  "Monday, January 29", "Tuesday, January 30", "Wednesday, January 31",
  "Thursday, February 01", "Friday, February 02", "Saturday, February 03", "Sunday, February 04",
  "Monday, February 05", "Tuesday, February 06", "Wednesday, February 07", "Thursday, February 08", "Friday, February 09", "Saturday, February 10", "Sunday, February 11",
  "Monday, February 12", "Tuesday, February 13", "Wednesday, February 14", "Thursday, February 15", "Friday, February 16", "Saturday, February 17", "Sunday, February 18",
  "Monday, February 19", "Tuesday, February 20", "Wednesday, February 21", "Thursday, February 22", "Friday, February 23", "Saturday, February 24", "Sunday, February 25",
  "Monday, February 26", "Tuesday, February 27", "Wednesday, February 28", "Thursday, February 29",
  "Friday, March 01", "Saturday, March 02", "Sunday, March 03"
];

const enFebruary2024Weeks: string[][] = [
  ["Monday, January 29", "Tuesday, January 30", "Wednesday, January 31", "Thursday, February 01", "Friday, February 02", "Saturday, February 03", "Sunday, February 04"],
  ["Monday, February 05", "Tuesday, February 06", "Wednesday, February 07", "Thursday, February 08", "Friday, February 09", "Saturday, February 10", "Sunday, February 11"],
  ["Monday, February 12", "Tuesday, February 13", "Wednesday, February 14", "Thursday, February 15", "Friday, February 16", "Saturday, February 17", "Sunday, February 18"],
  ["Monday, February 19", "Tuesday, February 20", "Wednesday, February 21", "Thursday, February 22", "Friday, February 23", "Saturday, February 24", "Sunday, February 25"],
  ["Monday, February 26", "Tuesday, February 27", "Wednesday, February 28", "Thursday, February 29", "Friday, March 01", "Saturday, March 02", "Sunday, March 03"]
];

const formatOptions: formatOptions = {
  weekday: "long",
  month: "long",
  day: "2-digit",
  firstDay: "Monday",
};

//testing for febuary 2024 ENUS 
//this is just a sample test, testing this could be gigantic

Deno.test("generate calendar", () => {
 const calendar: calendar = generateCalendar(2024, 1, locales.ENUS, formatOptions);
 assertEquals(calendar.month, "February");
 assertEquals(calendar.calendarDates, enFebruary2024Flat);
 assertEquals(calendar.calendarWeeks, enFebruary2024Weeks);
})
