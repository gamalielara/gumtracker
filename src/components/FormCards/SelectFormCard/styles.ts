import { styled } from "styled-components/native";
import Animated from "react-native-reanimated";
import commonStyles from "../commonStyles";


const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
  background-color: ${(props) => props.theme.primary};
  border-radius: 15px;
  margin-top: 10px;
  height: 80px;
  align-items: center;
`;

const Option = styled.Pressable<{ isHighlighted: boolean }>`
  height: 100%;
  aspect-ratio: 1;
  padding: 3px;
  background-color: ${(props) =>
        props.isHighlighted
            ? props.theme["text-secondary"]
            : props.theme.secondary};
  border-radius: 10px;
  justify-content: center;
  align-items: center;
`;

const AnimatedOption = Animated.createAnimatedComponent(Option);

export default {
    Container,
    AnimatedOption,
    ...commonStyles
}