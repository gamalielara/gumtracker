import { Container, FormsContainer } from "./styles";
import CalendarSlider from "../../components/CalendarSlider";
import FormCard from "../../components/FormCard";
import MoodCardImage from "../../assets/svg/mood-card-illustration.svg";

const TrackerForms = () => {
  return (
    <Container>
      <CalendarSlider />
      <FormsContainer>
        <FormCard
          title="Add Mood"
          subtitle="How are you feeling today?"
          SVGImage={MoodCardImage}
          illustrationPosition={"right"}
        />
      </FormsContainer>
    </Container>
  );
};

export default TrackerForms;
