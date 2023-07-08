import {
  GumjournalsAction,
  GumjournalsActionType,
  GumjournalsForm,
} from "./interface";

export const GumjournasReducer = (
  state: GumjournalsForm,
  action: GumjournalsAction
) => {
  switch (action.type) {
    case GumjournalsActionType.UPDATE_MOOD:
      return { ...state, ...action.payload };
    default:
      return { ...state };
  }
};
