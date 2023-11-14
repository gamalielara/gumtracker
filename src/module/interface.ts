import { TransformedSheetData } from "../utils/interface";

export interface BaseState {
  gumjournals: IGumjournalsState;
}

export interface IGumjournalsState {
  isLoading: boolean;
  selectedDate: string;
  selectedGumjournals: TransformedSheetData[string];
  value: TransformedSheetData;
}

export interface GumjournalsAddNewText {
  date : string;
  text: string;
}
