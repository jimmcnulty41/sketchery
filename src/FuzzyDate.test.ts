import { FuzzyDate, fuzzyDateCompare } from "./FuzzyDate";

// Dates here in ascending order
const testDates: FuzzyDate[] = [
    { year: 2000, month: 4, day: 20 },
    { year: 2000, month: 4, day: 21 },
    { year: 2000, month: 4 },
    { year: 2000, month: 5, day: 21 },
    { year: 2000, month: 5 },
    { year: 2000 },
    { year: 2001, month: 4, day: 21 },
    { year: 2001 },
];

const blah = [...testDates].reverse().sort(fuzzyDateCompare);
if (JSON.stringify(testDates) !== JSON.stringify(blah)) {
    console.log(`
        Expected: ${JSON.stringify(testDates)}
        Got: ${JSON.stringify(blah)}
    `);
} else {
    console.log("Fuzzy Date test pass");
}
