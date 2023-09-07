import { createContext } from "react";
import { DarkModeColorScheme, LightModeColorScheme } from "../../utils/const";

interface CommonContext {
  colorScheme: typeof DarkModeColorScheme | typeof LightModeColorScheme;
}

const CommonContext = createContext<CommonContext>({} as CommonContext);

export default CommonContext;
