import { useContext } from "react";
import { GumjournalsContext } from "../../../module/gumjournalsForm/context";
import { Keyboard, TouchableWithoutFeedback } from "react-native";
import { ScrollingBaseView } from "../styles";
import { FORMS } from "../../../utils/forms";
import { updateHabitsGami } from "../../../module/gumjournalsForm/action";
import { RadioGridForm } from "../utils/formItem";
import PaddingInset from "../../../components/global/PaddingInset";

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
        <PaddingInset />
      </ScrollingBaseView>
    </TouchableWithoutFeedback>
  );
};
