import { createContext } from "react";
import { DarkModeColorScheme, LightModeColorScheme } from "../../utils/const";

interface CommonContext {
  colorScheme: typeof DarkModeColorScheme | typeof LightModeColorScheme;
}

export default createContext<CommonContext>({} as CommonContext);
