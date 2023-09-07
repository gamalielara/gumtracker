import { FormKey } from "../formsConstant";
import { useContext } from "react";
import { TrackerContext } from "../../screens/TrackerForms/context";

export default (fieldName: FormKey) => {
  const gumjournalsContext = useContext(TrackerContext);

  switch (fieldName) {
    case FormKey.MOOD:
      return gumjournalsContext?.selectedGumjournalsData.wellbeing?.mood;
    case FormKey.GRATITUDE_STATEMENTS:
      return gumjournalsContext?.selectedGumjournalsData.wellbeing
        ?.highlightsOfTheDay;
    case FormKey.HIGHLIGHTS_OF_THE_DAY:
      return gumjournalsContext?.selectedGumjournalsData.wellbeing
        ?.gratitudeStatements;
    default:
      return;
  }
};
