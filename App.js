import React, { useEffect } from 'react';
import { SafeAreaView } from 'react-native';
import ItemView from './views/ItemView';
import { initDB } from './models/Database';

export default function App() {
  useEffect(() => {
    const setupDatabase = async () => {
      try {
        await initDB();
      } catch (err) {
        console.error('Failed to initialize database:', err);
      }
    };

    setupDatabase();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ItemView />
    </SafeAreaView>
  );
}
