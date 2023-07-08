import { styled } from "styled-components/native";
import { ColorModeScheme, ColorScheme } from "../../utils/const";

export const MainContainerBackground = styled.View`
  width: 100%;
  height: 100%;
  background-color: ${ColorScheme[ColorModeScheme.DARK_MODE].background};
`;

export const SafeAreaApp = styled.SafeAreaView`
  height: auto;
  margin-left: 10px;
  margin-right: 10px;
`;

export const VisuallyInvisible = styled.View`
  width: 0;
  heihgt: 0;
  visibility: hidden;
`;
