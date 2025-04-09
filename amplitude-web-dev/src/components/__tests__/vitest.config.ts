import { defineConfig } from "vitest/config";

export default defineConfig({
    test: {
        global: true,
        environment: 'jsdom', //This allows for testing React components
        include: [ //This ensures that all tests are included
            'src/components/__tests__/**/*.{test,spec}.{js,jsx,ts,tsx}',
            'src/utils/__tests__/**/*.{test,spec}.{js,jsx,ts,tsx}',
        ],
    },
});