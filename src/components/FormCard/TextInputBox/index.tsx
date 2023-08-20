import React, { useContext, useImperativeHandle, useRef } from "react";
import { SubmitButton, SubmitTextInputContainer, TextInput } from "./styles";
import { Animated } from "react-native";
import { IFormCardMethodhandle } from "../../../utils/interface";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import CommonContext from "../../../module/common";

const TextInputBox = React.forwardRef<IFormCardMethodhandle>((_, ref) => {
  const { colorScheme } = useContext(CommonContext);
  const boxAnim = useRef(new Animated.Value(0));

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
          outputRange: [0, 40],
        }),
        overflow: "hidden",
      }}
    >
      <SubmitTextInputContainer>
        <TextInput placeholder="Enter the most memorable thing here" />
        <SubmitButton>
          <FontAwesomeIcon
            icon={faPlus}
            color={colorScheme["text-secondary"]}
          />
        </SubmitButton>
      </SubmitTextInputContainer>
    </Animated.View>
  );
});

export default TextInputBox;
