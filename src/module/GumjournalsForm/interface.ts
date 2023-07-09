export interface GumjournalsForm {
  dateFilled: number;
  mood: number;
}

export interface GumjournalsAction {
  payload: Partial<GumjournalsForm>;
  type: GumjournalsActionType;
}

export enum GumjournalsActionType {
  UPDATE_DATE,
  UPDATE_MOOD,
}

export interface GumjournalsContextInterface {
  value: GumjournalsForm;
  dispatch?: React.Dispatch<GumjournalsAction>;
}
