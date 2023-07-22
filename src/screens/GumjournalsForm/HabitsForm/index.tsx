import { useContext } from "react";
import { GumjournalsContext } from "../../../module/GumjournalsForm/context";
import { Keyboard, Platform, TouchableWithoutFeedback } from "react-native";
import { Container, ScrollingBaseView } from "../styles";
import { FORMS } from "../../../utils/forms";
import {
  updateHabits,
  updateHabitsGami,
} from "../../../module/GumjournalsForm/action";
import { FormItem } from "../utils/formItem";

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

  const onHabitScoreChanged = ({
    habit,
    score,
  }: {
    habit: string;
    score: number;
  }) => {
    const newHabitGami = { ...value.habitsGamification, [habit]: score };
    dispatch?.(updateHabitsGami(newHabitGami));
  };

  const setCheckboxSelected = (option: string) => value.habits.includes(option);

  // Return the habit score: (from 0 to 5)
  const setHabitScore = (habit: string) => value.habitsGamification[habit];

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <Container
        enabled
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollingBaseView>
          <FormItem
            questionTitle="Habits I do today"
            form={FORMS.habitsTracker["Habits I do today"]}
            callbackFunc={onHabitsCheckboxChanged}
            value={setCheckboxSelected}
          />

          <FormItem
            questionTitle="Habits I do today"
            form={FORMS.habitsTracker["Habits Gamification"]}
            value={setHabitScore}
            callbackFunc={onHabitScoreChanged}
          />
        </ScrollingBaseView>
      </Container>
    </TouchableWithoutFeedback>
  );
};
