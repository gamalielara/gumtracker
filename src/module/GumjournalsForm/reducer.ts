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
    case GumjournalsActionType.UPDATE_DATE:
      return { ...state, ...action.payload };
    case GumjournalsActionType.UPDATE_HIGHLIGHT_ONE:
      return {
        ...state,
        highlight: [...(action.payload.highlight ?? []), state.highlight[1]],
      };
    case GumjournalsActionType.UPDATE_HIGHLIGHT_TWO:
      return {
        ...state,
        highlight: [state.highlight[0], ...(action.payload.highlight ?? [])],
      };

    case GumjournalsActionType.UPDATE_HABITS:
      return {
        ...state,
        habits: [...(action.payload.habits ?? [])],
      };
    default:
      return { ...state };
  }
};
