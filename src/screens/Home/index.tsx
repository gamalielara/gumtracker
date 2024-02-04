import React from 'react';
import HeatMap from '../../components/HeatMap';
import {Text, View} from 'react-native';

const HomeScreen = () => {
  return (
    <View style={{padding: 10}}>
      <HeatMap height="500" />
    </View>
  );
};

export default HomeScreen;
