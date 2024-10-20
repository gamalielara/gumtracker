import { Container, Header, NativeHeatMapWrapper, TitleText } from './styles';
import { NativeHeatMap } from '<components>/NativeHeatMap';
import { ScrollView } from 'react-native-gesture-handler';

const OverallScreen = () => {
  //TODO: change data later
  const habitsToShow = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const drawNativeHeatMap = (item: number, index: number) => (
    <NativeHeatMapWrapper key={`${item}-${index}`}>
      <NativeHeatMap style={{ width: '100%', height: '100%' }} />
    </NativeHeatMapWrapper>
  );

  return (
    <Container>
      <Header>
        <TitleText>Overall Habits</TitleText>
      </Header>
      <ScrollView>{habitsToShow.map(drawNativeHeatMap)}</ScrollView>
    </Container>
  );
};

export default OverallScreen;
