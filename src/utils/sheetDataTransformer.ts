import { parseDate } from "./date";

export function transformSheetDataToMapObj(
  rawValues: [string[], string[], ...Array<string[]>],
) {
  const [topHeader, header, ...values] = rawValues;

  const result: Record<string, any> = {};

  const splittedValuesKeys = ["Gratitude Statements", "Highlights of The Day"];

  for (let i = 0; i < values.length; i++) {
    const date = parseDate(values[i][0]);
    result[date] = {};

    let topHeaderKey;

    for (let j = 0; j < values[i].length; j++) {
      if (topHeader[j]) topHeaderKey = topHeader[j];

      if (!topHeaderKey) {
        result[date][header[j]] = values[i][j];
        continue;
      }

      result[date][topHeaderKey] = { ...(result[date][topHeaderKey] ?? {}) };

      if (header[j]) {
        let transformedValues: string | string[] = values[i][j];

        if (splittedValuesKeys.includes(header[j]))
          transformedValues = transformedValues.split("; ");

        result[date][topHeaderKey][header[j]] = transformedValues;
      } else {
        result[date][topHeaderKey] = values[i][j];
      }
    }
  }

  return result;
}
