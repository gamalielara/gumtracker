import React, { useContext, useEffect, useMemo, useRef, } from "react";
import { AddButton, FilledDataBox, FilledDataText, SubmitTextInputContainer, TextInput, } from "./styles";
import Animated from "react-native-reanimated";
import { FlatList, ScrollView } from "react-native";
import { IFormCardMethodhandle } from "../../../utils/interface";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import CommonContext from "../../../module/common";
import { useDispatch, useSelector } from "react-redux";
import {
  getGumjournalsSelectedDate
} from "../../../module/gumjournals/selectors";
import useExpandAndHideBox from "../../../utils/hook/useExpandAndHideBox";
import { FormKey } from "../../../utils/formsConstant";
import { AppDispatch } from "../../../module/store";
import { setGratitudeStatement, setHighlightOfTheDay } from "../../../module/gumjournals/slice";
import { faker } from '@faker-js/faker';


interface IProps {
  fieldKey: FormKey;
  textInputPlaceHolder?: string;
  filledData: string[];
}

const DEFAULT_BOX_HEIGHT = 75;

const TextInputBox = React.forwardRef<IFormCardMethodhandle, IProps>(({ textInputPlaceHolder, filledData, fieldKey }, ref) => {
  const selectedDate = useSelector(getGumjournalsSelectedDate);

  const textToInput = useRef<string>();

  const { colorScheme } = useContext(CommonContext);

  const dispatch = useDispatch<AppDispatch>();

  const boxHeight = useMemo(() => DEFAULT_BOX_HEIGHT * (filledData?.length + 1 || 1), [filledData?.length])

  const { animatedTextInputContainerStyle, hideBox, expandBox } = useExpandAndHideBox({ ref, height: boxHeight });

  useEffect(() => {
    hideBox();
  }, [selectedDate]);

  // Update text box's height if add new data
  useEffect(() => {
    if (boxHeight > DEFAULT_BOX_HEIGHT) {
      expandBox();
    }
  }, [filledData?.length]);



  const onAddTextHandler = () => {
    const payload = { date: selectedDate, text: textToInput.current! }
    switch (fieldKey) {
      case FormKey.HIGHLIGHTS_OF_THE_DAY:
        dispatch(setHighlightOfTheDay(payload));
        break;
      case FormKey.GRATITUDE_STATEMENTS:
        dispatch(setGratitudeStatement(payload));
        break;
      default:
        break;
    }
  };

  return (
    <Animated.View style={[{ overflow: "hidden" }, animatedTextInputContainerStyle]}>
      <SubmitTextInputContainer>
        <TextInput placeholder={textInputPlaceHolder} onChangeText={(text) => { textToInput.current = text }} />
        <AddButton onPress={onAddTextHandler}>
          <FontAwesomeIcon
            icon={faPlus}
            color={colorScheme["text-secondary"]}
          />
        </AddButton>
      </SubmitTextInputContainer>
      {Boolean(filledData?.length) && (
        <ScrollView>
          <FlatList
            data={filledData}
            keyExtractor={() => faker.string.uuid()}
            renderItem={({ item: filledDataText }) => {
              return (
                <FilledDataBox>
                  <FilledDataText>{filledDataText}</FilledDataText>
                </FilledDataBox>
              )
            }}
          />
        </ScrollView>
      )}
    </Animated.View>
  );
},
);

export default TextInputBox;