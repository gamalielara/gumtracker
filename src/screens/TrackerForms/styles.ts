import { styled } from "styled-components/native";
import MainContainer from "../../components/global/MainContainer";
import { getDeviceType } from "../../utils/getDeviceType";
import { DeviceWidthType } from "../../utils/const";
import { BoldText } from "../../components/global/text";

const decideWidth = () => {
  const deviceType = getDeviceType();

  switch (deviceType) {
    case DeviceWidthType.TABLET:
      return "75%";
    default:
    case DeviceWidthType.PHONE:
      return "100%";
  }
};

export const Container = styled(MainContainer)``;

export const FormsContainer = styled.KeyboardAvoidingView`
  width: ${decideWidth()};
  flex: 1;
  padding-right: 10px;
  padding-left: 10px;
  margin-left: auto;
  margin-right: auto;
`;

export const ScrollingFormBody = styled.ScrollView`
  flex: 1;
`;

export const SubmitButton = styled.TouchableOpacity`
  width: 100%;
  padding: 10px 20px;
  background-color: ${(props) => props.theme.secondary};
  border-radius: 20px;
  margin: 10px 0 35px;
`;

export const SubmitText = styled(BoldText)`
  font-size: 20px;
  text-align: center;
  color: white;
`;
