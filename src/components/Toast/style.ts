import { styled } from "styled-components/native";
import { APPCOLORSCHEME } from "../../utils/const";
import { BaseText } from "../global/text";
import { Animated } from "react-native";

export const Overlay = styled(Animated.View)`
  background-color: black;
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ToastBox = styled.View`
  width: 50%;
  padding: 20px;
  background-color: ${APPCOLORSCHEME.card};
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

export const ToastText = styled(BaseText)`
  font-weight: bold;
`;
