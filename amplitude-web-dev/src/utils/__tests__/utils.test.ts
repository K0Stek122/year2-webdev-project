import { describe, expect, it, vi, Mock } from 'vitest';
import {validateEmail, validatePassword, isInputSQLSafe} from '../utils';

describe('Validation Functions', () => {
    it('validateEmail should return true for valid email', () => {
        const email = "kamilianos3@gmail.com";
        const result = validateEmail(email);
        expect(result).toBe(true);
    });

    it('validateEmail should return false for an invalid email', () => {
        const email = "invalid-email";
        const result = validateEmail(email);
        expect(result).toBe(false);
    });

    it('validateEmail should return false for an empty email', () => {
        const email = "";
        const result = validateEmail(email);
        expect(result).toBe(false);
    });

    it('validatePassword should return true for a valid password', () => {
        const password = "validPassword123";
        const result = validatePassword(password);
        expect(result).toBe(true);
    })

    it('validatePassword should return false for an empty password', () => {
        const password = "";
        const result = validatePassword(password);
        expect(result).toBe(false);
    });

    it('validatePassword should return false for a password with SQL code', () => {
        const password = "validPassword123; DROP TABLE users;";
        const result = validatePassword(password);
        expect(result).toBe(false);
    });

    it('isInputSQLSafe should return true for safe input', () => {
        const input = "safeInput";
        const result = isInputSQLSafe(input);
        expect(result).toBe(true);
    });

    it('isInputSQLSafe should return false for unsafe input', () => {
        const input = "; DROP TABLE users;";
        const result = isInputSQLSafe(input);
        expect(result).toBe(false);
    });
});;