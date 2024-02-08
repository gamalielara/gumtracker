import React from 'react';
import {
  AddButton,
  Container,
  HabitsContainer,
  Header,
  TitleText,
} from './styles';
import HeatMap from '../../components/HeatMap';
import { MOCK_HABITS } from '../../mock/habits';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const HomeScreen = () => {
  return (
    <>
      <Container>
        <Header>
          <TitleText>Overall Habits</TitleText>
          <AddButton>
            <FontAwesomeIcon icon={faPlus} color="white" />
          </AddButton>
        </Header>
        <HabitsContainer>
          <HeatMap
            height={200}
            habitName="Habit Name"
            description="Every Day"
            data={MOCK_HABITS}
          />
          <HeatMap
            height={200}
            habitName="Habit Name"
            description="Every Day"
            data={MOCK_HABITS}
          />
          <HeatMap
            height={200}
            habitName="Habit Name"
            description="Every Day"
            data={MOCK_HABITS}
          />
          <HeatMap
            height={200}
            habitName="Habit Name"
            description="Every Day"
            data={MOCK_HABITS}
          />
          <HeatMap
            height={200}
            habitName="Habit Name"
            description="Every Day"
            data={MOCK_HABITS}
          />
          <HeatMap
            height={200}
            habitName="Habit Name"
            description="Every Day"
            data={MOCK_HABITS}
          />
        </HabitsContainer>
      </Container>
    </>
  );
};

export default HomeScreen;
