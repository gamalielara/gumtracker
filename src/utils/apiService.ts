import { API_KEY, SPREADSHEET_ID, SPREADSHEET_NAME } from "@env";
import { camelCasifyObject } from "./camelCaseifyObject";
import { transformSheetDataToMapObj } from "./sheetDataTransformer";
import { RawSheetData, TransformedSheetData } from "./interface";

export default class ApiService {
  static async getAuth() {}

  static async getGumjournalsData() {
    const res = await fetch(
      `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${SPREADSHEET_NAME}?valueRenderOption=FORMATTED_VALUE&key=${API_KEY}`,
    );

    const data: RawSheetData = await res.json();

    const transformedData = transformSheetDataToMapObj(data.values);

    return camelCasifyObject(transformedData) as TransformedSheetData;
  }
}
