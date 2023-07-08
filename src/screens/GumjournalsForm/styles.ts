import { styled } from "styled-components/native";
import { MainContainerBackground } from "../../components/global/container";
import { BoldText } from "../../components/global/text";

export const GumjournalsContainerView = styled(MainContainerBackground)`
  width: auto;
  margin: 10px;
  box-sizing: content-box;
`;

export const Header = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 16px;
`;

export const GumjournalsTitleText = styled(BoldText)`
  font-size: 24px;
  text-align: center;
`;
