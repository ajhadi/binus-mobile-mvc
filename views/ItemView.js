import React, { useEffect, useState } from 'react';
import { View, Text, Button, TextInput, FlatList } from 'react-native';
import * as ItemController from '../controllers/ItemController';

const ItemView = () => {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');

  useEffect(() => {
    const loadItems = async () => {
      try {
        const loadedItems = await ItemController.getItems();
        setItems(loadedItems);
      } catch (err) {
        console.error(err.message);
      }
    };

    loadItems();
  }, []);

  const handleAddItem = async () => {
    try {
      await ItemController.createItem(newItem);
      setNewItem('');
      const updatedItems = await ItemController.getItems();
      setItems(updatedItems);
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <TextInput
        value={newItem}
        onChangeText={setNewItem}
        placeholder="Enter new item"
        style={{ borderWidth: 1, padding: 8, marginBottom: 10 }}
      />
      <Button title="Add Item" onPress={handleAddItem} />
      <FlatList
        data={items}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View>
            <Text>{item.name}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default ItemView;
