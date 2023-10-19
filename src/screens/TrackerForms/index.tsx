import {
  Container,
  FormsContainer,
  ScrollingFormBody,
  SubmitButton,
  SubmitText,
} from "./styles";
import CalendarSlider from "../../components/CalendarSlider";
import FormCard from "../../components/FormCard";
import { FORMS_DETAIL } from "../../utils/formsConstant";
import { FlatList, Platform } from "react-native";
import { useMemo, useState } from "react";
import { parseDate } from "../../utils/date";
import { useSelector } from "react-redux";
import { getGumjournalsDataByDate } from "../../module/gumjournals/selectors";
import { SelectedTrackerData } from "./context";

const TrackerForms = () => {
  const [selectedDate, setSelectedDate] = useState(parseDate(Date.now()));

  const selectedGumjournalsData = useSelector(
    getGumjournalsDataByDate(selectedDate),
  );
  
  const trackerProviderValue =  useMemo(() => ({
    selectedGumjournalsData,
    selectedDate,
    setSelectedDate,
  }), [selectedGumjournalsData]);

  return (
    <SelectedTrackerData.Provider value={trackerProviderValue}>
      <Container>
        <CalendarSlider />
        <FormsContainer
          enabled
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <ScrollingFormBody>
            <FlatList
              data={FORMS_DETAIL}
              keyExtractor={(formDetail) => formDetail.title}
              renderItem={({ item: formDetail }) => (
                <FormCard {...formDetail} />
              )}
            />
            <SubmitButton>
              <SubmitText>Submit</SubmitText>
            </SubmitButton>
          </ScrollingFormBody>
        </FormsContainer>
      </Container>
    </SelectedTrackerData.Provider>
  );
};

export default TrackerForms;
