import { createContext } from "react";
import { TransformedSheetDataFields } from "../../utils/interface";

export interface TrackerFormsContext {
  selectedDate: string;
  selectedGumjournalsData: TransformedSheetDataFields;
  setSelectedDate: React.Dispatch<React.SetStateAction<string>>;
}


export const SelectedTrackerData = createContext<TrackerFormsContext | null>(null);
