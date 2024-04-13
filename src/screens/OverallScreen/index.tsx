import React, { useCallback } from 'react';
import { Container, HabitsContainer, Header, TitleText } from './styles';
import HeatMap from '../../components/HeatMap';
import { MOCK_HABITS } from '../../mock/data/habits';

const OverallScreen = () => {
  //TODO: change data later
  const habitsToShow = [1, 2, 3];

  const renderHabitBox = useCallback(
    () => (
      <HeatMap
        height={200}
        habitName="Habit Name"
        description="Every Day"
        data={MOCK_HABITS}
      />
    ),
    [],
  );

  return (
    <Container>
      <Header>
        <TitleText>Overall Habits</TitleText>
      </Header>
      <HabitsContainer
        data={habitsToShow}
        renderItem={renderHabitBox}
        contentContainerStyle={{
          gap: 25,
        }}
        removeClippedSubviews={true}
        maxToRenderPerBatch={3}
      />
    </Container>
  );
};

export default OverallScreen;
