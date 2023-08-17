import BackButton from "../BackButton";
import { VisuallyInvisible } from "../container";
import { HeaderContainer, TitleText } from "./styles";

const HeaderBar = ({ title }: { title: string }) => {
  return (
    <HeaderContainer>
      <BackButton />
      <TitleText>{title}</TitleText>
      <VisuallyInvisible />
    </HeaderContainer>
  );
};

export default HeaderBar;
