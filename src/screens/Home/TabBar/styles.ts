import styled from 'styled-components/native';
import { LightModeColorScheme } from '../../../utils/const';
import { BaseText } from '../../../components/global/text';
import { Dimensions } from 'react-native';

const TAB_PADDING = 10;

export const TabBarContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  gap: 20px;
`;

export const TabButton = styled.TouchableOpacity`
  flex: 1;
  align-items: center;
  padding: 10px;
`;

export const TabButtonText = styled(BaseText)<{ selected: boolean }>`
  margin-top: 10px;
  color: ${props =>
    LightModeColorScheme[props.selected ? 'primary' : 'secondary']};
`;

export const Wrapper = styled.View`
  min-height: 50px;
  background-color: #e3e2d8;
  border-radius: 20px;
  padding: 10px;
  margin: 10px;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 95%;
`;
