import { useState } from "react";
import {
  GumjournalsContainerView,
  GumjournalsTitleText,
  Header,
} from "./styles";
import BackButton from "../../components/global/BackButton";
import { VisuallyInvisible } from "../../components/global/container";

enum GumjournalSection {
  OVERVIEW,
  MOOD,
  HABIT,
}

const GumjournalsForm: React.FC = () => {
  const [section, setSection] = useState();
  return (
    <GumjournalsContainerView>
      <Header>
        <BackButton />
        <GumjournalsTitleText>gumjournals form</GumjournalsTitleText>
        <VisuallyInvisible />
      </Header>
    </GumjournalsContainerView>
  );
};

export default GumjournalsForm;
