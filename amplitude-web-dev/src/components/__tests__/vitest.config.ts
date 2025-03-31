import { defineConfig } from "vitest/config";

export default defineConfig({
    test: {
        globals: true, // This ensures that functions like 'expect' and 'it' can be used globally in the tests
        environment: 'jsdom', //This allows for testing React components
    },
});