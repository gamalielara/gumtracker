import { styled } from "styled-components/native";
import MainContainer from "../../components/global/MainContainer";
import { getDeviceType } from "../../utils/getDeviceType";
import { DeviceWidthType } from "../../utils/const";

const decideContainerPadding = () => {
  const deviceType = getDeviceType();

  switch (deviceType) {
    case DeviceWidthType.PHONE:
      return "10px";
    case DeviceWidthType.TABLET:
      return "50px";
    default:
      return "5px";
  }
};

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
