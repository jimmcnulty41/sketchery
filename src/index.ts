import { Drawing } from "./Drawing";
export interface Tag {
    key: string;
    relatedTags: string[];
}

// Major options around whether images are
//  - Dynamically generated from mask + source
//  - individual images per drawing
export interface Data {
    drawings: Drawing[];
    tagMetaData: Tag[];
}
