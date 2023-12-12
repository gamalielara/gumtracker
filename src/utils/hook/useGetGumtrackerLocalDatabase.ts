import * as SQLite from "expo-sqlite";
import { DBTableNames, RAW_GUMTRACKER_DATA } from "../const";
import { useEffect, useState } from "react";
import { GumtrackerData, Nullable } from "../interface";
import { parseDate } from "../date";

const db = SQLite.openDatabase("database.db");

const getSingleData = (selectedDate: string) => {
  const [data, setData] = useState<Nullable<GumtrackerData>[]>([
    { ...RAW_GUMTRACKER_DATA },
  ]);

  useEffect(() => {
    console.log({ selectedDate });
    db.transaction((tx) => {
      tx.executeSql(
        `SELECT * FROM ${DBTableNames.GUMTRACKER} WHERE date_filled = "${selectedDate}";`,
        undefined,
        (_, result) => {
          console.log(
            `get single data on ${selectedDate}, result found: `,
            result.rows._array
          );

          setData(() => {
            if (result.rows._array.length > 0) {
              return result.rows._array as GumtrackerData[];
            } else {
              return [{ ...RAW_GUMTRACKER_DATA }];
            }
          });
        },
        (_, err) => {
          console.log("ERROR ", err);
          return false;
        }
      );
    });
  }, [selectedDate]);

  return data;
};

const getAllDates = () => {
  const [data, setData] = useState<string[]>([]);

  useEffect(() => {
    db.transaction((tx) => {
      tx.executeSql(
        `SELECT date_filled FROM ${DBTableNames.GUMTRACKER}`,
        undefined,
        (_, result) => {
          console.log("RESULT FOUND: ", result.rows._array);

          const dates: string[] = result.rows._array.map(
            ({ date_filled }) => date_filled
          );

          setData(dates);
        },
        (_, err) => {
          console.log(err);
          return false;
        }
      );
    });
  }, []);

  return data;
};

export default {
  getSingleData,
  getAllDates,
};
