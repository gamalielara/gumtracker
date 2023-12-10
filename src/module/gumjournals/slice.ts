import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TransformedSheetDataFields } from "../../utils/interface";
import { GumjournalsAddNewText, IGumjournalsState } from "../interface";
import { generateNewGumjournalsData } from "../../utils/generateNewGumjournalsData";

const initialState: IGumjournalsState = {
  selectedDate: 0,
};

export const gumjournalsSlice = createSlice({
  name: "gumjournals",
  initialState,
  reducers: {
    setSelectedDate: (
      state: IGumjournalsState,
      action: PayloadAction<number>
    ) => {
      state.selectedDate = action.payload;
    },
  },
});

export const { setSelectedDate } = gumjournalsSlice.actions;

export default gumjournalsSlice.reducer;
