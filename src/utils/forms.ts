export enum FormType {
  TEXT,
  MULTILINE_TEXT,
  SELECT,
  MULTISELECT,
  GRIDSELECT,
}

export const FORMS = {
  habitsTracker: [
    {
      "Habits I do today": {
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
      },
    },
    {
      "Habits Gamification": {
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
      },
    },
  ],
};
