import { Container, FormsContainer, ScrollingFormBody, SubmitButton, SubmitText, } from "./styles";
import CalendarSlider from "../../components/CalendarSlider";
import FormCard from "../../components/FormCard";
import { FORMS_DETAIL } from "../../utils/formsConstant";
import { FlatList, Platform } from "react-native";
import { FormCardType } from "../../utils/interface";

const TrackerForms = () => {
  const selectForms = FORMS_DETAIL.filter(form => form.type === FormCardType.SELECT && Boolean(form.options));

  const inputBasedForms = FORMS_DETAIL.filter(form => [FormCardType.INPUT_TEXT, FormCardType.INPUT_NUMBER].includes(form.type));

  return (
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
  );
};

export default TrackerForms;
