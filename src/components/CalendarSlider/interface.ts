export interface CalendarDateInfo {
  date: number;
  hasBeenFilled: boolean;
}

export enum DateVariant {
  SELECTED,
  HAS_BEEN_FILLED,
  NONE,
}
