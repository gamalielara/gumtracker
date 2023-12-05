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
          <SubmitButton>
            <SubmitText>Submit</SubmitText>
          </SubmitButton>
        </ScrollingFormBody>
      </FormsContainer>
    </Container>
  );
};

export default TrackerForms;
