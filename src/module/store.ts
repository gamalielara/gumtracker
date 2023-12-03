import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import gumjournalsReducer from "./gumjournals/slice";

const middlewares = getDefaultMiddleware({
  // https://github.com/reduxjs/redux-toolkit/issues/415
  immutableCheck: false,
});

if (__DEV__) {
  const createDebugger = require("redux-flipper").default;
  middlewares.push(createDebugger())
}

export const store = configureStore({
  reducer: {
    gumjournals: gumjournalsReducer,
  },
  middleware: middlewares
});

export type AppState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
