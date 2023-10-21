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
  getBaseGumjournalsData,
  getGumjournalsDataByDate,
  getGumjournalsSelectedDate
} from "../../../module/gumjournals/selectors";
import useExpandAndHideBox from "../../../utils/hook/useExpandAndHideBox";
import { FormKey } from "../../../utils/formsConstant";
import { AppDispatch } from "../../../module/store";
import { setHighlightOfTheDay } from "../../../module/gumjournals/slice";

interface IProps {
  fieldKey: FormKey;
  textInputPlaceHolder?: string;
  filledData: string[];
}

export const DEFAULT_BOX_HEIGHT = 75;

const TextInputBox = React.forwardRef<IFormCardMethodhandle, IProps>(
  ({ textInputPlaceHolder, filledData, fieldKey }, ref) => {
    const gumjournalsBaseData = useSelector(getBaseGumjournalsData);

    const selectedDate = useSelector(getGumjournalsSelectedDate);
    const selectedGumJournalsData = useSelector(getGumjournalsDataByDate(selectedDate));

    const textToInput = useRef<string>();

    const { colorScheme } = useContext(CommonContext);

    const dispatch = useDispatch<AppDispatch>();

    const boxHeight = useMemo(() => DEFAULT_BOX_HEIGHT * (filledData?.length + 1 || 1), [filledData?.length])

    const { animatedTextInputContainerStyle, hideBox, expandBox } = useExpandAndHideBox({ ref, height: boxHeight });

    useEffect(() => {
      hideBox();
    }, [ selectedDate ]);

    // Update text box's height if add new data
    useEffect(() => {
      if(boxHeight > DEFAULT_BOX_HEIGHT){
        expandBox();
      }
    }, [filledData?.length]);



    const onAddTextHandler = () => {
      console.log(selectedGumJournalsData);
      switch (fieldKey) {
        case FormKey.HIGHLIGHTS_OF_THE_DAY:
          dispatch(setHighlightOfTheDay({ date: selectedDate, text: textToInput.current! }));
        case FormKey.GRATITUDE_STATEMENTS:
          dispatch()
        default:
          break;
      }
    };

    console.log(filledData?.length);

    return (
      <Animated.View style={ [ { overflow: "hidden" }, animatedTextInputContainerStyle ] }>
        <SubmitTextInputContainer>
          <TextInput placeholder={textInputPlaceHolder} onChangeText={(text) => {textToInput.current = text}}/>
          <AddButton onPress={ onAddTextHandler }>
            <FontAwesomeIcon
              icon={faPlus}
              color={colorScheme["text-secondary"]}
            />
          </AddButton>
        </SubmitTextInputContainer>
        { Boolean(filledData?.length) && (
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