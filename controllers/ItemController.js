import * as ItemModel from '../models/ItemModel';

// Get all items from the database
export const getItems = async () => {
    try {
        const items = await ItemModel.fetchItems();
        return items;
    } catch (err) {
        throw new Error('Failed to fetch items.');
    }
};

// Create a new item in the database
export const createItem = async (name) => {
    if (!name || name.trim() === '') {
        throw new Error('Item name cannot be empty.');
    }
    try {
        await ItemModel.addItem(name);
    } catch (err) {
        throw new Error('Failed to create item.');
    }
};
