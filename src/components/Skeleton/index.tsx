import React, { useEffect, useRef } from "react";
import Component from "./styles";
import { Animated, Easing, StyleProp, ViewStyle } from "react-native";

interface IProps {
  styles: ViewStyle;
}

const Skeleton: React.FC<IProps> = ({ styles }) => {
  const opacity = useRef(new Animated.Value(0.25));

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(opacity.current, {
          toValue: 0.75,
          duration: 1000,
          easing: Easing.bezier(0.69, 0.98, 0.31, -0.03),
          useNativeDriver: true,
        }),
        Animated.timing(opacity.current, {
          toValue: 0.25,
          duration: 1000,
          easing: Easing.bezier(0.69, 0.98, 0.31, -0.03),
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, []);

  return (
    <Component.Skeleton
      style={{
        ...styles,
        opacity: opacity.current,
      }}
    />
  );
};

export default Skeleton;
