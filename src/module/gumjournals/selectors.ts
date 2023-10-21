import { BaseState } from "../interface";
import { createSelector } from "@reduxjs/toolkit";

export const getBaseGumjournalsData = (state: BaseState) =>
  state.gumjournals.value;

// Selector memoization with createSelector
// Every time selector is called, it will return a new reference object and it can cause rerender
export const getGumjournalsDateList = createSelector(
  [getBaseGumjournalsData],
  (gumjournalsData) => Object.keys(gumjournalsData),
);

export const getGumjournalsDataByDate = (date: string) => {
  return createSelector([getBaseGumjournalsData], (state) => state[date] ?? {});
};

export const getGumjournalsSelectedDate = (state: BaseState) => state.gumjournals.selectedDate;