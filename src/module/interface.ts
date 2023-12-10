export interface BaseState {
  gumjournals: IGumjournalsState;
}

export interface IGumjournalsState {
  selectedDate: number;
}

export interface GumjournalsAddNewText {
  date: string;
  text: string;
}
