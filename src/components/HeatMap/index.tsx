import React, { useCallback, useMemo } from 'react';
import { View } from 'react-native';
import { HabitDesc, HabitName, HeatMapWrapper } from './styles';
import { FlatList } from 'react-native-gesture-handler';
import { LightModeColorScheme } from '../../utils/const';
import { getAllDaysInThisYear } from '../../utils/getAllDaysInThisYear';
import { THabitsData } from '../../type/habits';

interface IProps {
  width?: string;
  height: string | number;
  habitName: string;
  description: string;
  data: THabitsData;
}

const HeatMap: React.FC<IProps> = props => {
  const {
    width,
    height,
    habitName,
    description,
    data: habitsScoreData,
  } = props;

  const renderItem = useCallback(({ item }: { item: string }) => {
    return (
      <View
        style={{
          width: 20,
          height: 20,
          backgroundColor: LightModeColorScheme.card,
          borderRadius: 5,
          margin: 1,
          opacity: (habitsScoreData[item] ?? 0) + 0.2,
        }}
      />
    );
  }, []);

  const daysInThisYear = useMemo(() => getAllDaysInThisYear(), []);

  return (
    <HeatMapWrapper height={height}>
      <HabitName>{habitName}</HabitName>
      <HabitDesc>{description}</HabitDesc>
      <FlatList
        data={daysInThisYear}
        renderItem={renderItem}
        style={{
          marginTop: 10,
        }}
        contentContainerStyle={{
          maxHeight: '100%',
          flexDirection: 'column',
          flexWrap: 'wrap',
        }}
        maxToRenderPerBatch={100}
        horizontal
        keyExtractor={(_, i) => String(i)}
        showsHorizontalScrollIndicator={false}
      />
    </HeatMapWrapper>
  );
};

export default HeatMap;
