interface FuzzyDate {
    day?: number;
    month?: number; // 1 = Jan, 12 = Dec
    year: number;
}

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

const test = () => {
    const blah = [...testDates].reverse().sort(fuzzyDateCompare);
    if (JSON.stringify(testDates) !== JSON.stringify(blah)) {
        console.log(`
        Expected: ${JSON.stringify(testDates)}
        Got: ${JSON.stringify(blah)}
        `);
    }
};

// More specific sorts first
export const fuzzyDateCompare = (d1: FuzzyDate, d2: FuzzyDate): number => {
    if (d1.month && d1.day) {
        if (d2.month && d2.day) {
            return d1.year === d2.year
                ? d1.month === d2.month
                    ? d1.day === d2.day
                        ? 0
                        : d1.day - d2.day
                    : d1.month - d2.month
                : d1.year - d2.year;
        }
        if (d2.month && !d2.day) {
            return d1.year === d2.year
                ? d1.month === d2.month
                    ? -1
                    : d1.month - d2.month
                : d1.year - d2.year;
        }
        return d1.year === d2.year ? -1 : d1.year - d2.year;
    }
    if (d1.month) {
        if (d2.month && d2.day) {
            return d1.year === d2.year
                ? d1.month === d2.month
                    ? 1
                    : d1.month - d2.month
                : d1.year - d2.year;
        }
        if (d2.month) {
            return d1.year === d2.year
                ? d1.month === d2.month
                    ? 0
                    : d1.month - d2.month
                : d1.year - d2.year;
        }
        return d1.year === d2.year ? -1 : d1.year - d2.year;
    }
    if (d2.month) {
        return d1.year === d2.year ? 1 : d1.year - d2.year;
    }
    return d1.year - d2.year;
};

export interface Drawing {
    tags: string[];
    date: FuzzyDate;
    imageUrl: string;
}

export interface Tag {
    relatedTags: string[];
}

// Major options around whether images are
//  - Dynamically generated from mask + source
//  - individual images per drawing
export interface Data {
    drawings: Drawing[];
    tags: Tag[];
}

test();
