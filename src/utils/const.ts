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
  primary: "#76a2b7",
  secondary: "#698998",
  card: "#b1c3cb",
  background: "#F1F0E8", // primary color
  text: "#96B6C5",
  "text-secondary": "#445c67", // darker
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
  TRACKER_FORMS = "Tracker Forms",
}

export enum AsyncStorageKeys {
  NOTI_STATUS = "noti_permission_status",
  COLOR_SCHEME = "color_scheme",
  GUMJOURNALS_LOCAL_STORAGE = "gumjournals_local_storage",
}

export const ANDROID_KEYBOARD_OFFSET = -200;

export enum DeviceWidthType {
  NARROW,
  PHONE,
  TABLET,
}
