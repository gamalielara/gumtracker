import { THabitsGami } from "../../utils/forms";

type THabitsGamiCountRecord<T extends THabitsGami["columns"]> = Record<
  T[number],
  number
>;

export interface GumjournalsForm {
  dateFilled: number;
  mood: number;
  highlight: string[];
  habits: string[];
  habitsGamification: THabitsGamiCountRecord<THabitsGami["columns"]>;
  gratitude: string[];
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
  UPDATE_HABITS,
  UPDATE_HABITS_GAMI,
  UPDATE_GRATITUDE_ONE,
  UPDATE_GRATITUDE_TWO,
}

export interface GumjournalsContextInterface {
  value: GumjournalsForm;
  dispatch?: React.Dispatch<GumjournalsAction>;
}
