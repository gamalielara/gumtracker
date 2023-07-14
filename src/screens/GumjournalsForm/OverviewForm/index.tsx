import React, { useContext, useState } from "react";
import {
  Container,
  MoodPickCard,
  MoodValueText,
  MoodsCard,
  QuestionContainer,
  QuestionText,
  DatePickerButton,
  DatePickerText,
  FormInput,
} from "./styles";
import { BAD_MOODS_RANGE, GOOD_MOODS_RANGE } from "./const";
import { GumjournalsContext } from "../../../module/GumjournalsForm/context";
import {
  updateDateFilled,
  updateMood,
} from "../../../module/GumjournalsForm/action";
import DateTimePicker from "@react-native-community/datetimepicker";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
} from "react-native";
import { APPCOLORSCHEME } from "../../../utils/const";

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

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <Container
        enabled
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <QuestionContainer>
          <QuestionText>What date are you filling this on?</QuestionText>
          {Platform.OS === "android" && (
            <DatePickerButton onPress={() => setShowDatePicker(true)}>
              <DatePickerText>{`${new Date(
                value.dateFilled
              ).toDateString()}`}</DatePickerText>
            </DatePickerButton>
          )}
          {showDatePicker && (
            <DateTimePicker
              value={new Date(value.dateFilled)}
              mode="date"
              display="calendar"
              style={{
                marginRight: "auto",
                marginLeft: "auto",
                marginTop: 10,
                borderRadius: 10,
                overflow: "hidden",
              }}
              //@ts-ignore
              textColor={APPCOLORSCHEME.text}
              onChange={datePickerChangeHandler}
              themeVariant="dark"
              accentColor={APPCOLORSCHEME.primary}
            />
          )}
        </QuestionContainer>

        <QuestionContainer>
          <QuestionText>What is your overall mood today?</QuestionText>
          <MoodsCard>
            {Object.entries(BAD_MOODS_RANGE).map(([k, Emoji]) => (
              <MoodPickCard
                key={k}
                isSelected={value.mood === Number(k)}
                onPress={() => pickMoodHandle(Number(k))}
              >
                <Emoji width="50%" height="50%" />
                <MoodValueText>{k}</MoodValueText>
              </MoodPickCard>
            ))}
          </MoodsCard>
          <MoodsCard>
            {Object.entries(GOOD_MOODS_RANGE).map(([k, Emoji]) => (
              <MoodPickCard
                isSelected={value.mood === Number(k)}
                key={k}
                onPress={() => pickMoodHandle(Number(k))}
              >
                <Emoji width="50%" height="50%" />
                <MoodValueText>{k}</MoodValueText>
              </MoodPickCard>
            ))}
          </MoodsCard>
        </QuestionContainer>

        <QuestionContainer>
          <QuestionText>Highlight of the day #1 (Required)</QuestionText>
          <FormInput
            onChangeText={() => {}}
            value="Hello"
            placeholder="useless placeholder"
          />
        </QuestionContainer>

        <QuestionContainer>
          <QuestionText>Highlight of the day #1 (Required)</QuestionText>
          <FormInput
            onChangeText={() => {}}
            value="Hello"
            placeholder="useless placeholder"
          />
        </QuestionContainer>

        <QuestionContainer>
          <QuestionText>Highlight of the day #1 (Required)</QuestionText>
          <FormInput
            onChangeText={() => {}}
            value="Hello"
            placeholder="useless placeholder"
          />
        </QuestionContainer>
      </Container>
    </TouchableWithoutFeedback>
  );
};
