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

export interface TransformedSheetData {
  dateFilled: string[];
  fitness: Fitness;
  habitsGamification: HabitsGamification;
  timestamp: string[];
  wellbeing: Wellbeing;
}

export interface Fitness {
  bellyCircumference: string[];
  bodyWeight: string[];
}

export interface HabitsGamification {
  drawing: string[];
  journaling: string[];
  language: string[];
  meditate: string[];
  mobdev: string[];
  reading: string[];
  watchingMovies: string[];
  webdev: string[];
  writingBlog: string[];
}

export interface Wellbeing {
  gratitude1: string[];
  gratitude2: string[];
  gratitude3: string[];
  highlightOfTheDay1: string[];
  highlightOfTheDay2: string[];
  highlightOfTheDay3: string[];
  mood: string[];
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
