// createTables.ts

import { createConnection } from 'typeorm';
import { User } from './models/User';
import { Video } from './models/Video';

createConnection().then(async () => {
  console.log('Connected to the database');
  await User.createTable();
  await Video.createTable();
  console.log('Tables created');
}).catch((error) => {
  console.log('Error connecting to the database:', error);
});
