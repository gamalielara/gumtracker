import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Container, HabitsContainer, Header, TitleText } from './styles';
// import HeatMap from '../../components/HeatMap';
import { MOCK_HABITS } from '../../mock/data/habits';
import { FlatList, requireNativeComponent, Text, View } from 'react-native';
import { NativeHeatMap } from '<components>/NativeHeatMap';
import { ScrollView } from 'react-native-gesture-handler';

const OverallScreen = () => {
  const [isHeatMapLoaded, setIsHeatMapLoaded] = useState(false);
  const [visibleHeatMap, setVisibleHeatMap] = useState<number[]>([]);

  //TODO: change data later
  const habitsToShow = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <Container>
      <Header>
        <TitleText>Overall Habits</TitleText>
      </Header>
      <ScrollView>
        {habitsToShow.map((item, index) => (
          <View
            key={item.toString()}
            style={{
              height: 175,
              width: '100%',
              marginVertical: 10,
              padding: 10,
            }}>
            <NativeHeatMap style={{ width: '100%', height: '100%' }} />
          </View>
        ))}
      </ScrollView>
    </Container>
  );
};

export default OverallScreen;
