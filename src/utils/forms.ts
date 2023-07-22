export enum FormType {
  TEXT,
  MULTILINE_TEXT,
  SELECT,
  MULTISELECT,
  GRIDSELECT,
}

const HABITS_CONFIG = {
  type: FormType.MULTISELECT,
  options: [
    "📖 Reading",
    "🌐 Webdev",
    "📱 Learn Mobile Dev",
    "🎸 Learn Guitar",
    "🧹 Clean Room",
    "📒 Journaling",
    "✍🏻 Writing Blog",
    "🎨 Drawing",
    "🍿 Watching Film/TV Series",
    "🏴󠁧󠁢󠁥󠁮󠁧󠁿 Learn IELTS",
    "🇷🇺 Learn Russian",
    "😭 Nothing",
  ],
};

const HABITS_GAMI_CONFIG = {
  type: FormType.GRIDSELECT,
  scale: [0, 5], // Min and max
  columns: [
    "Reading 📖",
    "Webdev 🌐",
    "Learn Mobile Dev 📱",
    "Journaling 📒",
    "Writing Blog ✍🏻",
    "Drawing 🎨",
    "Learn Language 🏴󠁧󠁢󠁥󠁮󠁧󠁿",
  ],
};

export const FORMS = {
  habitsTracker: {
    "Habits I do today": HABITS_CONFIG,
    "Habits Gamification": HABITS_GAMI_CONFIG,
  },
};

export type TGumjournalsForm = typeof FORMS;

export type THabits = typeof HABITS_CONFIG;
export type THabitsGami = typeof HABITS_GAMI_CONFIG;
