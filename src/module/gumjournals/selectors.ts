import { BaseState } from "../interface";

export const getGumjournalsSelectedDate = (state: BaseState) =>
  state.gumjournals.selectedDate;

export const getIsGumjournalsLoading = (state: BaseState) =>
  state.gumjournals.isLoading;
