import { createContext, useMemo, useReducer } from "react";
import { GumjournasReducer } from "./reducer";
import { GumjournalsContextInterface, GumjournalsForm } from "./interface";

const INITIAL_VALUE = {
  highlight: [] as string[],
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
