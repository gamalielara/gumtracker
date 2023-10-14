import React, {
  useContext,
  useEffect,
  useImperativeHandle,
  useRef,
} from "react";
import { Container, Option } from "./styles";
import { Animated, FlatList, View } from "react-native";
import { FormOptions, IFormCardMethodhandle } from "../../../utils/interface";
import { SelectedTrackerData } from "../../../screens/TrackerForms/context";

interface IProps {
  options?: FormOptions[];
  filledData: string;
}

const SelectBox = React.forwardRef<IFormCardMethodhandle, IProps>(
  ({ options, filledData }, ref) => {
    const gumjournalsContext = useContext(SelectedTrackerData);

    useEffect(() => {
      hideBox();
    }, [gumjournalsContext?.selectedDate]);

    const AnimatedOption = Animated.createAnimatedComponent(Option);

    const boxHeightAnim = useRef(new Animated.Value(0));

    const expandBox = () => {
      Animated.timing(boxHeightAnim.current, {
        toValue: 100,
        useNativeDriver: false,
      }).start();
    };

    const hideBox = () => {
      Animated.timing(boxHeightAnim.current, {
        toValue: 0,
        useNativeDriver: false,
      }).start();
    };

    useImperativeHandle(ref, () => ({
      show: () => {
        expandBox();
      },
      hide: () => {
        hideBox();
      },
    }));

    return (
      <Animated.View
        style={{
          height: boxHeightAnim.current,
          overflow: "hidden",
        }}
      >
        <Container>
          <FlatList
            horizontal
            data={options}
            keyExtractor={() => Math.random().toString()}
            renderItem={({ item: { detail: Option, value } }) => (
              <AnimatedOption
                style={{
                  flexBasis: "10%",
                }}
                isHighlighted={value === filledData}
              >
                <View style={{ width: "100%", height: "100%" }}>
                  <Option />
                </View>
              </AnimatedOption>
            )}
            contentContainerStyle={{
              justifyContent: "space-between",
              width: "100%",
            }}
          />
        </Container>
      </Animated.View>
    );
  },
);

export default SelectBox;
