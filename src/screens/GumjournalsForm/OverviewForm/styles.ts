import { styled } from "styled-components/native";
import { BaseText } from "../../../components/global/text";

import { APPCOLORSCHEME } from "../../../utils/const";

export const Container = styled.KeyboardAvoidingView`
  background-color: ${APPCOLORSCHEME.background};
  height: 100%;
`;

export const ScrollingBaseView = styled.ScrollView`
  background-color: ${APPCOLORSCHEME.background};
  margin-bottom: 90px;
  margin-top: 20px;
`;

export const QuestionText = styled(BaseText)`
  font-size: 18px;
`;

export const QuestionContainer = styled.View`
  margin: 10px 0;
`;

export const DatePickerButton = styled.TouchableOpacity`
  height: 30px;
  margin-top: 10px;
  background-color: ${APPCOLORSCHEME.card};
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
    props.isSelected ? APPCOLORSCHEME["text-secondary"] : APPCOLORSCHEME.card};
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MoodValueText = styled(BaseText)`
  font-size: 16px;
`;

export const FormInput = styled.TextInput`
  width: 100%;
  background-color: ${APPCOLORSCHEME.card};
  color: ${APPCOLORSCHEME.text};
  padding: 10px;
  margin-top: 10px;
  border-radius: 10px;
`;
