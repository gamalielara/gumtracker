import { parseDate } from "./date";
import { SheetData } from "./interface";

export default function transformSheetData(rawData: SheetData) {
  const transformedData: Record<string, string[]> = {};

  const [keys, ...values] = rawData.values;

  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];

    if (!transformedData[key]) transformedData[key] = [];

    for (let j = 0; j < values.length; j++) {
      if (i === 0) {
        transformedData[key].push(parseDate(values[j][i] ?? ""));
      } else {
        transformedData[key].push(values[j][i] ?? "");
      }
    }
  }

  return transformedData;
}
