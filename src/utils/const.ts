interface IColorScheme {
  primary: string;
  secondary: string;
  background: string;
  card: string;
  text: string;
  "text-secondary"?: string;
}

export enum ColorModeScheme {
  LIGHT_MODE = "light",
  DARK_MODE = "dark",
}

export const DarkModeColorScheme: IColorScheme = {
  primary: "#404258",
  secondary: "#474E68",
  card: "#50577A",
  background: "#404258", // primary color
  text: "#F4F4F2",
  "text-secondary": "#6B728E", // lighter
};

export const LightModeColorScheme: IColorScheme = {
  primary: "#F4F4F2",
  secondary: "#BBBFCA",
  card: "#E8E8E8",
  background: "#F4F4F2", // primary color
  text: "#BBBFCA",
  "text-secondary": "#E8E8E8", // darker
};

export const ColorScheme = {
  [ColorModeScheme.DARK_MODE]: DarkModeColorScheme,
  [ColorModeScheme.LIGHT_MODE]: LightModeColorScheme,
};

// Change later
export const APPCOLORSCHEME = ColorScheme[ColorModeScheme.DARK_MODE];

export enum GumjournalsFormName {
  OVERVIEW = "Overview",
  WELLBEING = "Wellbeing",
  FITNESS = "Fitness",
  HABIT = "Habit",
}

export enum ToastType {
  INFO = "info",
  SUCCESS = "success",
  FAILED = "failed",
}
