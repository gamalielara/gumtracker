import { createContext } from "react";
import { TransformedSheetDataFields } from "../../utils/interface";

interface TrackerFormsContext {
  selectedDate: string;
  selectedGumjournalsData: TransformedSheetDataFields;
  setSelectedDate: React.Dispatch<React.SetStateAction<string>>;
}

export const TrackerContext = createContext<TrackerFormsContext | null>(null);
