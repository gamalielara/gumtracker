import styled from 'styled-components/native';
import { BoldText, SemiboldText } from '../../components/global/text';
import { LightModeColorScheme } from '../../utils/const';

export const Container = styled.View`
  width: 100%;
  height: 100%;
  padding: 20px 20px 0;
`;

export const TitleText = styled(BoldText)`
  font-size: 30px;
  margin-bottom: 10px;
`;

export const HabitsContainer = styled.FlatList`
  margin-top: 50px;
  flex: 1;
`;

export const DailyHabitBox = styled.View`
  width: 95%;
  padding: 30px 20px;
  margin: 0 auto;
  background-color: ${LightModeColorScheme.card};
  border-radius: 25px;
`;

export const HabitName = styled(SemiboldText)`
  color: ${LightModeColorScheme['text-secondary']};
`;
