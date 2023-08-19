import { styled } from "styled-components/native";
import { BaseText, BoldText } from "../global/text";

export const Container = styled.View`
  width: 100%;
  margin-top: 25px;
`;

export const MonthContainer = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-content: center;
  padding: 0 20px;
`;

export const MonthText = styled(BoldText)`
  font-size: 18px;
`;

export const DateCard = styled.View`
  padding: 10px 20px;
  background-color: ${(props) => props.theme.card};
  margin: 10px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
`;

export const DateDayText = styled(BoldText)`
  color: ${(props) => props.theme["text-secondary"]};
`;

export const DateText = styled(BaseText)`
  color: ${(props) => props.theme["text-secondary"]};
`;
