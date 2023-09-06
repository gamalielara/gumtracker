import React, {
  useContext,
  useEffect,
  useImperativeHandle,
  useRef,
} from "react";
import {
  FilledDataBox,
  SubmitButton,
  SubmitTextInputContainer,
  TextInput,
} from "./styles";
import { Animated, FlatList, ScrollView } from "react-native";
import { IFormCardMethodhandle } from "../../../utils/interface";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import CommonContext from "../../../module/common";
import { TrackerContext } from "../../../screens/TrackerForms/context";

interface IProps {
  textInputPlaceHolder?: string;
  filledData: string[];
}

const TextInputBox = React.forwardRef<IFormCardMethodhandle, IProps>(
  ({ textInputPlaceHolder, filledData }, ref) => {
    const gumjournalsContext = useContext(TrackerContext);

    useEffect(() => {
      hideBox();
    }, [gumjournalsContext?.selectedDate]);

    const { colorScheme } = useContext(CommonContext);
    const boxHeightAnim = useRef(new Animated.Value(0));

    const expandBox = () => {
      Animated.spring(boxHeightAnim.current, {
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

    // Manually calculate the box height based on the presence of filled data
    // One box is hardcoded to have height 50
    const defaultBoxHeight = (filledData?.length ?? 1) * 50;

    return (
      <Animated.View
        style={{
          height: boxHeightAnim.current.interpolate({
            inputRange: [0, 100],
            outputRange: [0, defaultBoxHeight],
          }),
          overflow: "hidden",
        }}
      >
        <SubmitTextInputContainer>
          <TextInput placeholder={textInputPlaceHolder} />
          <SubmitButton>
            <FontAwesomeIcon
              icon={faPlus}
              color={colorScheme["text-secondary"]}
            />
          </SubmitButton>
        </SubmitTextInputContainer>
        {filledData?.length && (
          <ScrollView>
            <FlatList
              data={filledData}
              renderItem={({ item: filledDataText }) => (
                <FilledDataBox>{filledDataText}</FilledDataBox>
              )}
            />
          </ScrollView>
        )}
      </Animated.View>
    );
  },
);

export default TextInputBox;
