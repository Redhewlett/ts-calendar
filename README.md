# TS-Calendar
![Static Badge](https://img.shields.io/badge/deno-v2.2.3-rgb(112%2C%20255%2C%20175)) <img src="https://img.shields.io/badge/License-MIT-blue.svg"></br>
TS-Calendar main function generates a monthly calendar with the parameter you pass



## 🖥️ Adding the package
```console

deno add jsr:@redh-pkg/ts-calendar

```

```console
npx jsr add @redh-pkg/ts-calendar

```

```console
yarn dlx jsr add @redh-pkg/ts-calendar

```

```console
pnpm dlx jsr add @redh-pkg/ts-calendar

```

```console
bunx jsr add @redh-pkg/ts-calendar

```

## ⌨️ Usage
Once the package is added:
If you’re using Deno, the deno add command will add an import map entry for the JSR module you specified in a deno.json file. 
For npm and npm-compatible package managers, the jsr command will add the dependency to your package.json file, along with a .npmrc file to your project root with the necessary config to use JSR with npm. Learn more about JSR’s npm compatibility layer.

Then here is an example of the main function
```typescript
import type { generateCalendar, formatOptions, locales } from "@redh-pkg/ts-calendar";

// lets specify our options
const formatOptions: formatOptions = {
  weekday: "long",
  month: "long",
  day: "2-digit",
  firstDay: "Monday",
};
// lets generate a calendar for febuary 2024
const calendar = generateCalendar(2024, 1, locales.ENUS, formatOptions);
```

Considering the formatOptions object the expected output should be
```typescript
{
  month: "february",
  calendarDates:[
    "Monday, January 29", "Tuesday, January 30", "Wednesday, January 31","Thursday, February 01", "Friday, February 02", "Saturday, February 03", "Sunday, February 04",
    "Monday, February 05", "Tuesday, February 06", "Wednesday, February 07", "Thursday, February 08", "Friday, February 09", "Saturday, February 10", "Sunday, February 11",
    "Monday, February 12", "Tuesday, February 13", "Wednesday, February 14", "Thursday, February 15", "Friday, February 16", "Saturday, February 17", "Sunday, February 18",
    "Monday, February 19", "Tuesday, February 20", "Wednesday, February 21", "Thursday, February 22", "Friday, February 23", "Saturday, February 24", "Sunday, February 25",
    "Monday, February 26", "Tuesday, February 27", "Wednesday, February 28", "Thursday, February 29","Friday, March 01", "Saturday, March 02", "Sunday, March 03"
  ],
  calendarWeeks:[
    ["Monday, January 29", "Tuesday, January 30", "Wednesday, January 31", "Thursday, February 01", "Friday, February 02", "Saturday, February 03", "Sunday, February 04"],
    ["Monday, February 05", "Tuesday, February 06", "Wednesday, February 07", "Thursday, February 08", "Friday, February 09", "Saturday, February 10", "Sunday, February 11"],
    ["Monday, February 12", "Tuesday, February 13", "Wednesday, February 14", "Thursday, February 15", "Friday, February 16", "Saturday, February 17", "Sunday, February 18"],
    ["Monday, February 19", "Tuesday, February 20", "Wednesday, February 21", "Thursday, February 22", "Friday, February 23", "Saturday, February 24", "Sunday, February 25"],
    ["Monday, February 26", "Tuesday, February 27", "Wednesday, February 28", "Thursday, February 29", "Friday, March 01", "Saturday, March 02", "Sunday, March 03"]
  ];
}
```

The locales enum will help you select the right local for you needs.</br>
The output will change depending on the options you pass, to know what these options are you should look in the formatOptions interface.</br>

My approch with this is to help generate calendar similar to what you can find in your pc's calendar. I had to deal with this in a previous mission, so i know dates can be a pain to deal with.
This is a testimony of the experience i got during this mission. The package has no dependencies and provides simple object. </br>

### 🤔 what's next?
The name is TS-Calendar, so i think the goal is reached, but if i can provide more functions to help with dates (still in the calendar field) i think i will do so.

### 📝 Contributions
For now i will maintain this by myself but you can reach me if you have any idea that matches what i think in the What's next section.
