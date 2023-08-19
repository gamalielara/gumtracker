import {useContext, useEffect, useMemo, useState} from "react";
import {Keyboard, TouchableWithoutFeedback} from "react-native";
import {ScreenNames} from "../../utils/const";
import {BaseText, BoldText} from "../../components/global/text";
import {Calendar} from "react-native-calendars";
import {Container, FillFormButton, FillFormText, ScrollingBaseView, Wrapper,} from "./styles";
import HeaderBar from "../../components/global/HeaderBar";
import {NavigationScreenProps, TransformedSheetData,} from "../../utils/interface";
import ApiService from "../../utils/apiService";
import CommonContext from "../../module/common";

// TODO: Create ApiService
// TODO: Create a function to call this

export default ({ navigation }: NavigationScreenProps) => {
  const [data, setData] = useState<TransformedSheetData>();

  const { colorScheme } = useContext(CommonContext);

  // TODO move to APIService
  useEffect(() => {
    const fetchSmth = async () => {
      const res = await ApiService.getGumjournalsData();
      setData(res);
    };

    fetchSmth();
  }, []);

  const markedDates = useMemo(() => {
    let res = {};
    if (data?.timestamp) {
      res = Object.fromEntries(
        data.timestamp.map((time) => [time, { selected: true }]),
      );
    }
    return res;
  }, [data?.timestamp]);

  // TODO: Loading overlay
  if (!data?.timestamp) return <BaseText>Loading...</BaseText>;

  return (
    <Container>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <Wrapper>
          <HeaderBar title={ScreenNames.GUMJOURNALS_OVERVIEW} />
          <ScrollingBaseView>
            <BoldText style={{ marginBottom: 10, fontSize: 18 }}>
              Journals Filled
            </BoldText>
            <Calendar
              firstDay={1}
              markedDates={markedDates}
              theme={{
                calendarBackground: undefined,
                selectedDayTextColor: colorScheme.text,
                selectedDayBackgroundColor: colorScheme.card,
                dayTextColor: colorScheme["text-secondary"],
                todayTextColor: colorScheme.text,
                monthTextColor: colorScheme.text,
                arrowColor: colorScheme.card,
              }}
            />

            <FillFormButton
              bgColor={colorScheme.card}
              onPress={() =>
                navigation.navigate(ScreenNames.GUMJOURNALS_FORM, {
                  hei: "hei",
                })
              }
            >
              <FillFormText textColor={colorScheme.text}>
                Fill Gumjournals for Today
              </FillFormText>
            </FillFormButton>
          </ScrollingBaseView>
        </Wrapper>
      </TouchableWithoutFeedback>
    </Container>
  );
};
