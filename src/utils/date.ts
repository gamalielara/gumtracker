/**
 * To parse date string from MM-DD-YYYY to YYYY-MM-DD
 * This is used for the RN calendar
 * @param date stringified date with format MM-DD-YYY or time epoch
 */
export function parseDate(date: string | number) {
  const rawDate = new Date(Number(date));

  const year = rawDate.toLocaleDateString('default', { year: 'numeric' });
  const month = rawDate.toLocaleDateString('default', { month: '2-digit' });
  const day = rawDate.toLocaleDateString('default', { day: '2-digit' });

  return `${year}-${month}-${day}`;
}

export function formatDateToMMDDYY(date: Date | string | number) {
  console.log('DATE ', date, date instanceof Date);

  const dateToParse = !(date instanceof Date) ? new Date(date) : date;

  // Extracting month, day, and year components
  const month = (dateToParse.getMonth() + 1).toString().padStart(2, '0'); // Adding 1 because getMonth() returns zero-based index
  const day = dateToParse.getDate().toString().padStart(2, '0');
  const year = dateToParse.getFullYear().toString();

  // Formatting the date as MM-dd-YY
  const formattedDate = `${month}-${day}-${year}`;

  console.log({ formattedDate });

  return formattedDate;
}
