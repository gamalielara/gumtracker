import { TableConstants } from '<utils>/const';
import { appSchema, tableSchema } from '@nozbe/watermelondb';

export default appSchema({
  version: 1,
  tables: [
    tableSchema({
      name: TableConstants.HABITS_OVERVIEW,
      columns: [
        { name: 'date', type: 'string', isIndexed: true },
        { name: 'habit_name', type: 'string' },
        { name: 'score', type: 'number' },
      ],
    }),
  ],
});
