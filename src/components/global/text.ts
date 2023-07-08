import { styled } from "styled-components/native";
import { ColorModeScheme, ColorScheme } from "../../utils/const";

export const BaseText = styled.Text`
  font-family: "Inter";
  color: ${ColorScheme[ColorModeScheme.DARK_MODE].text};
`;

export const BoldText = styled(BaseText)`
  font-family: "Inter-Bold";
`;
