import { BaseState } from "../interface";

export const getBaseGumjournalsData = (state: BaseState) =>
  state.gumjournals.value;

export const getGumjournalsDateList = (state: BaseState) => {
  const gumjournalsData = state.gumjournals.value;
  return Object.keys(gumjournalsData);
};

export const getGumjournalsDataByDate =
  (date: string) => (state: BaseState) => {
    return state.gumjournals.value[date] ?? {};
  };
