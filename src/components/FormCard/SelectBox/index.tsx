import React, {
  useContext,
  useEffect,
  useImperativeHandle,
  useRef,
} from "react";
import { Container, Option } from "./styles";
import { Animated, FlatList } from "react-native";
import { IFormCardMethodhandle } from "../../../utils/interface";
import { TrackerContext } from "../../../screens/TrackerForms/context";

interface IProps {
  options?: React.FC[];
  filledData: number;
}

const SelectBox = React.forwardRef<IFormCardMethodhandle, IProps>(
  ({ options }, ref) => {
    const gumjournalsContext = useContext(TrackerContext);

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
                  flexBasis: "10%",
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
        </Container>
      </Animated.View>
    );
  },
);

export default SelectBox;
