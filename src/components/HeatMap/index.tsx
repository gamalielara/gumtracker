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
    <HeatMapWrapper height={height}>
      <HabitName>{habitName}</HabitName>
      <HabitDesc>{description}</HabitDesc>
      <HeatMapTiles
        data={daysInThisYear}
        renderItem={renderItem}
        contentContainerStyle={{
          maxHeight: '100%',
          flexDirection: 'column',
          flexWrap: 'wrap',
        }}
        maxToRenderPerBatch={100}
        horizontal
        keyExtractor={(_, i) => String(i)}
        showsHorizontalScrollIndicator={false}
        removeClippedSubviews={true}
        getItemLayout={(_, index) => ({
          length: DAYS_IN_THE_YEAR,
          offset: DAYS_IN_THE_YEAR + index,
          index,
        })}
      />
    </HeatMapWrapper>
  );
};

export default HeatMap;
