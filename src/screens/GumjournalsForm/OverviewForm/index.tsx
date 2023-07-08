import React, { useContext, useEffect } from "react";
import {
  Container,
  MoodPickCard,
  MoodValueText,
  MoodsCard,
  QuestionText,
} from "./styles";
import { BAD_MOODS_RANGE, GOOD_MOODS_RANGE } from "./const";
import { GumjournalsContext } from "../../../module/GumjournalsForm/context";
import { UpdateMood } from "../../../module/GumjournalsForm/action";

export default () => {
  const { value, dispatch } = useContext(GumjournalsContext);

  const pickMoodHandle = (mood: number) => {
    dispatch?.(UpdateMood({ mood }));
  };

  return (
    <Container>
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
    </Container>
  );
};
