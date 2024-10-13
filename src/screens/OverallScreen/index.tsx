import React, { useCallback, useEffect, useState } from 'react';
import { Container, HabitsContainer, Header, TitleText } from './styles';
// import HeatMap from '../../components/HeatMap';
import { MOCK_HABITS } from '../../mock/data/habits';
import { FlatList, requireNativeComponent, Text, View } from 'react-native';
import { NativeHeatMap } from '<components>/NativeHeatMap';
// import { NativeHeatMap } from '<components>/NativeHeatMap';

const OverallScreen = () => {
  const [isHeatMapLoaded, setIsHeatMapLoaded] = useState(false);

  //TODO: change data later
  const habitsToShow = [1, 2, 3];

  const renderHabitBox = () => {
    return (
      <View style={{ height: 155, width: '100%' }}>
        <Text>{`HAI ${isHeatMapLoaded}`}</Text>
        {isHeatMapLoaded && (
          <NativeHeatMap style={{ width: '100%', height: '100%' }} />
        )}
      </View>
    );
  };

  useEffect(
    () => () => {
      console.log('YESS');
      // setIsHeatMapLoaded(false);
    },
    [],
  );

  return (
    <Container>
      <Header>
        <TitleText>Overall Habits</TitleText>
      </Header>
      <View>
        <View style={{ gap: 10 }}>
          <FlatList
            data={habitsToShow}
            onLayout={() => setIsHeatMapLoaded(true)}
            renderItem={renderHabitBox}
            keyExtractor={item => item.toString()}
            contentContainerStyle={{ gap: 10 }}
          />
        </View>
      </View>
    </Container>
  );
};

export default OverallScreen;
