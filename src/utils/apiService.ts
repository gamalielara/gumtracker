// import { API_KEY, SPREADSHEET_ID, SPREADSHEET_NAME } from "@env";
import {transformSheetDataToMapObj} from './sheetDataTransformer';
import {RawSheetData} from './interface';

export default class ApiService {
  static async getAuth() {}

  static async getGumjournalsData() {
    const API_KEY = 'AIzaSyBhYJQN_dVC1x9t9zOt6Q40Ihf17aGgHi0';
    const SPREADSHEET_ID = '1CT8xEWYSH7tLmyO7SW0LVvy0Mqu6Jcin48usx5U8HXo';
    const SPREADSHEET_NAME = 'test-gumtracker';

    console.log({API_KEY, SPREADSHEET_ID, SPREADSHEET_NAME});

    const res = await fetch(
      `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${SPREADSHEET_NAME}?valueRenderOption=FORMATTED_VALUE&key=${API_KEY}`,
    );

    const data: RawSheetData = await res.json();

    const transformedData = transformSheetDataToMapObj(data.values);

    return transformedData;
  }
}
