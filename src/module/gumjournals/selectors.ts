import { BaseState } from "../interface";

export const getBaseGumjournalsData = (state: BaseState) =>
  state.gumjournals.value;

export const getGumjournalsDateList = (state: BaseState) => {
  const gumjournalsData = state.gumjournals.value;
  return Object.keys(gumjournalsData);
};
