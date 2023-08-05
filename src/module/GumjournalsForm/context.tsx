import { createContext, useMemo, useReducer } from "react";
import { GumjournasReducer } from "./reducer";
import { GumjournalsContextInterface, GumjournalsForm } from "./interface";
import { HABITS_GAMI_CONFIG } from "../../utils/forms";

const INITIAL_HABITS_GAMI = HABITS_GAMI_CONFIG.columns.map((e) => [e, 0]);

const INITIAL_VALUE = {
  highlight: [] as string[],
  habits: [] as string[],
  gratitude: [] as string[],
  habitsGamification: Object.fromEntries(INITIAL_HABITS_GAMI) as Record<
    string,
    number
  >,
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
