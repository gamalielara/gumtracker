import { styled } from "styled-components/native";
import { BaseText } from "../global/text";
import { Animated } from "react-native";

export const ToastContainer = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Overlay = styled(Animated.View)`
  background-color: black;
  position: absolute;
  width: 100%;
  height: 100%;
`;

export const ToastBox = styled.View`
  width: 50%;
  padding: 20px;
  background-color: ${(props) => props.theme.card};
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  z-index: 999;
`;

export const ToastText = styled(BaseText)``;
