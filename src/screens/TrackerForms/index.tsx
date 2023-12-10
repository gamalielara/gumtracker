import {
  Container,
  FormsContainer,
  ScrollingFormBody,
  SubmitButton,
  SubmitText,
} from "./styles";
import CalendarSlider from "../../components/CalendarSlider";
import { MOOD_OPTIONS } from "../../utils/formsConstant";
import { Platform, Text } from "react-native";
import { useSelector } from "react-redux";
import { getGumjournalsSelectedDate } from "../../module/gumjournals/selectors";
import SelectFormCard from "../../components/FormCards/SelectFormCard";

import MoodCardImage from "../../assets/svg/mood-card-illustration.svg";
import HighlightOfTheDayImage from "../../assets/svg/highlight-card-illustration.svg";
import GratitudeImage from "../../assets/svg/gratitude-card-illustration.svg";
import BodyWeightImage from "../../assets/svg/body-weight-illustration.svg";
import BellyCircumference from "../../assets/svg/belly-illustration.svg";
import InputFormCard from "../../components/FormCards/InputFormCard";
import useGetGumtrackerLocalDatabase from "../../utils/hook/useGetGumtrackerLocalDatabase";

const TrackerForms = () => {
  const selectedTimeStamp = useSelector(getGumjournalsSelectedDate);

  const [gumjournalsData] =
    useGetGumtrackerLocalDatabase.getSingleData(selectedTimeStamp);

  const {
    mood,
    gratitude_statements,
    highlight_of_the_day,
    body_weight,
    belly_circumference,
  } = gumjournalsData;

  return (
    <Container>
      <CalendarSlider />
      <FormsContainer
        enabled
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollingFormBody>
          <SelectFormCard
            filledData={mood}
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
            filledData={highlight_of_the_day?.split(";") ?? []}
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
            filledData={gratitude_statements?.split(";") ?? []}
            inputType="text"
            textInputPlaceHolder="Enter thing you are grateful for here"
            subtitle="What are things you are grateful for today?"
            additionIllustrationStyle={{
              top: "-50%",
            }}
          />

          <InputFormCard
            inputType="number"
            textInputPlaceHolder="Insert your body weight here"
            filledData={body_weight ? String(body_weight) : null}
            title={"Body Weight\nMeasurement (in cm)"}
            subtitle="Only fill this on Monday"
            SVGImage={BodyWeightImage}
            illustrationPosition="left"
            additionIllustrationStyle={{
              top: "-50%",
            }}
          />

          <InputFormCard
            inputType="number"
            textInputPlaceHolder="Insert your belly circumference here"
            filledData={
              belly_circumference ? String(belly_circumference) : null
            }
            title={"Belly Circumference\nMeasurement (in cm)"}
            subtitle="Only fill this on Monday"
            SVGImage={BellyCircumference}
            illustrationPosition="left"
            additionIllustrationStyle={{
              top: "-50%",
            }}
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
