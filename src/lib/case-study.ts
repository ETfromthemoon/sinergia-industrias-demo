/** Shared case-study data shape used by CaseStudyCard, CaseSlide and CasosGrid. */
export type CaseStudy = {
  client: string;
  code: string;
  industry: string;
  context: string;
  service: string;
  result: string;
  image?: string;
};

/**
 * Truncates text to at most `maxLength` characters, cutting at the last
 * whitespace boundary before the limit so words are never chopped in half.
 * Appends an ellipsis only when truncation actually occurred.
 */
export function truncateAtWord(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;

  const slice = text.slice(0, maxLength);
  const lastSpace = slice.lastIndexOf(" ");
  const safeSlice = lastSpace > 0 ? slice.slice(0, lastSpace) : slice;

  return `${safeSlice.trimEnd()}…`;
}
