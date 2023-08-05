import React, { useContext, useState } from "react";
import {
  MoodPickCard,
  MoodValueText,
  MoodsCard,
  DatePickerButton,
  DatePickerText,
} from "./styles";
import { BAD_MOODS_RANGE, GOOD_MOODS_RANGE } from "./const";
import { GumjournalsContext } from "../../../module/gumjournalsForm/context";
import {
  updateDateFilled,
  updateHighlightOfTheDay,
  updateMood,
} from "../../../module/gumjournalsForm/action";
import DateTimePicker from "@react-native-community/datetimepicker";
import {
  Dimensions,
  Keyboard,
  Platform,
  Pressable,
  Text,
  TouchableHighlight,
  TouchableWithoutFeedback,
} from "react-native";
import { APPCOLORSCHEME } from "../../../utils/const";
import {
  Container,
  FormInput,
  QuestionContainer,
  QuestionText,
  ScrollingBaseView,
} from "../styles";
import * as Notifications from "expo-notifications";
import { BaseText } from "../../../components/global/text";

export default () => {
  const [showDatePicker, setShowDatePicker] = useState<boolean>(
    Platform.OS === "ios"
  );

  const { value, dispatch } = useContext(GumjournalsContext);

  const pickMoodHandle = (mood: number) => {
    dispatch?.(updateMood({ mood }));
  };

  const datePickerChangeHandler = (event: any, selectedDate: any) => {
    const tmp = new Date(selectedDate).getTime();
    dispatch?.(updateDateFilled(tmp));
    setShowDatePicker(Platform.OS === "ios");
  };

  const { width: appWidth } = Dimensions.get("window");

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <ScrollingBaseView>
        <BaseText>Overview form</BaseText>
      </ScrollingBaseView>
    </TouchableWithoutFeedback>
  );
};
