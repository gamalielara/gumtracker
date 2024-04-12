import { TableConstants } from '<utils>/const';
import { createNewHabitOverview } from '<utils>/db/create';
import { fetchHabitsOverview } from '<utils>/db/fetch';
import { database } from '<utils>/db/index.native';
import { useEffect } from 'react';

export default () => {
  const create = async () => {
    await createNewHabitOverview();

    await fetchHabitsOverview();
  };

  useEffect(() => {
    create();
  }, []);
};
