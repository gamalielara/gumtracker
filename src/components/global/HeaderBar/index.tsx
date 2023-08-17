import BackButton from "../BackButton";
import { VisuallyInvisible } from "../container";
import { HeaderContainer, TitleText } from "./styles";
import { TNavigation } from "../../../utils/interface";

interface Props {
  title: string;
  navigation?: TNavigation;
}

const HeaderBar = ({ title, navigation }: Props) => {
  const goBackCallbackFunc = () => navigation?.goBack();

  return (
    <HeaderContainer>
      <BackButton goBackCallbackFunc={goBackCallbackFunc} />
      <TitleText>{title}</TitleText>
      <VisuallyInvisible />
    </HeaderContainer>
  );
};

export default HeaderBar;
