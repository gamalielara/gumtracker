import { Container, Header, NativeHeatMapWrapper, TitleText } from './styles';
import { NativeHeatMap } from '<components>/NativeHeatMap';
import { FlatList, ListRenderItem, VirtualizedList } from "react-native";

const OverallScreen = () => {
  //TODO: change data later
  const habitsToShow = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const drawNativeHeatMap: ListRenderItem<number> = ({ item, index }) => (
    <NativeHeatMapWrapper key={`${item}-${index}`}>
      <NativeHeatMap
        style={{ width: "100%", height: "100%"}}
        data={{ "01-01-01-2000": 1 }}
      />
    </NativeHeatMapWrapper>
  );

  return (
    <Container>
      <Header>
        <TitleText>Overall Habits</TitleText>
      </Header>
      <VirtualizedList
        renderItem={ drawNativeHeatMap }
        getItemCount={() => habitsToShow.length}
getItem={() => habitsToShow.length}
      />
    </Container>
  );
};

export default OverallScreen;
