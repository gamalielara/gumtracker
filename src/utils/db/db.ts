import { enablePromise, openDatabase } from 'react-native-sqlite-storage';

export const connectToDatabase = () => {
  enablePromise(true);

  return openDatabase(
    {
      name: 'gumtracker.db',
      location: 'default',
    },
    () => console.log('Database successfully opened'),
    e => {
      throw new Error(e.message);
    },
  );
};
