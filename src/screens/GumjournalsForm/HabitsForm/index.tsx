import { useContext } from "react";
import { GumjournalsContext } from "../../../module/GumjournalsForm/context";
import { Keyboard, Platform, TouchableWithoutFeedback } from "react-native";
import {
  Container,
  QuestionContainer,
  QuestionText,
  ScrollingBaseView,
} from "../styles";
import { FormItem } from "../utils";
import { FORMS } from "../../../utils/forms";
import { updateHabits } from "../../../module/GumjournalsForm/action";

export default () => {
  const { value, dispatch } = useContext(GumjournalsContext);

  const onHabitsCheckboxChanged = ({
    isChangedSelected,
    habit,
  }: {
    isChangedSelected: boolean;
    habit: string;
  }) => {
    let newHabit: string[];

    // The user select the checkbox
    if (isChangedSelected) {
      newHabit = [...value.habits, habit];
    } else {
      newHabit = value.habits.filter(
        (selectedHabit) => selectedHabit !== habit
      );
    }

    dispatch?.(updateHabits(newHabit));
  };

  const setCheckboxSelected = (option: string) => value.habits.includes(option);

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <Container
        enabled
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollingBaseView>
          <FormItem
            form={FORMS.habitsTracker[0]}
            callbackFunc={onHabitsCheckboxChanged}
            value={setCheckboxSelected}
          />
        </ScrollingBaseView>
      </Container>
    </TouchableWithoutFeedback>
  );
};
