import { ScreenNames } from "./const";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type HeadRow = string[];
type ValueRow = string[];
type SheetDimension = "DIMENSIOn";

export interface SheetData {
  range: string;
  majorDimension: SheetDimension;
  values: [HeadRow, ...Array<ValueRow>]; // The first index is always the row key header
}

export interface TransformedSheetData {
  data: {
    DateFilled: string[];
    Mood: string[];
  };
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
> = { navigation: TNavigation } & ComponentBasePropsWithChildren<T>;
