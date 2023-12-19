import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { styled } from "styled-components/native";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons/faChevronLeft";
import { useContext } from "react";
import CommonContext from "../../module/common";

const Button = styled.TouchableOpacity`
  width: 24px;
  height: 24px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export default ({ goBackCallbackFunc }: { goBackCallbackFunc: () => void }) => {
  const { colorScheme } = useContext(CommonContext);
  return (
    <Button onPress={goBackCallbackFunc}>
      <FontAwesomeIcon
        icon={faChevronLeft}
        color={colorScheme.text}
        size={24}
      />
    </Button>
  );
};
