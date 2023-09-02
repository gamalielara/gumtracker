import React, { useImperativeHandle, useRef } from "react";
import { Container, Option } from "./styles";
import { Animated, FlatList } from "react-native";
import { IFormCardMethodhandle } from "../../../utils/interface";

interface IProps {
  options?: React.FC[];
}

const SelectBox = React.forwardRef<IFormCardMethodhandle, IProps>(
  ({ options }, ref) => {
    const AnimatedOption = Animated.createAnimatedComponent(Option);

    const boxWidthAnim = useRef(new Animated.Value(0));
    const boxHeightAnim = useRef(new Animated.Value(0));

    const expandBox = () => {
      Animated.parallel([
        Animated.timing(boxHeightAnim.current, {
          toValue: 100,
          useNativeDriver: false,
        }),

        Animated.spring(boxWidthAnim.current, {
          toValue: 100,
          useNativeDriver: false,
        }),
      ]).start();
    };

    const hideBox = () => {
      Animated.parallel([
        Animated.timing(boxWidthAnim.current, {
          toValue: 0,
          useNativeDriver: false,
        }),

        Animated.timing(boxHeightAnim.current, {
          toValue: 0,
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
          width: boxWidthAnim.current.interpolate({
            inputRange: [0, 100],
            outputRange: ["0%", "100%"],
          }),
          height: boxHeightAnim.current.interpolate({
            inputRange: [0, 100],
            outputRange: [0, 75],
          }),
          overflow: "hidden",
        }}
      >
        <Container>
          <FlatList
            horizontal
            data={options}
            keyExtractor={() => Math.random().toString()}
            renderItem={({ item: Option }) => (
              <AnimatedOption
                style={{
                  flexBasis: boxWidthAnim.current.interpolate({
                    inputRange: [0, 100],
                    outputRange: ["0%", "10%"],
                  }),
                  opacity: boxWidthAnim.current.interpolate({
                    inputRange: [0, 90, 100],
                    outputRange: [0, 0.1, 1],
                  }),
                }}
              >
                <Option />
              </AnimatedOption>
            )}
            contentContainerStyle={{
              justifyContent: "space-between",
              width: "100%",
            }}
          />
          {/*{options?.map((Option) => (*/}
          {/*  <AnimatedOption*/}
          {/*    key={Math.random()}*/}
          {/*    style={{*/}
          {/*      flexBasis: boxWidthAnim.current.interpolate({*/}
          {/*        inputRange: [0, 100],*/}
          {/*        outputRange: ["0%", "10%"],*/}
          {/*      }),*/}
          {/*      opacity: boxWidthAnim.current.interpolate({*/}
          {/*        inputRange: [0, 90, 100],*/}
          {/*        outputRange: [0, 0.1, 1],*/}
          {/*      }),*/}
          {/*    }}*/}
          {/*  >*/}
          {/*    <Option />*/}
          {/*  </AnimatedOption>*/}
          {/*))}*/}
        </Container>
      </Animated.View>
    );
  },
);

export default SelectBox;
