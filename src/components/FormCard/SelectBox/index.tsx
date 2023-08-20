import React, { useImperativeHandle, useRef } from "react";
import { Container, Option } from "./styles";
import { Animated } from "react-native";
import { IFormCardMethodhandle } from "./types";

interface IProps {
  options: React.FC[];
}

const SelectBox = React.forwardRef<IFormCardMethodhandle, IProps>(
  ({ options }, ref) => {
    const boxWidthAnimRef = useRef(new Animated.Value(0));
    const boxHeightAnimRef = useRef(new Animated.Value(0));
    const AnimatedOption = Animated.createAnimatedComponent(Option);

    const expandBox = () => {
      Animated.sequence([
        Animated.timing(boxHeightAnimRef.current, {
          toValue: 100,
          duration: 500,
          useNativeDriver: false,
        }),
        Animated.spring(boxWidthAnimRef.current, {
          toValue: 100,
          useNativeDriver: false,
        }),
      ]).start();
    };

    const hideBox = () => {
      Animated.sequence([
        Animated.timing(boxWidthAnimRef.current, {
          toValue: 0,
          duration: 500,
          useNativeDriver: false,
        }),
        Animated.timing(boxHeightAnimRef.current, {
          toValue: 0,
          duration: 500,
          useNativeDriver: false,
        }),
      ]).start();
    };

    useImperativeHandle(ref, () => ({
      showSelectBox: () => {
        expandBox();
      },
      hideSelectBox: () => {
        hideBox();
      },
    }));

    return (
      <Animated.View
        style={{
          width: boxWidthAnimRef.current.interpolate({
            inputRange: [0, 100],
            outputRange: ["0%", "100%"],
          }),
          height: boxHeightAnimRef.current,
          overflow: "hidden",
        }}
      >
        <Container>
          {options.map((Option) => (
            <AnimatedOption
              key={Math.random()}
              style={{
                flexBasis: boxWidthAnimRef.current.interpolate({
                  inputRange: [0, 100],
                  outputRange: ["0%", "10%"],
                }),
                opacity: boxWidthAnimRef.current.interpolate({
                  inputRange: [0, 90, 100],
                  outputRange: [0, 0.1, 1],
                }),
              }}
            >
              <Option />
            </AnimatedOption>
          ))}
        </Container>
      </Animated.View>
    );
  },
);

export default SelectBox;
