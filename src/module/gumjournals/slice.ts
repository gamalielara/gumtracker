import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TransformedSheetData } from "../../utils/interface";
import { fetchGumjournalsSpreadsheetData } from "./actions";
import { IGumjournalsState } from "../interface";

const initialState: IGumjournalsState = {
  isLoading: true,
  value: {},
};

export const gumjournalsSlice = createSlice({
  name: "gumjournals",
  initialState,
  reducers: {
    setGumjournals: (state, action: PayloadAction<TransformedSheetData>) => {
      state.isLoading = false;
      state.value = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchGumjournalsSpreadsheetData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchGumjournalsSpreadsheetData.fulfilled, (state, action) => {
        state.value = action.payload;
      });
  },
});

export const { setGumjournals } = gumjournalsSlice.actions;

export default gumjournalsSlice.reducer;
