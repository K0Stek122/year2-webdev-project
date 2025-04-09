import { defineConfig } from "vitest/config";
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    test: {
        environment: 'jsdom', //This sets the testing environment to jsdom
        include: [ //This ensures that all tests are included
            'src/components/__tests__/**/*.{test,spec}.{js,jsx,ts,tsx}',
            'src/utils/__tests__/**/*.{test,spec}.{js,jsx,ts,tsx}',
        ],
        setupFiles: ['./src/setupTest.ts'], //This sets up the testing environment
    },
});