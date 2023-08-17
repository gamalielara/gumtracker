import { styled } from "styled-components/native";
import { ColorModeScheme, ColorScheme } from "../../utils/const";

export const MainGlobalContainer = styled.KeyboardAvoidingView`
  width: 100%;
  height: 100%;
  background-color: ${ColorScheme[ColorModeScheme.DARK_MODE].background};
`;

export const SafeAreaApp = styled.SafeAreaView`
  height: auto;
  margin: 10px;
`;

export const VisuallyInvisible = styled.View`
  width: 0;
  heihgt: 0;
  visibility: hidden;
`;
