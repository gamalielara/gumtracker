import React, { useContext, useEffect, useMemo, useRef, } from "react";
import { AddButton, FilledDataBox, FilledDataText, SubmitTextInputContainer, TextInput, } from "./styles";
import Animated from "react-native-reanimated";
import { FlatList, ScrollView } from "react-native";
import { IFormCardMethodhandle, TransformedSheetData } from "../../../utils/interface";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import CommonContext from "../../../module/common";
import { SelectedTrackerData } from "../../../screens/TrackerForms/context";
import { useDispatch, useSelector } from "react-redux";
import { getBaseGumjournalsData } from "../../../module/gumjournals/selectors";
import useExpandAndHideBox from "../../../utils/hook/useExpandAndHideBox";
import useDetermineGumjournalsContextKeys from "../../../utils/hook/useDetermineGumjournalsContextKeys";
import { FormKey } from "../../../utils/formsConstant";
import { setGumjournals } from "../../../module/gumjournals/slice";
import { AppDispatch } from "../../../module/store";

interface IProps {
  fieldKey: FormKey;
  textInputPlaceHolder?: string;
  filledData: string[];
}

export const DEFAULT_BOX_HEIGHT = 75;

const TextInputBox = React.forwardRef<IFormCardMethodhandle, IProps>(
  ({ textInputPlaceHolder, filledData, fieldKey }, ref) => {
    const gumjournalsContext = useContext(SelectedTrackerData);
    const gumjournalsBaseData = useSelector(getBaseGumjournalsData);

    const textToInput = useRef<string>();

    const { colorScheme } = useContext(CommonContext);

    const dispatch = useDispatch<AppDispatch>();

    const boxHeight = useMemo(() => DEFAULT_BOX_HEIGHT * (filledData?.length + 1 || 1), [filledData?.length])

    const {animatedTextInputContainerStyle, hideBox, expandBox} = useExpandAndHideBox({ ref, height: boxHeight })

    useEffect(() => {
      hideBox();
    }, [gumjournalsContext?.selectedDate]);

    // Update text box's height if add new data
    useEffect(() => {
      if(boxHeight > DEFAULT_BOX_HEIGHT){
        expandBox();
      }
    }, [filledData?.length]);


    const rawKeys = useDetermineGumjournalsContextKeys(fieldKey);

    const keysArr = useMemo(() => rawKeys.split(/\??\./), []);

    const onAddTextHandler = () => {
      // TransformedSheetDataFields
      const fields = gumjournalsContext?.selectedGumjournalsData ?? {} as Record<string, unknown>;


      let tmp = fields;

      keysArr.forEach((key, i) => {
        if ( i < keysArr.length - 1) {
          tmp[key] = tmp[key] ?? {};

        } else {
          tmp[key] =  tmp[key] ?? [];
          tmp[key] = [...tmp[key], textToInput.current!]
        }

        tmp = tmp[key] as Record<string, unknown>;
      });

      const dataToPush = {[gumjournalsContext!.selectedDate]: fields} as TransformedSheetData;

      const newGumjournalsData = {...gumjournalsBaseData, ...dataToPush};

      dispatch(setGumjournals(newGumjournalsData));
    };


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