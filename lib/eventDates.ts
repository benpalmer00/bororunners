/**
 * Parse human-readable event date strings and check if they're in the past.
 *
 * Handles formats like:
 *   "Sunday, 12th April 2026"
 *   "March 2026"
 *   "May 2026 (EST.)"
 *   "Wednesday, 22nd April 2026 (EST.)"
 */

const MONTHS: Record<string, number> = {
  january: 0, february: 1, march: 2, april: 3, may: 4, june: 5,
  july: 6, august: 7, september: 8, october: 9, november: 10, december: 11,
};

export function parseEventDate(dateStr: string): Date | null {
  if (!dateStr || dateStr === "TBC") return null;

  // Strip "(EST.)" suffix, day names, and ordinal suffixes
  const cleaned = dateStr
    .replace(/\(EST\.?\)/gi, "")
    .replace(/^(monday|tuesday|wednesday|thursday|friday|saturday|sunday),?\s*/i, "")
    .replace(/(\d+)(st|nd|rd|th)/gi, "$1")
    .trim();

  // Try "Month YYYY" format (e.g. "March 2026")
  const monthYearMatch = cleaned.match(/^([a-z]+)\s+(\d{4})$/i);
  if (monthYearMatch) {
    const month = MONTHS[monthYearMatch[1].toLowerCase()];
    const year = parseInt(monthYearMatch[2], 10);
    if (month !== undefined) {
      // Use last day of that month
      return new Date(year, month + 1, 0, 23, 59, 59);
    }
  }

  // Try "DD Month YYYY" format (e.g. "12 April 2026")
  const dayMonthYearMatch = cleaned.match(/^(\d{1,2})\s+([a-z]+)\s+(\d{4})$/i);
  if (dayMonthYearMatch) {
    const day = parseInt(dayMonthYearMatch[1], 10);
    const month = MONTHS[dayMonthYearMatch[2].toLowerCase()];
    const year = parseInt(dayMonthYearMatch[3], 10);
    if (month !== undefined) {
      return new Date(year, month, day, 23, 59, 59);
    }
  }

  // Fallback: try native Date parsing (handles ISO strings from Sanity)
  const parsed = new Date(dateStr);
  if (!isNaN(parsed.getTime())) return parsed;

  return null;
}

export function isEventPast(dateStr: string): boolean {
  const eventDate = parseEventDate(dateStr);
  if (!eventDate) return false; // Can't parse — assume upcoming
  return eventDate < new Date();
}
