import React from 'react';
import {Text, View} from 'react-native';
import {HeatMapWrapper} from './styles';
import {FlatList} from 'react-native-gesture-handler';
import {Rect} from 'react-native-svg';

interface IProps {
  width?: string;
  height: string;
}

const HeatMap: React.FC<IProps> = ({width, height}) => {
  const data = Array(365).fill(0);

  return (
    <HeatMapWrapper height="150">
      <Text>HEI??</Text>
      <FlatList
        data={data}
        renderItem={({item}) => {
          return (
            <View
              style={{
                width: 10,
                height: 10,
                backgroundColor: 'gray',
                borderRadius: 2,
                margin: 1,
              }}
            />
          );
        }}
        style={{
          marginTop: 10,
        }}
        contentContainerStyle={{
          maxWidth: '150%',
          flexWrap: 'wrap',
        }}
        initialNumToRender={100}
        horizontal
      />
    </HeatMapWrapper>
  );
};

export default HeatMap;
