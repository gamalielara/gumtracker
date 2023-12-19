export interface CalendarDateInfo {
  date: string;
  hasBeenFilled: boolean;
}

export enum DateVariant {
  SELECTED,
  HAS_BEEN_FILLED,
  NONE,
}
