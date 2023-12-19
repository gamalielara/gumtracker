import {useEffect, useState} from 'react';
import {AsyncStorageKeys, DBTableNames} from '../const';
import ApiService from '../apiService';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SQLite from 'react-native-sqlite-storage';

export default () => {
  const [state, setState] = useState(false);
  const db = SQLite.openDatabase(
    {
      name: 'database.db',
    },
    () => console.log('SUCCESS'),
    (err: unknown) => console.log('useCreateDatabase: ERROR OPENING DB! ', err),
  );

  useEffect(() => {
    (async () => {
      // TODO should comment this
      // await AsyncStorage.clear();

      const haveFetchedgumjournals = await AsyncStorage.getItem(
        AsyncStorageKeys.HAVE_FETCHED_GUMJOURNALS,
      );

      if (haveFetchedgumjournals === 'true') return;

      const fetchedData = await ApiService.getGumjournalsData();

      db.transaction(tx => {
        tx.executeSql(
          `DROP TABLE ${DBTableNames.GUMTRACKER}`,
          undefined,
          () => console.log('table dropped'),
          (_, err) => {
            console.log('Dropping table error found ', err);
            return false;
          },
        );

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
          async (tx, result) => {
            console.log('TABLE SUCCESSFULLY CREATED. ', result);
            await AsyncStorage.setItem(
              AsyncStorageKeys.HAVE_FETCHED_GUMJOURNALS,
              'true',
            );
          },
          (_, err) => {
            console.log(err);
            return false;
          },
        );

        fetchedData.forEach(data => {
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
              console.log('Inserted successfully. ', result);
            },
            (_, error) => {
              console.log('Error found. ', error);
              return false;
            },
          );
        });
      });
      setState(true);
    })();
  }, []);

  return state;
};
