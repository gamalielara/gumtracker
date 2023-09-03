import { styled } from "styled-components/native";
import { BaseText, BoldText } from "../global/text";
import { DateVariant } from "./interface";

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

export const DateCard = styled.TouchableOpacity<{ variant: DateVariant }>`
  width: 50px;
  padding: 10px;
  background-color: ${(props) => {
    switch (props.variant) {
      case DateVariant.SELECTED:
        return props.theme.secondary;
      case DateVariant.HAS_BEEN_FILLED:
        return props.theme.primary;
      default:
        return props.theme.card;
    }
  }};
  margin: 10px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
`;

export const DateDayText = styled(BoldText)`
  font-size: 12px;
  color: ${(props) => props.theme["text-secondary"]};
`;

export const DateText = styled(BaseText)`
  color: ${(props) => props.theme["text-secondary"]};
`;
