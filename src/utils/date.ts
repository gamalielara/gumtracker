/**
 * To parse date string from MM-DD-YYYY to YYYY-MM-DD
 * This is used for the RN calendar
 * @param date stringified date with format MM-DD-YYY or time epoch
 */
export function parseDate(date: string | number) {
  const rawDate = new Date(Number(date));

  const year = rawDate.toLocaleDateString("default", { year: "numeric" });
  const month = rawDate.toLocaleDateString("default", { month: "2-digit" });
  const day = rawDate.toLocaleDateString("default", { day: "2-digit" });

  return `${year}-${month}-${day}`;
}
