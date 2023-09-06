import { styled } from "styled-components/native";
import MainContainer from "../../components/global/MainContainer";

export const Container = styled(MainContainer)``;

export const FormsContainer = styled.KeyboardAvoidingView`
  width: 100%;
  padding: 0 10px;
  margin-top: 50px;
  gap: 10px;
  flex: 1;
`;

export const ScrollingFormBody = styled.ScrollView`
  padding-bottom: 0px;
`;
