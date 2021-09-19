import { FuzzyDate } from "./FuzzyDate";

export interface Drawing {
    tags: string[];
    date: FuzzyDate;
    imageUrl: string;
    maskUrl?: string;
}
