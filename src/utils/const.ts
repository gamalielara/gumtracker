import { GumtrackerData, Nullable, TRawDataHeaders } from './interface';

interface IColorScheme {
  primary: string;
  secondary: string;
  background: string;
  card: string;
  text: string;
  'text-secondary'?: string;
}

export enum ColorModeScheme {
  LIGHT_MODE = 'light',
  DARK_MODE = 'dark',
}

export const DarkModeColorScheme: IColorScheme = {
  primary: '#404258',
  secondary: '#3c435d',
  card: '#50577A',
  background: '#404258', // primary color
  text: '#F4F4F2',
  'text-secondary': '#6B728E', // lighter
};

export const LightModeColorScheme: IColorScheme = {
  primary: '#76a2b7',
  secondary: '#698998',
  card: '#b1c3cb',
  background: '#F1F0E8', // primary color
  text: '#96B6C5',
  'text-secondary': '#445c67', // darker
};

export const ColorScheme = {
  [ColorModeScheme.DARK_MODE]: DarkModeColorScheme,
  [ColorModeScheme.LIGHT_MODE]: LightModeColorScheme,
};

export enum GumjournalsFormName {
  WELLBEING = 'Wellbeing',
  FITNESS = 'Fitness',
  HABIT = 'Habit',
}

export enum ToastType {
  INFO = 'info',
  SUCCESS = 'success',
  FAILED = 'failed',
}

export enum ScreenNames {
  HOME = 'Home',
}

export enum HomeScreenNames {
  OVERALL = 'Overall',
  DAILY = 'Daily',
  WEEKLY = 'Weekly',
  LOGS = 'Logs',
}

export enum AsyncStorageKeys {
  NOTI_STATUS = 'noti_permission_status',
  COLOR_SCHEME = 'color_scheme',
  HAVE_FETCHED_GUMJOURNALS = 'have_fetched_gumjournals',
}

export enum DBTableNames {
  GUMTRACKER = 'gumtracker',
  HABITS_TRACKER = 'habits_tracker',
}

export enum DeviceWidthType {
  NARROW,
  PHONE,
  TABLET,
}

export const HABITS_GAMIFICATION_TO_TRACK = [
  'drawing',
  'journaling',
  'language',
  'meditate',
  'mobdev',
  'reading',
  'watchingMovies',
  'webdev',
  'writingBlog',
] as const;

export const FITNESS_TO_TRACK = ['bellyCircumferece', 'bodyWeight'] as const;

export const RAW_GUMTRACKER_DATA: Nullable<GumtrackerData> = {
  timestamp: null,
  date_filled: null,
  mood: null,
  gratitude_statements: null,
  highlight_of_the_day: null,
  body_weight: null,
  belly_circumference: null,
} as const;

export const APP_DATE_FORMAT = 'yyyy-MM-dd';
