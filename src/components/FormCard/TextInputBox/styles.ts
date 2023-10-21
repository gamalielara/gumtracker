import { styled } from "styled-components/native";
import { BaseText } from "../../global/text";

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
  background-color: ${(props) => props.theme.primary};
  border-radius: 15px;
  margin-top: 10px;
`;

export const SubmitTextInputContainer = styled.View`
  width: 100%;
  flex-direction: row;
  gap: 10px;
  margin: 10px 0;
`;

export const TextInput = styled.TextInput`
  flex: 10;
  padding: 10px 15px;
  background-color: ${(props) => props.theme.primary};
  border-radius: 15px;
  font-family: "Inter";
  color: ${(props) => props.theme["text-secondary"]};
  font-size: 14px;
  overflow: hidden;
  height: 50px;
`;

export const AddButton = styled.TouchableOpacity`
  flex: 1;
  padding: 10px 15px;
  background-color: ${(props) => props.theme.primary};
  border-radius: 15px;
  justify-content: center;
  align-items: center;
`;

export const FilledDataBox = styled.View`
  flex: 10;
  padding: 10px 15px;
  background-color: ${(props) => props.theme.primary};
  border-radius: 15px;
  margin: 5px 0;
  justify-content: center;
  min-height: 50px;
`;

export const FilledDataText = styled(BaseText)`
  color: ${(props) => props.theme["text-secondary"]};
  font-size: 14px;
`;
