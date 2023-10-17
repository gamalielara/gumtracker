import React, { useContext, useEffect, useRef, } from "react";
import { FilledDataBox, FilledDataText, SubmitButton, SubmitTextInputContainer, TextInput, } from "./styles";
import Animated, { useAnimatedStyle } from "react-native-reanimated";
import { FlatList, ScrollView } from "react-native";
import { IFormCardMethodhandle } from "../../../utils/interface";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import CommonContext from "../../../module/common";
import { SelectedTrackerData } from "../../../screens/TrackerForms/context";
import { useSelector } from "react-redux";
import { getBaseGumjournalsData } from "../../../module/gumjournals/selectors";
import useExpandAndHideBox from "../../../utils/hook/useExpandAndHideBox";

interface IProps {
  textInputPlaceHolder?: string;
  filledData: string[];
}

export const DEFAULT_BOX_HEIGHT = 75;

const TextInputBox = React.forwardRef<IFormCardMethodhandle, IProps>(
  ({ textInputPlaceHolder, filledData }, ref) => {
    const gumjournalsContext = useContext(SelectedTrackerData);
    const gumjournalsBaseData = useSelector(getBaseGumjournalsData);

    const textToInput = useRef<string>();

    const { colorScheme } = useContext(CommonContext);

    const {animatedTextInputContainerStyle, hideBox} = useExpandAndHideBox({ ref, height: DEFAULT_BOX_HEIGHT * (filledData?.length + 1 || 1) });

    useEffect(() => {
      hideBox();
    }, [gumjournalsContext?.selectedDate]);

    return (
      <Animated.View style={ [ { overflow: "hidden" }, animatedTextInputContainerStyle ] }>
        <SubmitTextInputContainer>
          <TextInput placeholder={textInputPlaceHolder} onChangeText={(text) => {textToInput.current = text}}/>
          <SubmitButton onPress={() => console.log(textToInput.current)}>
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
                <FilledDataBox>
                  <FilledDataText>{filledDataText}</FilledDataText>
                </FilledDataBox>
              )}
            />
          </ScrollView>
        )}
      </Animated.View>
    );
  },
);

export default TextInputBox;
