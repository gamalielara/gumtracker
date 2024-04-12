import styled from 'styled-components/native';
import { LightModeColorScheme } from '../../utils/const';
import { SemiboldText } from '../global/text';

export const DailyHabitBox = styled.View`
  width: 100%;
  padding: 20px;
  margin: 0 auto;
  background-color: ${LightModeColorScheme.card};
  border-radius: 25px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const HabitName = styled(SemiboldText)`
  color: ${LightModeColorScheme['text-secondary']};
`;

export const AddHabitLogButton = styled.TouchableOpacity<{ checked: boolean }>`
  padding: 15px;
  aspect-ratio: 1;
  border-radius: 10px;
  background-color: ${props =>
    props.checked ? props.theme.text : props.theme['text-secondary']};
`;
