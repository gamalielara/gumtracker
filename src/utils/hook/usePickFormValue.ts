import { FormKey } from "../formsConstant";
import useDetermineGumjournalsContextKeys from "./useDetermineGumjournalsContextKeys";
import { useSelector } from "react-redux";
import { getGumjournalsDataByDate, getGumjournalsSelectedDate } from "../../module/gumjournals/selectors";

export default (fieldName: FormKey) => {
  const selectedDate = useSelector(getGumjournalsSelectedDate);
  const keys = useDetermineGumjournalsContextKeys(fieldName);
  const selectedGumjournalsData = useSelector(getGumjournalsDataByDate(selectedDate));


  const keysArr = keys.split(/\??\./);

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
  const selectedData: string[] = keysArr.reduce((acc, key) => acc[key] ?? {}, selectedGumjournalsData);

  return selectedData;
};
