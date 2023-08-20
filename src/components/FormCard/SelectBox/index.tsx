import React, { useImperativeHandle, useRef } from "react";
import { Container, Option } from "./styles";
import { Animated } from "react-native";
import { IFormCardMethodhandle } from "../../../utils/interface";

interface IProps {
  options?: React.FC[];
}

const SelectBox = React.forwardRef<IFormCardMethodhandle, IProps>(
  ({ options }, ref) => {
    const boxAnim = useRef(new Animated.Value(0));
    const AnimatedOption = Animated.createAnimatedComponent(Option);

    const expandBox = () => {
      Animated.spring(boxAnim.current, {
        toValue: 100,
        useNativeDriver: false,
      }).start();
    };

    const hideBox = () => {
      Animated.timing(boxAnim.current, {
        toValue: 0,
        duration: 500,
        useNativeDriver: false,
      }).start();
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
          width: boxAnim.current.interpolate({
            inputRange: [0, 100],
            outputRange: ["0%", "100%"],
          }),
          height: boxAnim.current.interpolate({
            inputRange: [0, 100],
            outputRange: [0, 75],
          }),
          overflow: "hidden",
        }}
      >
        <Container>
          {options?.map((Option) => (
            <AnimatedOption
              key={Math.random()}
              style={{
                flexBasis: boxAnim.current.interpolate({
                  inputRange: [0, 100],
                  outputRange: ["0%", "10%"],
                }),
                opacity: boxAnim.current.interpolate({
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
