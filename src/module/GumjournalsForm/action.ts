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
) => ({
  payload: { highlight: [highlight] },
  type:
    highlightType === 1
      ? GumjournalsActionType.UPDATE_HIGHLIGHT_ONE
      : GumjournalsActionType.UPDATE_HIGHLIGHT_TWO,
});

export const updateHabits = (habits: string[]) => ({
  payload: { habits },
  type: GumjournalsActionType.UPDATE_HABITS,
});

export const updateHabitsGami = (
  habitsGamification: Record<string, number>
) => ({
  payload: { habitsGamification },
  type: GumjournalsActionType.UPDATE_HABITS_GAMI,
});
