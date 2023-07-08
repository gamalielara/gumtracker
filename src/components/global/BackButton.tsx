import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { ColorModeScheme, ColorScheme } from "../../utils/const";
import { styled } from "styled-components/native";
import { faCircleChevronLeft } from "@fortawesome/free-solid-svg-icons/faCircleChevronLeft";

const Button = styled.TouchableOpacity`
  width: 32;
  height: 32;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export default () => {
  return (
    <Button>
      <FontAwesomeIcon
        icon={faCircleChevronLeft}
        color={ColorScheme[ColorModeScheme.DARK_MODE].text}
        size={32}
      />
    </Button>
  );
};
