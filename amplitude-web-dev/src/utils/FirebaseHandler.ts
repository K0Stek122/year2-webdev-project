import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, get, child } from "firebase/database";
import { connectDatabaseEmulator } from "firebase/database";

const app = initializeApp({
    projectId: 'amplitude-6d655',
});

connectDatabaseEmulator(getDatabase(app), 'localhost', 9000);
const database = getDatabase(app);

// Connect to Firebase Emulator
connectDatabaseEmulator(database, "localhost", 9000);

/**
 * Write data to the Firebase Realtime Database
 * @param path - The path where data should be written
 * @param data - The data to write
 */
export const writeData = async (path: string, data: unknown): Promise<void> => {
    try {
        // Check if data is a key-value pair (non-null object)
        if (typeof data !== 'object' || data === null || Array.isArray(data)) {
            throw new Error("Data must be a key-value pair (non-null object).");
        }

        // Write data to the database
        await set(ref(database, path), data);
    } catch (error) {
        console.error("Error writing data:", error);
    }
};

/**
 * Read data from the Firebase Realtime Database
 * @param path - The path to read data from
 * @returns The data read from the database
 */
export const readData = async (path: string): Promise<any> => {
    try {
        // Read data from the database
        const dbRef = ref(database);
        // Get the snapshot of the data at the specified path
        const snapshot = await get(child(dbRef, path));
        if (snapshot.exists()) {
            console.log(`Data read successfully from ${path}`);
            return snapshot.val();
        } else {
            console.log(`No data available at ${path}`);
            return null;
        }
    } catch (error) {
        console.error("Error reading data:", error);
        throw error;
    }
};

export  const deleteData = async (path: string): Promise<void> => {
    try {
        // Delete data from the database
        await set(ref(database, path), null);
    } catch (error) {
        console.error("Error deleting data:", error);
    }
}