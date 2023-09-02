import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TransformedSheetData } from "../../utils/interface";
import { fetchGumjournalsSpreadsheetData } from "./actions";

const initialState = {} as TransformedSheetData;

export const gumjournalsSlice = createSlice({
  name: "gumjournals",
  initialState,
  reducers: {
    setGumjournals: (state, action: PayloadAction<TransformedSheetData>) => {
      state = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      fetchGumjournalsSpreadsheetData.fulfilled,
      (state, action) => {
        state = action.payload;
      },
    );
  },
});

export const { setGumjournals } = gumjournalsSlice.actions;

export default gumjournalsSlice.reducer;
