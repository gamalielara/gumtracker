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
  secondary: "#3c435d",
  card: "#50577A",
  background: "#404258", // primary color
  text: "#F4F4F2",
  "text-secondary": "#6B728E", // lighter
};

export const LightModeColorScheme: IColorScheme = {
  primary: "#96B6C5",
  secondary: "#698998",
  card: "#ADC4CE",
  background: "#96B6C5", // primary color
  text: "#F1F0E8",
  "text-secondary": "#557381", // darker
};

export const ColorScheme = {
  [ColorModeScheme.DARK_MODE]: DarkModeColorScheme,
  [ColorModeScheme.LIGHT_MODE]: LightModeColorScheme,
};

export enum GumjournalsFormName {
  WELLBEING = "Wellbeing",
  FITNESS = "Fitness",
  HABIT = "Habit",
}

export enum ToastType {
  INFO = "info",
  SUCCESS = "success",
  FAILED = "failed",
}

export enum ScreenNames {
  GUMJOURNALS_FORM = "Gumjournals Form",
  GUMJOURNALS_OVERVIEW = "Gumjournals Overview",
}

export enum AsyncStorageKeys {
  NOTI_STATUS = "noti_permission_status",
  COLOR_SCHEME = "color-scheme",
}
