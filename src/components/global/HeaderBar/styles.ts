import { styled } from "styled-components/native";
import { BoldText } from "../text";

export const HeaderContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 16px;
  padding: 10px;
`;

export const TitleText = styled(BoldText)`
  font-size: 24px;
  text-align: center;
`;
