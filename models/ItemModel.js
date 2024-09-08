import db from './Database';

// Fetch all items from the database
export const fetchItems = async () => {
    try {
        const result = await db.execAsync('SELECT * FROM items;')

        if (Array.isArray(result) && result.length > 0 && result[0].rows) {
            return result[0].rows._array; // Assuming the first result set contains the rows
        } else {
            return []; // Return an empty array if no results or result structure is unexpected
        }
    } catch (error) {
        console.error('Failed to fetch items:', error);
        throw error;
    }
};

// Add a new item to the database
export const addItem = async (name) => {
    try {
        await db.execAsync('INSERT INTO items (name) VALUES ("'+name+'");');
    } catch (error) {
        console.error('Failed to add item:', error);
        throw error;
    }
};
