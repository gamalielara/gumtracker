import { createContext } from "react";
import { APPCOLORSCHEME } from "../../utils/const";

interface CommonContext {
  colorScheme: typeof APPCOLORSCHEME;
}

//@ts-ignore
export default createContext<CommonContext>(null);
