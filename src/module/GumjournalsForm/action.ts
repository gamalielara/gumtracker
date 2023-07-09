import { GumjournalsActionType, GumjournalsForm } from "./interface";

export const updateMood = (payload: Partial<GumjournalsForm>) => ({
  payload,
  type: GumjournalsActionType.UPDATE_MOOD,
});

export const updateDateFilled = (timestamp: number) => ({
  payload: { dateFilled: timestamp },
  type: GumjournalsActionType.UPDATE_DATE,
});
