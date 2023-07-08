import { GumjournalsActionType, GumjournalsForm } from "./interface";

export const UpdateMood = (payload: Partial<GumjournalsForm>) => ({
  payload,
  type: GumjournalsActionType.UPDATE_MOOD,
});
