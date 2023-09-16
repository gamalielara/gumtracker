import { Container, FormsContainer, ScrollingFormBody } from "./styles";
import CalendarSlider from "../../components/CalendarSlider";
import FormCard from "../../components/FormCard";
import { FORMS_DETAIL } from "../../utils/formsConstant";
import { FlatList, Platform } from "react-native";
import { useState } from "react";
import { parseDate } from "../../utils/date";
import { useSelector } from "react-redux";
import { getGumjournalsDataByDate } from "../../module/gumjournals/selectors";
import { TrackerContext } from "./context";

const TrackerForms = () => {
  const [selectedDate, setSelectedDate] = useState(parseDate(Date.now()));

  const selectedGumjournalsData = useSelector(
    getGumjournalsDataByDate(selectedDate),
  );

  return (
    <TrackerContext.Provider
      value={{ selectedGumjournalsData, selectedDate, setSelectedDate }}
    >
      <Container>
        <FormsContainer
          enabled
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <CalendarSlider />
          <ScrollingFormBody>
            <FlatList
              data={FORMS_DETAIL}
              keyExtractor={(formDetail) => formDetail.title}
              renderItem={({ item: formDetail }) => (
                <FormCard {...formDetail} />
              )}
            />
          </ScrollingFormBody>
        </FormsContainer>
      </Container>
    </TrackerContext.Provider>
  );
};

export default TrackerForms;
