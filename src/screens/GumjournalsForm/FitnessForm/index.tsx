import {  Keyboard, TouchableWithoutFeedback } from "react-native";
import { APPCOLORSCHEME } from "../../../utils/const";
import {
  FormInput,
  QuestionContainer,
  QuestionText,
  ScrollingBaseView,
} from "../styles";
import { useMemo, } from "react";

export default () => {
  // Fitness form can only be filled on Mondays
  const isMondayRef = useMemo(
    () => new Date().getDay() === 1,
    [new Date().getDay()]
  );

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <ScrollingBaseView>
        <QuestionContainer>
          <QuestionText>Body Weight (kg)</QuestionText>
          <FormInput
            isDisabled={!isMondayRef}
            placeholder="Weight in kg"
            placeholderTextColor={APPCOLORSCHEME.text}
            inputMode="decimal"
            editable={isMondayRef}
          />
        </QuestionContainer>

        <QuestionContainer>
          <QuestionText>Belly circumference (cm)</QuestionText>
          <FormInput
            isDisabled={!isMondayRef}
            placeholder="Belly circumference in cm"
            placeholderTextColor={APPCOLORSCHEME.text}
            inputMode="decimal"
            editable={isMondayRef}
          />
        </QuestionContainer>
      </ScrollingBaseView>
    </TouchableWithoutFeedback>
  );
};
