export interface GumjournalsForm {
  dateFilled: number;
  mood: number;
  highlight: string[];
}

export interface GumjournalsAction {
  payload: Partial<GumjournalsForm>;
  type: GumjournalsActionType;
}

export enum GumjournalsActionType {
  UPDATE_DATE,
  UPDATE_MOOD,
  UPDATE_HIGHLIGHT_ONE,
  UPDATE_HIGHLIGHT_TWO,
}

export interface GumjournalsContextInterface {
  value: GumjournalsForm;
  dispatch?: React.Dispatch<GumjournalsAction>;
}
