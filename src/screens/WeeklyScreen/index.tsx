import { Text } from 'react-native';
import {
  Container,
  WeeklyBox,
  WeeklyBoxContainer,
  WeeklyTitleText,
} from './styles';

const WeeklyScreen = () => {
  const box = [1, 2, 3, 4, 5, 6];

  return (
    <Container>
      <WeeklyTitleText>Weekly Habits</WeeklyTitleText>
      <WeeklyBoxContainer
        data={box}
        renderItem={() => (
          <WeeklyBox>
            <Text>Hehe</Text>
          </WeeklyBox>
        )}
      />
    </Container>
  );
};

export default WeeklyScreen;
