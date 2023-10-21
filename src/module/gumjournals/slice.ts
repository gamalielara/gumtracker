import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TransformedSheetData, TransformedSheetDataFields } from "../../utils/interface";
import { fetchGumjournalsSpreadsheetData } from "./actions";
import { GumjournalsAddNewText, IGumjournalsState } from "../interface";
import { generateNewGumjournalsData } from "../../utils/generateNewGumjournalsData";

const initialState: IGumjournalsState = {
  isLoading: true,
  selectedDate: "",
  value: {},
};

export const gumjournalsSlice = createSlice({
  name: "gumjournals",
  initialState,
  reducers: {
    setGumjournals: (state: IGumjournalsState, action: PayloadAction<TransformedSheetData>) => {
      state.isLoading = false;
      state.value = action.payload;
    },

    setSelectedDate: (state: IGumjournalsState, action: PayloadAction<string>) => {
      state.selectedDate = action.payload;
    },

    setHighlightOfTheDay: (state: IGumjournalsState, action: PayloadAction<GumjournalsAddNewText>) => {
      const { date, text } = action.payload;

      state.value[date] ??= generateNewGumjournalsData() as TransformedSheetDataFields;
      state.value[date].wellbeing.highlightsOfTheDay = [ ...state.value[date].wellbeing.highlightsOfTheDay, text ];
    },

    setGratitudeStatement: (state: IGumjournalsState, action: PayloadAction<GumjournalsAddNewText>) => {
      const { date, text } = action.payload;

      state.value[date] ??= generateNewGumjournalsData() as TransformedSheetDataFields;
      state.value[date].wellbeing.gratitudeStatements = [ ...state.value[date].wellbeing.highlightsOfTheDay, text ];
    }

  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchGumjournalsSpreadsheetData.pending, (state: IGumjournalsState) => {
        state.isLoading = true;
      })
      .addCase(fetchGumjournalsSpreadsheetData.fulfilled, (state: IGumjournalsState, action) => {
        state.value = action.payload;
      });
  },
});

export const { setGumjournals, setSelectedDate, setGratitudeStatement, setHighlightOfTheDay } = gumjournalsSlice.actions;

export default gumjournalsSlice.reducer;
