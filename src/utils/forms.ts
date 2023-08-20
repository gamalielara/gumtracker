/**
 * This is old form constant. Should be deleted later.
 */

export enum FormType {
  TEXT,
  MULTILINE_TEXT,
  SELECT,
  MULTISELECT,
  GRIDSELECT,
}

export const HABITS_GAMI_CONFIG = {
  type: FormType.GRIDSELECT,
  scale: [0, 5], // Min and max
  columns: [
    "Reading 📖",
    "Webdev 🌐",
    "Learn Mobile Dev 📱",
    "Journaling 📒",
    "Writing Blog ✍🏻",
    "Drawing 🎨",
    "Meditate 🧘🏼",
    "Learn Language 🏴󠁧󠁢󠁥󠁮󠁧󠁿",
  ],
};

export const FORMS = {
  habitsTracker: {
    "Habits Gamification": HABITS_GAMI_CONFIG,
  },
};

export type TGumjournalsForm = typeof FORMS;

export type THabitsGami = typeof HABITS_GAMI_CONFIG;
