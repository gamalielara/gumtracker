import {
  Container,
  FormsContainer,
  ScrollingFormBody,
  SubmitButton,
  SubmitText,
} from "./styles";
import CalendarSlider from "../../components/CalendarSlider";
import { MOOD_OPTIONS } from "../../utils/formsConstant";
import { Platform } from "react-native";
import { useSelector } from "react-redux";
import {
  getGumjournalsDataByDate,
  getGumjournalsSelectedDate,
} from "../../module/gumjournals/selectors";
import SelectFormCard from "../../components/FormCards/SelectFormCard";

import MoodCardImage from "../../assets/svg/mood-card-illustration.svg";
import HighlightOfTheDayImage from "../../assets/svg/highlight-card-illustration.svg";
import GratitudeImage from "../../assets/svg/gratitude-card-illustration.svg";
import BodyWeightImage from "../../assets/svg/body-weight-illustration.svg";
import BellyCircumference from "../../assets/svg/belly-illustration.svg";
import HabitsIllustration from "../../assets/svg/habit-illustration.svg";
import InputFormCard from "../../components/FormCards/InputFormCard";

const TrackerForms = () => {
  const selectedDate = useSelector(getGumjournalsSelectedDate);
  const selectedGumjournalsData = useSelector(
    getGumjournalsDataByDate(selectedDate)
  );

  return (
    <Container>
      <CalendarSlider />
      <FormsContainer
        enabled
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollingFormBody>
          <SelectFormCard
            filledData={selectedGumjournalsData.wellbeing?.mood ?? ""}
            title="Mood Tracker"
            subtitle="How are you feeling today?"
            SVGImage={MoodCardImage}
            illustrationPosition={"left"}
            options={MOOD_OPTIONS}
          />

          <InputFormCard
            title="Highlights of The Day"
            SVGImage={HighlightOfTheDayImage}
            illustrationPosition={"right"}
            filledData={
              selectedGumjournalsData.wellbeing?.highlightsOfTheDay ?? []
            }
            inputType="text"
            textInputPlaceHolder="Enter the most memorable thing here"
            subtitle={
              "What are the most memorable things\nthat happened today?"
            }
          />

          <InputFormCard
            title="Gratitude Statements"
            SVGImage={GratitudeImage}
            illustrationPosition={"left"}
            filledData={
              selectedGumjournalsData.wellbeing?.gratitudeStatements ?? []
            }
            inputType="text"
            textInputPlaceHolder="Enter thing you are grateful for here"
            subtitle="What are things you are grateful for today?"
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
