import * as SQLite from "expo-sqlite";
import { DBTableNames, RAW_GUMTRACKER_DATA } from "../const";
import { useEffect, useState } from "react";
import { GumtrackerData, Nullable } from "../interface";
import { parseDate } from "../date";

const db = SQLite.openDatabase("database.db");

const getSingleData = (timestamp: number) => {
  console.log("TIME STAMP OUTSIDE EFFECT ", timestamp, parseDate(timestamp));

  const [data, setData] = useState<Nullable<GumtrackerData>[]>([
    { ...RAW_GUMTRACKER_DATA },
  ]);

  useEffect(() => {
    console.log("TIME STAMP IN EFFECT ", timestamp, parseDate(timestamp));

    db.transaction((tx) => {
      tx.executeSql(
        `SELECT * FROM ${DBTableNames.GUMTRACKER} WHERE strftime('%Y-%m-%d', timestamp / 1000, 'unixepoch') = strftime('%Y-%m-%d', ${timestamp} / 1000, 'unixepoch');`,
        undefined,
        (_, result) => {
          console.log("RESULT FOUND: ", result.rows._array);

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
  }, [timestamp]);

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
