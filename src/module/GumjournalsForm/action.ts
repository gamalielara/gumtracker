import { GumjournalsActionType, GumjournalsForm } from "./interface";

export const updateMood = (payload: Partial<GumjournalsForm>) => ({
  payload,
  type: GumjournalsActionType.UPDATE_MOOD,
});

export const updateDateFilled = (timestamp: number) => ({
  payload: { dateFilled: timestamp },
  type: GumjournalsActionType.UPDATE_DATE,
});

export const updateHighlightOfTheDay = (
  highlight: string,
  highlightType: number
) => {
  return {
    payload: { highlight: [highlight] },
    type:
      highlightType === 1
        ? GumjournalsActionType.UPDATE_HIGHLIGHT_ONE
        : GumjournalsActionType.UPDATE_HIGHLIGHT_TWO,
  };
};
