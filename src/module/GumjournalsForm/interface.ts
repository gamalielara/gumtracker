export interface GumjournalsForm {
  mood: number;
}

export interface GumjournalsAction {
  payload: Partial<GumjournalsForm>;
  type: GumjournalsActionType;
}

export enum GumjournalsActionType {
  UPDATE_MOOD,
}

export interface GumjournalsContextInterface {
  value: GumjournalsForm;
  dispatch?: React.Dispatch<GumjournalsAction>;
}
