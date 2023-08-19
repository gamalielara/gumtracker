import { styled } from "styled-components/native";
import { BaseText } from "../../../components/global/text";

export const DatePickerButton = styled.TouchableOpacity`
  height: 30px;
  background-color: ${(props) => props.theme.card};
  width: 150px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  margin: 10px auto 0;
`;

export const DatePickerText = styled(BaseText)`
  font-size: 14px;
`;

export const MoodsCard = styled.View`
  margin: 10px 0;
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
`;

export const MoodPickCard = styled.TouchableOpacity<{
  isSelected: boolean;
  width: string | null;
}>`
  width: ${(props) => props.width ?? "15%"};
  aspect-ratio: 1;
  background-color: ${(props) =>
    props.isSelected ? props.theme["text-secondary"] : props.theme.card};
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MoodValueText = styled(BaseText)`
  color: ${(props) => props.theme.text};
  font-size: 16px;
`;
