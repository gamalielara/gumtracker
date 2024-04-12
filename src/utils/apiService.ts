// import { API_KEY, SPREADSHEET_ID, SPREADSHEET_NAME } from "@env";
import { transformSheetDataToMapObj } from './sheetDataTransformer';
import { RawSheetData } from '../type/interface';
import { API_ENDPOINT } from './const';

export default class ApiService {
  static async getAuth() {}

  static async getHabitsOverview() {
    const res = await fetch(`${API_ENDPOINT}/habits-overview`);
    const data = await res.json();

    return data;
  }
}
