import { TRawDataHeaders } from '../type/interface';

export function transformSheetDataToMapObj(
  rawValues: [TRawDataHeaders[], ...Array<string[]>],
) {
  const [header, ...values] = rawValues;

  const result: Record<TRawDataHeaders, unknown>[] = [];

  values.forEach(value => {
    const resultObj = {} as Record<TRawDataHeaders, unknown>;

    value.forEach((v, i) => {
      resultObj[header[i]] = v;
    });
    result.push(resultObj);
  });

  return result;
}
