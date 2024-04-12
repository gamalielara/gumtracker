import styled from 'styled-components/native';
import { BaseText, BoldText } from '../../components/global/text';
import { LightModeColorScheme } from '<utils>/const';

export const Container = styled.View`
  width: 100%;
  height: 100%;
  padding: 20px;
`;

export const WeeklyTitleText = styled(BoldText)`
  font-size: 30px;
  margin-bottom: 75px;
`;

export const WeeklyBoxContainer = styled.FlatList``;

export const WeeklyBox = styled.View`
  background-color: ${LightModeColorScheme.card};
  width: 100%;
  height: 100px;
  border-radius: 20px;
  margin: 5px 0;
`;
