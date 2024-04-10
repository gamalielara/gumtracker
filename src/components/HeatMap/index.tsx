import React, { useCallback, useMemo } from 'react';
import { HabitDesc, HabitName, HeatMapTiles, HeatMapWrapper } from './styles';
import { THabitsData } from '../../type/habits';
import { WebView } from 'react-native-webview';
import { drawWebviewHeatMapTable } from '../../utils/drawWebviewHeatMapTable';
import { BASE_EMPTY_HTML } from '../../utils/const';

interface IProps {
  height: string | number;
  habitName: string;
  description: string;
  data: THabitsData;
}

const HeatMap: React.FC<IProps> = props => {
  const { height, habitName, description, data: habitsScoreData } = props;

  return (
    <HeatMapWrapper height={height}>
      <HabitName>{habitName}</HabitName>
      <HabitDesc>{description}</HabitDesc>
      <WebView
        source={{
          html: BASE_EMPTY_HTML,
        }}
        style={{
          flex: 1,
          height: 200,
          minWidth: '100%',
          backgroundColor: 'transparent',
        }}
        injectedJavaScript={drawWebviewHeatMapTable(habitsScoreData)}
        setBuiltInZoomControls={false}
        bounce={false}
      />
    </HeatMapWrapper>
  );
};

export default HeatMap;
