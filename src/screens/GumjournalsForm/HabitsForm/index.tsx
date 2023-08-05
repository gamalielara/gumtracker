import { useContext } from "react";
import { GumjournalsContext } from "../../../module/GumjournalsForm/context";
import { Keyboard, Platform, TouchableWithoutFeedback } from "react-native";
import { Container, ScrollingBaseView } from "../styles";
import { FORMS } from "../../../utils/forms";
import { updateHabitsGami } from "../../../module/GumjournalsForm/action";
import { RadioGridForm, SelectForm } from "../utils/formItem";
import { APPCOLORSCHEME } from "../../../utils/const";

export default () => {
  const { value, dispatch } = useContext(GumjournalsContext);

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

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <ScrollingBaseView>
        <RadioGridForm
          questionTitle="Habits I do today"
          scale={FORMS.habitsTracker["Habits Gamification"].scale}
          columns={FORMS.habitsTracker["Habits Gamification"].columns}
          value={value.habitsGamification}
          callbackFunc={onHabitScoreChanged}
        />
      </ScrollingBaseView>
    </TouchableWithoutFeedback>
  );
};
