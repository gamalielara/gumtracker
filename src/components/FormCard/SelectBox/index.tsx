import React, { useContext, useEffect, } from "react";
import { Container, Option } from "./styles";
import { FlatList, View } from "react-native";
import { FormOptions, IFormCardMethodhandle } from "../../../utils/interface";
import { SelectedTrackerData } from "../../../screens/TrackerForms/context";
import Animated from "react-native-reanimated";
import useExpandAndHideBox from "../../../utils/hook/useExpandAndHideBox";
import { FormKey } from "../../../utils/formsConstant";

interface IProps {
  options?: FormOptions[];
  filledData: string;
  fieldKey: FormKey
}

const SELECT_BOX_DEFAULT_HEIGHT = 100

const SelectBox = React.forwardRef<IFormCardMethodhandle, IProps>(
  ({ options, filledData }, ref) => {
    const gumjournalsContext = useContext(SelectedTrackerData);

    useEffect(() => {
      hideBox();
    }, [gumjournalsContext?.selectedDate]);

    //@ts-ignore
    const AnimatedOption = Animated.createAnimatedComponent(Option);

    const { animatedTextInputContainerStyle, hideBox } = useExpandAndHideBox({
      ref,
      filledData: filledData?.length ?? 1,
      height: SELECT_BOX_DEFAULT_HEIGHT
    });

    return (
      <Animated.View
        style={ [{
          overflow: "hidden",
        }, animatedTextInputContainerStyle] }
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
