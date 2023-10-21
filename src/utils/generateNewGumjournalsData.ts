import { Fitness, HabitsGamification, TransformedSheetDataFields, Wellbeing } from "./interface";
import { FITNESS_TO_TRACK, HABITS_GAMIFICATION_TO_TRACK } from "./const";

type EntriesOf<T> = [keyof T, T[keyof T]][];
export const generateNewGumjournalsData = () => {
  const fitnessEntries = HABITS_GAMIFICATION_TO_TRACK.map(habit => [ habit, "" ]) as EntriesOf<Fitness>;

  const habitsGamificationEntries = FITNESS_TO_TRACK.map(fitness => [ fitness, "" ]) as EntriesOf<HabitsGamification>;

  const wellBeingEntries: EntriesOf<Wellbeing> = [
    [ "mood", "" ],
    [ "gratitudeStatements", [] ],
    [ "highlightsOfTheDay", [] ]
  ];

  return Object.fromEntries([
    [ "dateFilled", "" ],
    [ "fitness", Object.fromEntries(fitnessEntries) ],
    [ "habits", Object.fromEntries(habitsGamificationEntries) ],
    [ "wellbeing", Object.fromEntries(wellBeingEntries) ]
  ]) as TransformedSheetDataFields;
};