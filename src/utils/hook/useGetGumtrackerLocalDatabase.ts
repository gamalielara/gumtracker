import SQLite from 'react-native-sqlite-storage';
import {DBTableNames, RAW_GUMTRACKER_DATA} from '../const';
import {useEffect, useState} from 'react';
import {GumtrackerData, Nullable} from '../interface';
import {parseDate} from '../date';
import {useDispatch} from 'react-redux';
import {setIsLoading} from '../../module/gumjournals/slice';

const db = SQLite.openDatabase(
  {
    name: 'database.db',
  },
  () => console.log('SUCCESS'),
  (err: unknown) => console.log('ERROR OPENING DB! ', err),
);

const getSingleData = (selectedDate: string) => {
  const [data, setData] = useState<Nullable<GumtrackerData>[]>([
    {...RAW_GUMTRACKER_DATA},
  ]);

  const dispatch = useDispatch();

  useEffect(() => {
    console.log({selectedDate});

    dispatch(setIsLoading(true));

    db.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM ${DBTableNames.GUMTRACKER} WHERE date_filled = "${selectedDate}";`,
        undefined,
        (_, result) => {
          console.log(
            `get single data on ${selectedDate}, result found: `,
            result.rows._array,
          );

          dispatch(setIsLoading(false));

          setData(() => {
            if (result.rows._array.length > 0) {
              return result.rows._array as GumtrackerData[];
            } else {
              return [{...RAW_GUMTRACKER_DATA}];
            }
          });
        },
        (_, err) => {
          console.log('ERROR ', err);
          dispatch(setIsLoading(false));
          return false;
        },
      );
    });
  }, [selectedDate]);

  return data;
};

const getAllDates = () => {
  const [data, setData] = useState<string[]>([]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setIsLoading(true));

    db.transaction(tx => {
      tx.executeSql(
        `SELECT date_filled FROM ${DBTableNames.GUMTRACKER}`,
        undefined,
        (_, result) => {
          console.log('RESULT FOUND: ', result.rows._array);

          const dates: string[] = result.rows._array.map(
            ({date_filled}) => date_filled,
          );

          dispatch(setIsLoading(false));

          setData(dates);
        },
        (_, err) => {
          console.log(err);

          dispatch(setIsLoading(false));

          return false;
        },
      );
    });
  }, []);

  return data;
};

export default {
  getSingleData,
  getAllDates,
};
