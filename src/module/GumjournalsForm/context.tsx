import { createContext, useMemo, useReducer } from "react";
import { GumjournasReducer } from "./reducer";
import { GumjournalsContextInterface, GumjournalsForm } from "./interface";

export const GumjournalsContext = createContext<GumjournalsContextInterface>({
  value: {} as GumjournalsForm,
});

export const GumjournalsContextProvider = ({ children }: any) => {
  const [value, dispatch] = useReducer(GumjournasReducer, {
    dateFilled: new Date().getTime(),
  } as GumjournalsForm);

  const contextValue = useMemo(() => ({ value, dispatch }), [value]);

  return (
    <GumjournalsContext.Provider value={contextValue}>
      {children}
    </GumjournalsContext.Provider>
  );
};
