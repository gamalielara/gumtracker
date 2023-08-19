import { Keyboard, TouchableWithoutFeedback } from "react-native";
import {
  FormInput,
  QuestionContainer,
  QuestionText,
  ScrollingBaseView,
} from "../styles";
import { useContext, useMemo } from "react";
import CommonContext from "../../../module/common";

export default () => {
  const { colorScheme } = useContext(CommonContext);
  // Fitness form can only be filled on Mondays
  const isMondayRef = useMemo(
    () => new Date().getDay() === 1,
    [new Date().getDay()],
  );

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <ScrollingBaseView>
        <QuestionContainer>
          <QuestionText>Body Weight (kg)</QuestionText>
          <FormInput
            isDisabled={!isMondayRef}
            placeholder="Weight in kg"
            placeholderTextColor={colorScheme.text}
            inputMode="decimal"
            editable={isMondayRef}
          />
        </QuestionContainer>

        <QuestionContainer>
          <QuestionText>Belly circumference (cm)</QuestionText>
          <FormInput
            isDisabled={!isMondayRef}
            placeholder="Belly circumference in cm"
            placeholderTextColor={colorScheme.text}
            inputMode="decimal"
            editable={isMondayRef}
          />
        </QuestionContainer>
      </ScrollingBaseView>
    </TouchableWithoutFeedback>
  );
};
