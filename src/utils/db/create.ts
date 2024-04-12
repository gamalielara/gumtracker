import { TableConstants } from '<utils>/const';
import { database } from './index.native';
import { formatDateToMMDDYY } from '<utils>/date';
import Habit from './model/Habit';

export const createNewHabitOverview = async () => {
  try {
    await database.write(async () => {
      const habit = await database
        .get<Habit>(TableConstants.HABITS_OVERVIEW)
        .create(habit => {
          habit.date = formatDateToMMDDYY(Date.now());
          habit.habitName = 'Reading';
          habit.score = 4;
        });

      return habit;
    });
  } catch (err) {
    console.log('ERROR DB ', err);
  }
};
