/**
 * Editorial constants only. Published page count and ordering are derived
 * from the loaded AgreementSection arrays in loader.ts.
 * Never generate page IDs by multiplying subsection counts: sections vary in length.
 */
export const AGREEMENT_SECTION_COUNT = 16;
export const AGREEMENT_SUBSECTIONS_PER_SECTION = 8;
export const AGREEMENT_PLANNED_TOTAL_PAGES = 596;
