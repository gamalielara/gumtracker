import { createContext, useMemo, useReducer } from "react";
import { GumjournasReducer } from "./reducer";
import {
  GumjournalsContextInterface,
  IGumjournalsFormState,
} from "./interface";
import { HABITS_GAMI_CONFIG } from "../../utils/forms";
import { ComponentBasePropsWithChildren } from "../../utils/interface";

const INITIAL_HABITS_GAMI = HABITS_GAMI_CONFIG.columns.map((e) => [e, 0]);

const INITIAL_VALUE = {
  highlight: [] as string[],
  habits: [] as string[],
  gratitude: [] as string[],
  habitsGamification: Object.fromEntries(INITIAL_HABITS_GAMI) as Record<
    string,
    number
  >,
} as unknown as IGumjournalsFormState;

export const GumjournalsContext = createContext<GumjournalsContextInterface>({
  value: INITIAL_VALUE,
});

type Props = ComponentBasePropsWithChildren<{
  valuesToShow?: IGumjournalsFormState;
}>;

export const GumjournalsContextProvider = ({
  children,
  valuesToShow,
}: Props) => {
  const initValue: IGumjournalsFormState = valuesToShow ?? {
    ...INITIAL_VALUE,
    dateFilled: new Date().getTime(),
  };

  const [value, dispatch] = useReducer(GumjournasReducer, initValue);

  const contextValue = useMemo(() => ({ value, dispatch }), [value]);

  return (
    <GumjournalsContext.Provider value={contextValue}>
      {children}
    </GumjournalsContext.Provider>
  );
};
