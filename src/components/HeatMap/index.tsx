import React, {useCallback} from 'react';
import {Text, View} from 'react-native';
import {HeatMapWrapper} from './styles';
import {FlatList} from 'react-native-gesture-handler';
import {Rect} from 'react-native-svg';
import {FlashList} from '@shopify/flash-list';

interface IProps {
  width?: string;
  height: string;
}

const HeatMap: React.FC<IProps> = ({width, height}) => {
  const data = Array(365).fill(0);

  const renderItem = useCallback(({item}) => {
    return (
      <View
        style={{
          width: 20,
          height: 20,
          backgroundColor: 'gray',
          borderRadius: 2,
          margin: 1,
        }}
      />
    );
  }, []);
  return (
    <HeatMapWrapper height="200">
      <Text>HEI??</Text>
      <FlatList
        data={data}
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
