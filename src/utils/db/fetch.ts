import { TableConstants } from '<utils>/const';
import { database } from './index.native';
import Habit from './model/Habit';

export const fetchHabitsOverview = async () => {
  const res = await database
    .get<Habit>(TableConstants.HABITS_OVERVIEW)
    .query()
    .fetch();

  console.log(
    'HEY DB AFTER CREATE ',
    res.map(({ habitName, date, score }) => ({ habitName, date, score })),
  );
};
