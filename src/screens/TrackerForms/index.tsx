import { Container } from "./styles";
import HeaderBar from "../../components/global/HeaderBar";
import { ScreenNames } from "../../utils/const";
import CalendarSlider from "../../components/CalendarSlider";

const TrackerForms = () => {
  return (
    <Container>
      <HeaderBar title={ScreenNames.TRACKER_FORMS} />
      <CalendarSlider />
    </Container>
  );
};

export default TrackerForms;
