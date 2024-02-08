import { faker } from '@faker-js/faker';
import { endOfYear, format, startOfYear } from 'date-fns';
import { THabitsData } from '../type/habits';

export const MOCK_HABITS: THabitsData = Object.fromEntries(
  Array(365)
    .fill(0)
    .map(() => [
      format(
        faker.date.between({
          from: startOfYear(new Date()),
          to: endOfYear(new Date()),
        }),
        'MM-dd-yyyy',
      ),
      faker.number.int({
        min: 0,
        max: 5,
      }),
    ]),
);
