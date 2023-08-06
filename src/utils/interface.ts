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
