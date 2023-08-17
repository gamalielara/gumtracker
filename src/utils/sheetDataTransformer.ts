export function transformSheetDataToMapObj(rawValues: string[][]) {
  const [standAloneKeys, detailKeys, ...values] = rawValues;

  const result: Record<string, unknown> = {};

  const maxKeysLength = Math.max(standAloneKeys.length, detailKeys.length);

  let tmpKey: string = "";

  function getValues(index: number) {
    const result = [];

    for (let i = 0; i < values.length; i++) {
      for (let j = 0; j < values[i].length; j++) {
        if (j === index) {
          result.push(values[i][j]);
        }
      }
    }

    return result;
  }

  for (let i = 0; i < maxKeysLength; i++) {
    if (standAloneKeys[i]) {
      tmpKey = standAloneKeys[i];
    } else {
      if (!tmpKey) tmpKey = detailKeys[i];
    }

    if (detailKeys[i]) {
      result[tmpKey] = {
        ...(result[tmpKey] ?? {}),
        [detailKeys[i]]: getValues(i),
      };
    } else {
      result[tmpKey] = getValues(i);
    }
  }
  return result;
}
