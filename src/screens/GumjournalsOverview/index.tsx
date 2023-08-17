import {useEffect, useState} from "react";
import {Keyboard, TouchableWithoutFeedback} from "react-native";
import {APPCOLORSCHEME, ScreenNames} from "../../utils/const";
import {ScrollingBaseView} from "../GumjournalsForm/styles";
import {BaseText, BoldText} from "../../components/global/text";
import {Calendar} from "react-native-calendars";
import {API_KEY, SPREADSHEET_ID, SPREADSHEET_NAME} from "@env";
import transformSheetData from "../../utils/sheetDataTransformer";
import {MainContainer} from "./styles";
import HeaderBar from "../../components/global/HeaderBar";

// TODO: Create ApiService
// TODO: Create a function to call this
async function fetchSpreadsheetData() {
  const res = await fetch(
    `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${SPREADSHEET_NAME}?valueRenderOption=FORMATTED_VALUE&key=${API_KEY}`,
  );

  const data = await res.json();

  const transformedData = transformSheetData(data);

  return transformedData;
}

export default () => {
  const [data, setData] = useState<Record<string, unknown>>();

  useEffect(() => {
    const fetchSmth = async () => {
      const res = await fetchSpreadsheetData();
      setData(res);
    };

    fetchSmth();
  }, []);

  // TODO: Loading overlay
  if (!data?.Timestamp) return <BaseText>Loading...</BaseText>;

  return (
    <MainContainer>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <>
          <HeaderBar title={ScreenNames.GUMJOURNALS_OVERVIEW} />
          <ScrollingBaseView>
            <BoldText style={{ marginBottom: 10, fontSize: 18 }}>
              Journals Filled
            </BoldText>
            <Calendar
              firstDay={1}
              theme={{
                calendarBackground: undefined,
                selectedDayTextColor: APPCOLORSCHEME.text,
                selectedDayBackgroundColor: APPCOLORSCHEME["text-secondary"],
                dayTextColor: APPCOLORSCHEME["text-secondary"],
                todayTextColor: APPCOLORSCHEME.text,
                monthTextColor: APPCOLORSCHEME.text,
                arrowColor: APPCOLORSCHEME.card,
              }}
              markedDates={Object.fromEntries(
                (data.Timestamp as string[]).map((time: string) => [
                  time,
                  { selected: true },
                ]),
              )}
            />
          </ScrollingBaseView>
        </>
      </TouchableWithoutFeedback>
    </MainContainer>
  );
};
