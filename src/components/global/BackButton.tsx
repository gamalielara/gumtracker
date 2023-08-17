import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { ColorModeScheme, ColorScheme } from "../../utils/const";
import { styled } from "styled-components/native";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons/faChevronLeft";

const Button = styled.TouchableOpacity`
  width: 24;
  height: 24;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export default () => {
  return (
    <Button>
      <FontAwesomeIcon
        icon={faChevronLeft}
        color={ColorScheme[ColorModeScheme.DARK_MODE].text}
        size={24}
      />
    </Button>
  );
};
