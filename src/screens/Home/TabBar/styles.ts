import styled from 'styled-components/native';
import { LightModeColorScheme } from '../../../utils/const';
import { SemiboldText } from '../../../components/global/text';

export const TabBarContainer = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 10px;
  width: 100%;
`;

export const TabButton = styled.TouchableOpacity<{ selected: boolean }>`
  align-items: center;
  padding: 5px 10px;
  background-color: ${props =>
    props.selected ? LightModeColorScheme.secondary : 'transparent'};
  border-radius: 20px;
`;

export const TabButtonText = styled(SemiboldText)<{ selected: boolean }>`
  color: ${props =>
    props.selected ? 'white' : LightModeColorScheme['secondary']};
`;

export const Wrapper = styled.View`
  border-radius: 20px;
  padding: 10px;
  margin: 10px;
  position: absolute;
  top: 60px;
  left: 0;
`;
