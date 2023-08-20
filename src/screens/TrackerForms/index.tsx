import { Container, FormsContainer } from "./styles";
import CalendarSlider from "../../components/CalendarSlider";
import FormCard from "../../components/FormCard";
import { FORMS_DETAIL } from "../../utils/formsConstant";

const TrackerForms = () => {
  return (
    <Container>
      <CalendarSlider />
      <FormsContainer>
        {FORMS_DETAIL.map((formDetail) => (
          <FormCard {...formDetail} key={formDetail.title} />
        ))}
      </FormsContainer>
    </Container>
  );
};

export default TrackerForms;
