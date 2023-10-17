import { FormKey } from "../formsConstant";
import { useContext } from "react";
import { SelectedTrackerData } from "../../screens/TrackerForms/context";

export default (fieldName: FormKey) => {
  const gumjournalsContext = useContext(SelectedTrackerData);

  switch (fieldName) {
    case FormKey.MOOD:
      return gumjournalsContext?.selectedGumjournalsData.wellbeing?.mood;
    case FormKey.GRATITUDE_STATEMENTS:
      return gumjournalsContext?.selectedGumjournalsData.wellbeing
        ?.gratitudeStatements;
    case FormKey.HIGHLIGHTS_OF_THE_DAY:
      return gumjournalsContext?.selectedGumjournalsData.wellbeing
        ?.highlightsOfTheDay;
    default:
      return;
  }
};
