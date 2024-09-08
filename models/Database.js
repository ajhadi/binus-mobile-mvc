import * as SQLite from 'expo-sqlite';

// Open the database synchronously
const db = SQLite.openDatabaseSync('app.db');

export const initDB = async () => {
  try {
    await db.execAsync(
      `CREATE TABLE IF NOT EXISTS items (
        id INTEGER PRIMARY KEY NOT NULL,
        name TEXT NOT NULL
      );`
    );
    console.info('Table created successfully');
  } catch (error) {
    console.error('Failed to initialize database:', error);
  }
};

export default db;
