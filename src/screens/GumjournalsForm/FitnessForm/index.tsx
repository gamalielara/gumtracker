import { Alert, Keyboard, TouchableWithoutFeedback } from "react-native";
import { APPCOLORSCHEME } from "../../../utils/const";
import {
  FormInput,
  QuestionContainer,
  QuestionText,
  ScrollingBaseView,
} from "../styles";
import { useRef } from "react";

export default () => {
  // Fitness form can only be filled on Mondays
  const isMondayRef = useRef(new Date().getDay() === 1);

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <ScrollingBaseView>
        <QuestionContainer>
          <QuestionText>Body Weight (kg)</QuestionText>
          <FormInput
            isDisabled={!isMondayRef.current}
            placeholder="Weight in kg"
            placeholderTextColor={APPCOLORSCHEME.text}
            inputMode="decimal"
            editable={isMondayRef.current}
          />
        </QuestionContainer>

        <QuestionContainer>
          <QuestionText>Belly circumference (cm)</QuestionText>
          <FormInput
            isDisabled={!isMondayRef.current}
            placeholder="Belly circumference in cm"
            placeholderTextColor={APPCOLORSCHEME.text}
            inputMode="decimal"
            editable={isMondayRef.current}
          />
        </QuestionContainer>
      </ScrollingBaseView>
    </TouchableWithoutFeedback>
  );
};
