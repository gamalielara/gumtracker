import { TableConstants } from '<utils>/const';
import { Model } from '@nozbe/watermelondb';
import { field, readonly, date, writer } from '@nozbe/watermelondb/decorators';

export default class Habit extends Model {
  static table = TableConstants.HABITS_OVERVIEW;

  @field('date') date!: string;
  @field('habit_name') habitName!: string;
  @field('score') score!: number;
}
