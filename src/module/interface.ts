import { TransformedSheetData } from "../utils/interface";

export interface BaseState {
  gumjournals: IGumjournalsState;
}

export interface IGumjournalsState {
  isLoading: boolean;
  value: TransformedSheetData;
}
