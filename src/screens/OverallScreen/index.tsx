import React from 'react';
import {
  AddButton,
  Container,
  HabitsContainer,
  Header,
  TitleText,
} from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import HeatMap from '../../components/HeatMap';
import { MOCK_HABITS } from '../../mock/habits';

const OverallScreen = () => {
  return (
    <Container>
      <Header>
        <TitleText>Overall Habits</TitleText>
        <AddButton>
          <FontAwesomeIcon icon={faPlus} color="white" />
        </AddButton>
      </Header>
      <HabitsContainer
        data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
        renderItem={({ _ }) => (
          <HeatMap
            height={200}
            habitName="Habit Name"
            description="Every Day"
            data={MOCK_HABITS}
          />
        )}
        contentContainerStyle={{
          gap: 25,
          marginBottom: 50,
        }}
      />
    </Container>
  );
};

export default OverallScreen;
