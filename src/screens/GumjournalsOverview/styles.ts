import { styled } from "styled-components/native";
import MainContainer from "../../components/global/MainContainer";
import { BoldText } from "../../components/global/text";

export const Container = styled(MainContainer)``;

export const Wrapper = styled.View`
  padding: 0 10px;
`;

export const FillFormButton = styled.TouchableOpacity<{ bgColor: string }>`
  width: 90%;
  margin: 20px auto 0;
  background-color: ${(props) => props.bgColor};
  padding: 10px;
  border-radius: 10px;
`;

export const FillFormText = styled(BoldText)<{ textColor: string }>`
  color: ${(props) => props.textColor};
  text-align: center;
`;

export const ScrollingBaseView = styled.ScrollView`
  background-color: ${(props) => props.theme.background};
  margin-top: 30px;
`;
