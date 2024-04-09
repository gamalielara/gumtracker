import { styled } from 'styled-components/native';
import { LightModeColorScheme } from '../../utils/const';
import { BaseText, BoldText } from '../global/text';
import { FlatList } from 'react-native-gesture-handler';

export const HeatMapWrapper = styled.View<{ height: string | number }>`
  width: 100%;
  padding: 10px;
  height: ${props => props.height}px;
  background-color: white;
  border-radius: 10px;
`;

export const HabitName = styled(BoldText)`
  font-size: 18px;
`;

export const HabitDesc = styled(BaseText)`
  font-size: 15px;
`;

export const Tile = styled.View<{ score: number }>`
  width: 10px;
  height: 10px;
  background-color: ${LightModeColorScheme.card};
  border-radius: 5px;
  margin: 1px;
  opacity: ${props => props.score + 0.2};
`;

export const HeatMapTiles = styled.FlatList`
  margin-top: 10px;
` as typeof FlatList;
