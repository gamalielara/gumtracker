import { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AsyncStorageKeys } from "../const";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../module/store";
import { fetchGumjournalsSpreadsheetData } from "../../module/gumjournals/actions";
import { setGumjournals } from "../../module/gumjournals/slice";
import { TransformedSheetData } from "../interface";

export default () => {
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    (async () => {
      const localGumjournalsData = await AsyncStorage.getItem(
        AsyncStorageKeys.GUMJOURNALS_LOCAL_STORAGE,
      );

      if (!localGumjournalsData) {
        console.info("Local gumjournals data is not detected. Fetching the new one...");
        dispatch(fetchGumjournalsSpreadsheetData());
      } else {
        console.info("Local gumjournals data is detected. Using the cached data...");
        const parsedLocalGumjournalsData = JSON.parse(
          localGumjournalsData,
        ) as TransformedSheetData;

        dispatch(setGumjournals(parsedLocalGumjournalsData));
      }
    })();
  }, []);
};