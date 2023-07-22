import React, { useContext, useState } from "react";
import {
  MoodPickCard,
  MoodValueText,
  MoodsCard,
  DatePickerButton,
  DatePickerText,
} from "./styles";
import { BAD_MOODS_RANGE, GOOD_MOODS_RANGE } from "./const";
import { GumjournalsContext } from "../../../module/GumjournalsForm/context";
import {
  updateDateFilled,
  updateHighlightOfTheDay,
  updateMood,
} from "../../../module/GumjournalsForm/action";
import DateTimePicker from "@react-native-community/datetimepicker";
import {
  Dimensions,
  Keyboard,
  Platform,
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
              textColor={APPCOLORSCHEME["text-secondary"]}
              onChange={datePickerChangeHandler}
              themeVariant="dark"
              accentColor={APPCOLORSCHEME.text}
            />
          )}
        </QuestionContainer>

        <QuestionContainer>
          <QuestionText>What is your overall mood today?</QuestionText>
          <MoodsCard>
            {Object.entries(BAD_MOODS_RANGE).map(([k, Emoji]) => (
              <MoodPickCard
                key={k}
                width={Number(appWidth.toFixed()) >= 600 ? "10%" : null}
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
                key={k}
                width={Number(appWidth.toFixed()) >= 480 ? "10%" : null}
                isSelected={value.mood === Number(k)}
                onPress={() => pickMoodHandle(Number(k))}
              >
                <Emoji width="50%" height="50%" />
                <MoodValueText>{k}</MoodValueText>
              </MoodPickCard>
            ))}
          </MoodsCard>
        </QuestionContainer>

        <QuestionContainer>
          <QuestionText>Highlight of the day #1* (Required)</QuestionText>
          <FormInput
            onChangeText={(text: string) => {
              dispatch?.(updateHighlightOfTheDay(text, 1));
            }}
            value={value.highlight?.[0]}
            placeholder="Highlight 1"
            placeholderTextColor={APPCOLORSCHEME.text}
          />
        </QuestionContainer>

        <QuestionContainer>
          <QuestionText>Highlight of the day #2</QuestionText>
          <FormInput
            onChangeText={(text: string) => {
              dispatch?.(updateHighlightOfTheDay(text, 2));
            }}
            value={value.highlight?.[1]}
            placeholder="Highlight 2"
            placeholderTextColor={APPCOLORSCHEME.text}
          />
        </QuestionContainer>
      </ScrollingBaseView>
    </TouchableWithoutFeedback>
  );
};
