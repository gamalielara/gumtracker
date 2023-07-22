import { createContext, useMemo, useReducer } from "react";
import { GumjournasReducer } from "./reducer";
import { GumjournalsContextInterface, GumjournalsForm } from "./interface";

const INITIAL_HABITS_GAMI = {
  "Reading 📖": 0,
  "Webdev 🌐": 0,
  "Learn Mobile Dev 📱": 0,
  "Journaling 📒": 0,
  "Writing Blog ✍🏻": 0,
  "Drawing 🎨": 0,
  "Learn Language 🏴󠁧󠁢󠁥󠁮󠁧󠁿": 0,
};

const INITIAL_VALUE = {
  highlight: [] as string[],
  habits: [] as string[],
  habitsGamification: INITIAL_HABITS_GAMI as Record<string, number>,
} as GumjournalsForm;

export const GumjournalsContext = createContext<GumjournalsContextInterface>({
  value: INITIAL_VALUE,
});

export const GumjournalsContextProvider = ({ children }: any) => {
  const [value, dispatch] = useReducer(GumjournasReducer, {
    ...INITIAL_VALUE,
    dateFilled: new Date().getTime(),
  } as GumjournalsForm);

  const contextValue = useMemo(() => ({ value, dispatch }), [value]);

  return (
    <GumjournalsContext.Provider value={contextValue}>
      {children}
    </GumjournalsContext.Provider>
  );
};
