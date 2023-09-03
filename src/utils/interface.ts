import { ScreenNames } from "./const";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type HeadRow = string[];
type HeadSubRow = string[];
type ValueRow = string[];
type SheetDimension = "ROWS" | "COLUMNS";

export interface RawSheetData {
  range: string;
  majorDimension: SheetDimension;
  values: [HeadRow, HeadSubRow, ...Array<ValueRow>]; // The first index is always the row key header
}

export type TransformedSheetData = Record<string, TransformedSheetDataFields>;

export type TransformedSheetDataFields = {
  dateFilled: string;
  fitness: Fitness;
  habits: HabitsGamification;
  timestamp: string | number;
  mood: number;
  wellbeing: Wellbeing;
};

export interface Fitness {
  bellyCircumference: string[];
  bodyWeight: string[];
}

export interface HabitsGamification {
  drawing: number;
  journaling: number;
  language: number;
  meditate: number;
  mobdev: number;
  reading: number;
  watchingMovies: number;
  webdev: number;
  writingBlog: number;
}

export interface Wellbeing {
  gratitudeStatements: string[];
  highlightsOfTheDay: string[];
  mood: string;
}

export type ComponentBasePropsWithChildren<
  T extends Record<string, unknown> = Record<never, never>,
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
  T extends Partial<Record<string, unknown>> = Record<never, never>,
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
  showSelectBox: () => void;
  hideSelectBox: () => void;
}

export interface IFormCard {
  title: string;
  subtitle?: string;
  SVGImage: any;
  illustrationPosition: "left" | "right";
  type: FormCardType;
  options?: React.FC[];
  additionIllustrationStyle?: Record<string, unknown>;
  textInputPlaceHolder?: string;
}
