import styled from 'styled-components/native';
import { LightModeColorScheme } from '../../../utils/const';
import { BaseText } from '../../../components/global/text';

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
  padding: 5px;
`;

export const TabButtonText = styled(BaseText)<{ selected: boolean }>`
  margin-top: 10px;
  color: ${props =>
    LightModeColorScheme[props.selected ? 'primary' : 'secondary']};
`;

export const Wrapper = styled.View`
  min-height: 50px;
  width: 100%;
  background-color: #e3e2d8;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;
