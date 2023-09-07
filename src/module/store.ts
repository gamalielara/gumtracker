import { configureStore } from "@reduxjs/toolkit";
import gumjournalsReducer from "./gumjournals/slice";

export const store = configureStore({
  reducer: {
    gumjournals: gumjournalsReducer,
  },
});

export type AppState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
