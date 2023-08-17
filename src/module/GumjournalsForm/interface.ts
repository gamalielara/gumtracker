import { THabitsGami } from "../../utils/forms";

type THabitsGamiCountRecord<T extends THabitsGami["columns"]> = Record<
  T[number],
  number
>;

export interface IGumjournalsFormState {
  dateFilled: number;
  mood: number;
  highlight: string[];
  habitsGamification: THabitsGamiCountRecord<THabitsGami["columns"]>;
  gratitude: string[];
}

export interface IGumjournalsAction {
  payload: Partial<IGumjournalsFormState>;
  type: GumjournalsActionType;
}

export enum GumjournalsActionType {
  UPDATE_DATE,
  UPDATE_MOOD,
  UPDATE_HIGHLIGHT_ONE,
  UPDATE_HIGHLIGHT_TWO,
  UPDATE_HABITS_GAMI,
  UPDATE_GRATITUDE_ONE,
  UPDATE_GRATITUDE_TWO,
}

export interface GumjournalsContextInterface {
  value: IGumjournalsFormState;
  dispatch?: React.Dispatch<IGumjournalsAction>;
}
