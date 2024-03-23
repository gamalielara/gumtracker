import React from 'react';
import { LoadingWrapper } from './styles';
import LottieView from 'lottie-react-native';

const LoadingScreen = () => {
  return (
    <LoadingWrapper>
      <LottieView
        source={require('../../assets/img/lottie/loading.json')}
        autoPlay
        loop
        style={{
          width: '40%',
          aspectRatio: 1,
        }}
      />
    </LoadingWrapper>
  );
};

export default LoadingScreen;
