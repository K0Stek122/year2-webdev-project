import { describe, expect, it, vi } from 'vitest';
import { getDatabase, connectDatabaseEmulator, ref, set, get } from 'firebase/database';
import { initializeApp } from 'firebase/app';

describe('Firebase Emulator Connection', () => {
    it('Connects to the realtime database', () => {
        const app = initializeApp({
            projectId: 'amplitude-6d655',
        });

        connectDatabaseEmulator(getDatabase(app), 'localhost', 9000);
        const db = getDatabase(app);
        expect(db).toBeDefined();
    });
    it('Allows to write data to the database', async () => {
        const app = initializeApp({
            projectId: 'amplitude-6d655',
        });

        connectDatabaseEmulator(getDatabase(app), 'localhost', 9000);
        const db = getDatabase(app);
        const dbRef = ref(db, 'test');
        await set(dbRef, { test: 'test' });
        expect(dbRef).toBeDefined();
        // Flush database after test
        await set(dbRef, null);
    });

    it('Allows to read data from the database', async () => {
        const app = initializeApp({
            projectId: 'amplitude-6d655',
        });

        connectDatabaseEmulator(getDatabase(app), 'localhost', 9000);
        const db = getDatabase(app);
        const dbRef = ref(db, 'test');
        await set(dbRef, { test: 'test' });
        const snapshot = await get(dbRef);
        expect(snapshot.val()).toEqual({ test: 'test' });
        // Flush database after test
        await set(dbRef, null);
    });
});