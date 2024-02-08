import { eachDayOfInterval, startOfYear, endOfYear, format } from 'date-fns';

const firstDayOfYear = startOfYear(new Date());

const lastDayOfYear = endOfYear(new Date());

const daysOfYear = eachDayOfInterval({
  start: firstDayOfYear,
  end: lastDayOfYear,
});

export const getAllDaysInThisYear = () =>
  daysOfYear.map(day => format(day, 'MM-dd-yyyy'));
