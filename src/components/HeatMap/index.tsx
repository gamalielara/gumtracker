import React, { useCallback, useMemo } from 'react';
import {
  HabitDesc,
  HabitName,
  HeatMapTiles,
  HeatMapWrapper,
  Tile,
} from './styles';
import { getAllDaysInThisYear } from '../../utils/getAllDaysInThisYear';
import { THabitsData } from '../../type/habits';
import { WebView } from 'react-native-webview';
import { drawHeatmapScript } from './drawHeatMap';

interface IProps {
  width?: string;
  height: string | number;
  habitName: string;
  description: string;
  data: THabitsData;
}

const DAYS_IN_THE_YEAR = 366;

const HeatMap: React.FC<IProps> = props => {
  const {
    width,
    height,
    habitName,
    description,
    data: habitsScoreData,
  } = props;

  const renderItem = useCallback(
    ({ item }: { item: string }) => <Tile score={habitsScoreData[item] ?? 0} />,
    [],
  );

  const daysInThisYear = useMemo(() => getAllDaysInThisYear(), []);

  return (
    <WebView
      source={{
        html: '<canvas id="canvas" style="position: fixed; top: 0, left: 0"/>',
      }}
      style={{
        flex: 1,
        height: 100,
        width: '100%',
        backgroundColor: 'transparent',
      }}
      injectedJavaScript={drawHeatmapScript(habitsScoreData)}
    />
  );
};

export default HeatMap;
