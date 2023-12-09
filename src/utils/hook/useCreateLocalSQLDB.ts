import { useEffect } from "react";
import * as SQLite from "expo-sqlite";
import { DBTableNames } from "../const";
import ApiService from "../apiService";

export default () => {
  const db = SQLite.openDatabase("database.db");

  useEffect(() => {
    (async () => {
      const fetchedData = await ApiService.getGumjournalsData();

      db.transaction((tx) => {
        tx.executeSql(
          `DROP TABLE IF EXISTS ${DBTableNames.GUMTRACKER};`,
          undefined,
          (_, result) => {
            console.log("Table dropped successfully");
          },
          (_, error) => {
            console.error("Error dropping table:", error);
            return false;
          }
        );
      });

      db.transaction((tx) => {
        tx.executeSql(
          `
            CREATE TABLE IF NOT EXISTS ${DBTableNames.GUMTRACKER} (
                id INTEGER PRIMARY KEY AUTOINCREMENT UNIQUE,
                timestamp INTEGER DEFAULT NULL,
                date_filled INTEGER DEFAULT NULL,
                mood INTEGER DEFAULT NULL,
                highlight_of_the_day TEXT DEFAULT NULL,
                gratitude_statements TEXT DEFAULT NULL,
                body_weight INTEGER DEFAULT NULL,
                belly_circumference INTEGER DEFAULT NULL
            );
        `,
          undefined,
          (tx, result) => {
            console.log("DB created.");
            console.log(result);
          },
          (_, err) => {
            console.log(err);
            return false;
          }
        );
      });

      // Batch insert
      fetchedData.forEach((data) => {
        db.transaction((tx) => {
          tx.executeSql(
            `
                INSERT INTO ${DBTableNames.GUMTRACKER} (
                    timestamp, date_filled, mood, highlight_of_the_day, gratitude_statements, body_weight, belly_circumference
                ) VALUES (?, ?, ?, ?, ?, ?, ?);
            `,
            [
              data.timestamp,
              data.date_filled,
              data.mood,
              data.highlight_of_the_day,
              data.gratitude_statements,
              data.body_weight,
              data.belly_circumference,
            ] as (string | number)[],
            (_, result) => {
              console.log("Inserted successfully. ", result);
            },
            (_, error) => {
              console.log("Error found. ", error);
              return false;
            }
          );
        });
      });
    })();
  }, []);
};
