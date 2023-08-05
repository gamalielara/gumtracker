import { Keyboard, TouchableWithoutFeedback } from "react-native";
import { APPCOLORSCHEME } from "../../../utils/const";
import {
  FormInput,
  QuestionContainer,
  QuestionText,
  ScrollingBaseView,
} from "../styles";

export default () => {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <ScrollingBaseView>
        <QuestionContainer>
          <QuestionText>Body Weight (kg)</QuestionText>
          <FormInput
            placeholder="Weight in kg"
            placeholderTextColor={APPCOLORSCHEME.text}
            inputMode="decimal"
          />
        </QuestionContainer>

        <QuestionContainer>
          <QuestionText>Belly circumference (cm)</QuestionText>
          <FormInput
            placeholder="Belly circumference in cm"
            placeholderTextColor={APPCOLORSCHEME.text}
            inputMode="decimal"
          />
        </QuestionContainer>
      </ScrollingBaseView>
    </TouchableWithoutFeedback>
  );
};
