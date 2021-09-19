export interface FuzzyDate {
    day?: number;
    month?: number; // 1 = Jan, 12 = Dec
    year: number;
}

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
