import React, {
  useContext,
  useEffect,
  useImperativeHandle,
  useRef,
} from "react";
import { SubmitButton, SubmitTextInputContainer, TextInput } from "./styles";
import { Animated } from "react-native";
import { IFormCardMethodhandle } from "../../../utils/interface";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import CommonContext from "../../../module/common";
import { TrackerContext } from "../../../screens/TrackerForms/context";

interface IProps {
  textInputPlaceHolder?: string;
}

const TextInputBox = React.forwardRef<IFormCardMethodhandle, IProps>(
  ({ textInputPlaceHolder }, ref) => {
    const gumjournalsContext = useContext(TrackerContext);

    useEffect(() => {
      hideBox();
    }, [gumjournalsContext?.selectedDate]);

    const { colorScheme } = useContext(CommonContext);
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
            outputRange: [0, 50],
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
      </Animated.View>
    );
  },
);

export default TextInputBox;
