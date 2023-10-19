import { FormKey } from "../formsConstant";
import { useContext, useEffect, useState } from "react";
import { SelectedTrackerData } from "../../screens/TrackerForms/context";
import useDetermineGumjournalsContextKeys from "./useDetermineGumjournalsContextKeys";
import { TransformedSheetDataFields } from "../interface";

export default (fieldName: FormKey) => {
  const [data, setData] = useState<string|number|string[]|number[]>();
  const selectedGumjournalsContext = useContext(SelectedTrackerData);
  const keys = useDetermineGumjournalsContextKeys(fieldName);
  
  useEffect(() => {
    if(!selectedGumjournalsContext?.selectedGumjournalsData) return;

    const keysArr = keys.split(/\??\./) as (keyof TransformedSheetDataFields)[];

    const {selectedGumjournalsData} = selectedGumjournalsContext;

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const selectedData = keysArr.reduce((acc, key) =>  acc[key] ?? {}, selectedGumjournalsData)

    setData(selectedData);

  }, [selectedGumjournalsContext?.selectedGumjournalsData]);

  return data;
};
