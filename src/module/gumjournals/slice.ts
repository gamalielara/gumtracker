import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { format } from "date-fns";
import { APP_DATE_FORMAT } from "../../utils/const";
import { IGumjournalsState } from "../interface";

const initialState: IGumjournalsState = {
  selectedDate: format(Date.now(), APP_DATE_FORMAT),
  isLoading: true,
};

export const gumjournalsSlice = createSlice({
  name: "gumjournals",
  initialState,
  reducers: {
    setSelectedDate: (
      state: IGumjournalsState,
      action: PayloadAction<string>
    ) => {
      state.selectedDate = action.payload;
    },

    setIsLoading: (
      state: IGumjournalsState,
      action: PayloadAction<boolean>
    ) => {
      state.isLoading = action.payload;
    },
  },
});

export const { setSelectedDate, setIsLoading } = gumjournalsSlice.actions;

export default gumjournalsSlice.reducer;
