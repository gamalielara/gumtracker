import { FormKey } from "../formsConstant";

export default (fieldName: FormKey) => {
  switch (fieldName) {
    case FormKey.MOOD:
      return "wellbeing?.mood";
    case FormKey.GRATITUDE_STATEMENTS:
      return "wellbeing?.gratitudeStatements";
    case FormKey.HIGHLIGHTS_OF_THE_DAY:
      return "wellbeing?.highlightsOfTheDay";
    default:
      return "";
  }
}