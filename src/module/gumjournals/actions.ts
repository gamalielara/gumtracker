import { createAsyncThunk } from "@reduxjs/toolkit";
import ApiService from "../../utils/apiService";
import { TransformedSheetData } from "../../utils/interface";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AsyncStorageKeys } from "../../utils/const";

export const fetchGumjournalsSpreadsheetData =
  createAsyncThunk<TransformedSheetData>("gumjournals/fetch", async () => {
    const data = await ApiService.getGumjournalsData();

    if (data) {
      await AsyncStorage.setItem(
        AsyncStorageKeys.GUMJOURNALS_LOCAL_STORAGE,
        JSON.stringify(data),
      );
    }
    return data;
  });
