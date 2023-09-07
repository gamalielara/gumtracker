export interface CalendarDateInfo {
  date: Date;
  hasBeenFilled: boolean;
}

export enum DateVariant {
  SELECTED,
  HAS_BEEN_FILLED,
  NONE,
}
