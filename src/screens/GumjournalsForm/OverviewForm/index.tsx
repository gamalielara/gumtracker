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
import { BaseText, BoldText } from "../../../components/global/text";
import { Calendar } from "react-native-calendars";

export default () => {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <ScrollingBaseView>
        <BoldText style={{ marginBottom: 10, fontSize: 18 }}>
          Journals Filled
        </BoldText>
        <Calendar
          firstDay={1}
          theme={{
            calendarBackground: undefined,
            selectedDayTextColor: APPCOLORSCHEME.text,
            selectedDayBackgroundColor: APPCOLORSCHEME["text-secondary"],
            dayTextColor: APPCOLORSCHEME["text-secondary"],
            todayTextColor: APPCOLORSCHEME.text,
            monthTextColor: APPCOLORSCHEME.text,
            arrowColor: APPCOLORSCHEME.card,
          }}
          markedDates={{
            "2023-08-08": { selected: true },
          }}
        />
      </ScrollingBaseView>
    </TouchableWithoutFeedback>
  );
};
