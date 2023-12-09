import {
  FITNESS_TO_TRACK,
  HABITS_GAMIFICATION_TO_TRACK,
  ScreenNames,
} from "./const";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type TSheetDimension = "ROWS" | "COLUMNS";

export type TRawDataHeaders =
  | "timestamp"
  | "date_filled"
  | "mood"
  | "gratitude_statements"
  | "highlight_of_the_day"
  | "body_weight"
  | "belly_circumference";

export interface RawSheetData {
  range: string;
  majorDimension: TSheetDimension;
  values: [TRawDataHeaders[], ...Array<string[]>]; // The first index is always the row key header
}

export type TransformedSheetDataFields = {
  dateFilled: string;
  fitness: Fitness;
  habits: HabitsGamification;
  timestamp: string | number;
  wellbeing: Wellbeing;
};

export type Fitness = {
  [K in (typeof FITNESS_TO_TRACK)[number]]: string;
};

export type HabitsGamification = {
  [K in (typeof HABITS_GAMIFICATION_TO_TRACK)[number]]: string;
};

export interface Wellbeing {
  gratitudeStatements: string[];
  highlightsOfTheDay: string[];
  mood: string;
}

export type ComponentBasePropsWithChildren<
  T extends Record<string, unknown> = Record<never, never>
> = {
  children: React.ReactNode;
} & T;

type RootStackParamsList = Record<ScreenNames, Record<string, unknown>>;

export type TNavigation = NativeStackNavigationProp<
  RootStackParamsList,
  ScreenNames,
  undefined
>;

export type NavigationScreenProps<
  T extends Partial<Record<string, unknown>> = Record<never, never>
> = {
  navigation: TNavigation;
  route?: Record<string, unknown>;
} & ComponentBasePropsWithChildren<T>;

export enum FormCardType {
  SELECT,
  INPUT_TEXT,
  INPUT_NUMBER,
}

export interface IFormCardMethodhandle {
  show: () => void;
  hide: () => void;
}

export interface FormOptions {
  detail: React.FC;
  value: string | number;
}

export interface IFormCard {
  title: string;
  subtitle?: string;
  SVGImage: any;
  illustrationPosition: "left" | "right";
  options?: FormOptions[];
  additionIllustrationStyle?: Record<string, unknown>;
  textInputPlaceHolder?: string;
}
